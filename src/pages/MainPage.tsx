import { DataTest } from 'components/main_components/DataTest';
import { MainBtnTable } from 'components/main_components/MainBtnTable';
import { MainTable } from 'components/main_components/MainTable';
import { Tests } from 'components/main_components/Tests';
import { useState } from 'react';
export default function MainPage() {
  const [summary, setSummary] = useState(true);
  return (
    <div>
      {summary ? (
        <MainTable setSummary={setSummary} />
      ) : (
        <MainBtnTable setSummary={setSummary} />
      )}
      <Tests setSummary={setSummary} />
      <DataTest />
    </div>
  );
}
