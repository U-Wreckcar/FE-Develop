import React, { HTMLProps, useMemo, useEffect } from 'react';
import { MainTableType } from './TableData';
import { useGetUtm } from 'util/hooks/useAsync';
import { get_UTM } from 'util/async/api';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export function MainTable() {
  const [rowSelection, setRowSelection] = React.useState({});
  const [data, setData] = React.useState<Array<MainTableType>>([]);
  const getUTMRes = useGetUtm(get_UTM);

  useEffect(() => {
    setData(getUTMRes.data);
  }, [getUTMRes]);

  const columns = useMemo<ColumnDef<MainTableType>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        header: '생성일자',
        id: 'created_at',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: 'URL',
        id: 'utm_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: '캠페인 ID',
        id: 'utm_campaign_id',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: '소스',
        id: 'utm_source',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: '미디움',
        id: 'utm_medium',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: '캠페인 이름',
        id: 'utm_campaign_name',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: '캠페인 텀',
        id: 'utm_term',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: '캠페인 콘텐츠',
        id: 'utm_campaign_content',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: '메모',
        id: 'utm_memo',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: 'UTM',
        id: 'full_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: 'Shorten URL',
        id: 'shorten_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    //getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });
  console.log(table.getRowModel().rows);
  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-1">
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllPageRowsSelected(),
                  indeterminate: table.getIsSomePageRowsSelected(),
                  onChange: table.getToggleAllPageRowsSelectedHandler(),
                }}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + ' cursor-pointer'}
      {...rest}
    />
  );
}
