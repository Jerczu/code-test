"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchPayments = void 0;
const react_query_1 = require("react-query");
const dataFetcher = function (endpoint, offset) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestSuffix = offset ? `?pageIndex=${offset}` : "";
        const response = yield fetch(`//localhost:9001/api/${endpoint}${requestSuffix}`);
        if (!response.ok)
            throw response;
        const result = yield response;
        return result.json();
    });
};
function useFetchPayments() {
    const fetchPayments = ({ pageParam = "" }) => __awaiter(this, void 0, void 0, function* () {
        return dataFetcher("payments", pageParam);
    });
    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = (0, react_query_1.useInfiniteQuery)("payments", fetchPayments, {
        getNextPageParam: (lastPage, pages) => lastPage.metaData.hasMoreElements
            ? lastPage.metaData.nextPageIndex
            : undefined,
    });
    const pages = (data === null || data === void 0 ? void 0 : data.pages) || [];
    const paymentData = pages.reduce((aggregate, item) => {
        return [...aggregate, ...item.results];
    }, []);
    return {
        // @ts-ignore
        paymentData,
        fetchNextPage,
        isFetching,
        hasNextPage,
        isFetchingNextPage,
    };
}
exports.useFetchPayments = useFetchPayments;
