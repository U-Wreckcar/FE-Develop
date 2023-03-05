import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
export const RequirInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('example')} />
      <input {...register('exampleRequired', { required: true })} />
      <input {...register('f', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />{' '}
    </form>
  );
};
