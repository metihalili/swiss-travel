import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-10">
        <Container>
          <h1 className="text-3xl font-bold">Page not found</h1>
          <p className="mt-2 text-neutral-600">
            The page you’re looking for doesn’t exist.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex rounded-xl bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700"
          >
            Go home
          </a>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
