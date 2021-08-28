export interface PriceList {
  category: string;
  services: Price[];
}

export interface Price {
  title: string;
  price: string;
  currency: string;
}

export interface PriceDialogData {
  title: string;
  priceLists: PriceList[];
}
