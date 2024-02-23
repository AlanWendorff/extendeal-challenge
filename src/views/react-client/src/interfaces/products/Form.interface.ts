enum EAvailability {
  true = 'Si',
  false = 'No'
}

export interface IProductForm {
  name: string;
  thumbnail_url: string;
  price: number;
  stock: number;
  is_available: EAvailability;
}

export default IProductForm;
