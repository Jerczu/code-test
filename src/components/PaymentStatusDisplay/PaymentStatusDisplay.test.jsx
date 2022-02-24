"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const models_1 = require("../../data/models");
const PaymentStatusDisplay_1 = require("./PaymentStatusDisplay");
describe("TableHeading", () => {
    test.each([
        [models_1.PaymentStatus.Approved, "Approved"],
        [models_1.PaymentStatus.Pending, "Pending Approval"],
        [models_1.PaymentStatus.Cancelled, "Cancelled"],
        [null, "Not Available"],
    ])("Component renders data as expected", (testStatus, expected) => {
        (0, react_2.render)(<PaymentStatusDisplay_1.PaymentStatusDisplay status={testStatus}/>);
        expect(react_2.screen.getByText(expected)).toBeInTheDocument();
    });
});
