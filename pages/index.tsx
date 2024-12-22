import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => (
  <div>
    <Navbar />
    <main className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Consultify</h1>
        <p className="text-lg text-gray-700 mb-8">
          Empowering your business with expert consulting solutions.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;