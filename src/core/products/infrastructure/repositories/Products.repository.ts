import httpMock from '../../../configuration/http/Http.mock';
import IProductsRepository from '../../domain/repositories/Products.repository';
import IProductsDTO, { ISingleProductDTO } from '../../../configuration/http/dto/Products.dto';
import { BASE_URL } from '../../../configuration/constants/env';
import { TProduct } from '../../domain/models/Products.model';

const productsRepository = (): IProductsRepository => ({
  getProducts: async () => {
    try {
      return await httpMock.get<IProductsDTO>(`${BASE_URL}/products`);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  },
  getProduct: async (id?: string) => {
    try {
      return await httpMock.get<ISingleProductDTO>(`${BASE_URL}/products`, id);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  },
  postProduct: async (data: TProduct) => {
    try {
      return await httpMock.post<IProductsDTO>(`${BASE_URL}/products`, data);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  },
  putProduct: async (data: TProduct) => {
    try {
      return await httpMock.put<IProductsDTO>(`${BASE_URL}/products`, data);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  },
  deleteProduct: async (id: string) => {
    try {
      return await httpMock.delete<IProductsDTO>(`${BASE_URL}/products`, id);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default productsRepository;
