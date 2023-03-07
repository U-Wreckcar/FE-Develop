import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { addUTM } from 'redux/slice/utmSlice';
import { useAppDispatch, useAppSelector } from 'util/reduxType/type';
type propsType = {
  name: string;
  id: number;
};
export const RequirInput: React.FC<propsType> = ({ name, id }) => {
  const dispatch = useAppDispatch();
  const res = useAppSelector((state) => state.utms);
  console.log(res);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(id);
    dispatch(
      addUTM({ id, utm_url: `${data.medium}`, utm_campaign_id: 'naver' })
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder={`${name}`}
        {...register(`${name}`, { required: true, onBlur: onSubmit })}
      />
      {/* <textarea /> */}
      {errors.exampleRequired && <span>This field is required</span>}
      {/* <input type="submit" />
      {''} */}
    </form>
  );
};
