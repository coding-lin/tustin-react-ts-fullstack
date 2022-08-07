/**
 * @author codinglin
 * @func 根据path判断是否在数组配置中
 * @params {path string}
 * @return boolean 
 */
export const isPath = (path: string): boolean => {
  let pathRes = path.split('/')
  if (pathRes[1] === 'points-mall') return true
  return false
}