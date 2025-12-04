'use client';
import { useCallback } from 'react';
// COMPONENTS
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/src/components/ui/form';
import { Card, CardContent } from '@/src/components/ui/card';
import { Separator } from '@/src/components/ui/separator';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
// HOOKS
import { useSession, updateUser } from '@/src/lib/auth-client';
// SCHEMA
import { profileSchema, ProfileSchema } from '@/src/schema/profile';
// FORM
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// UTILS
import { toast } from 'sonner';
import { Spinner } from '@/src/components/ui/spinner';

const ProfilePage = () => {
  const { data, isPending } = useSession();
  const { user } = data ?? {};
  const { name = '', image = '', email = '' } = user ?? {};

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = useCallback(
    async (values: ProfileSchema) => {
      await updateUser(values, {
        onRequest: () => {
          toast.loading('Updating user...');
        },
        onSuccess: () => {
          toast.dismiss();
          toast.success('User updated successfully');
          form.reset(values);
        },
        onError: ctx => {
          toast.dismiss();
          toast.error(
            ctx.error.message ?? 'An error occurred while updating user'
          );
        },
      });
    },
    [form]
  );

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  if (isPending) {
    return (
      <div className='flex flex-col w-full justify-center items-center h-full'>
        <Spinner className='size-10' />
      </div>
    );
  }
  return (
    <div className='flex flex-col w-full justify-between items-center gap-5'>
      <div className='flex flex-row w-full justify-between items-center'>
        <h4 className='text-xl font-semibold'>Profile</h4>
      </div>
      <Card className='w-full'>
        <CardContent className='flex flex-col w-full gap-4'>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col w-full gap-4'>
              <div className='flex flex-row w-full justify-between items-center'>
                <p>Profile Picture</p>
                <Avatar className='size-10'>
                  <AvatarImage src={image ?? ''} alt={name ?? ''} />
                  <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <Separator orientation='horizontal' />
              <div className='flex flex-row w-full justify-between items-center'>
                <p>Email</p>
                <Input
                  className='w-fit whitespace-nowrap py-0 min-w-56'
                  type='text'
                  value={email ?? ''}
                  disabled
                />
              </div>
              <Separator orientation='horizontal' />
              <FormField
                control={control}
                name='name'
                defaultValue={name ?? ''}
                render={({ field }) => (
                  <FormItem className='flex flex-col gap-1.5'>
                    <div className='flex flex-row w-full justify-between items-center'>
                      <p>Full Name</p>
                      <FormControl>
                        <Input
                          type='text'
                          className='w-fit whitespace-nowrap py-0 min-w-56'
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex flex-row-reverse gap-4 w-full'>
                <Button
                  variant={'default'}
                  type='submit'
                  disabled={isSubmitting}>
                  {isSubmitting ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
