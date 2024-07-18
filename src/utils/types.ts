export interface CommonSize {
  number: string;
  text: null;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface CommonDefect {
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface CommonPlan {
  id: number;
  duration: string;
  months: number;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  createdBy: null;
  updatedBy: null;
}
export interface CommonProduct {
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  fabric: string;
  brand: string;
  sold: boolean;
  soldDate: string;
  active: boolean;
}
export interface CommonOrder {
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
}
export interface CommonUser {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  active: null;
  activatedDate: string;
  activeUntill: null;
  header: string;
  description: string;
  icon: string;
  color: string;
  paid: boolean;
}

export interface CommonTags {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface CommonSex {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface CommonCategory {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: string;
}
export interface CommonMaterial {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface CommonState {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface CommonColor {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tailwind: string;
}
export interface CommonStatus {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  farge: string;
}
export interface CommonImage {
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
  previewUrl: string;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface TagBackend extends CommonTags {
  id: number;
}
export interface CategoryBackend extends CommonCategory {
  id: number;
}
export interface MaterialBackend extends CommonMaterial {
  id: number;
}
export interface ColorBackend extends CommonColor {
  id: number;
}
export interface SizeBackend extends CommonSize {
  id: number;
}
export interface SexBackend extends CommonSex {
  id: number;
}
export interface StateBackend extends CommonStatus {
  id: number;
}
export interface ImageBackend extends CommonImage {
  id: number;
}
export interface UserBackend extends CommonUser {
  id: number;
  plan: CommonPlan;
  productImages: ImageBackend[];
}
export interface OrderBackend extends CommonOrder {
  id: number;
  products: CommonProduct[];
  user: CommonUser;
}

export interface ProductBackend extends CommonProduct {
  id: number;
  image: ImageBackend[];
  tags: TagBackend[];
  colors: ColorBackend[];
  size: SizeBackend;
  material: MaterialBackend;
  category: CategoryBackend;
  user: UserBackend;
  state: StateBackend;
  sex: SexBackend;
}
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
    active: boolean;
    sold: boolean;
    soldDate: string;
    name: string;
    description: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    sex: { data: Sex };
    fabric: string;
    brand: string;
    image: {
      data: Image[];
    };
    user: { data: User };
    tags: { data: Tag[] };
    colors: { data: Color[] };
    size: { data: Size };
    material: { data: Material };
    category: { data: Category };
    state: { data: State };
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
    activatedDate: string;
    header: string;
    description: string;
    icon: string;
    color: string;
    paid: boolean;
    plan: { data: CommonPlan };
    productImages: { data: Image[] };
  };
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
    category_types: { data: CategoryType[] };
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    icon: string;
  };
}
export interface CategoryType {
  id: number;
  attributes: {
    categories: { data: Category[] };
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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
export interface Defect {
  id: number;
  attributes: {
    type: string;
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

export interface State {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
export interface Sex {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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
export interface SexRq {
  data: Sex[];
}

export interface Pagination {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface ProductsPagination {
  data: Product[];
  meta: Pagination;
}
