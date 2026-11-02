import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      /* 
        -------------------------------------------------------------------
        FUTURE BACKEND / SERVICE INTEGRATION PLACEHOLDER:
        Currently simulating network latency for frontend design verification.

        Option A (Serverless Email Handler):
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "YOUR_ACCESS_KEY_HERE",
            ...formData,
          }),
        });
        
        if (!response.ok) throw new Error("Failed to send message.");
        
        Option B (Database Integration):
        const { error } = await supabase.from("inquiries").insert([formData]);
        -------------------------------------------------------------------
      */

      // Simulated network request delay to preview loading and success states:
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // On Success:
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err.message ||
          "Something went wrong. Please try again or email directly.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-bg-primary py-24 px-6 md:px-12 text-text-dark"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Left Column: Context & Metadata */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <span className="font-sans text-lg tracking-widest uppercase text-sage-medium font-extrabold">
            Inquiries & Commissions
          </span>
          <h2
            id="contact-heading"
            className="font-display text-4xl md:text-5xl leading-tight"
          >
            Let's create something meaningful together.
          </h2>
          <p className="font-sans text-stone-600 text-xl font-semibold leading-relaxed">
            Whether you are interested in an original piece, exploring a custom
            commission, or simply wish to say hello, I&apos;d love to hear from
            you.
          </p>

          <div className="mt-6 pt-6 border-t border-stone-300/60 flex flex-col gap-4 font-sans text-sm text-stone-700">
            <div>
              <p className="font-semibold text-text-dark uppercase tracking-wider text-sm">
                Studio Location
              </p>
              <p className="italic font-serif text-base">
                South Louisiana, USA
              </p>
            </div>
            <div>
              <p className="font-semibold text-text-dark uppercase tracking-wider text-sm">
                Direct Email
              </p>
              <a
                href="mailto:studio@heathermeyerart.com"
                className="italic font-serif text-base hover:text-sage-dark underline transition-colors focus:outline-none focus:ring-2 focus:ring-sage-medium rounded-sm"
              >
                studio@heathermeyerart.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Minimalist Underline Form */}
        <div className="md:col-span-7 bg-bg-secondary/40 p-8 md:p-12 rounded-xl border border-stone-200/60 shadow-sm">
          {/* Live region for announcing submission state to screen readers */}
          <div aria-live="polite" aria-atomic="true" className="mb-4">
            {status === "success" && (
              <div
                role="status"
                className="bg-sage-medium/20 border border-sage-dark text-stone-900 p-4 rounded-md font-sans font-semibold text-lg"
              >
                Thank you! Your message has been sent successfully. I'll get
                back to you soon.
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="bg-accent-warm/20 border border-accent-orange text-stone-900 p-4 rounded-md font-sans font-semibold text-lg"
              >
                {errorMessage}
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
            noValidate
            aria-describedby="form-instructions"
          >
            <span id="form-instructions" className="sr-only">
              All fields are required to send an inquiry.
            </span>

            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-sans text-base uppercase tracking-widest font-bold text-stone-600"
              >
                Your Name{" "}
                <span aria-hidden="true" className="text-accent-orange">
                  *
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="bg-transparent border-b border-stone-400 focus:border-sage-dark focus:ring-1 focus:ring-sage-dark py-2 text-text-dark text-lg outline-none transition-all font-serif placeholder:text-stone-400/60"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-sans text-base uppercase tracking-widest font-bold text-stone-600"
              >
                Email Address{" "}
                <span aria-hidden="true" className="text-accent-orange">
                  *
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="bg-transparent border-b border-stone-400 focus:border-sage-dark focus:ring-1 focus:ring-sage-dark py-2 text-text-dark text-lg outline-none transition-all font-serif placeholder:text-stone-400/60"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-sans text-base uppercase tracking-widest font-bold text-stone-600"
              >
                Message or Inquiry{" "}
                <span aria-hidden="true" className="text-accent-orange">
                  *
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                aria-required="true"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the piece or project you have in mind..."
                className="bg-transparent border-b border-stone-400 focus:border-sage-dark focus:ring-1 focus:ring-sage-dark py-2 text-text-dark text-lg outline-none transition-all font-serif resize-none placeholder:text-stone-400/60"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              aria-busy={status === "submitting"}
              className="mt-4 self-start bg-sage-medium hover:bg-sage-dark disabled:bg-stone-400 text-bg-primary px-8 py-3.5 rounded-md font-sans font-bold text-lg uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sage-dark cursor-pointer disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">Sending...</span>
              ) : (
                "Send Inquiry \u2192"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
