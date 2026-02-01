import type { PropsWithChildren } from "react";

export default function AppProviders({ children }: PropsWithChildren) {
  // later you can add QueryClientProvider / Auth Provider here
  return <>{children}</>;
}
