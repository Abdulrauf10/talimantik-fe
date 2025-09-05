'use client';

import useRegister, { RegisterFormInput } from '@/hooks/useRegister';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function RegisterPage() {
  const { register, handleSubmit, formState, onSubmit, isLoading } =
    useRegister();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form
        className="w-full max-w-md bg-white p-8 rounded shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-bold mb-6">Register</h1>

        <div className="mb-4">
          <Label>Username</Label>
          <Input {...register('username')} placeholder="Username" />
          {formState.errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <Label>Email</Label>
          <Input {...register('email')} placeholder="Email" type="email" />
          {formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <Label>Name</Label>
          <Input {...register('name')} placeholder="Full Name" />
          {formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <Label>Password</Label>
          <Input
            {...register('password')}
            placeholder="Password"
            type="password"
          />
          {formState.errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Register'}
        </Button>
      </form>
    </div>
  );
}
