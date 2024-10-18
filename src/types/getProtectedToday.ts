export interface ServiceProviderData {
  id: string;
  isNycLocationCode: boolean;
  locationCode: string;
  locationCodeId: string;
  locationCodeName: string;
  productFound: false;
  providerIcon: string;
  websitePartnerName: string;
  zipcode: string;
  syncSource: string;
  microSiteName: string;
}

export interface Products {
  annualPrice?: string;
  benefits?: {
    description?: string;
    icon?: string;
    value?: string;
  }[];
  benefitsHeading?: string;
  biMonthlyPrice?: string;
  billingType?: string;
  bulletTypeCoveredRepairs?: string;
  contactType?: number;
  coverSubheading?: string;
  coverageDisclaimer?: null | string;
  coverageType?: string;
  coveredRepairs?: {
    value?: string;
  }[];
  coveredRepairsHeading?: string;
  customerProgramName?: string;
  defaultCodeId?: string;
  defaultCodeName?: string;
  defaultLocationCodeId?: string;
  defaultLocationCodeName?: string;
  defaultProgramCardImgUrl?: string;
  descriptionImages?: string[];
  descriptionMobileImages?: string[];
  descriptionTabletImages?: string[];
  detailHeaderBgColor?: string;
  discountCodeId?: null | string;
  discountCodeName?: null | string;
  faqs?: {
    answer?: string;
    question?: string;
  }[];
  faqsHeading?: string;
  homeProgramCardContent?: string;
  icons?: string[];
  isActive?: boolean;
  isActiveOnHomePage?: boolean;
  isAvailableOnline?: boolean;
  isDefaultCodeActive?: boolean;
  marketingCode?: string;
  marketingCodeId?: string;
  monthlyPrice?: string;
  oldPrice?: string;
  oldPriceText?: string;
  phoneNumber?: string | null | number;
  preference?: number;
  program?: {
    products?: string[];
    programCode?: string;
    programId?: string;
  };
  programBannerIconUrl?: string;
  programDescription?: string;
  programEmailIconUrl?: string;
  programIconUrl?: string;
  programId?: string;
  programName?: string;
  quaterlyPrice?: string;
  sortOrder?: number;
  status?: string;
  syncSource?: string;
  testimonialsHeading?: string;
  updatedAt?: string;
  updatedAtInCRM?: string;
  videoHeading?: string;
  webAnnualFee?: null | string;
  webProgramName?: string;
  protectionLimits?: [] | string[];
  testimonials?: [] | string[];
  video?: [] | string[];
  priority: number;
}

export interface ProductsData {
  productFound: boolean;
  productsResponse: {
    total: number;
    result: Products[];
  };
}

export interface ProductCardProps {
  detail: Products;
  zipCode: string;
  productFound: boolean;
  microSiteName: string;
  locationCode: string;
  isNycLocation?: boolean;
  idx: number;
  totalProds: number;
}

export interface GoogleMapProps {
  defaultProps: {
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  };
  isShowMap: boolean;
}
