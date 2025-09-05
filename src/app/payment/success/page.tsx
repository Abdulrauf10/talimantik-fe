'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import apiCall from '@/services/apiCall';
import { Button } from '@/components/ui/button';

type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED';

export default function PaymentStatusPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId;
  const [status, setStatus] = useState<PaymentStatus | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch payment status from backend
  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await apiCall.get(`/payment/status/${orderId}`);
      setStatus(res.data?.status);
    } catch (e) {
      console.error('Error fetching payment status:', e);
    } finally {
      setLoading(false);
    }
  };

  // Polling: fetch status every 5 seconds if still pending
  useEffect(() => {
    fetchStatus();
    let interval: number;

    if (status === 'PENDING' || status === null) {
      interval = window.setInterval(fetchStatus, 5000);
    }

    return () => clearInterval(interval);
  }, [status, orderId]);

  // Auto redirect to login after success
  useEffect(() => {
    if (status === 'SUCCESS') {
      const timeout = setTimeout(() => router.push('/login'), 3000);
      return () => clearTimeout(timeout);
    }
  }, [status, router]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Status</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className="text-lg font-medium">
            Status:{' '}
            <span
              className={
                status === 'SUCCESS'
                  ? 'text-green-600'
                  : status === 'FAILED'
                  ? 'text-red-600'
                  : 'text-yellow-600'
              }
            >
              {status || 'PENDING'}
            </span>
          </p>
        )}

        {status === 'SUCCESS' && (
          <p className="text-sm mt-2 text-gray-500">
            Redirecting to login page...
          </p>
        )}

        {status === 'FAILED' && (
          <p className="text-sm mt-2 text-gray-500">
            Payment failed. Please try again.
          </p>
        )}

        <Button className="mt-6" onClick={fetchStatus}>
          Refresh
        </Button>
      </div>
    </div>
  );
}
