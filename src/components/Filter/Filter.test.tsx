import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Filter } from "./Filter";
import { PaymentStatus } from "../../data/models";

describe("TableHeading", () => {
  const mockOnChange = jest.fn();
  test.each([
    ["None", null],
    ["Approved", PaymentStatus.Approved],
    ["Cancelled", PaymentStatus.Cancelled],
    ["Pending Approval", PaymentStatus.Pending],
  ])("Component behaviour is as expected", (label, status) => {
    render(<Filter onChange={mockOnChange} />);
    const startButton = screen.getByText("Filter Results");
    fireEvent.click(startButton);
    const optionButton = screen.getByText(label);
    fireEvent.click(optionButton);
    expect(mockOnChange).toHaveBeenCalledWith(status);
  });
});
