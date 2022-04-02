import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FavoriteProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly image: string;
  readonly images: string[];
  readonly brand: string;
  readonly price: number;
  readonly rating: number;
  readonly numReview: number;
  readonly isFeatured?: boolean | null;
  readonly name: string;
  readonly description: string;
  readonly countInStock?: number | null;
  readonly category?: Category | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class FavoriteProduct {
  readonly id: string;
  readonly userSub: string;
  readonly productID: string;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favoriteProductProductId?: string | null;
  constructor(init: ModelInit<FavoriteProduct, FavoriteProductMetaData>);
  static copyOf(source: FavoriteProduct, mutator: (draft: MutableModel<FavoriteProduct, FavoriteProductMetaData>) => MutableModel<FavoriteProduct, FavoriteProductMetaData> | void): FavoriteProduct;
}

export declare class Message {
  readonly id: string;
  readonly image: string;
  readonly productName: string;
  readonly sellerName: string;
  readonly situation: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}