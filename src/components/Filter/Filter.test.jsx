"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const Filter_1 = require("./Filter");
const models_1 = require("../../data/models");
describe("TableHeading", () => {
    const mockOnChange = jest.fn();
    test.each([
        ["None", null],
        ["Approved", models_1.PaymentStatus.Approved],
        ["Cancelled", models_1.PaymentStatus.Cancelled],
        ["Pending Approval", models_1.PaymentStatus.Pending],
    ])("Component behaviour is as expected", (label, status) => {
        (0, react_2.render)(<Filter_1.Filter onChange={mockOnChange}/>);
        const startButton = react_2.screen.getByText("Filter Results");
        react_2.fireEvent.click(startButton);
        const optionButton = react_2.screen.getByText(label);
        react_2.fireEvent.click(optionButton);
        expect(mockOnChange).toHaveBeenCalledWith(status);
    });
});
