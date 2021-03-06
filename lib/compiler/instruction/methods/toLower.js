"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __importDefault(require("../../utils/types"));
const __1 = require("..");
const error_1 = __importDefault(require("../../error"));
class ToLower extends __1.FunctionCall {
    refValue;
    constructor(token, props) {
        super(token, { ...props, id: 'ToLower' }, true);
        this.props.id = 'ToLower';
    }
    compile(env) {
        if (this.props.params[0] && this.props.params[0].compile(env)) {
            if (this.props.params[0].getValue(env)?.getType() === types_1.default.STRING) {
                this.refValue = this.props.params[0].getValue(env)?.getValue(env)?.toString().toLowerCase();
                return true;
            }
            else {
                error_1.default.push({
                    token: this.token,
                    type: 'Semantic',
                    msg: `La funcion espera un ${types_1.default.STRING} como parametro.`,
                });
                return false;
            }
        }
        else
            return false;
    }
    getValue() {
        return this.refValue;
    }
    getType() {
        return types_1.default.STRING;
    }
}
exports.default = ToLower;
