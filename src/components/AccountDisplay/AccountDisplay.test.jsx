"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const AccountDisplay_1 = require("./AccountDisplay");
describe("AccountDisplay", () => {
    const mockAccountInfo = {
        accountName: "Foo",
        sortCode: 12345,
        accountNumber: 987654321,
    };
    test("Component renders data as expected", () => {
        (0, react_2.render)(<AccountDisplay_1.AccountDisplay accountInfo={mockAccountInfo}/>);
        expect(react_2.screen.getByText(mockAccountInfo.accountName)).toBeInTheDocument();
        expect(react_2.screen.queryAllByText(mockAccountInfo.sortCode)).not.toBeNull();
        expect(react_2.screen.queryAllByText(mockAccountInfo.accountNumber)).not.toBeNull();
    });
});
