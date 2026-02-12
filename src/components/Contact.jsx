function Contact() {
  return (
    <section className="py-24 px-6 bg-slate-100/50 dark:bg-black/20" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-slate-400 mb-6">
            I am open to new opportunities and collaborations.
          </p>
        </div>

        <form className="glass p-8 rounded-2xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
          />
          <button className="w-full py-3 bg-primary text-white rounded-xl">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
