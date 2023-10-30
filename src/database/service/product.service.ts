import ProductModel, { ProductSequelizeModel } from '../models/product.model';

const createProduct = async (name: string, price: string, orderId: number):
Promise<ProductSequelizeModel> => {
  const createNewProduct = await ProductModel.create(
    {
      name: 'string', price: 'string', orderId: 'number',
    },
  );
  return createNewProduct;
};

export default createProduct;