import type { Dispatch, SetStateAction } from 'react';

import type { ProductsData, ServiceProviderData } from './getProtectedToday';

export type ProductsCardProps = {
  id: number;
  title: string;
  description: string;
  planList: {
    id: number;
    name: string;
    homeConfortEssentials: boolean;
    wholeHome: boolean;
    wholeHomePlus: boolean;
  }[];
  price: number;
  mrp: number;
  discount: string;
  extraDiscount: string;
  popularity: string;
  hadleRedirctDetailPage?: () => void;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setServiceProviderData: Dispatch<SetStateAction<ServiceProviderData | null>>;
  setServicesList: Dispatch<SetStateAction<ProductsData | null>>;
  marketingCode: string;
};
