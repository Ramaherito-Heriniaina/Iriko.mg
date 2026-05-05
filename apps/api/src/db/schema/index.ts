import { userRoleEnum, users } from "@/db/schema/users";
import { products, productCategoryEnum, productUnitEnum } from "@/db/schema/products";
import { cities } from "@/db/schema/cities";
import { fertilizers, productFertilizers } from "@/db/schema/fertilizers";

export {
    userRoleEnum,
    users,
    products,
    productCategoryEnum,
    productUnitEnum,
    cities,
    fertilizers,
    productFertilizers,
};

export const schema = {
    users,
    products,
    cities,
    fertilizers,
    productFertilizers,
};
