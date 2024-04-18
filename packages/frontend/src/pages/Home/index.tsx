import { ColumnDef, PaginationState } from "@tanstack/react-table";
import { useMemo } from "react";
import { Contract } from "../../@type/Contract";
import Separator from "../../components/Separator";
import { Table } from "../../components/Table";
import { useContract } from "../../store/useContract";
import Form from "./components/Form";



const calcTotalPage = ({total = 0, limit = 10}) => {
  if(total && limit) {
        return Math.ceil(total / limit);
    }
    return 0;
}
export const Home = () => {
    const contract = useContract(item => item);

    const cols = useMemo<ColumnDef<Contract>[]>(
        () => [
          {
            header: 'nrContrato',
            cell: (row) => row.renderValue(),
            accessorKey: 'nrContrato',
          },
          {
            header: 'rn inst',
            cell: (row) => row.renderValue(),
            accessorKey: 'nrInst',
          },
          {
            header: 'nrAgencia',
            cell: (row) => row.renderValue(),
            accessorKey: 'nrAgencia',
          },
          {
            header: 'nmClient',
            cell: (row) => row.renderValue(),
            accessorKey: 'nmClient',
          },
          {
            header: 'CPF/CNPJ',
            cell: (row) => row.renderValue(),
            accessorKey: 'nrCpfCnpj',
          },
          {
            header: 'Qt. Prestações ',
            cell: (row) => row.renderValue(),
            accessorKey: 'qtPrestacoes',
          },
          {
            header: 'Produto',
            cell: (row) => row.renderValue(),
            accessorKey: 'dsProduto',
          },
          {
            header: 'Carteira',
            cell: (row) => row.renderValue(),
            accessorKey: 'dsCarteira',
          },
          {
            header: 'nrPresta',
            cell: (row) => row.renderValue(),
            accessorKey: 'nrPresta',
          },
          {
            header: 'tpPresta',
            cell: (row) => row.renderValue(),
            accessorKey: 'tpPresta',
          },
          {
            header: 'dtVctPre',
            cell: (row) => row.renderValue(),
            accessorKey: 'dtVctPre',
          },
          {
            header: 'vlMulta',
            cell: (row) => row.renderValue(),
            accessorKey: 'vlMulta',
          },
          {
            header: 'vlMora',
            cell: (row) => row.renderValue(),
            accessorKey: 'vlMora',
          },
          {
            header: 'vlAtual',
            cell: (row) => row.renderValue(),
            accessorKey: 'vlAtual',
          },
          {
            header: 'idSituac',
            cell: (row) => row.renderValue(),
            accessorKey: 'idSituac',
          }, 
          {
            header: 'idSitVen',
            cell: (row) => row.renderValue(),
            accessorKey: 'idSitVen',
          },
        ],
        []
    );
    return (
        <>

            <article className="prose lg:prose-xl px-12 py-4">
                <div className="p-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-3xl font-bold dark:text-white">Transaction</h3>
                        <span className="text-sm dark:text-white">An overview of all your contract.</span>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
                <Separator />
                <Table  
                    page={calcTotalPage({total: contract.total, limit: contract.limit})} 
                    fetchData={(item: PaginationState) => contract.get({skip: item.pageIndex, limit: item.pageSize })} 
                    data={contract?.data as Contract[]} 
                    columns={cols} 
                    total={contract?.total}  
                
                />
                
            </article>
        </>
    )
}