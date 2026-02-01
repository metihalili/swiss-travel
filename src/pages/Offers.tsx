import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import OffersGrid from "../components/offers/OffersGrid";

export default function Offers() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-10">
        <Container>
          <h1 className="text-3xl font-bold">All offers</h1>
          <p className="mt-2 text-neutral-600">
            Choose an offer and message us on WhatsApp.
          </p>

          <div className="mt-6">
            <OffersGrid />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
