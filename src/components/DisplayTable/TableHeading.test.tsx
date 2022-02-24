import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableHeading } from "./TableHeading";
import { IDisplayTableConfig } from "./DisplayTable";

describe("TableHeading", () => {
  const mockHeadings: IDisplayTableConfig[] = [
    { headingValue: "Foo", dataReference: "fromAccount" },
    { headingValue: "Bar", dataReference: "toAccount" },
    { headingValue: "Baz", dataReference: "paymentDate" },
  ];

  test("Component renders data as expected", () => {
    render(
      <table>
        <TableHeading headings={mockHeadings} />
      </table>
    );
    expect(screen.getByText(mockHeadings[0].headingValue)).toBeInTheDocument();
    expect(screen.getByText(mockHeadings[1].headingValue)).toBeInTheDocument();
    expect(screen.getByText(mockHeadings[2].headingValue)).toBeInTheDocument();
  });
});
