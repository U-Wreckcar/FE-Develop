import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export type MainTable = {
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

export const defaultData: MainTable[] = [
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

export const columns = [
  columnHelper.accessor('created_at', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.utm_url, {
    header: 'url',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm_campaign_id', {
    header: () => 'utm_campaign_id',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('utm_source', {
    header: '소스',
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
