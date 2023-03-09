import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { postUTMs } from 'util/async/api';
import styles from './styles.module.css';
export const InputItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(JSON.stringify(data));
    postUTMs(JSON.stringify({ id: 5, url: data.url }));

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
        onInput={requeirFn}
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
        onInput={requeirFn}
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
        onInput={requeirFn}
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
        onInput={requeirFn}
        {...register('campaign_keyword', {
          maxLength: 70,
          pattern: /[a-z]/i,
        })}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="campaign_term"
        onInput={requeirFn}
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
