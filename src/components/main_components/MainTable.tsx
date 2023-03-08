import React, { useState } from 'react';
import instance from 'util/async/axiosConfig';
import { getUTM } from 'util/async/api';
import { useGetUtm } from 'util/hooks/useAsync';


import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useGetUtm } from 'util/hooks/useAsync';
import { get_UTM } from 'util/async/api';
import { columns, MainTableType } from './MainTableData';
import { MainTableProps } from './MainBtnTable';

let defaultData: MainTableType[] | [] = [];

export const MainTable: React.FC<MainTableProps> = ({ setSummary }) => {
  const [data, setDataList] = React.useState(() => [...defaultData]);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState('');
  const getUTMRes = useGetUtm(getUTM);

  console.log(getUTMRes.data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onClickMemo = (e: any) => {
    console.log(e.target.id);
    console.log(e);
    setShow(true);
  };

  return (
    <div className="p-2">
      <button onClick={() => setSummary(false)}>데이터 요약보기</button>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, i) => (
                <td key={cell.id}>
                  {cell.column.id === 'utm_memo' && !show && (
                    <input
                      id={cell.id}
                      style={{ border: 'none' }}
                      value={`${cell.getValue()}`}
                      onFocus={(e) => {
                        setTarget(e.target.id);
                        setShow(true);
                      }}
                    />
                  )}
                  {cell.column.id === 'utm_memo' &&
                    show &&
                    target === cell.id && (
                      <textarea
                        value={`${cell.getValue()}`}
                        onBlur={() => setShow(false)}
                      />
                    )}
                  {cell.column.id === 'utm_memo' &&
                    show &&
                    target !== cell.id &&
                    flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {cell.column.id !== 'utm_memo' &&
                    flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
};
