'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { RegisterService } from '@/services/api/auth';

const schema = z.object({
  username: z.string().min(3, 'Username too short'),
  email: z.string().email('Invalid email'),
  name: z.string().min(2, 'Name required'),
  password: z.string().min(6, 'Password must be at least 6 chars'),
});

export type RegisterFormInput = z.infer<typeof schema>;

const useRegister = () => {
  const router = useRouter();

  const form = useForm<RegisterFormInput>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (payload: RegisterFormInput) => RegisterService(payload),
    onSuccess: (data) => {
      toast.success('Registration started! Redirecting to payment...');
      router.push(data.payment_url); // redirect to Midtrans
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Something went wrong');
    },
  });

  const onSubmit = (payload: RegisterFormInput) => mutation.mutate(payload);

  return {
    ...form,
    onSubmit,
    isLoading: mutation.isPending,
  };
};

export default useRegister;
