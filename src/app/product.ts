export interface Product {
  id:          number;
  nombre:      string;
  descripcion: string;
  img:         string;
  precio:      string;
}

export interface ProductNoId {
  nombre:      string;
  descripcion: string;
  img:         string;
  precio:      string;
}
