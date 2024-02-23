import { FC } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import useTable from './useTable';
import { TProductItemModel } from '@core/products/domain/models/Products.model';

interface ITableProps {
  products: TProductItemModel[];
  handleDeleteProduct: (id: string) => void;
}

const Table: FC<ITableProps> = ({ products, handleDeleteProduct }) => {
  const { data, COLUMNS } = useTable({ handleDeleteProduct });

  return <DataGrid {...data} columns={COLUMNS} rows={products} slots={{ toolbar: GridToolbar }} style={{ width: '100%' }} />;
};

export default Table;
