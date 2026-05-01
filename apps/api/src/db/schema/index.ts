import { userRoleEnum, users } from "@/db/schema/users";
import { products, productCategoryEnum, productUnitEnum } from "@/db/schema/products";
import { cities } from "./cities";

export {
    userRoleEnum,
    users,
    products,
    productCategoryEnum,
    productUnitEnum,
    cities,
};

export const schema = {
    users,
    products,
    cities,
};
