import { IAccount } from "../../data/models";
import React, { FC } from "react";

interface IAccountDisplay {
  accountInfo: IAccount;
}

export const AccountDisplay: FC<IAccountDisplay> = ({ accountInfo }) => {
  return (
    <>
      {accountInfo.accountName}
      <br />
      <small>
        {accountInfo.sortCode} {accountInfo.accountNumber}
      </small>
    </>
  );
};
