// import { MainBtnTable } from 'components/main_components/TestMainBtnTable';
import { MainTable } from 'components/main_components/MainTable';
import { MyUTM } from 'components/main_components/MyUTM';
import { useState } from 'react';

export default function MainPage() {
  const [summary, setSummary] = useState(true);
  return (
    <div>
      {summary ? <MainTable /> : <MainTable />}
      <MyUTM />
    </div>
  );
}
