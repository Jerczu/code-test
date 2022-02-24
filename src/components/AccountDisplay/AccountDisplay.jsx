"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDisplay = void 0;
const react_1 = __importDefault(require("react"));
const AccountDisplay = ({ accountInfo }) => {
    return (<>
      {accountInfo.accountName}
      <br />
      <small>
        {accountInfo.sortCode} {accountInfo.accountNumber}
      </small>
    </>);
};
exports.AccountDisplay = AccountDisplay;
