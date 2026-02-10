import { supabase } from "../../lib/supabase";

function extFromName(name: string) {
  const parts = name.split(".");
  return parts.length > 1 ? parts.pop()!.toLowerCase() : "jpg";
}

export async function uploadOfferImage(file: File): Promise<string> {
  const ext = extFromName(file.name);
  const fileName = `${crypto.randomUUID()}.${ext}`;
  const path = `images/${fileName}`;

  const { error } = await supabase.storage
    .from("offers") // bucket name MUST be exactly "offers"
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type || "image/*",
    });

  if (error) {
    console.error("Supabase upload error:", error); // <-- look in console
    throw new Error(error.message);
  }

  const { data } = supabase.storage.from("offers").getPublicUrl(path);
  if (!data?.publicUrl) throw new Error("Could not get public URL");

  return data.publicUrl;
}
