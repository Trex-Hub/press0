'use client';
// COMPONENTS
import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/src/components/ui/field';
import { Input } from '@/src/components/ui/input';
import PasswordInput from '@/src/components/atoms/password-input';
// FORM
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// HOOKS
import { signIn } from '@/src/lib/auth-client';
// SCHEMA
import { loginSchema, LoginSchema } from '@/src/schema/auth';
import { Form, FormField, FormMessage } from '@/src/components/ui/form';
import { toast } from 'sonner';

const LoginPage = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: LoginSchema) {
    await signIn.email(
      {
        email: values.email,
        password: values.password,
        callbackURL: '/dashboard',
      },
      {
        onRequest: () => {
          toast.loading('Signing in...');
        },
        onSuccess: () => {
          toast.dismiss();
          toast.success('Signed in successfully');
        },
        onError: ctx => {
          toast.dismiss();
          toast.error(ctx.error.message ?? 'An error occurred');
        },
      }
    );
  }

  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <div className='flex flex-col gap-6'>
          <Card className='bg-background'>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <Field>
                          <FieldLabel htmlFor='email'>Email</FieldLabel>
                          <Input
                            id='email'
                            type='email'
                            placeholder='m@example.com'
                            {...field}
                          />
                          <FormMessage />
                        </Field>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='password'
                      render={({ field }) => (
                        <Field>
                          <FieldLabel htmlFor='password'>Password</FieldLabel>
                          <PasswordInput id='password' {...field} />
                          <FormMessage />
                        </Field>
                      )}
                    />
                    <Field>
                      <Button type='submit'>Login</Button>
                    </Field>
                  </FieldGroup>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
