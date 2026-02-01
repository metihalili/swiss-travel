import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <img
              src="/logo.jpg"
              alt="Swiss Travel Logo"
              className="h-8 w-auto"
            />
            <span>Swiss Travel</span>
          </a>


          <nav className="flex items-center gap-4 text-sm">
            <a className="font-semibold hover:underline" href="/offers">
              Offers
            </a>
          
            <a
              className="font-semibold rounded-xl bg-red-600 px-3 py-2 text-white hover:bg-red-700"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
