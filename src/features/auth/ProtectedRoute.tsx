import type { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "./auth.store";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const loc = useLocation();

  if (!auth.isAuthed()) {
    const next = encodeURIComponent(loc.pathname + loc.search);
    return <Navigate to={`/admin/login?next=${next}`} replace />;
  }

  return <>{children}</>;
}
