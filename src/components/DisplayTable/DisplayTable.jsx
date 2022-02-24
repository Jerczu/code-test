"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayTable = void 0;
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const TableHeading_1 = require("./TableHeading");
const TableBody_1 = require("./TableBody");
const DisplayTable = ({ headings, tableData }) => {
    return (<react_bootstrap_1.Table striped bordered hover>
      <TableHeading_1.TableHeading headings={headings}/>
      <TableBody_1.TableBody headings={headings} tableData={tableData}/>
    </react_bootstrap_1.Table>);
};
exports.DisplayTable = DisplayTable;
