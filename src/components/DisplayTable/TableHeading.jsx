"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeading = void 0;
const react_1 = __importDefault(require("react"));
const TableHeading = ({ headings }) => (<thead>
        <tr>
            {headings === null || headings === void 0 ? void 0 : headings.map((item, index) => {
        var _a;
        return (<th key={(_a = item.headingValue) === null || _a === void 0 ? void 0 : _a.replace(' ', '_').toLowerCase()}>{item.headingValue}</th>);
    })}
        </tr>
    </thead>);
exports.TableHeading = TableHeading;
