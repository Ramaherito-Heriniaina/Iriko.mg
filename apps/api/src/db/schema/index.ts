import { userRoleEnum, users } from '@/db/schema/users';
import { products, productCategoryEnum, productUnitEnum } from '@/db/schema/products';
import { cities } from '@/db/schema/cities';
import { fertilizers, productFertilizers, fertilizersRelations, productFertilizersRelations } from '@/db/schema/fertilizers';

export {
  userRoleEnum,
  users,
  products,
  productCategoryEnum,
  productUnitEnum,
  cities,
  fertilizers,
  productFertilizers,
  fertilizersRelations,
  productFertilizersRelations,
};

export const schema = {
  users,
  products,
  cities,
  fertilizers,
  productFertilizers,
  fertilizersRelations,
  productFertilizersRelations,
};