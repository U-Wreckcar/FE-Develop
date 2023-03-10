import React, { HTMLProps, useMemo, useEffect, useState } from 'react';
import { MainTableType } from './TableData';
import { useGetUtm } from 'util/hooks/useAsync';
import { getUTMs } from 'util/async/api';
import { MainTableProps } from './MainBtnTable';
import {
  Table,
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnResizeMode,
  getFilteredRowModel,
} from '@tanstack/react-table';
import styles from './styles.module.css';

export const MainTable: React.FC<MainTableProps> = ({ setSummary }) => {
  const [rowSelection, setRowSelection] = useState({});
  const [data, setData] = useState<Array<MainTableType>>([]);
  const [target, setTarget] = useState('');
  const [show, setShow] = useState(false);
  const getUTMRes = useGetUtm(getUTMs);
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>('onChange');
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    setData(getUTMRes.data);
  }, [getUTMRes]);

  function Filter({
    column,
    table,
  }: {
    column: Column<any, any>;
    table: Table<any>;
  }) {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id);

    return typeof firstValue === 'number' ? (
      <div className="flex space-x-2">
        <input
          type="number"
          value={((column.getFilterValue() as any)?.[0] ?? '') as string}
          onChange={(e) =>
            column.setFilterValue((old: any) => [e.target.value, old?.[1]])
          }
          placeholder={`Min`}
          className="w-24 border shadow rounded"
        />
        <input
          type="number"
          value={((column.getFilterValue() as any)?.[1] ?? '') as string}
          onChange={(e) =>
            column.setFilterValue((old: any) => [old?.[0], e.target.value])
          }
          placeholder={`Max`}
          className="w-24 border shadow rounded"
        />
      </div>
    ) : (
      <input
        type="text"
        value={(column.getFilterValue() ?? '') as string}
        onChange={(e) => column.setFilterValue(e.target.value)}
        placeholder={`Search...`}
        className="w-36 border shadow rounded"
      />
    );
  }

  function IndeterminateCheckbox({
    indeterminate,
    className = '',
    ...rest
  }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
    const ref = React.useRef<HTMLInputElement>(null!);

    useEffect(() => {
      if (ref.current.indeterminate) {
        // console.log(checked);
      }
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
          <div className={styles.input_box}>
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
        accessorKey: 'created_at',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 80,
      },
      {
        header: 'URL',
        id: 'utm_url',
        accessorKey: 'utm_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 130,
      },
      {
        header: '캠페인 ID',
        id: 'utm_campaign_id',
        accessorKey: 'utm_campaign_id',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 130,
      },
      {
        header: '소스',
        id: 'utm_source',
        accessorKey: 'utm_source',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 80,
      },
      {
        header: '미디움',
        id: 'utm_medium',
        accessorKey: 'utm_medium',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 80,
      },
      {
        header: '캠페인 이름',
        id: 'utm_campaign_name',
        accessorKey: 'utm_campaign_name',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 230,
      },
      {
        header: '캠페인 텀',
        id: 'utm_term',
        accessorKey: 'utm_term',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 80,
      },
      {
        header: '캠페인 콘텐츠',
        id: 'utm_content',
        accessorKey: 'utm_content',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 90,
      },
      {
        header: '메모',
        id: 'utm_memo',
        accessorKey: 'utm_memo',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 130,
      },
      {
        header: 'UTM',
        id: 'full_url',
        accessorKey: 'full_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 130,
      },
      {
        header: 'Shorten URL',
        id: 'shorten_url',
        accessorKey: 'shorten_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        maxSize: 80,
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  const onChangHandler = () => {};
  const onClickDelBtn = () => {
    let id: Array<MainTableType> = [];
    table.getSelectedRowModel().flatRows.map((row) => id.push(row?.original));
    console.log(id);
  };
  const onClickPopBtn = () => {
    let id: Array<MainTableType> = [];
    table.getSelectedRowModel().flatRows.map((row) => id.push(row?.original));
    console.log(id);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.btn_box}>
          <button className={styles.data_btn} onClick={() => setSummary(false)}>
            데이터 요약보기
          </button>
          <button className={styles.button} onClick={onClickPopBtn}>
            추출하기
          </button>
          <button className={styles.button} onClick={onClickDelBtn}>
            삭제하기
          </button>
          <button className={styles.button}>필터</button>
        </div>
        <div className="h-2" />
        <select
          value={columnResizeMode}
          onChange={(e) =>
            setColumnResizeMode(e.target.value as ColumnResizeMode)
          }
          className="border p-2 border-black rounded"
        >
          <option value="onEnd">Resize: "onEnd"</option>
          <option value="onChange">Resize: "onChange"</option>
        </select>
        <div className="h-4" />
        <div className="overflow-x-auto"></div>
        <table
          {...{
            style: {
              width: table.getCenterTotalSize(),
            },
          }}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      {...{
                        key: header.id,
                        colSpan: header.colSpan,
                        style: {
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
                      )}

                      <div
                        {...{
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            header.column.getIsResizing() ? 'isResizing' : ''
                          }`,
                          style: {
                            transform:
                              columnResizeMode === 'onEnd' &&
                              header.column.getIsResizing()
                                ? `translateX(${
                                    table.getState().columnSizingInfo
                                      .deltaOffset
                                  }px)`
                                : '',
                          },
                        }}
                      />
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
                      <td
                        {...{
                          key: cell.id,
                          style: {
                            width: cell.column.getSize(),
                          },
                        }}
                      >
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
                              onChange={onChangHandler}
                            />
                          )}
                        {cell.column.id === 'utm_memo' &&
                          show &&
                          target !== cell.id &&
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        {cell.column.id !== 'utm_memo' &&
                          flexRender(
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
        </table>
      </div>
    </div>
  );
};
