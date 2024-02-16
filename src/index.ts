export const calcFns: Record<
  string,
  (
    paramPrice: number,
    productSize: { width: number; height: number; depth: number },
    paramValue: number
  ) => number
> = {
  'W*H*Param_cost': (paramPrice, size) => size.width * size.height * paramPrice,
  'Price per inclusion': (paramPrice) => paramPrice,
  'W*H*Param_cost*Param_value': (paramPrice, size, paramValue) =>
    size.width * size.height * paramPrice * paramValue,
}
