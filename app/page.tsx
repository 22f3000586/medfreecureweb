import Section from '@/components/Section'
import { Star, ChevronRight, Stethoscope, Award, Check } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">Medicine‑free Pain Relief Clinic</h1>
            <p className="mt-4 text-gray-700">Holistic therapies for back, neck, knee, shoulder pain and more — targeting the root cause without medicines or side‑effects.</p>
            <ul className="mt-6 space-y-3">
              {[
                'Personalized routine to relieve pain and restore mobility',
                'Lifestyle guidance to maintain long‑term results',
                'Safe, natural methods suitable for all age groups'
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 mt-0.5 text-brand" />
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/917317312985" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book WhatsApp Appointment</a>
              <a href="/services" className="btn btn-outline">View Services</a>
            </div>
          </div>
          <div>
            <img src="/new-hero.png" alt="Pain relief therapy" className="w-full rounded-2xl shadow-sm object-cover" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="p-6 card min-h-[120px] flex flex-col items-center justify-center text-center gap-1.5">
            <div className="h-10 md:h-12 flex items-center justify-center">
              <div className="text-4xl font-bold text-brand">15+</div>
            </div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="p-6 card min-h-[120px] flex flex-col items-center justify-center text-center gap-1.5">
            <div className="h-10 md:h-12 flex items-center justify-center">
              <div className="text-4xl font-bold text-brand">100+</div>
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="p-6 card min-h-[120px] flex flex-col items-center justify-center text-center gap-1.5">
            <div className="h-10 md:h-12 flex items-center justify-center">
              <div className="text-4xl font-bold text-brand">100%</div>
            </div>
            <div className="text-gray-600">Holistic Approach</div>
          </div>
          <div className="p-6 card min-h-[120px] flex flex-col items-center justify-center text-center gap-1.5">
            <div className="h-10 md:h-12 flex items-center justify-center">
              <Stethoscope className="w-10 h-10 text-brand" />
            </div>
            <div className="text-gray-600">Treatment for mild to chronic conditions</div>
          </div>
          <div className="p-6 card min-h-[120px] flex flex-col items-center justify-center text-center gap-1.5">
            <div className="h-10 md:h-12 flex items-center justify-center">
              <Award className="w-10 h-10 text-brand" />
            </div>
            <div className="text-gray-600">Healing from the master practitioner</div>
          </div>
        </div>
      </Section>

      <Section title="Our healthy and happy clients">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Mr. Jwala Vishwakarma', location: 'Chembur, Mumbai', rating: 5, text: "Kanaiya's C.A.L.M routine changed my life! Off meds in 2 months...", videoId: 'w-aF1VEZX5M' },
            { name: 'Mr. Amit Kachhawa', location: 'Mumbai, Maharashtra', rating: 5, text: "Amazing results with Kanaiya's acupressure routine! BP stable, pain vanished...", videoId: 'jNaY8GDUp4A' },
            { name: 'Dr. S.N Gupta', location: '', rating: 5, text: "Feeling great after Kanaiya's DIY routine, completely cured from Sleep Apnea and high BP.", videoId: 'Dxece-FARTY' }
          ].map((t) => (
            <div key={t.name} className="card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">“{t.text}”</p>
              <div className="mt-3 text-sm text-gray-500">— {t.name}{t.location ? `, ${t.location}` : ''}</div>
              <div className="mt-5 video">
                <iframe
                  src={`https://www.youtube.com/embed/${t.videoId}?rel=0`}
                  title={`${t.name} Testimonial Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a className="btn btn-outline" href="/testimonials">More Testimonials</a>
        </div>
      </Section>

      <Section title="Meet Your Healer">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src="/dr-gupta.jpg" alt="Healer Photo" className="h-56 rounded-lg object-cover" />
          <div>
            <p>I have helped patients with arthritis, diabetes, chronic pain, heart blockages, stress-related disorders, kidney and liver conditions, migraines, and other long-term illnesses.</p>
            <a className="btn btn-outline mt-4" href="/meet-your-healer">Know More</a>
          </div>
        </div>
      </Section>

      <Section title="Experience simple and accessible treatment for :">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Cervical/Back/Knee Pain',
            'Headache & Migraine',
            'Sinusitis, Wheezing, Cold',
            'Indigestion & Gastritis',
            'Ulcers',
            'Diabetes',
            'Blood Pressure',
            'Eye pain/Strain',
            'Tinnitus',
            'Neck pain',
            'Shoulder pain',
            'Frozen shoulder',
            'Spine alignment',
            'Arm pain/Numbness/Tingling'
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-1 text-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="For consultation, appointment or any question">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div>
            Call or WhatsApp: <strong>+91 7317312985</strong>
          </div>
          <a className="btn btn-primary" href="https://wa.me/917317312985" target="_blank" rel="noopener noreferrer">Book an appointment</a>
        </div>
      </Section>
    </>
  )
}
