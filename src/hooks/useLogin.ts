'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { LoginService } from '@/services/api/auth';

const schema = z.object({
  username: z.string().min(3, 'Username required'),
  password: z.string().min(6, 'Password required'),
});

export type LoginFormInput = z.infer<typeof schema>;

const useLogin = () => {
  const router = useRouter();

  const form = useForm<LoginFormInput>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (payload: LoginFormInput) => LoginService(payload),
    onSuccess: (data) => {
      localStorage.setItem('token', data?.token);
      toast.success(`Welcome back, ${data?.user.name}!`);
      router.replace('/');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Invalid credentials');
    },
  });

  const onSubmit = (payload: LoginFormInput) => mutation.mutate(payload);

  return {
    ...form,
    onSubmit,
    isLoading: mutation.isPending,
  };
};

export default useLogin;
