import productsController from '@core/products/application/Products.controller';
import productsRepository from '@core/products/infrastructure/repositories/Products.repository';
import { ISingleProductDTO } from '@core/configuration/http/dto/Products.dto';

const getProduct = (id: string): Promise<ISingleProductDTO> =>
  productsController(productsRepository())
    .getProduct(id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });

export default getProduct;
