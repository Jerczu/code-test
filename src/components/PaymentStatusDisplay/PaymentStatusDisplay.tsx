import React, { FC } from "react";
import { PaymentStatus } from "../../data/models";

export interface IPaymentStatus {
  status: PaymentStatus;
}

function mapStatusToStringValue(status: PaymentStatus): string {
  if (status === PaymentStatus.Approved) return "Approved";
  if (status === PaymentStatus.Cancelled) return "Cancelled";
  if (status === PaymentStatus.Pending) return "Pending Approval";
  return "Not Available";
}

export const PaymentStatusDisplay: FC<IPaymentStatus> = ({ status }) => {
  return <>{mapStatusToStringValue(status)}</>;
};
