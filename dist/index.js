"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcFns = void 0;
exports.calcFns = {
    'W*H*Param_cost': (paramPrice, size, paramValue) => paramValue === 'true' ? size.width * size.height * paramPrice : 0,
    'Price per inclusion': (paramPrice, size, paramValue) => paramValue === 'true' ? paramPrice : 0,
    'W*H*Param_cost*Param_value': (paramPrice, size, paramValue) => !isNaN(parseFloat(paramValue))
        ? size.width * size.height * paramPrice * parseFloat(paramValue)
        : 0,
};
