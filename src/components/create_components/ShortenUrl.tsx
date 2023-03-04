import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const ShortenUrl = () => {
  const [short, setShort] = useState('');
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  const data = 'memo/memo/memomemo/memo/memo';
  const url =
    "https://www.figma.com/file/jpQ8JmlY73uE4TMC2EsNXQ/U%EB%A0%89%EC%B9%B4's-W.F?node-id=46%3A71&t=OpT5AtzT6k5LoP8g-0";

  const getShortenUrl = async () => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
      setShort(res.data.result.full_short_link);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickCopyButton = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(short)
        .then(() => {
          alert('클립보드에 복사되었습니다.');
        })
        .catch(() => {
          alert('복사를 다시 시도해주세요.');
        });
    }
  };

  useEffect(() => {
    getShortenUrl();
  }, []);
  return (
    <div>
      <div>
        <div>
          <p>Short URL</p>
        </div>
        <div>{short}</div>
      </div>
      <div>
        <button onClick={onClickCopyButton}>복사하기</button>
      </div>

      {show && inputRef !== null ? (
        <textarea value={data} onBlur={() => setShow(false)} />
      ) : (
        <input value={data} ref={inputRef} onFocus={() => setShow(true)} />
      )}
    </div>
  );
};
export default ShortenUrl;
