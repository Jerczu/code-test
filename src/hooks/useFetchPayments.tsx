import { useCallback, useEffect, useState } from "react";
import { IApiMetadata, IApiResponse, IApiResults } from "../data/models";
import { useInfiniteQuery, useQuery } from "react-query";

const dataFetcher = async function <T>(
  endpoint: string,
  offset?: string
): Promise<T> {
  const requestSuffix = offset ? `?pageIndex=${offset}` : "";
  const response = await fetch(
    `//localhost:9001/api/${endpoint}${requestSuffix}`
  );
  if (!response.ok) throw response;
  const result = await response;
  return result.json();
};

export function useFetchPayments() {
  const fetchPayments = async ({ pageParam = "" }) => {
    return dataFetcher<IApiResponse>("payments", pageParam);
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery("payments", fetchPayments, {
      getNextPageParam: (lastPage, pages) =>
        lastPage.metaData.hasMoreElements
          ? lastPage.metaData.nextPageIndex
          : undefined,
    });
  const pages = data?.pages || [];

  const paymentData: IApiResults[] = pages.reduce(
    (aggregate: IApiResults[], item: IApiResponse) => {
      return [...aggregate, ...item.results];
    },
    []
  );

  return {
    // @ts-ignore
    paymentData,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  };
}
