/* eslint-disable @typescript-eslint/no-unused-vars */
import { atom } from "recoil";
import { consts } from "./commons";

export const themeStatus = atom({
  key: "themeStatus",
  default: false,
});

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const token = sessionStorage.getItem(consts.TOKEN);

// 로그인 상태
export const authenticate = atom({
  key: "authenticate",
  default: token ? true : false,
  // default: true,
});

export const findEmail = atom({
  key: "findEmail",
  default: "",
});

interface IUser {
  signIn: {
    nickname: string;
    photoUrl: string;
    memberPid: number;
    roles: string[];
    vendor: {
      vendorPid: number;
    };
  };
}

const userInfo = sessionStorage.getItem(consts.USER);

export const user = atom<IUser>({
  key: "user",
  default: !userInfo
    ? {
        signIn: {
          nickname: "",
          photoUrl: "",
          memberPid: 0,
          roles: [],
          vendor: {},
        },
      }
    : JSON.parse(userInfo),
});

export const terms = atom<string[]>({
  key: "terms",
  default: [],
});

// useRecoilState,
// useRecoilValue,
