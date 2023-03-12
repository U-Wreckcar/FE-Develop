import { MainBtnTable } from 'components/main_components/MainBtnTable';
import { MainTable } from 'components/main_components/Maintable';
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
    </div>
  );
}
