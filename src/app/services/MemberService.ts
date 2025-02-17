import { serverApi } from "../../lib/config";
import axios from "axios";
import { MemberInput, Member } from "../../lib/types/member";

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

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("result", result);
      const member: Member = result.data.member;
      console.log("member", member);

      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("signup", err);
      throw err;
    }
  }
}

export default MemberService;
