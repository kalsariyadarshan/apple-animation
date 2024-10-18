export type Products = {
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
};

export type PlanCardSectionProps = {
  products: Products[];
  hadleRedirctDetailPage: (webProgramName: string) => void;
};

export type CompareWarrentyPlansPorps = {
  products: string[];
  hadleRedirctDetailPage: (webProgramName: string) => void;
};

export type CoveredListTableProps = {
  title: string;
  Icon: ({ className }: { className?: string | undefined }) => JSX.Element;
  coveredList: { id: string; name: string }[];
  products: string[];
  homeConfort: boolean;
  wholeHome: boolean;
  wholeHomePlus: boolean;
  id: number;
};

export type CloseIconProps = {
  className?: string;
  color?: string;
};

export type CheckIconProps = {
  isAvailable?: boolean;
  className?: string;
  color?: string;
};
