import LoginBox from 'components/login_component/LoginBox';
import styles from './styles.module.css';

const LoginPage = () => {
  return (
    <div className={styles.login_container}>
      <LoginBox />
    </div>
  );
};

export default LoginPage;
