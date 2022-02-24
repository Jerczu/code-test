"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatusDisplay = void 0;
const react_1 = __importDefault(require("react"));
const models_1 = require("../../data/models");
function mapStatusToStringValue(status) {
    if (status === models_1.PaymentStatus.Approved)
        return "Approved";
    if (status === models_1.PaymentStatus.Cancelled)
        return "Cancelled";
    if (status === models_1.PaymentStatus.Pending)
        return "Pending Approval";
    return "Not Available";
}
const PaymentStatusDisplay = ({ status }) => {
    return <>{mapStatusToStringValue(status)}</>;
};
exports.PaymentStatusDisplay = PaymentStatusDisplay;
