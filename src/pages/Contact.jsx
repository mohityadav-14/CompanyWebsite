function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Submitted!");
  };

  return (
    <div className="pt-28 bg-gray-50 min-h-screen px-6">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10">

        <h1 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;
