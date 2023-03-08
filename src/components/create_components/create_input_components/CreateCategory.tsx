import styles from './styles.module.css';
export const CreateCategory = () => {
  const category = [
    'URL 입력 *',
    '캠페인 ID 입력',
    '소스 선택/입력 *',
    '미디움 선택/입력 * ',
    '캠페인 이름 입력 *',
    '캠페인 텀 입력',
    '캠페인 콘텐츠 입력',
    '메모 입력',
  ];

  return (
    <div className={styles.container_category}>
      {category.map((i, idx) => {
        return (
          <div key={idx} className={styles.itemBox}>
            <h3 className={styles.item}>{i}</h3>
          </div>
        );
      })}
    </div>
  );
};
