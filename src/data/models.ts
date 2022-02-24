export enum PaymentStatus {
  Approved = "A",
  Cancelled = "C",
  Pending = "P",
}
export interface IAccount {
  accountName: string;
  sortCode: number;
  accountNumber: number;
}
export interface IApiMetadata {
  hasMoreElements: boolean;
  nextPageIndex: string;
}

export interface IApiResults {
  paymentAmount: number;
  paymentCurrency: string;
  paymentType: string;
  paymentDate: string;
  paymentStatus: PaymentStatus;
  toAccount: IAccount;
  fromAccount: IAccount;
}

export interface IApiResponse {
  metaData: IApiMetadata;
  results: IApiResults[];
}
