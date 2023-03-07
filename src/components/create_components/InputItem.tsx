import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
export const InputItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    return console.log(data);
  };
  const requeirFn = (e: any) => {
    e.target.value = e.target.value.replace(/[^a-z]/, '');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        placeholder="url"
        onInput={requeirFn}
        {...register('url', {
          max: 0,
          min: 1,
          required: true,
          maxLength: 70,
          pattern: /[a-z]/i,
        })}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="campaign_id"
        {...register('campaign_id', {
          maxLength: 70,
          pattern: /[a-z]/i,
        })}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="sorce"
        {...register('sorce', {
          required: true,
          maxLength: 70,
          pattern: /[a-z]/i,
        })}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="medium"
        {...register('medium', {
          required: true,
          maxLength: 70,
          pattern: /[a-z]/i,
        })}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="campaign_name"
        {...register('campaign_name', {
          required: true,
          maxLength: 70,
          pattern: /[a-z]/i,
        })}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="campaign_keyword"
        {...register('campaign_keyword', {
          maxLength: 70,
          pattern: /[a-z]/i,
        })}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="campaign_term"
        {...register('campaign_term', {
          maxLength: 70,
          pattern: /[a-z]/i,
        })}
      />
      <textarea
        className={styles.input}
        // type="text"
        placeholder="메모"
        {...register('memo', {
          min: 5,
          max: 10,
          required: true,
          maxLength: 70,
        })}
      />

      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <input type="submit" value={'생성하기'} />
    </form>
  );
};
