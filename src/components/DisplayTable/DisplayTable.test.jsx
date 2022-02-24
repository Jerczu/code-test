"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayTable_1 = require("./DisplayTable");
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
const react_2 = __importDefault(require("react"));
const mockPaymentData = [
    {
        paymentAmount: 324.75,
        paymentCurrency: "GBP",
        paymentType: "CHAPS",
        paymentDate: "01-Mar-2022",
        paymentStatus: "C",
        toAccount: {
            accountName: "Savings Account",
            sortCode: "913135",
            accountNumber: "12597027",
        },
        fromAccount: {
            accountName: "Personal Loan Account",
            sortCode: "020347",
            accountNumber: "24318627",
        },
    },
];
describe("TableBody", () => {
    const mockHeadings = [
        { headingValue: "1", dataReference: "paymentAmount" },
        { headingValue: "2", dataReference: "paymentCurrency" },
        { headingValue: "3", dataReference: "paymentType" },
        { headingValue: "4", dataReference: "paymentDate" },
        { headingValue: "5", dataReference: "paymentStatus" },
        { headingValue: "6", dataReference: "toAccount" },
        { headingValue: "7", dataReference: "fromAccount" },
    ];
    test("Component renders data as expected", () => {
        (0, react_1.render)(<DisplayTable_1.DisplayTable headings={mockHeadings} tableData={mockPaymentData}/>);
        expect(react_1.screen.getByText(1)).toBeInTheDocument();
        expect(react_1.screen.getByText(2)).toBeInTheDocument();
        expect(react_1.screen.getByText(3)).toBeInTheDocument();
        expect(react_1.screen.getByText(4)).toBeInTheDocument();
        expect(react_1.screen.getByText(5)).toBeInTheDocument();
        expect(react_1.screen.getByText(6)).toBeInTheDocument();
        expect(react_1.screen.getByText(7)).toBeInTheDocument();
        expect(react_1.screen.getByText(mockPaymentData[0].paymentAmount)).toBeInTheDocument();
        expect(react_1.screen.getByText(mockPaymentData[0].paymentCurrency)).toBeInTheDocument();
        expect(react_1.screen.getByText(mockPaymentData[0].paymentType)).toBeInTheDocument();
        expect(react_1.screen.getByText(mockPaymentData[0].paymentDate)).toBeInTheDocument();
        expect(react_1.screen.getByText("Cancelled")).toBeInTheDocument();
        expect(react_1.screen.getByText(`${mockPaymentData[0].toAccount.sortCode} ${mockPaymentData[0].toAccount.accountNumber}`)).toBeInTheDocument();
        expect(react_1.screen.getByText(mockPaymentData[0].toAccount.accountName)).toBeInTheDocument();
    });
});
