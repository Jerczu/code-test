import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PaymentStatus } from "../../data/models";
import { PaymentStatusDisplay } from "./PaymentStatusDisplay";

describe("TableHeading", () => {
  test.each([
    [PaymentStatus.Approved, "Approved"],
    [PaymentStatus.Pending, "Pending Approval"],
    [PaymentStatus.Cancelled, "Cancelled"],
    [null, "Not Available"],
  ])("Component renders data as expected", (testStatus, expected) => {
    render(<PaymentStatusDisplay status={testStatus as PaymentStatus} />);
    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});
