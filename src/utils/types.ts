export interface ProductsData {
  data: Product[];
}
export interface Order {
  id: number;
  attributes: {
    guid: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    address: string;
    city: string;
    postalCode: string;
    email: string;
    token: string;
    amount: number;
    status: { data: Status };
    products: { data: Product[] };
    user: { data: User[] };
  };
}
export interface Product {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    fabric: string;
    brand: string;
    image: {
      data: Image;
    };
    user: { data: User };
    tags: { data: Tag[] };
    colors: { data: Color[] };
    size: { data: Size };
    material: { data: Material };
    category: { data: Category };
  };
}
export interface CartItem {
  product: Product;
}

export interface Cart {
  items: Product[];
  totalPrice: number;
}
export interface User {
  id: number;
  attributes: {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    active: null;
    activeUntill: null;
    header: string;
    description: string;
    icon: string;
    color: string;
  };
}
export interface LoginUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  active: null;
  activeUntill: null;
  header: string;
  description: string;
  icon: string;
  color: string;
}
export interface Tag {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
export interface Category {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    icon: string;
  };
}
export interface Material {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Color {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    tailwind: string;
  };
}
export interface Image {
  id: number;
  attributes: {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      medium: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      small: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
  };
}
export interface Size {
  id: number;
  attributes: {
    number: string;
    text: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
export interface Status {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    farge: string;
    color: { data: Color };
  };
}

export interface ColorsRQ {
  data: Color[];
}
export interface ProductsRQ {
  data: Product[];
}
export interface ProductRQ {
  data: Product;
}
export interface SizesRQ {
  data: Size[];
}
export interface TagsRQ {
  data: Tag[];
}
export interface MaterialsRQ {
  data: Material[];
}
export interface CategoryRQ {
  data: Category[];
}
export interface UserRQ {
  data: User;
}
export interface OrdersRQ {
  data: Order[];
}
export interface OrderRQ {
  data: Order;
}
export interface StatusRQ {
  data: Status[];
}
