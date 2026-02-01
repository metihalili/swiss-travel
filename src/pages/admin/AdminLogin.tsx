import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { auth } from "../../features/auth/auth.store";

export default function AdminLogin() {
  const nav = useNavigate();
  const loc = useLocation();

  const nextPath = useMemo(() => {
    const sp = new URLSearchParams(loc.search);
    return sp.get("next") ?? "/admin/offers";
  }, [loc.search]);

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Change this password
    const ok = auth.login(password, "swiss123");
    if (!ok) {
      setError("Wrong password. Try again.");
      return;
    }
    nav(nextPath);
  }

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-bold">Admin login</h1>
        <p className="mt-1 text-neutral-600 text-sm">
          Default password is <span className="font-semibold">swiss123</span>.
          You can change it in <code>AdminLogin.tsx</code>.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="max-w-md rounded-2xl border bg-white p-6"
      >
        <label className="text-sm font-semibold">Password</label>
        <div className="mt-2">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            type="password"
          />
        </div>

        {error ? (
          <p className="mt-3 text-sm text-red-600 font-semibold">{error}</p>
        ) : null}

        <div className="mt-5">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
