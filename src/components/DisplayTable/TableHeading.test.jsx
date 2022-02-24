"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const TableHeading_1 = require("./TableHeading");
describe("TableHeading", () => {
    const mockHeadings = [
        { headingValue: "Foo", dataReference: "fromAccount" },
        { headingValue: "Bar", dataReference: "toAccount" },
        { headingValue: "Baz", dataReference: "paymentDate" },
    ];
    test("Component renders data as expected", () => {
        (0, react_2.render)(<table>
        <TableHeading_1.TableHeading headings={mockHeadings}/>
      </table>);
        expect(react_2.screen.getByText(mockHeadings[0].headingValue)).toBeInTheDocument();
        expect(react_2.screen.getByText(mockHeadings[1].headingValue)).toBeInTheDocument();
        expect(react_2.screen.getByText(mockHeadings[2].headingValue)).toBeInTheDocument();
    });
});
