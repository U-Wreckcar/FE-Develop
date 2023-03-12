import {useMemo} from "react"
import {
  Table,
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnResizeMode,
  getFilteredRowModel,
  ColumnFiltersState,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  FilterFn,
  SortingFn,
  FilterFns,
} from '@tanstack/react-table';

export type MainTableType = {
    id: number;
    created_at: string | number | Date
    utm_url: string;
    utm_campaign_id: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign_name: string | null;
    utm_term: string | null;
    utm_content:string|null;
    utm_memo: string | null;
    full_url: string;
    shorten_url: string;
  };
 