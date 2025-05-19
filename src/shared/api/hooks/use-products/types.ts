// yandex lavka types
export type ProductType = {
  id: string;
  title: string;
  longTitle: string;
  amount: string;
  available: boolean;
  quantityLimit: string;
  withVideo?: boolean;
  stickers: {
    stickerColor: string;
    text: string;
    textColor: string;
  }[];
  privateLabelBrand: string;
  type: string;
  snippetImage: {
    url: string;
    substrated: boolean;
  };
  items: unknown[]; // уточните, если есть структура
  deepLink: string;
  children: unknown[]; // уточните, если есть структура
  options: {
    attributes?: {
      importantIngredients?: string[];
      mainAllergens?: string[];
    };
    pricePerCount: string;
    incrementStep: string;
    quantityType: string;
    docsRequired: boolean;
  };
  pricing: {
    amountPrice: number;
    amountPriceSigned: string;
    price: number;
    priceSigned: string;
    priceTemplate: string;
  };
  discountPricing?: {
    labelColor: string;
    discountLabel: string;
    discountLabelTemplate: string;
    price: number;
    priceSigned: string;
    priceTemplate: string;
  };
  adult: boolean;
  requiredRestriction: null;
  currentPrice: number;
  currentPriceSigned: string;
  currentPriceTemplate: string;
  oldPrice?: number;
  oldPriceSigned?: string;
  oldPriceTemplate?: string;
  isExpiring: boolean;
  isFavorite: boolean;
  isMarkdown: boolean;
  maxAmount: number;
  baseStep: number;
  incrementStep: number;
  isLowStock: boolean;
  productTags: string[];
  snippetVideo?: {
    poster: string;
    src: string;
  };
  stickersV2?: {
    stickerId: string;
    text: string;
  }[];
  facts?: string[];
  rewardedProductSamplingInfos: unknown[]; // уточните тип, если нужно
};
