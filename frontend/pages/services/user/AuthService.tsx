
import http from "../http-common";
import jwt from 'jwt-decode';
import { LOCAL_STORAGE_TOKEN_KEY } from "../utils/app-config"
class AuthService {

  login(data:any) {
    return http.post("/login", data)
  }

  getMe(data:any) {
    return http.get("/login/me")
  }


  getEncToken() {
    if (typeof window !== "undefined")
      return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    return;
  }

  getDecToken() {
    if (typeof window !== "undefined")
      return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    return;
  }

  setToken(token:any) {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
  }

  isLoggedIn() {
    const token = this.getDecToken();
    if (!!token) {
      try {
        return jwt(token);
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }

  getExp() {
    const token:any = this.isLoggedIn();
    if (!token) return null;

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
  }

  tokenExpired() {
    const exp = this.getExp();
    if (!exp) return null;
    const expired = !(exp.valueOf() > new Date().valueOf());
    if (expired) this.logout();
    return expired;
  }

  logout() {
    this.removeToken();
    window.location.href = "/auth/signin";
  }
  removeToken() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
  }

}

export default new AuthService