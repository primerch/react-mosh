import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3, // retry failed queries up to 3 times
//       gcTime: 300_000, // garbage-collect inactive cache entries after 5 minutes
//       // Stale queries will refetch automatically because the following flags are true:
//       // 1) when the window regains focus
//       // 2) when the network reconnects
//       // 3) when a component mounts (and the data is stale)
//       staleTime: 0, // default: 0 (data becomes stale immediately)
//       refetchOnWindowFocus: true, // refetch on window focus
//       refetchOnReconnect: true, // refetch on network reconnect
//       refetchOnMount: true, // refetch on mount if stale
//     },
//   },
// });

// // This code is only for undefined TypeScript
// declare global {
//   interface Window {
//     __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
//   }
// }

// // This code is for all users
// window.__TANSTACK_QUERY_CLIENT__ = queryClient;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* <ReactQueryDevtools /> */}
    {/* </QueryClientProvider> */}
  </StrictMode>,
);
