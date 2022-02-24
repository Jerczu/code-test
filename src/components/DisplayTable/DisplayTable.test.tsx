import { DisplayTable, IDisplayTableConfig } from "./DisplayTable";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { TableBody } from "./TableBody";
import { IApiResults, PaymentStatus } from "../../data/models";

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
  const mockHeadings: IDisplayTableConfig[] = [
    { headingValue: "1", dataReference: "paymentAmount" },
    { headingValue: "2", dataReference: "paymentCurrency" },
    { headingValue: "3", dataReference: "paymentType" },
    { headingValue: "4", dataReference: "paymentDate" },
    { headingValue: "5", dataReference: "paymentStatus" },
    { headingValue: "6", dataReference: "toAccount" },
    { headingValue: "7", dataReference: "fromAccount" },
  ];

  test("Component renders data as expected", () => {
    render(
      <DisplayTable
        headings={mockHeadings}
        tableData={mockPaymentData as unknown as IApiResults[]}
      />
    );
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(screen.getByText(6)).toBeInTheDocument();
    expect(screen.getByText(7)).toBeInTheDocument();
    expect(
      screen.getByText(mockPaymentData[0].paymentAmount)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPaymentData[0].paymentCurrency)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPaymentData[0].paymentType)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPaymentData[0].paymentDate)
    ).toBeInTheDocument();
    expect(screen.getByText("Cancelled")).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockPaymentData[0].toAccount.sortCode} ${mockPaymentData[0].toAccount.accountNumber}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPaymentData[0].toAccount.accountName)
    ).toBeInTheDocument();
  });
});
