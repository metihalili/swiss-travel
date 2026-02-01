import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";

export default function SeoPage({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  useEffect(() => {
    document.title = `${title} | Swiss Travel`;
  }, [title]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-10">
        <Container>
          <section className="rounded-3xl border bg-white p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
              {subtitle}
            </p>

            <ul className="mt-6 list-disc pl-6 text-neutral-700 space-y-2">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-white text-sm font-semibold hover:bg-red-700"
              >
                Request an offer on WhatsApp
              </a>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
