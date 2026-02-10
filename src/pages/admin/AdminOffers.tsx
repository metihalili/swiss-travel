import { useMemo, useState, useEffect } from "react";
import { uploadOfferImage } from "../../features/offers/offers.upload";
import { offersApi } from "../../features/offers/offers.api";
import { auth } from "../../features/auth/auth.store";
import type {
  Currency,
  Offer,
  OfferCategory,
} from "../../features/offers/Offers.types";

type FormState = {
  title: string;
  destination: string;
  priceFrom: string;
  currency: Currency;
  category: OfferCategory;
  imageUrl: string;
  startDate: string;
  endDate: string;
  active: boolean;
  includes: string;
};

const emptyForm: FormState = {
  title: "",
  destination: "",
  priceFrom: "",
  currency: "EUR",
  category: "Holiday",
  imageUrl: "",
  startDate: "",
  endDate: "",
  active: true,
  includes: "",
};

export default function AdminOffers() {
  const [items, setItems] = useState<Offer[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);

  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(true);

  const isEditing = useMemo(() => !!editingId, [editingId]);

  useEffect(() => {
    (async () => {
      try {
        const data = await offersApi.list();
        setItems(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function reset() {
    setEditingId(null);
    setForm(emptyForm);
    setPreview("");
    setUploading(false);
  }

  function startEdit(o: Offer) {
    setEditingId(o.id);
    setForm({
      title: o.title,
      destination: o.destination,
      priceFrom: String(o.priceFrom),
      currency: o.currency,
      category: o.category,
      imageUrl: o.imageUrl ?? "",
      startDate: o.startDate ?? "",
      endDate: o.endDate ?? "",
      active: o.active,
      includes: (o.includes ?? []).join(", "),
    });
    setPreview(o.imageUrl ?? "");
  }

  async function remove(id: string) {
    await offersApi.remove(id);
    const next = await offersApi.list();
    setItems(next);
    if (editingId === id) reset();
  }

  function logout() {
    auth.logout();
    window.location.href = "/admin/login";
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.destination.trim()) return;

    const price = Number(form.priceFrom);
    const includesArr = form.includes
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const payload = {
      title: form.title.trim(),
      destination: form.destination.trim(),
      priceFrom: Number.isFinite(price) ? price : 0,
      currency: form.currency,
      category: form.category,
      imageUrl: form.imageUrl.trim() || undefined,
      startDate: form.startDate || undefined,
      endDate: form.endDate || undefined,
      active: form.active,
      includes: includesArr.length ? includesArr : undefined,
    };

    if (isEditing && editingId) {
      await offersApi.update(editingId, payload);
      const next = await offersApi.list();
      setItems(next);
      reset();
      return;
    }

    await offersApi.create(payload);
    const next = await offersApi.list();
    setItems(next);
    reset();
  }

  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Manage offers</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Add/edit offers. Images upload to Supabase Storage and work on Vercel.
          </p>
        </div>
        <button
          onClick={logout}
          className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-neutral-50"
        >
          Logout
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* FORM */}
        <form onSubmit={submit} className="rounded-2xl border bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">{isEditing ? "Edit offer" : "Add offer"}</h2>
            {isEditing ? (
              <button
                type="button"
                onClick={reset}
                className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
              >
                Cancel
              </button>
            ) : null}
          </div>

          <div className="mt-5 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-semibold">Title</label>
              <input
                className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                value={form.title}
                onChange={(e) => onChange("title", e.target.value)}
                placeholder="e.g. Dubai • 5 Nights"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold">Destination</label>
              <input
                className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                value={form.destination}
                onChange={(e) => onChange("destination", e.target.value)}
                placeholder="e.g. Dubai"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-semibold">Price from</label>
                <input
                  className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                  value={form.priceFrom}
                  onChange={(e) => onChange("priceFrom", e.target.value)}
                  placeholder="e.g. 399"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold">Currency</label>
                <select
                  className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                  value={form.currency}
                  onChange={(e) => onChange("currency", e.target.value as Currency)}
                >
                  <option value="EUR">EUR</option>
                  <option value="CHF">CHF</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold">Category</label>
                <select
                  className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                  value={form.category}
                  onChange={(e) => onChange("category", e.target.value as OfferCategory)}
                >
                  <option value="Holiday">Holiday</option>
                  <option value="Flights">Flights</option>
                  <option value="CityBreak">City Break</option>
                  <option value="Summer">Summer</option>
                  <option value="LastMinute">Last Minute</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* IMAGE UPLOAD (SUPABASE STORAGE) */}
            <div className="grid gap-2">
              <label className="text-sm font-semibold">Offer photo</label>
              <input
                type="file"
                accept="image/*"
                className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setPreview(URL.createObjectURL(file));
                  setUploading(true);

                  try {
                    const url = await uploadOfferImage(file);
                    onChange("imageUrl", url);
                    setPreview(url);
                  } catch (err) {
                    console.error(err);
                   alert(`Upload failed: ${String((err as any)?.message ?? err)}`);

                  } finally {
                    setUploading(false);
                  }
                }}
              />

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-40 w-full rounded-2xl border object-cover"
                />
              ) : (
                <div className="h-40 w-full rounded-2xl border bg-neutral-50 grid place-items-center text-sm text-neutral-500">
                  No image yet
                </div>
              )}

              <p className="text-xs text-neutral-500">
                {uploading ? "Uploading..." : "After upload, image URL is saved automatically."}
              </p>

              {/* Optional manual URL */}
              <label className="text-xs font-semibold text-neutral-600">
                Image URL (optional)
              </label>
              <input
                className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                value={form.imageUrl}
                onChange={(e) => onChange("imageUrl", e.target.value)}
                placeholder="https://..."
              />
            </div>

            <label className="flex items-center gap-3 text-sm font-semibold">
              <input
                type="checkbox"
                checked={form.active}
                onChange={(e) => onChange("active", e.target.checked)}
                className="h-4 w-4 rounded border-neutral-300"
              />
              Active (show on website)
            </label>

            <div className="grid gap-2">
              <label className="text-sm font-semibold">Includes (comma separated)</label>
              <textarea
                className="w-full min-h-[90px] rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                value={form.includes}
                onChange={(e) => onChange("includes", e.target.value)}
                placeholder="Hotel, Breakfast, Transfer"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-red-600 px-4 py-3 text-white text-sm font-semibold hover:bg-red-700"
            >
              {isEditing ? "Update offer" : "Add offer"}
            </button>
          </div>
        </form>

        {/* LIST */}
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Offers</h2>

          {loading ? (
            <p className="mt-4 text-sm text-neutral-600">Loading...</p>
          ) : (
            <div className="mt-4 grid gap-3">
              {items.map((o) => (
                <div
                  key={o.id}
                  className="rounded-xl border p-4 flex items-start justify-between gap-4"
                >
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{o.title}</p>
                    <p className="text-sm text-neutral-600 mt-1">
                      {o.destination} • {o.category} • from{" "}
                      <span className="font-semibold">
                        {o.priceFrom} {o.currency}
                      </span>
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-neutral-50"
                      onClick={() => startEdit(o)}
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      className="rounded-xl border border-red-200 bg-white px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
                      onClick={() => remove(o.id)}
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {items.length === 0 ? (
                <p className="text-sm text-neutral-600">No offers yet.</p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
