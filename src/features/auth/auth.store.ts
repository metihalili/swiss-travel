import { storage } from "../../lib/storage";

const KEY = "swiss_travel_admin_authed_v1";

function isAuthed() {
  return storage.get<boolean>(KEY, false);
}

function login(password: string, expectedPassword: string) {
  const ok = password === expectedPassword;
  storage.set(KEY, ok);
  return ok;
}

function logout() {
  storage.set(KEY, false);
}

export const auth = { isAuthed, login, logout };
