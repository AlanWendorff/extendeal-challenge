import { FC } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import useTable from './useTable';
import { IProduct } from '@core/configuration/http/dto/Products.dto';

interface ITableProps {
  products: IProduct[];
  handleDeleteProduct: (id: string) => void;
}

const Table: FC<ITableProps> = ({ products, handleDeleteProduct }) => {
  const { data, COLUMNS } = useTable({ handleDeleteProduct });

  return <DataGrid {...data} columns={COLUMNS} rows={products} slots={{ toolbar: GridToolbar }} />;
};

export default Table;
