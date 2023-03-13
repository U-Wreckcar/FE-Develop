import { Modal } from 'shared/modal/Modal';
function RenderPage() {
  const consoleHandler = () => {
    console.log('di');
  };
  const text =
    'eadline 28px 마이 유렉카 Bold</p><>eadline 28px 마이 유렉카 Bold';
  const textSeconde =
    '  마이 유렉카 Bold</p><>eadline 28p28pxx 마이 유렉카 Bold';
  return (
    <div>
      <h1>Headline 28px 마이 유렉카 Bold</h1>
      <p>렌더링페이지!</p>

      <Modal
        buttonName={'추출하기'}
        confirmButtonName={'추가하기'}
        confirmButtonHanlder={consoleHandler}
        context={text}
        contextSeconde={textSeconde}
        modalTitle={'기존 UTM 추가하기'}
        x={800}
        y={300}
      />
    </div>
  );
}

export default RenderPage;
