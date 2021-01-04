import BaseHttpService from ".";
import { user } from "../models/user";


class AuthUser extends BaseHttpService{

  // resultUser:user 
  
    async signin(username:string, password:string) {
        const resultUser = await this.post(`/auth/signin`, { username, password });
        // const accessToken = resultUser.data.;
        // this.saveToken(accessToken);
        return resultUser;
      }

      async signup(username:string, password:string) {
        await this.post(`auth/signup`, { username, password });
      }

}

export default AuthUser;