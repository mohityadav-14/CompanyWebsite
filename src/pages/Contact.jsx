function Contact() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white p-10 rounded-lg shadow-lg">

          <h1 className="text-3xl font-bold text-center mb-8">
            Contact Us
          </h1>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border p-3 rounded"
            ></textarea>

            <button className="w-full bg-blue-600 text-blue-500 py-3 rounded">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
