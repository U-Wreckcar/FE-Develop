import React, { useEffect, useRef, useState } from 'react';
/**
 * Util
 */
import { Controller, useFieldArray, useForm } from 'react-hook-form';

// import styles from './styles.module.css';
import styles from './stylestest.module.css';
import React, { memo, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
/**
 * Style
 */
// import styles from './stylestest.module.css';
import styles from './styles.module.css';
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
  const [memoFocuse, setFocuse] = useState(false);
  const [memoText, setMemoText] = useState('');
  const memoRef = useRef();
  const {
    handleSubmit,
    register,
    watch,
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
        <div className={styles.container}>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <section key={field.id}>
                  <div className={styles.itemBox}>
                    <div className={styles.number}>
                      {(index === 0 && 1) ||
                        (index === 1 && 2) ||
                        (index === 2 && 3) ||
                        (index === 3 && 4) ||
                        (index === 4 && 5)}
                    </div>

                    <input
                      placeholder="utm_url"
                      onInput={requeirFn}
                      {...register(`utms.${index}.utm_url` as const, {
                        required: true,
                        pattern: /[a-z]/i,
                      })}
                      className={errors?.utms?.[index]?.utm_url ? 'error' : ''}
                    />
                    <input
                      placeholder="utm_campaign_id"
                      onInput={requeirFn}
                      {...register(`utms.${index}.utm_campaign_id` as const, {
                        required: true,
                        pattern: /[a-z]/i,
                      })}
                      className={errors?.utms?.[index]?.utm_url ? 'error' : ''}
                    />
                    <input
                      placeholder="utm_source"
                      onInput={requeirFn}
                      {...register(`utms.${index}.utm_source` as const, {
                        required: true,
                        pattern: /[a-z]/i,
                      })}
                      className={errors?.utms?.[index]?.utm_url ? 'error' : ''}
                    />
                    <input
                      onInput={requeirFn}
                      placeholder="utm_medium"
                      {...register(`utms.${index}.utm_medium` as const, {
                        required: true,
                        pattern: /[a-z]/i,
                      })}
                      className={errors?.utms?.[index]?.utm_url ? 'error' : ''}
                    />
                    <input
                      onInput={requeirFn}
                      placeholder="utm_campaign_name"
                      {...register(
                        `utms.${index}.utm_campaign_name` as const,
                        {}
                      )}
                      className={errors?.utms?.[index]?.utm_url ? 'error' : ''}
                    />
                    <input
                      onInput={requeirFn}
                      placeholder="utm_term"
                      {...register(`utms.${index}.utm_term` as const, {})}
                      className={errors?.utms?.[index]?.utm_url ? 'error' : ''}
                    />

                    <input
                      onInput={requeirFn}
                      placeholder="utm_campaign_content"
                      {...register(
                        `utms.${index}.utm_campaign_content` as const
                      )}
                      className={
                        errors?.utms?.[index]?.utm_campaign_content
                          ? 'error'
                          : ''
                      }
                    />
                    <textarea
                      className={styles.active}
                      {...register(`utms.${index}.utm_memo` as const, {
                        maxLength: 80,
                      })}
                    />
                    <div className={styles.removeBtn}>
                      <button type="button" onClick={() => remove(index)}>
                        -
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
        <div className={styles.buttonBox}>
          <button className={styles.addListBtn} type="button" onClick={addList}>
            +
          </button>
          <input className={styles.createBtn} type="submit" value="생성하기" />
        </div>
      </form>
    </div>
  );
};
