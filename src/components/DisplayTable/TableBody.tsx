import React from "react";
import { IDisplayTable, IDisplayTableConfig } from "./DisplayTable";
import { FC } from "react";
import { AccountDisplay } from "../AccountDisplay/AccountDisplay";
import { PaymentStatusDisplay } from "../PaymentStatusDisplay/PaymentStatusDisplay";
import { IApiResults } from "../../data/models";

const getDisplayComponent = (
  item: IApiResults,
  config: IDisplayTableConfig
) => {
  if (config.dataReference === "fromAccount")
    return <AccountDisplay accountInfo={item[config.dataReference]} />;
  if (config.dataReference === "toAccount")
    return <AccountDisplay accountInfo={item[config.dataReference]} />;
  if (config.dataReference === "paymentStatus")
    return <PaymentStatusDisplay status={item[config.dataReference]} />;
  return item[config.dataReference];
};

export const TableBody: FC<IDisplayTable> = ({ tableData, headings }) => {
  return (
    <tbody>
      {tableData?.map((paymentRow, index) => (
        <tr key={`payment_row_${index}`}>
          {headings.map((configItem, cellindex) => (
            <td key={`cell_${cellindex}`}>
              {getDisplayComponent(paymentRow, configItem)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
