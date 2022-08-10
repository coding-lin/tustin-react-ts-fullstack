/**
 * @author codinglin
 * @func 根据path判断是否在数组配置中
 * @params {path string}
 * @return boolean
 */
export const isPath = (path: string): boolean => {
  let pathRes = path.split("/");
  if (
    pathRes[1] === "points-mall" ||
    pathRes[1] === "food-search" ||
    pathRes[1] === "order-detail"
  )
    return true;
  return false;
};

/**
 * 防抖函数
 * @param func 执行函数
 * @param delay 延迟时间 ms
 * @param immediate 是否立即执行
 */
export const debounce = (
  func: Function,
  delay: number,
  immediate: boolean = false
): Function => {
  let timer: number | undefined;

  return function (this: unknown, ...args: any[]) {
    let that = this;
    if (immediate) {
      func.apply(that, args); // 确保引用函数的指向正确，并且函数的参数也不变
      immediate = false;
      return;
    }
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(that, args);
    }, delay);
  };
};
