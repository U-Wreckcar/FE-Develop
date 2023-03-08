import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { columns, MainTableType } from './MainTableData';
import { useGetUtm } from 'util/hooks/useAsync';
import { get_UTM } from 'util/async/api';
import { CopyButton } from '../../shared/button/CopyButton';
import Modal from 'react-modal';

let defaultData: MainTableType[] | [] = [];

export type MainTableProps = {
  setSummary: Dispatch<SetStateAction<boolean>>;
};

const customModal = {
  content: {
    width: '100px',
    height: '40px',
    background: '#eee',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%,-50%)',
  },
};

Modal.setAppElement('#root');
export const MainBtnTable: React.FC<MainTableProps> = ({ setSummary }) => {
  const [data, setDataList] = React.useState(() => [...defaultData]);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState('');
  const [modal, setModal] = useState(false);

  const getUTMRes = useGetUtm(get_UTM);

  useEffect(() => {
    setDataList(getUTMRes.data);
  }, [getUTMRes.data]);

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
      <button onClick={() => setSummary(true)}>데이터 상세보기</button>
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
                <td onClick={onClickMemo} key={cell.id}>
                  {cell.column.id === 'full_url' && (
                    <CopyButton text={`${cell.getValue()}`}></CopyButton>
                  )}
                  {cell.column.id === 'shorten_url' && (
                    <CopyButton text={`${cell.getValue()}`}></CopyButton>
                  )}
                  {cell.column.id === 'url' && (
                    <>
                      <button onMouseEnter={() => setModal(true)}>
                        url 연결
                      </button>
                      <Modal
                        isOpen={modal}
                        style={customModal}
                        onRequestClose={() => setModal(false)}
                      >
                        <p>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </p>
                      </Modal>
                    </>
                  )}
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
                    cell.column.id !== 'url' &&
                    cell.column.id !== 'full_url' &&
                    cell.column.id !== 'shorten_url' &&
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
