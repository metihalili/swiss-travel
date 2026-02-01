import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";

const REVIEWS = [
  { name: "Arben", city: "Gostivar", text: "Very fast reply and the best price. Everything was clear." },
  { name: "Elena", city: "Skopje", text: "Great support when we needed to change the dates." },
  { name: "Blerim", city: "Tetovo", text: "Professional service. I’ll book again with them." },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-10">
        <Container>
          <section className="rounded-3xl border bg-white p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Testimonials
            </h1>
            <p className="mt-4 text-neutral-600 max-w-2xl">
              A few words from clients who booked with Swiss Travel.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <div key={r.name} className="rounded-2xl border border-neutral-200 p-5">
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    “{r.text}”
                  </p>
                  <p className="mt-4 text-sm font-semibold">
                    {r.name} • {r.city}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
