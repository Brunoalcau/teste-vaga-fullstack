import type { ColumnDef } from '@tanstack/react-table';
import { PaginationState, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { Link } from './style';



interface ReactTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
    fetchData: ({pageIndex, pageSize}: PaginationState) => void;
    page: number;
    total: number | undefined;
}


export const Table = <T extends object>({ data, page, columns, fetchData }: ReactTableProps<T>) => { 
    
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
      })
      useEffect(() => {
        if(typeof fetchData === 'function' ) {
          const skip =   pagination.pageSize * pagination.pageIndex;
          
          fetchData({ pageIndex: skip , pageSize: pagination.pageSize});
        }
      }, [pagination]);

    const defaultData = useMemo(() => [], [])

    const table = useReactTable({
        data: data ?? defaultData ,
        columns,
        pageCount: page,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
      });

      const renderPagination = () => {
        const pages = [];
        const totalPages = page ?? 0;
        const currentPage = pagination.pageIndex + 1;
      
        let startPage;
        let endPage;
      
        if (totalPages <= 5) {
          startPage = 1;
          endPage = totalPages;
        } else {
          startPage = 1;
          endPage = 5;
        }
        for (let i = startPage; i <= endPage; i++) {
          pages.push(
            <li key={i} onClick={() => table.setPageIndex(i - 1)}>
              <div className={Link({ active: i === currentPage })}>{i}</div>
            </li>
          );
        }
      
        return pages;
      };

    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {table?.getHeaderGroups()?.map?.((headerGroup) => (
                                < >
                                    {headerGroup?.headers?.map?.((header) => (
                                        <th key={header.id} className="px-6 py-3">
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                {row.getVisibleCells().map((cell) => (
                                    <td className="text-sm px-6 py-3 font-light text-center text-white" key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                </table>
                
            </div>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">{(pagination.pageIndex +1)}-{pagination.pageSize}</span> of <span className="font-semibold text-gray-900 dark:text-white">{page}</span></span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <div  onClick={() => table.previousPage()} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</div>
                        </li>
                        {renderPagination()}
                        <li>
                            <div  onClick={() => table.nextPage()} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</div>
                        </li>
                    </ul>
             </nav>
        </>
    );
  };