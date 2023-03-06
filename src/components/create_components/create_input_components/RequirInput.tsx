import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

type propsType = {
  name: string;
};
export const RequirInput: React.FC<propsType> = ({ name }) => {
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
      <input
        placeholder={`${name}`}
        // defaultValue=""
        {...register('URL', { required: true })}
      />

      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
      {''}
    </form>
  );
};
