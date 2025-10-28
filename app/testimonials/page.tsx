"use client"

import { Star } from 'lucide-react'
import { useState } from 'react'
import Section from '@/components/Section'

export default function Testimonials() {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null)
  const [activeTag, setActiveTag] = useState<string>('All')

  const testimonials = [
    {
      name: "Mr. Jwala Vishwakarma",
      location: "Chembur, Mumbai",
      rating: 5,
      shortText: "Kanaiya's C.A.L.M routine changed my life! Off meds in 2 months, relief from everyday 130 Ml. of insulin and dialysis...",
      fullText: "Kanaiya's C.A.L.M routine changed my life! Off meds in 2 months, relief from everyday 130 Ml. of insulin and dialysis, stopped high doses of medicines for BP and fatigue, feeling energetic and healthy. Earlier I was not able to sit on my own now i walk 1-2 KM. everyday Highly recommend!",
      videoId: "w-aF1VEZX5M",
      tags: ['Diabetes', 'Kidney', 'Energy']
    },
    {
      name: "Mr. Amit Kachhawa",
      location: "Mumbai, Maharashtra",
      rating: 5,
      shortText: "Amazing results with Kanaiya's acupressure routine! My blood pressure is stable, Numbness vanished, Spine relaxed, Un...",
      fullText: "Amazing results with Kanaiya's acupressure routine! My blood pressure is stable, Numbness vanished, Spine relaxed, Unbearable pain vanished and I'm medication-free in just 3 days. I am able to sit, run and even bend.",
      videoId: "jNaY8GDUp4A",
      tags: ['BP', 'Pain']
    },
    {
      name: "Dr. S.N Gupta",
      location: "",
      rating: 5,
      shortText: "Feeling great after Kanaiya's DIY routine, completely cured from Sleep Apnea and high BP.",
      fullText: "Feeling great after Kanaiya's DIY routine, completely cured from Sleep Apnea and high BP.",
      videoId: "Dxece-FARTY",
      tags: ['Sleep Apnea', 'BP']
    },
    {
      name: "Mr. Keshav Dubey",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      shortText: "I was suffering from high blood pressure. Later on, I was diagnosed with heart blockage after angiogram, Kanaiya pers...",
      fullText: "I was suffering from high blood pressure. Later on, I was diagnosed with heart blockage after angiogram, Kanaiya personally came to Chennai to assess the situation and ensured us that there is no need of surgery, I went to Mumbai for 21 days and returned with a fully healthy body. I Started playing 3 rounds of badminton, Jogging, etc. Whereas on his visit i was not able to walk up to my drawing room. Now, I am in good shape till this day No BP No Heart Blockage.",
      videoId: "4C6gNkZwOKA",
      tags: ['Heart', 'BP']
    },
    {
      name: "Mr. Ramakrishnan",
      location: "Mumbai, Maharashtra",
      rating: 5,
      shortText: "Ocular hypertension detected in 2015 with symptoms of extreme pain, coloured rings, halos. Dramatic vision loss from...",
      fullText: "Ocular hypertension detected in 2015 with symptoms of extreme pain, coloured rings, halos. Dramatic vision loss from Jan 2023 to July 2023 and total vision loss up to 98% with severe high pressure and pain in eyes. Then, switched on to Ayurvedic and Marma therapies for 3 months, twice in a week. Pressure in eyes and hardness in eyeballs, became normal and life became easy without fear of side effects of Medicine.",
      videoId: "phiqwgI-RBY",
      tags: ['Eye', 'Pain']
    },
    {
      name: "Mr. Chetan Kamat",
      location: "Mumbai, Maharashtra",
      rating: 5,
      shortText: "I had been suffering from Vertigo underwent surgery and removed the enlarged cyst, post-surgery, Nair Hospital conduc...",
      fullText: "I had been suffering from Vertigo underwent surgery and removed the enlarged cyst, post-surgery, Nair Hospital conducted ear test and said Menieres syndrome. Slowly, started Hypo thyroid, B12 deficiency, hearing drop, vertigo, tinnitus and one ear loss completely and depressed. In covid period lost my other ear too. Then Nair hospital, Mumbai conducted Thyroid Fnac and said acute thyroiditis and 100% permanent hearing disability. So, I was completely depressed and was very much annoyed with Tinnitus and wasn't able to sleep every night. Sleepless nights, Tinnitus and depression is now totally under control within a month of therapies and again without any medicines too.",
      videoId: "c97Oi4Etilw",
      tags: ['Vertigo', 'Thyroid', 'Tinnitus']
    }
  ]

  const toggleExpanded = (index: number) => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index)
  }

  const allTags = ['All', ...Array.from(new Set(testimonials.flatMap(t => t.tags)))]
  const filtered = activeTag === 'All' ? testimonials : testimonials.filter(t => t.tags.includes(activeTag))

  return (
    <Section id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Real stories of pain relief and recovery with natural, drug‑free therapies.</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors ${activeTag === tag ? 'bg-brand text-white border-brand' : 'border-brand/30 text-brand hover:bg-brand/10'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.location}
                </p>
              </div>

              <div className="text-gray-700 mb-4">
                <p className="text-sm">
                  "{expandedTestimonial === index
                    ? testimonial.fullText
                    : testimonial.shortText
                  }"
                </p>
              </div>

              <div className="mt-2 rounded-xl overflow-hidden video">
                <iframe
                  src={`https://www.youtube.com/embed/${testimonial.videoId}?rel=0`}
                  title={`${testimonial.name} Testimonial Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {testimonial.fullText.length > testimonial.shortText.length && (
                <button
                  onClick={() => toggleExpanded(index)}
                  className="mt-3 text-brand hover:underline text-sm font-medium"
                >
                  {expandedTestimonial === index ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <div className="card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Ready to start your pain‑free journey?</h3>
            <p className="text-gray-700 mb-5">Book a quick WhatsApp consultation to discuss your condition and options.</p>
            <a href="https://wa.me/917317312985" target="_blank" className="btn btn-primary">Book on WhatsApp</a>
          </div>
        </div>
      </div>
    </Section>
  )
}
