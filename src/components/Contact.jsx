import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Contact() {
  const { translations } = useContext(LanguageContext);
  const contact = translations.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");

    const targetEmail = import.meta.env.VITE_CONTACT_EMAIL || contact.email;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Nuevo mensaje desde portfolio",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{contact.title}</h2>
          <p className="text-slate-500">{contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {contact.infoTitle}
              </h3>

              <p className="text-slate-400 mb-8 max-w-md">
                {contact.infoText}
              </p>

              <div className="space-y-6">

                <a
                  className="flex items-center gap-4 group"
                  href={`mailto:${contact.email}`}
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">
                      {contact.emailLabel}
                    </p>
                    <p className="text-lg font-bold">
                      {contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-emerald-400">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">
                      {contact.locationLabel}
                    </p>
                    <p className="text-lg font-bold">
                      {contact.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                {contact.socialTitle}
              </h4>

              <div className="flex gap-4">
                <a
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/50 transition-all"
                  href="https://github.com/peLuis123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
                <a
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all"
                  href="https://www.linkedin.com/in/pedro-luis-ramos-calla-363b04151/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
                {/* <a
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all"
                  href="https://instagram.com/LuisDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a> */}
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 rounded-full"></div>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    {contact.form.name}
                  </label>
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-slate-600"
                    name="name"
                    placeholder={contact.form.namePlaceholder}
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    {contact.form.email}
                  </label>
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-slate-600"
                    name="email"
                    placeholder={contact.form.emailPlaceholder}
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  {contact.form.message}
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-slate-600 resize-none"
                  name="message"
                  placeholder={contact.form.messagePlaceholder}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? contact.form.sending : contact.form.submit}
                <span className="material-symbols-outlined text-xl">
                  send
                </span>
              </button>

              {submitState === "success" && (
                <p className="text-sm text-emerald-400">
                  {contact.form.success}
                </p>
              )}

              {submitState === "error" && (
                <p className="text-sm text-red-400">
                  {contact.form.error}
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
