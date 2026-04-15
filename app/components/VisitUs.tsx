export default function VisitUs() {
  const address = "319 N. Main St, Sand Springs, OK 74063";
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5!2d-96.1097!3d36.1397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6f0000000001%3A0x1!2s319%20N%20Main%20St%2C%20Sand%20Springs%2C%20OK%2074063!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  return (
    <section id="visit" className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Come See Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Plan Your Visit
          </h2>
          <p className="mt-4 text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
            We would love to have you. Join us any Sunday morning — no prior
            experience required, just bring yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info panel */}
          <div className="space-y-8">

            {/* Sunday Schedule */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-serif text-lg font-semibold mb-3">Sunday Schedule</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-amber-400" />
                    <div>
                      <p className="text-white font-semibold text-sm">9:00 AM — Contemporary Service</p>
                      <p className="text-blue-300 text-xs mt-0.5">Modern worship &amp; teaching</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-blue-400" />
                    <div>
                      <p className="text-white font-semibold text-sm">10:00 AM — Small Group Studies</p>
                      <p className="text-blue-300 text-xs mt-0.5">Bible study &amp; community groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-amber-400" />
                    <div>
                      <p className="text-white font-semibold text-sm">11:00 AM — Traditional Service</p>
                      <p className="text-blue-300 text-xs mt-0.5">Classic hymns &amp; liturgy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-serif text-lg font-semibold mb-1">Address</h3>
                <p className="text-blue-200">319 N. Main St</p>
                <p className="text-blue-200">Sand Springs, OK 74063</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-serif text-lg font-semibold mb-1">Phone</h3>
                <a href="tel:+19182455955" className="text-blue-200 hover:text-amber-400 transition-colors">
                  (918) 245-5955
                </a>
              </div>
            </div>

            {/* First time visitor callout */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
              <p className="text-amber-300 font-semibold text-sm mb-1">First time visiting?</p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Look for our Welcome Team in the lobby — they will be happy to answer questions, show you around, and help your family find the right place.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold rounded-lg transition-colors shadow-lg shadow-amber-500/20"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                Get Directions
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-400 hover:border-white text-blue-200 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-blue-800/40 shadow-xl h-80 lg:h-auto lg:min-h-[460px]">
            <iframe
              title="Sand Springs Methodist Church Location"
              src={googleMapsEmbedUrl}
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
