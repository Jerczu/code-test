import { IDisplayTableConfig } from "./DisplayTable";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { TableBody } from "./TableBody";
import { IApiResults } from "../../data/models";

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
  const mockHeadings: IDisplayTableConfig[] = [
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
    render(
      <table>
        <TableBody
          headings={mockHeadings}
          tableData={mockPaymentData as unknown as IApiResults[]}
        />
      </table>
    );
    const searchText =
      mockPaymentData[paymentIndex][mockHeadings[headingIndex].dataReference];
    expect(screen.getByText(searchText as string)).toBeInTheDocument();
  });
});
