// LICENSE : MIT
"use strict";
import CodeGenerator from "../CodeGenerator";
import {Expression} from "./Expression";
export function NullableType(tag) {
    const expression = Expression(tag.name, tag.type);
    return CodeGenerator.assert(expression);
}
