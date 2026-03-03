"use client";

import { TransportProvider as ConnectTransportProvider } from "@connectrpc/connect-query";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_API_URL is not set");
}

const transport = createGrpcWebTransport({
  baseUrl,
  interceptors: [
    (next) => async (request) => {
      try {
        const jwtToken = sessionStorage.getItem("jwt_token");
        if (jwtToken) {
          request.header.set("rpc-auth-header", jwtToken);
        }
      } catch (error) {
        console.error(error);
      }
      return next(request);
    },
  ],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const TransportProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConnectTransportProvider transport={transport}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ConnectTransportProvider>
  );
};

export default TransportProvider;
