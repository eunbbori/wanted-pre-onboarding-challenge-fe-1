export interface UserInfo {
  name?: string;
  nickname?: string;
  email: string;
  password: string;
  password_confirm?: string;
}
export interface AuthResType {
  token: string;
}
