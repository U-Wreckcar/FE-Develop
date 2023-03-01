import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ButtonBase } from 'shared/button/ButtonBase';
import { InputBase } from 'shared/input/InputBase';
import styles from './CreateUtm.module.css';
import ShortenUrl from './ShortenUrl';
export const CreateUtm = () => {
  const [utmFullName, setUtmFullName] = useState('');
  const [makedUtm, setMakeUtm] = useState({});
  const urlRef = useRef<HTMLInputElement>(null);
  const campaignIdRef = useRef<HTMLInputElement>(null);
  const sourceRef = useRef<HTMLInputElement>(null);
  const mediumRef = useRef<HTMLInputElement>(null);
  const campaignNameRef = useRef<HTMLInputElement>(null);
  const campaignKeyWordRef = useRef<HTMLInputElement>(null);
  const campaignTermRef = useRef<HTMLInputElement>(null);
  const memoRef = useRef<HTMLInputElement>(null);

  const inputLabel = {
    url_name: '* URL 입력',
    campaign_id: '캠페인 ID 입력',
    source: '* 소스 선택/입력',
    medium: '* 미디움 선택/입력',
    campaign_name: '* 캠페인 이름 입력',
    campaign_key_word: '캠페인 키워드 입력',
    campaign_term: 'campaign_term',
    memo: '메모',
  };
  const createSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const urlInput = urlRef.current?.value;
    const CampaignIdInput = campaignIdRef.current?.value;
    const sourceIdInput = sourceRef.current?.value;
    const mediumIdInput = mediumRef.current?.value;
    const campaignNameIdInput = campaignNameRef.current?.value;
    const campaignKeyWord = campaignKeyWordRef.current?.value;
    const campaignTerm = campaignTermRef.current?.value;
    const memoIdInput = memoRef.current?.value;
    setUtmFullName(
      `${urlInput}?utm_campaign_id=${CampaignIdInput}&${sourceIdInput}${mediumIdInput}${campaignNameIdInput}${campaignKeyWord}${campaignTerm}${memoIdInput}`
    );
    setMakeUtm({
      url_name: urlInput,
      campaign_id: CampaignIdInput,
      source: sourceIdInput,
      medium: mediumIdInput,
      campaign_name: campaignNameIdInput,
      campaign_key_word: campaignKeyWord,
      campaign_term: campaignTerm,
      memo: memoIdInput,
      utm: utmFullName,
    });
    // alert('생성 완료!');
  };

  const addInput = () => {
    postUtm();
  };

  const postUtm = async () => {
    console.log(makedUtm);
    const res = await axios.post('data/utmMock.json', makedUtm);
    console.log(res);
    // return res;
  };
  useEffect(() => {
    // getUtm();
  }, []);
  return (
    <div className={styles.section}>
      <div>
        <h1 className={styles.title}>UTM 생성하기</h1>
      </div>
      <div className={styles.create_containel}>
        <InputBase
          submitFn={createSubmit}
          styleName={'url_text'}
          inputRef={urlRef}
          label={inputLabel.url_name}
        />
        <InputBase
          submitFn={createSubmit}
          styleName={'url_text'}
          inputRef={campaignIdRef}
          label={inputLabel.campaign_id}
        />
        <InputBase
          submitFn={createSubmit}
          styleName={'url_text'}
          inputRef={sourceRef}
          label={inputLabel.source}
        />
        <InputBase
          submitFn={createSubmit}
          styleName={'url_text'}
          inputRef={mediumRef}
          label={inputLabel.medium}
        />
        <InputBase
          submitFn={createSubmit}
          styleName={'url_text'}
          inputRef={campaignNameRef}
          label={inputLabel.campaign_name}
        />
        <InputBase
          submitFn={createSubmit}
          styleName={'url_text'}
          inputRef={campaignKeyWordRef}
          label={inputLabel.campaign_key_word}
        />
        <InputBase
          submitFn={createSubmit}
          styleName={'url_text'}
          inputRef={campaignTermRef}
          label={inputLabel.campaign_term}
        />
        <InputBase
          submitFn={createSubmit}
          styleName={'url_text'}
          inputRef={memoRef}
          label={inputLabel.memo}
        />
      </div>
      <div className={styles.button_containel}>
        <ButtonBase
          styleName={'createBtn'}
          label={'생성하기'}
          fnName={createSubmit}
        />
        <ButtonBase styleName={'createBtn'} label={'+'} fnName={addInput} />
      </div>
      <ShortenUrl />
    </div>
  );
};