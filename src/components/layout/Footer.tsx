import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white text-neutral-700">
      <Container>
        <div className="py-12 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Swiss Travel
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Flights, holiday packages and travel support with fast
              response and reliable service.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
              Services
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>✈️ Flight tickets</li>
              <li>🏝️ Holiday packages</li>
              <li>🚙 Registrations & insurance</li>
              <li>📄 Travel assistance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
              Contact
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>☎️ 070/341-344</li>
              <li>☎️ 042/313-133</li>
              <li>📍 Gostivar</li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-red-600 hover:text-red-700"
                >
                  WhatsApp Support →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t py-6 text-sm text-neutral-500 flex flex-col md:flex-row gap-3 items-center justify-between">
          <p>
            © {new Date().getFullYear()} Swiss Travel. All rights reserved.
          </p>
          <p>Fast and simple travel booking.</p>
        </div>
      </Container>
    </footer>
  );
}
