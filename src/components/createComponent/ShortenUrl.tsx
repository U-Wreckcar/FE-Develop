import axios from 'axios';
import { useState } from 'react';

const ShortenUrl = () => {
  const [short, setShort] = useState('');
  const url =
    "https://www.figma.com/file/jpQ8JmlY73uE4TMC2EsNXQ/U%EB%A0%89%EC%B9%B4's-W.F?node-id=46%3A71&t=OpT5AtzT6k5LoP8g-0";
  const getShortenUrl = async () => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  getShortenUrl();
  return <div>{short}</div>;
};
export default ShortenUrl;
