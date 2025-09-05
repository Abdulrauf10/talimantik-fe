'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import apiCall from '@/services/apiCall';
import { Button } from '@/components/ui/button';

type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED';

export default function PaymentStatusPage() {
  const params = useParams();
  const orderId = params.orderId;
  const [status, setStatus] = useState<PaymentStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await apiCall.get(`/payment/status/${orderId}`);
      setStatus(res.data?.status);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [orderId]);

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
              {status}
            </span>
          </p>
        )}
        <Button className="mt-6" onClick={fetchStatus}>
          Refresh
        </Button>
      </div>
    </div>
  );
}
