/**
 * 判断是否是手机号
 */
export const isPhone = (s: string) => {
  return /^[1][3,4,5,6,7,8][0-9]{9}$/.test(s);
};

/**
 * 是否是数组
 */
export const isArray = (o: any) => {
  return Object.prototype.toString.call(o) === "[object Array]" || Array.isArray(o);
};