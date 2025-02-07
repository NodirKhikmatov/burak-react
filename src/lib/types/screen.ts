import { Member } from "./member";
import { Product } from "./product";
/**React APP STATE */

export interface AppRootState {
  homePage: HomePageState;
}

/**HomePage */
export interface HomePageState {
  popularDishes: Product[];
  newDished: Product[];
  topeUsers: Member[];
}

/**Products Page */
/**Orders Page */
