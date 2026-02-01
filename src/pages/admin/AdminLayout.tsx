import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="font-bold tracking-tight">
            Swiss Travel Admin
          </a>
          <nav className="flex items-center gap-3 text-sm">
            <a className="font-semibold hover:underline" href="/admin/offers">
              Offers
            </a>
            <a className="font-semibold hover:underline" href="/admin/login">
              Login
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
