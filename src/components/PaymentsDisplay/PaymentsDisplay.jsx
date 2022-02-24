"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsDisplay = void 0;
const react_bootstrap_1 = require("react-bootstrap");
const Filter_1 = require("../Filter/Filter");
const DisplayTable_1 = require("../DisplayTable/DisplayTable");
const react_1 = __importStar(require("react"));
const useFetchPayments_1 = require("../../hooks/useFetchPayments");
const defaultTableConfig = [
    { headingValue: "From", dataReference: "fromAccount" },
    { headingValue: "To", dataReference: "toAccount" },
    { headingValue: "Date", dataReference: "paymentDate" },
    { headingValue: "Amount", dataReference: "paymentAmount" },
    { headingValue: "Currency", dataReference: "paymentCurrency" },
    { headingValue: "Type", dataReference: "paymentType" },
    { headingValue: "Status", dataReference: "paymentStatus" },
];
const PaymentsDisplay = () => {
    const [filter, setFilter] = (0, react_1.useState)(null);
    const { isFetching, paymentData, hasNextPage, isFetchingNextPage, fetchNextPage, } = (0, useFetchPayments_1.useFetchPayments)();
    const displayPaymentData = (0, react_1.useMemo)(() => {
        if (filter) {
            return paymentData.filter((item) => item.paymentStatus === filter);
        }
        return paymentData;
    }, [filter, paymentData]);
    return (<>
      {isFetching && <p>Loading...</p>}
      {paymentData && (<react_bootstrap_1.Container>
          <react_bootstrap_1.Row>
            <react_bootstrap_1.Col>
              <Filter_1.Filter onChange={(value) => setFilter(value)}/>
            </react_bootstrap_1.Col>
          </react_bootstrap_1.Row>
          <react_bootstrap_1.Row>
            <react_bootstrap_1.Col>
              <DisplayTable_1.DisplayTable headings={defaultTableConfig} tableData={displayPaymentData}/>
            </react_bootstrap_1.Col>
          </react_bootstrap_1.Row>
          {isFetchingNextPage && (<react_bootstrap_1.Row>
              <react_bootstrap_1.Col>Fetching next page...</react_bootstrap_1.Col>
            </react_bootstrap_1.Row>)}
          {hasNextPage && !isFetchingNextPage && (<react_bootstrap_1.Button onClick={(e) => {
                    e.preventDefault();
                    fetchNextPage();
                }} variant="primary">
              Load More
            </react_bootstrap_1.Button>)}
        </react_bootstrap_1.Container>)}
    </>);
};
exports.PaymentsDisplay = PaymentsDisplay;
