"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorFns = void 0;
exports.behaviorFns = {
    'W*H*Param_cost': (paramPrice, size) => size.width * size.height * paramPrice,
    'Price per inclusion': (paramPrice) => paramPrice,
    'W*H*Param_cost*Param_value': (paramPrice, size, paramValue) => size.width * size.height * paramPrice * paramValue,
};
