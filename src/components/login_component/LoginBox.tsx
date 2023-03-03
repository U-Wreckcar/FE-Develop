import axios from 'axios';
import styles from './login.module.css';
const LoginBox = () => {
  const onClickKakaoBtn = async () => {
    window.location.href = 'https://dee8-14-6-160-238.jp.ngrok.io/auth/kakao';
  };

  const onClickNaverBtn = () => {
    alert('개발중입니다..!');
  };

  const onClickGoogleBtn = () => {
    alert('개발중입니다...!');
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.textBox}>
          <h1>Login</h1>
          <p>U렉카와 함께 쉽고 빠른 업무를 느껴보세요!</p>
        </div>
        <div className={styles.buttonBox}>
          <div>
            <button className={styles.loginButton} onClick={onClickKakaoBtn}>
              카카오 1초만에 시작하기
            </button>
          </div>
          <div>
            <button className={styles.loginButton} onClick={onClickNaverBtn}>
              네이버로 1초만에 시작하기
            </button>
          </div>
          <div>
            <button className={styles.loginButton} onClick={onClickGoogleBtn}>
              구글로 1초 만에 시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
