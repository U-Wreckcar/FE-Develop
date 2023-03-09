import React, {
  Dispatch,
  SetStateAction,
  HTMLProps,
  useMemo,
  useEffect,
  useState,
  useRef,
} from 'react';
import { MainTableType } from './TableData';
import { useGetUtm } from 'util/hooks/useAsync';
import { getUTMs } from 'util/async/api';
import { CopyButton } from '../../shared/button/CopyButton';
import Tooltip from '@mui/material/Tooltip';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnResizeMode,
} from '@tanstack/react-table';
import './mainStyle.css';

export type MainTableProps = {
  setSummary: Dispatch<SetStateAction<boolean>>;
};
export const MainBtnTable: React.FC<MainTableProps> = ({ setSummary }) => {
  const [rowSelection, setRowSelection] = useState({});
  const [data, setData] = useState<Array<MainTableType>>([]);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState('');
  const getUTMRes = useGetUtm(getUTMs);
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>('onChange');

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
              size: 50,
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
                size: 50,
              }}
            />
          </div>
        ),
      },
      // {
      //   header: '생성일자',
      //   id: 'created_at-80',
      //   accessorKey: 'created_at',
      //   cell: (info) => info.getValue(),
      //   footer: (props) => props.column.id,
      //   width: 80,
      // },
      {
        header: 'URL',
        id: 'utm_url',
        accessorKey: 'utm_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 130,
      },
      // {
      //   header: '캠페인 ID',
      //   id: 'utm_campaign_id',
      //   accessorKey: 'utm_campaign_id',
      //   cell: (info) => info.getValue(),
      //   footer: (props) => props.column.id,
      //   width: 130,
      // },
      {
        header: '소스',
        id: 'utm_source',
        accessorKey: 'utm_source',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 80,
      },
      {
        header: '미디움',
        id: 'utm_medium',
        accessorKey: 'utm_medium',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 80,
      },
      {
        header: '캠페인 이름',
        id: 'utm_campaign_name',
        accessorKey: 'utm_campaign_name',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 230,
      },
      // {
      //   header: '캠페인 텀',
      //   id: 'utm_term',
      //   accessorKey: 'utm_term',
      //   cell: (info) => info.getValue(),
      //   footer: (props) => props.column.id,
      //   width: 80,
      // },
      // {
      //   header: '캠페인 콘텐츠',
      //   id: 'utm_content',
      //   accessorKey: 'utm_content',
      //   cell: (info) => info.getValue(),
      //   footer: (props) => props.column.id,
      //   width: 90,
      // },
      {
        header: '메모',
        id: 'utm_memo',
        accessorKey: 'utm_memo',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 130,
      },
      {
        header: 'UTM',
        id: 'full_url',
        accessorKey: 'full_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 130,
      },
      {
        header: 'Shorten URL',
        id: 'shorten_url',
        accessorKey: 'shorten_url',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        size: 80,
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
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  const moveUrl = (url: string) => {
    window.open(url, '_blank');
  };

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
    <div className="p-2">
      <button onClick={onClickPopBtn}>추출하기</button>
      <button onClick={onClickDelBtn}>삭제하기</button>
      <button onClick={() => setSummary(true)}>데이터 상세보기</button>
      <div className="h-2" />
      <select
        value={columnResizeMode}
        onChange={(e) =>
          setColumnResizeMode(e.target.value as ColumnResizeMode)
        }
        className="border p-2 border-black rounded"
      >
        <option value="onEnd">리사이즈: "onEnd"</option>
        <option value="onChange">리사이즈: "onChange"</option>
      </select>
      <div className="h-4" />
      <div className="text-xl">{'<table/>'}</div>
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
                                  table.getState().columnSizingInfo.deltaOffset
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
                      {cell.column.id === 'full_url' && (
                        <CopyButton text={`${cell.getValue()}`}></CopyButton>
                      )}
                      {cell.column.id === 'shorten_url' && (
                        <CopyButton text={`${cell.getValue()}`}></CopyButton>
                      )}
                      {cell.column.id === 'utm_url' && (
                        <Tooltip title={`${cell.getValue()}`}>
                          <button onClick={() => moveUrl(`${cell.getValue()}`)}>
                            url 연결
                          </button>
                        </Tooltip>
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
                        cell.column.id !== 'utm_url' &&
                        cell.column.id !== 'full_url' &&
                        cell.column.id !== 'shorten_url' &&
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
  );
};

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

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
