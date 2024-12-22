import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => (
  <div>
    <Navbar />
    <main className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded text-center">
            <h2 className="text-xl font-bold mb-2">Business Strategy</h2>
            <p className="text-gray-700">We help you craft winning strategies.</p>
          </div>
          <div className="p-6 bg-white shadow rounded text-center">
            <h2 className="text-xl font-bold mb-2">Market Analysis</h2>
            <p className="text-gray-700">Detailed insights into your target market.</p>
          </div>
          <div className="p-6 bg-white shadow rounded text-center">
            <h2 className="text-xl font-bold mb-2">Growth Planning</h2>
            <p className="text-gray-700">Guiding your business toward sustainable growth.</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Services;