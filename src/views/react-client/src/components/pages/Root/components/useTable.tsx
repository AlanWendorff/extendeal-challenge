import { GridColDef, GridRenderCellParams, GridValueFormatterParams } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { PRODUCT_AVALABILITY_MAPPER } from '@/utils/products/mappers/products.mapper';
import { DemoTreeDataValue } from '@mui/x-data-grid-generator/services/tree-data-generator';
import { Button } from '@mui/material';
import { Link, generatePath } from 'react-router-dom';
import { PRODUCT_DETAIL } from '@/constants/routes';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

interface IUseTable {
  data: DemoTreeDataValue;
  COLUMNS: readonly GridColDef<any>[];
}

interface IUseTableProps {
  handleDeleteProduct: (id: string) => void;
}

const useTable = ({ handleDeleteProduct }: IUseTableProps): IUseTable => {
  const VISIBLE_FIELDS = ['product_id', 'name', 'price', 'is_available'];

  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
    editable: false
  });

  const COLUMNS: GridColDef[] = [
    {
      field: 'product_id',
      headerName: 'ID del producto',
      width: 150
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 150
    },
    {
      field: 'price',
      headerName: 'Precio'
    },
    {
      field: 'is_available',
      headerName: 'Disponibilidad',
      width: 150,
      valueFormatter: (params: GridValueFormatterParams<boolean>) => PRODUCT_AVALABILITY_MAPPER[`${params.value}`]
    },
    {
      field: 'detail',
      headerName: '',
      renderCell: (params: GridRenderCellParams) => (
        <Link to={generatePath(PRODUCT_DETAIL, { id: `${params.id}` })} aria-label='detalle'>
          <Button>
            <VisibilityIcon />
          </Button>
        </Link>
      )
    },
    {
      field: 'delete',
      headerName: '',
      renderCell: (params: GridRenderCellParams) => (
        <Button onClick={() => handleDeleteProduct(`${params.id}`)} aria-label='eliminar producto' color='error'>
          <DeleteIcon />
        </Button>
      )
    }
  ];

  return {
    COLUMNS,
    data
  };
};

export default useTable;
