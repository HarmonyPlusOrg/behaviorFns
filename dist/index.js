"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcFns = void 0;
exports.calcFns = {
    'W*H*Param_cost': (paramPrice, size) => size.width * size.height * paramPrice,
    'Price per inclusion': (paramPrice) => paramPrice,
    'W*H*Param_cost*Param_value': (paramPrice, size, paramValue) => size.width * size.height * paramPrice * paramValue,
};
