import React, { FC } from "react";
import { Table } from "react-bootstrap";
import { IApiResults } from "../../data/models";
import { TableHeading } from "./TableHeading";
import { TableBody } from "./TableBody";

export interface IDisplayTableConfig {
  headingValue: string;
  dataReference: keyof IApiResults;
}
export interface IDisplayTable {
  headings: IDisplayTableConfig[];
  tableData?: IApiResults[];
}

export const DisplayTable: FC<IDisplayTable> = ({ headings, tableData }) => {
  return (
    <Table striped bordered hover>
      <TableHeading headings={headings} />
      <TableBody headings={headings} tableData={tableData} />
    </Table>
  );
};
