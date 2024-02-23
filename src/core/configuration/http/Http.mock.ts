import { META_200 } from '../mocks/meta.api';
import productList from '../mocks/products.api';

let products = productList;

const httpMock = {
  get: async <T>(url: string, body?: any) => {
    if (body) {
      const response = new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              meta: META_200.get,
              response: {
                product: products.find(({ id }) => id === body)
              }
            }),
          1000
        )
      );
      return (await response) as T;
    }

    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            meta: META_200.get,
            response: {
              products
            }
          }),
        1000
      )
    );
    return (await response) as T;
  },
  post: async <T>(url: string, body: any) => {
    console.log(body);

    products.push(body);

    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            meta: META_200.post,
            response: {
              products
            }
          }),
        1000
      )
    );
    return (await response) as T;
  },
  put: async <T>(url: string, body: any) => {
    products = [...products.filter(({ id }) => id !== body.id), body];

    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            meta: META_200.put,
            response: {
              products
            }
          }),
        1000
      )
    );
    return (await response) as T;
  },
  delete: async <T>(url: string, body: any) => {
    products = products.filter(({ id }) => id !== body);

    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            meta: META_200.delete,
            response: {
              products
            }
          }),
        1000
      )
    );
    return (await response) as T;
  }
};

export default httpMock;
