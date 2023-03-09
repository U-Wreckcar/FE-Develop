import styles from './categoryStyles.module.css';
export const Source = () => {
  const mockKeyWord = [
    'Facebook ',
    'Instagram',
    'Kakotalk',
    'Naver',
    'WhatsApp',
  ];
  return (
    <div className={styles.container}>
      <div className="category_tilte category_layout">소스</div>
      <div>
        <input />
        <button></button>
      </div>

      <div>
        {mockKeyWord.map((i, idx) => (
          <div key={idx}>
            <button>{i}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
