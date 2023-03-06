import React, { useState } from 'react';
import instance from 'util/async/axiosConfig';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';

type MainTable = {
  created_at: string;
  utm_url: string;
  utm_campaign_id: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign_name: string | null;
  utm_term: string | null;
  utm_memo: string | null;
  full_url: string;
  shorten_url: string;
};

const defaultData: MainTable[] = [
  {
    created_at: '2023.02.22',
    utm_url: 'www.vava.com',
    utm_campaign_id: 'camapign ID',
    utm_source: 'source',
    utm_medium: 'medium',
    utm_campaign_name: '2020_performance.com',
    utm_term: 'imgae1',
    utm_memo: 'utm 수정이필요하다',
    full_url: 'https://shop.com.ke',
    shorten_url: 'https://cococo.com',
  },
];

const columnHelper = createColumnHelper<MainTable>();

const columns = [
  columnHelper.accessor('created_at', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.utm_url, {
    id: 'utm_url',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>url</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm_campaign_id', {
    header: () => 'utm_campaign_id',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm_source', {
    header: () => <span>source</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm_medium', {
    header: 'medium',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm_campaign_name', {
    header: 'campaignName',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm_term', {
    header: 'campaignTerm',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm_memo', {
    header: 'memo',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('full_url', {
    header: 'utm',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('shorten_url', {
    header: 'shortUtm',
    footer: (info) => info.column.id,
  }),
];
export const MainTable = () => {
  const [data, setDataList] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState('');

  const query = useQuery(['utm'], () => queryFunction());
  console.log(query.data);
  function queryFunction() {
    instance.get('/data');
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onClickMemo = (e: any) => {
    console.log(e.target.id);
    setShow(true);
  };
  return (
    <div className="p-2">
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
                  {cell.column.id === 'memo' && !show && (
                    <input
                      id={cell.id}
                      value={`${cell.getValue()}`}
                      onFocus={(e) => {
                        setTarget(e.target.id);
                        setShow(true);
                      }}
                    />
                  )}
                  {cell.column.id === 'memo' && show && target === cell.id && (
                    <textarea
                      value={`${cell.getValue()}`}
                      onBlur={() => setShow(false)}
                    />
                  )}
                  {cell.column.id === 'memo' &&
                    show &&
                    target !== cell.id &&
                    flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {cell.column.id !== 'memo' &&
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
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
};
