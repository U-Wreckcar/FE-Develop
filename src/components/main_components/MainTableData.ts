import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export type MainTableType = {
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

const columnHelper = createColumnHelper<MainTableType>();

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

