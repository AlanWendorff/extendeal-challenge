import IMeta from './shared/Meta.dto';

interface IProductsDTO {
  meta: IMeta;
  response: {
    products: IProduct[];
  };
}

export interface ISingleProductDTO {
  meta: IMeta;
  response: {
    product: IProduct;
  };
}

export interface IProduct {
  id: string;
  product_id: string;
  name: string;
  thumbnail_url: string;
  price: number;
  stock: number;
  is_available: boolean;
}

export default IProductsDTO;
