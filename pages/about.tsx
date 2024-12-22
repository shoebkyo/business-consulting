import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => (
  <div>
    <Navbar />
    <main className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          We are a team of experienced professionals committed to helping your business succeed.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;