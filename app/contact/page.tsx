import Section from '@/components/Section'

export default function ContactPage(){
  return (
    <Section title="Contact & Directions">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="font-semibold mb-1">Clinic Address</div>
            <p className="text-gray-700">
              Revere CHSL Flat No. C-1/9/02, Plot No: 1-8, Sector 2, Vashi, Navi Mumbai, Maharashtra 400703
            </p>
          </div>
          <div>
            <div className="font-semibold mb-1">Hours</div>
            <p className="text-gray-700">Mon–Sat: 9:00 AM – 7:00 PM</p>
            <p className="text-gray-700">Sun: By appointment</p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold mb-1">Contact</div>
            <p className="text-gray-700">Phone/WhatsApp: +91 7317312985</p>
            <p className="text-gray-700">Email: yogaclinic9@gmail.com</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="https://wa.me/917317312985" target="_blank" className="btn btn-primary">Message on WhatsApp</a>
            <a href="tel:+917317312985" className="btn btn-outline">Call Now</a>
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="video">
            <iframe
              src="https://www.google.com/maps?q=Revere%20CHSL%20Sector%202%20Vashi%20Navi%20Mumbai%20400703&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map to Med Free Cure clinic"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
