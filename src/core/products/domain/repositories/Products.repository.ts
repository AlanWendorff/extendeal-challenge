import { ISingleProductDTO } from '@/core/configuration/http/dto/Products.dto';
import TProducts, { TProduct } from '../models/Products.model';

interface IProductsRepository {
  getProducts: () => Promise<TProducts>;
  getProduct: (id: string) => Promise<ISingleProductDTO>;
  postProduct: (data: TProduct) => Promise<TProducts>;
  putProduct: (data: TProduct) => Promise<TProducts>;
  deleteProduct: (id: string) => Promise<TProducts>;
}

export default IProductsRepository;
