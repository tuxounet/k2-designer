import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "../utils/trpc";
import { isProd } from "../utils/isProd";
interface TrpcProviderProps {
  children: JSX.Element;
}
function TrpcProvider(props: TrpcProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  const url = isProd ? "/trpc" : "http://localhost:8080/trpc";
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default TrpcProvider;
