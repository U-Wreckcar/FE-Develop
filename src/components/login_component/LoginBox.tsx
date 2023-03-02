const LoginBox = () => {
  const onClickKakaoBtn = () => {
    window.location.href = 'https://fa8e-14-6-160-238.jp.ngrok.io';
  };
  const onClickNaverBtn = () => {
    alert('개발중입니다..!');
  };

  const onClickGoogleBtn = () => {
    alert('개발중입니다...!');
  };
  return (
    <div>
      <div>
        <h1>Login</h1>
        <p>U렉카와 함께 쉽고 빠른 업무를 느껴보세요!</p>
      </div>
      <div>
        <div>
          <button onClick={onClickKakaoBtn}>카카오</button>
        </div>
        <div>
          <button onClick={onClickNaverBtn}>네이버</button>
        </div>
        <div>
          <button onClick={onClickGoogleBtn}>구글</button>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
