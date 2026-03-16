import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import OffersGrid from "../components/offers/OffersGrid";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b bg-white">
          <Container>
            <div className="py-10 md:py-14 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold tracking-widest text-red-600 uppercase">
                  Swiss Travel
                </p>

                <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                  Premium travel booking,
                  <span className="text-neutral-900"> simple and fast.</span>
                </h1>

                <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-neutral-600">
                  Flights, packages, hotels and support — with quick replies and
                  transparent offers. Message us and we’ll handle the details.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/+38975216775"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-white text-sm font-semibold hover:bg-red-700"
                  >
                    Request an offer
                  </a>

                  <a
                    href="/offers"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    View offers
                  </a>
                </div>

                {/* TRUST STRIP */}
                <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <p className="text-sm font-semibold">Fast replies</p>
                    <p className="mt-1 text-xs text-neutral-600">
                      Support when you need it.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <p className="text-sm font-semibold">Best options</p>
                    <p className="mt-1 text-xs text-neutral-600">
                      We compare offers for you.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <p className="text-sm font-semibold">Local support</p>
                    <p className="mt-1 text-xs text-neutral-600">
                      Reliable service, clear info.
                    </p>
                  </div>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
                  <div className="aspect-[16/11]">
                    <img
                      src="/hero.png"
                      alt="Travel"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* subtle badge */}
                <div className="absolute -bottom-4 left-4 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold text-neutral-900">
                    Flights • Holidays • Hotels
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Request and we reply with options.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICES */}
        <section className="bg-white">
          <Container>
            <div className="py-12 md:py-14">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Services
                  </h2>
                  <p className="mt-2 text-neutral-600 max-w-2xl">
                    Everything you need in one place — simple process, clear communication.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-neutral-200 p-6">
                  <p className="text-sm font-semibold">Flight tickets</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    One-way, return, and multi-city. We find the best routes.
                  </p>
                </div>
                <div className="rounded-3xl border border-neutral-200 p-6">
                  <p className="text-sm font-semibold">Holiday packages</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Hotel + flight bundles and seasonal deals.
                  </p>
                </div>
                <div className="rounded-3xl border border-neutral-200 p-6">
                  <p className="text-sm font-semibold">Support</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Changes, questions, documents, and travel guidance.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FEATURED OFFERS */}
        <section className="bg-neutral-50 border-y">
          <Container>
            <div className="py-12 md:py-14">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Featured offers
                  </h2>
                  <p className="mt-2 text-neutral-600">
                    Updated regularly — ask for dates and availability.
                  </p>
                </div>

                <a
                  href="/offers"
                  className="text-sm font-semibold text-neutral-800 hover:text-neutral-950"
                >
                  View all →
                </a>
              </div>

              <div className="mt-8">
                <OffersGrid limit={6} />
              </div>
            </div>
          </Container>
        </section>

        {/* PROCESS (professional feeling) */}
        <section className="bg-white">
          <Container>
            <div className="py-12 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                How it works
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                <div className="rounded-3xl border border-neutral-200 p-6">
                  <p className="text-xs font-semibold text-neutral-500">01</p>
                  <p className="mt-2 text-sm font-semibold">Send request</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Destination, dates, budget.
                  </p>
                </div>
                <div className="rounded-3xl border border-neutral-200 p-6">
                  <p className="text-xs font-semibold text-neutral-500">02</p>
                  <p className="mt-2 text-sm font-semibold">We compare</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Options from reliable sources.
                  </p>
                </div>
                <div className="rounded-3xl border border-neutral-200 p-6">
                  <p className="text-xs font-semibold text-neutral-500">03</p>
                  <p className="mt-2 text-sm font-semibold">You choose</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Best value for your trip.
                  </p>
                </div>
                <div className="rounded-3xl border border-neutral-200 p-6">
                  <p className="text-xs font-semibold text-neutral-500">04</p>
                  <p className="mt-2 text-sm font-semibold">Booking & support</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Confirmation and help anytime.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-lg font-semibold tracking-tight">
                    Ready to plan your next trip?
                  </p>
                  <p className="mt-2 text-neutral-600">
                    Message us and we’ll send you the best options.
                  </p>
                </div>
                <a
                  href="https://wa.me/+38975216775"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-white text-sm font-semibold hover:bg-red-700"
                >
                  Request an offer
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
