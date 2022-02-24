import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchPayments } from "./useFetchPayments";

const queryClient = new QueryClient();
// @ts-ignore
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useFetchPayments", () => {
  test("Hook Works", async () => {
    const { result } = renderHook(() => useFetchPayments(), {
      wrapper,
    });

    expect(result.current.paymentData).toEqual([]);
    expect(typeof result.current.fetchNextPage).toEqual("function");
    expect(result.current.isFetching).toEqual(true);
    expect(result.current.hasNextPage).toEqual(undefined);
    expect(result.current.isFetchingNextPage).toEqual(false);
  });
});
