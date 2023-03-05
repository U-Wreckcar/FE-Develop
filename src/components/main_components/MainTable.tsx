import React, { useState, useRef } from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Maintable = {
  createTime: string;
  url: string;
  campaignID: string;
  source: string;
  medium: string;
  campaignName: string | null;
  campaignKeyWord: string | null;
  campaignTerm: string | null;
  memo: string | null;
  utm: string;
  shortUtm: string;
};

const defaultData: Maintable[] = [
  {
    createTime: '2023.02.22',
    url: 'www.vava.com',
    campaignID: 'camapign ID',
    source: 'source',
    medium: 'medium',
    campaignName: '2020_performance.com',
    campaignKeyWord: 'iphone12',
    campaignTerm: 'imgae1',
    memo: 'utm 수정이필요하다',
    utm: 'https://shop.com.ke',
    shortUtm: 'https://cococo.com',
  },
  {
    createTime: '2023.02.22',
    url: 'www.vava.coadfm',
    campaignID: 'camapign IDadfaf',
    source: 'sourcadfe',
    medium: 'mediuadfadm',
    campaignName: '2020_padferformance.com',
    campaignKeyWord: 'iphone12',
    campaignTerm: 'imgafaae1',
    memo: 'utm 수정이필요하다',
    utm: 'https://shop.com.ke',
    shortUtm: 'https://cococo.com',
  },
  {
    createTime: '2023.02.22',
    url: 'www.vava.com',
    campaignID: 'camapign ID',
    source: 'source',
    medium: 'medium',
    campaignName: '2020_performance.com',
    campaignKeyWord: 'iphone12',
    campaignTerm: 'imgae1',
    memo: 'utm 수정이필요하다',
    utm: 'https://shop.com.ke',
    shortUtm: 'https://cococo.com',
  },
  {
    createTime: '2023.02.22',
    url: 'www.vava.com',
    campaignID: 'camapign ID',
    source: 'source',
    medium: 'medium',
    campaignName: '2020_performance.com',
    campaignKeyWord: 'iphone12',
    campaignTerm: 'imgae1',
    memo: 'utm 수정이필요하다',
    utm: 'https://shop.com.ke',
    shortUtm: 'https://cococo.com',
  },
  {
    createTime: '2023.02.22',
    url: 'www.vava.com',
    campaignID: 'camapign ID',
    source: 'source',
    medium: 'medium',
    campaignName: '2020_performance.com',
    campaignKeyWord: 'iphone12',
    campaignTerm: 'imgae1',
    memo: 'utm 수정이필요하다',
    utm: 'https://shop.com.ke',
    shortUtm: 'https://cococo.com',
  },
  {
    createTime: '2023.02.22',
    url: 'www.vava.com',
    campaignID: 'camapign ID',
    source: 'source',
    medium: 'medium',
    campaignName: '2020_performance.com',
    campaignKeyWord: 'iphone12',
    campaignTerm: 'imgae1',
    memo: 'utm 수정이필요하다',
    utm: 'https://shop.com.ke',
    shortUtm: 'https://cococo.com',
  },
  {
    createTime: '2023.02.22',
    url: 'www.vava.com',
    campaignID: 'camapign ID',
    source: 'source',
    medium: 'medium',
    campaignName: '2020_performance.com',
    campaignKeyWord: 'iphone12',
    campaignTerm: 'imgae1',
    memo: 'utm 수정이필요하다',
    utm: 'https://shop.com.ke',
    shortUtm: 'https://cococo.com',
  },
];

const columnHelper = createColumnHelper<Maintable>();

const columns = [
  columnHelper.accessor('createTime', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.url, {
    id: 'url',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>url</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('campaignID', {
    header: () => 'campaignID',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('source', {
    header: () => <span>source</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('medium', {
    header: 'medium',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('campaignName', {
    header: 'campaignName',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('campaignKeyWord', {
    header: 'campaignKeyWord',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('campaignTerm', {
    header: 'campaignTerm',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('memo', {
    header: 'memo',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm', {
    header: 'utm',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('shortUtm', {
    header: 'shortUtm',
    footer: (info) => info.column.id,
  }),
];
export const MainTable = () => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onClickMemo = (e: any) => {
    console.log(e);
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
                <td onClick={onClickMemo} key={cell.id}>
                  {cell.column.id === 'memo' && !show && (
                    <input
                      ref={inputRef}
                      placeholder={`${cell.getValue()}`}
                      onFocus={() => setShow(true)}
                    />
                  )}
                  {cell.column.id === 'memo' && show && (
                    <textarea
                      placeholder={`${cell.getValue()}`}
                      onBlur={() => setShow(false)}
                    />
                  )}
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
