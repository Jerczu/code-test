import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AccountDisplay } from "./AccountDisplay";

describe("AccountDisplay", () => {
  const mockAccountInfo = {
    accountName: "Foo",
    sortCode: 12345,
    accountNumber: 987654321,
  };

  test("Component renders data as expected", () => {
    render(<AccountDisplay accountInfo={mockAccountInfo} />);
    expect(screen.getByText(mockAccountInfo.accountName)).toBeInTheDocument();
    expect(screen.queryAllByText(mockAccountInfo.sortCode)).not.toBeNull();
    expect(screen.queryAllByText(mockAccountInfo.accountNumber)).not.toBeNull();
  });
});
