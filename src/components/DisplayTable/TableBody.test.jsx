"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
const react_2 = __importDefault(require("react"));
const TableBody_1 = require("./TableBody");
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
    {
        paymentAmount: 642.04,
        paymentCurrency: "GBP",
        paymentType: "FAST",
        paymentDate: "02-Mar-2022",
        paymentStatus: "P",
        toAccount: {
            accountName: "Personal Loan Account",
            sortCode: "987989",
            accountNumber: "60906187",
        },
        fromAccount: {
            accountName: "Home Loan Account",
            sortCode: "729346",
            accountNumber: "38485429",
        },
    },
];
describe("TableBody", () => {
    const mockHeadings = [
        { headingValue: "Foo", dataReference: "paymentAmount" },
        { headingValue: "Bar", dataReference: "paymentType" },
        { headingValue: "Baz", dataReference: "paymentDate" },
    ];
    test.each([
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
    ])("Component renders data as expected", (paymentIndex, headingIndex) => {
        (0, react_1.render)(<table>
        <TableBody_1.TableBody headings={mockHeadings} tableData={mockPaymentData}/>
      </table>);
        const searchText = mockPaymentData[paymentIndex][mockHeadings[headingIndex].dataReference];
        expect(react_1.screen.getByText(searchText)).toBeInTheDocument();
    });
});
