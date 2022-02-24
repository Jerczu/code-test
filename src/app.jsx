"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./app.scss");
const react_query_1 = require("react-query");
const devtools_1 = require("react-query/devtools");
const PaymentsDisplay_1 = require("./components/PaymentsDisplay/PaymentsDisplay");
const queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});
const App = () => {
    return (<react_query_1.QueryClientProvider client={queryClient}>
      <devtools_1.ReactQueryDevtools initialIsOpen={false}/>
      <PaymentsDisplay_1.PaymentsDisplay />
    </react_query_1.QueryClientProvider>);
};
exports.default = App;
