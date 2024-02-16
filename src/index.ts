export const calcFns: Record<
  string,
  (
    paramPrice: number,
    productSize: { width: number; height: number; depth: number },
    paramValue: number | string
  ) => number
> = {
  'W*H*Param_cost': (paramPrice, size, paramValue) =>
    paramValue === 'true' ? size.width * size.height * paramPrice : 0,
  'Price per inclusion': (paramPrice, size, paramValue) =>
    paramValue === 'true' ? paramPrice : 0,
  'W*H*Param_cost*Param_value': (paramPrice, size, paramValue) =>
    typeof paramValue === 'number'
      ? size.width * size.height * paramPrice * paramValue
      : 0,
}
