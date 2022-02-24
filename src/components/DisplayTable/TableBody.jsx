"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBody = void 0;
const react_1 = __importDefault(require("react"));
const AccountDisplay_1 = require("../AccountDisplay/AccountDisplay");
const PaymentStatusDisplay_1 = require("../PaymentStatusDisplay/PaymentStatusDisplay");
const getDisplayComponent = (item, config) => {
    if (config.dataReference === "fromAccount")
        return <AccountDisplay_1.AccountDisplay accountInfo={item[config.dataReference]}/>;
    if (config.dataReference === "toAccount")
        return <AccountDisplay_1.AccountDisplay accountInfo={item[config.dataReference]}/>;
    if (config.dataReference === "paymentStatus")
        return <PaymentStatusDisplay_1.PaymentStatusDisplay status={item[config.dataReference]}/>;
    return item[config.dataReference];
};
const TableBody = ({ tableData, headings }) => {
    return (<tbody>
      {tableData === null || tableData === void 0 ? void 0 : tableData.map((paymentRow, index) => (<tr key={`payment_row_${index}`}>
          {headings.map((configItem, cellindex) => (<td key={`cell_${cellindex}`}>
              {getDisplayComponent(paymentRow, configItem)}
            </td>))}
        </tr>))}
    </tbody>);
};
exports.TableBody = TableBody;
