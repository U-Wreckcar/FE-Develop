import React, { useEffect, useRef, useState } from 'react';
/**
 * Util
 */
import { useFieldArray, useForm } from 'react-hook-form';

import { nanoid } from 'nanoid';
/**
 * Style, Image
 */
import styles from './styles.module.css';
import plus from 'assets/plus.png';
import minus from 'assets/minus.png';
import createutm from 'assets/createutm.png';

type UTMsType = {
  utms: {
    utm_url?: string;
    utm_campaign_id?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign_name?: string | null;
    utm_campaign_content?: string | null;
    utm_term?: string | null;
    utm_memo?: string | null;
  }[];
};

export const CreateUtm = () => {
  const id = nanoid();
  const [memoText, setMemoText] = useState('');
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<UTMsType>({
    defaultValues: {
      utms: [
        {
          utm_url: '',
          utm_campaign_id: '',
          utm_source: '',
          utm_medium: '',
          utm_campaign_name: null,
          utm_term: null,
          utm_campaign_content: null,
          utm_memo: null,
        },
      ],
    },
    mode: 'onBlur',
  });
  const { fields, append, remove } = useFieldArray({
    name: 'utms',
    control,
  });
  const requeirFn = (e: any) => {
    e.target.value = e.target.value.replace(/[^a-z]/, '');
    e.target.value = e.target.value.replace({ maxLength: 70 }, '');
  };
  const addList = () => {
    if (fields.length <= 4) {
      append({
        utm_url: '',
        utm_campaign_id: '',
        utm_source: '',
        utm_medium: '',
        utm_campaign_name: '',
        utm_campaign_content: '',
        utm_term: '',
        utm_memo: null,
      });
    }
  };
  // const isFocuse = memoFocuse.isFocuse;
  const memoHandler = (e: any) => {
    const textareaValue = e.target?.value;
    console.log(e.target);
    setMemoText(textareaValue);
  };

  const onSubmit = (data: UTMsType) => {
    console.log(data);
  };

  useEffect(() => {}, [memoText]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.create_container}>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <section key={field.id}>
                  <div className={styles.item_box}>
                    <div className={styles.number}>{index + 1}</div>
                    <div className={styles.scroll_input}>
                      <input
                        // placeholder="utm_url"
                        onInput={requeirFn}
                        {...register(`utms.${index}.utm_url` as const, {
                          required: true,
                          pattern: /[a-z]/i,
                        })}
                        className={`${
                          errors?.utms?.[index]?.utm_url ? 'error' : ''
                        }, ${styles.input_style}`}
                      />
                      <input
                        // placeholder="utm_campaign_id"
                        onInput={requeirFn}
                        {...register(`utms.${index}.utm_campaign_id` as const, {
                          required: true,
                          pattern: /[a-z]/i,
                        })}
                        className={`${
                          errors?.utms?.[index]?.utm_campaign_id ? 'error' : ''
                        }, ${styles.input_style}`}
                      />
                      <input
                        // placeholder="utm_source"
                        onInput={requeirFn}
                        {...register(`utms.${index}.utm_source` as const, {
                          required: true,
                          pattern: /[a-z]/i,
                        })}
                        className={`${
                          errors?.utms?.[index]?.utm_source ? 'error' : ''
                        }, ${styles.input_style}`}
                      />
                      <input
                        onInput={requeirFn}
                        // placeholder="utm_medium"
                        {...register(`utms.${index}.utm_medium` as const, {
                          required: true,
                          pattern: /[a-z]/i,
                        })}
                        className={`${
                          errors?.utms?.[index]?.utm_medium ? 'error' : ''
                        }, ${styles.input_style}`}
                      />
                      <input
                        onInput={requeirFn}
                        // placeholder="utm_campaign_name"
                        {...register(
                          `utms.${index}.utm_campaign_name` as const,
                          {}
                        )}
                        className={`${
                          errors?.utms?.[index]?.utm_campaign_name
                            ? 'error'
                            : ''
                        }, ${styles.input_style}`}
                      />
                      <input
                        onInput={requeirFn}
                        // placeholder="utm_term"
                        {...register(`utms.${index}.utm_term` as const, {})}
                        className={`${
                          errors?.utms?.[index]?.utm_url ? 'error' : ''
                        }, ${styles.input_style}`}
                      />

                      <input
                        onInput={requeirFn}
                        // placeholder="utm_campaign_content"
                        {...register(
                          `utms.${index}.utm_campaign_content` as const
                        )}
                        className={`${
                          errors?.utms?.[index]?.utm_campaign_content
                            ? 'error'
                            : ''
                        }, ${styles.input_style}`}
                      />
                      <textarea
                        className={styles.active}
                        {...register(`utms.${index}.utm_memo` as const, {
                          maxLength: 80,
                        })}
                      />
                    </div>
                    <div className={styles.minus_button}>
                      <button
                        className={styles.minus_button_style}
                        type="button"
                        onClick={() => {
                          if (index >= 1) {
                            remove(index);
                          }
                        }}
                      >
                        <img
                          src={minus}
                          alt="????????? ??????"
                          onError={() => {
                            console.log(
                              '????????? ?????? ???????????? ????????? ??? ????????????.'
                            );
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
        <div className={styles.create_button_box}>
          <button
            className={styles.add_list_button}
            type="button"
            onClick={addList}
          >
            <img
              className={styles.plus_button_img}
              src={plus}
              alt="????????????"
              onError={() => {
                console.log('???????????? ???????????? ???????????? ???????????????.');
              }}
            />
          </button>
          <input
            className={styles.create_button}
            type="submit"
            value="????????????"
          />
        </div>
        {/* <FirstNameWatched control={control} /> */}
      </form>
    </div>
  );
};
// interface FormInputs {
//   firstName: string;
// }
// function FirstNameWatched({ control }: { control: Control<FormInputs> }) {
//   const firstName = useWatch({
//     control,
//     name: 'firstName', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
//     defaultValue: 'default', // default value before the render
//   });
//   return <p>Watch: {firstName}</p>; // only re-render at the component level, when firstName changes
// }
