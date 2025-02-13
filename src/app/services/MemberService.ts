import { Member } from "./../../lib/types/member";
import { serverApi } from "../../lib/config";
import axios from "axios";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("getTopUsers", result);

      return result.data;
    } catch (err) {
      console.log("error: getTopUsers", err);
      throw err;
    }
  }

  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      console.log("keldi2", result);

      console.log("getRestaurant:", result);

      const restaurant: Member = result.data;
      return restaurant;
    } catch (err) {
      console.log("err get restaurant", err);
      throw err;
    }
  }
}

export default MemberService;
