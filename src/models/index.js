// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Category, FavoriteProduct, Message } = initSchema(schema);

export {
  Product,
  Category,
  FavoriteProduct,
  Message
};