import { Button, Col, Container, Row } from "react-bootstrap";
import { Filter } from "../Filter/Filter";
import {
  DisplayTable,
  IDisplayTableConfig,
} from "../DisplayTable/DisplayTable";
import React, {
  FC,
  memo,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFetchPayments } from "../../hooks/useFetchPayments";
import { PaymentStatus } from "../../data/models";

const defaultTableConfig: IDisplayTableConfig[] = [
  { headingValue: "From", dataReference: "fromAccount" },
  { headingValue: "To", dataReference: "toAccount" },
  { headingValue: "Date", dataReference: "paymentDate" },
  { headingValue: "Amount", dataReference: "paymentAmount" },
  { headingValue: "Currency", dataReference: "paymentCurrency" },
  { headingValue: "Type", dataReference: "paymentType" },
  { headingValue: "Status", dataReference: "paymentStatus" },
];

export const PaymentsDisplay: FC = () => {
  const [filter, setFilter] = useState<PaymentStatus | null>(null);
  const {
    isFetching,
    paymentData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useFetchPayments();

  const displayPaymentData = useMemo(() => {
    if (filter) {
      return paymentData.filter((item) => item.paymentStatus === filter);
    }
    return paymentData;
  }, [filter, paymentData]);

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {paymentData && (
        <Container>
          <Row>
            <Col>
              <Filter onChange={(value) => setFilter(value)} />
            </Col>
          </Row>
          <Row>
            <Col>
              <DisplayTable
                headings={defaultTableConfig}
                tableData={displayPaymentData}
              />
            </Col>
          </Row>
          {isFetchingNextPage && (
            <Row>
              <Col>Fetching next page...</Col>
            </Row>
          )}
          {hasNextPage && !isFetchingNextPage && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                fetchNextPage();
              }}
              variant="primary"
            >
              Load More
            </Button>
          )}
        </Container>
      )}
    </>
  );
};
