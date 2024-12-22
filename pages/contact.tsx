import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => (
  <div>
    <Navbar />
    <main className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Have questions? Reach out to us at <strong>contact@consultify.com</strong>
        </p>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;