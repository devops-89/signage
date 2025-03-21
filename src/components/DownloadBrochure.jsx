import { useState } from "react";

const DownloadBrochure = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subscribe: true });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-black  h-[80vh]   flex justify-center items-center" >
    <section className="bg-gray-800 text-white p-8 rounded-lg w-[60%] mx-auto ">
      <div className="flex items-center gap-6">
        <img
          src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/6606d0d74b67beb46e075044_brochure.svg"
          alt="Download Brochure"
          className="w-16 h-16"
        />
        <div>
          <h3 className="text-2xl font-bold">Download our brochure</h3>
          <p>Fill in the form to access our brochure</p>
        </div>
      </div>

      {!submitted ? (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label className="text-sm">Subscribe to future updates</label>
          </div>
          {error && <p className="text-red-500">Please fill in all fields.</p>}
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center mt-6">
          <h3 className="text-2xl font-bold">Thank you!</h3>
          <p>Access our digital brochure below:</p>
          <a
            href="https://www.calameo.com/read/006112578c8acbc553ad8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
          >
            View Brochure
          </a>
        </div>
      )}
    </section>
    </div>
  );
};

export default DownloadBrochure;