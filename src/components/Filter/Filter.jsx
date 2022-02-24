"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const react_bootstrap_1 = require("react-bootstrap");
const react_1 = __importDefault(require("react"));
const models_1 = require("../../data/models");
const Filter = ({ onChange }) => {
    return (<react_bootstrap_1.Dropdown>
      <react_bootstrap_1.Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter Results
      </react_bootstrap_1.Dropdown.Toggle>
      <react_bootstrap_1.Dropdown.Menu>
        <react_bootstrap_1.Dropdown.Item onClick={() => onChange(null)}>None</react_bootstrap_1.Dropdown.Item>
        <react_bootstrap_1.Dropdown.Item onClick={() => onChange(models_1.PaymentStatus.Approved)}>
          Approved
        </react_bootstrap_1.Dropdown.Item>
        <react_bootstrap_1.Dropdown.Item onClick={() => onChange(models_1.PaymentStatus.Cancelled)}>
          Cancelled
        </react_bootstrap_1.Dropdown.Item>
        <react_bootstrap_1.Dropdown.Item onClick={() => onChange(models_1.PaymentStatus.Pending)}>
          Pending Approval
        </react_bootstrap_1.Dropdown.Item>
      </react_bootstrap_1.Dropdown.Menu>
    </react_bootstrap_1.Dropdown>);
};
exports.Filter = Filter;
