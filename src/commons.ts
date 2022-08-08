/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import platform from "platform";

export const consts = {
  SECURITYKEY: "securityKey",
  REFRESH_TOKEN: "refreshToken",
  REFRESH_EXPIRED_DATE: "refreshExpiredDate",
  TOKEN: "TokenId",
  EXPIRED_DATE: "expiredDate",
  UUID: "uuid",
  USER: "user",
};

const { os } = platform;

const Language = () => {
  let value = navigator.language;
  if (value === "ms" || value === "ms-BN" || value === "ms-MY") {
    return "ms_MY";
  }
  value = String(navigator.language).replace("-", "_");
  return value;
};

const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const language = Language();

// 타임존 설정
dayjs.extend(utc);
dayjs.extend(timezone);

// UTC 시간을 현지 시간으로 변환
export const utcTimeZone = (
  time: string | number | null,
  format: string = "YYYY-MM-DD HH:mm:ss"
) => {
  if (time === null || time === undefined) {
    return "";
  } else {
    return dayjs(time).utc(true).tz(browserTimezone).format(format);
  }
};

// 현지 시간을 UTC 시간으로 변환
export const exchangeUtcTimeZone = (
  time: string | number | Date | null,
  format: string = "YYYYMMDDHHmmss",
  timeSet?: "end" | "start"
) => {
  // let utcTime = dayjs(time).utc().format(format);
  let utcTime = dayjs(time).utc();
  if (timeSet === "end")
    utcTime = dayjs(time)
      .set("hour", 23)
      .set("minute", 59)
      .set("second", 59)
      .utc();
  else if (timeSet === "start")
    utcTime = dayjs(time)
      .set("hour", 0)
      .set("minute", 0)
      .set("second", 0)
      .utc();
  // utcTime = utcTime.format(format);
  if (time === null || time === undefined) {
    return "";
  } else {
    return utcTime.format(format);
  }
};

export const generateRandomKey = () => {
  let value = "";
  const randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 32; i++) {
    value += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return value;
};

export const isHtml = (val: any) => {
  // replace html tag with content
  return !(val || "")
    .replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, "")
    // remove remaining self closing tags
    .replace(/(<([^>]+)>)/gi, "")
    // remove extra space at start and end
    .trim();
};

// 값이 빈값인지 체크하는 함수 !value하면 생기는 논리적 오류를 제거 [], {}도 빈값으로 처리
export const isEmpty = (value: any) => {
  if (
    value === "" ||
    value === null ||
    value === undefined ||
    (value !== null && typeof value === "object" && !Object.keys(value).length)
  ) {
    return true;
  }
  return false;
};

export const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export const useDebounce = (value: string | undefined, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

// 유효성검사
export const validation = (text: string | number, validation: any) => {
  if (validation.test(text) && String(text).length > 0) {
    return true;
  } else if (String(text).length === 0) {
    return true;
  } else {
    return false;
  }
};
