import { Member } from "./member";
import { Product } from "./product";
/**React APP STATE */

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

/**HomePage */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/**Products Page */
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
/**Orders Page */
