import products from "./products.json";
import category from "./category.json";
import categoryGroup from "./category-group.json";

export type ProductType = (typeof products)[0];

export type CategoryType = typeof category;
export type CategoryGroupType = typeof categoryGroup;
