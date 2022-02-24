import { Dropdown } from "react-bootstrap";
import React, { FC } from "react";
import { PaymentStatus } from "../../data/models";

export interface IFilter {
  onChange: (value: PaymentStatus | null) => void;
}

export const Filter: FC<IFilter> = ({ onChange }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter Results
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onChange(null)}>None</Dropdown.Item>
        <Dropdown.Item onClick={() => onChange(PaymentStatus.Approved)}>
          Approved
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onChange(PaymentStatus.Cancelled)}>
          Cancelled
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onChange(PaymentStatus.Pending)}>
          Pending Approval
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
