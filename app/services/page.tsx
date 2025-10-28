import Section from '@/components/Section'
import { HeartPulse, Compass, Leaf, Activity, Hand, Sparkles, HandHeart } from 'lucide-react'

export default function ServicesPage(){
  return (
    <Section title="Services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Medical Astrology',
            desc: 'Understand health patterns through time, Graha and Nakshatra to optimize healing. ',
            Icon: Compass
          },
          {
            title: 'Vastu',
            desc: 'Balance space and directions to support physical and mental well‑being.',
            Icon: Activity
          },
          {
            title: 'Natural Healing',
            desc: 'Support the body’s innate healing via diet, lifestyle and natural elements.',
            Icon: Leaf
          },
          {
            title: 'Yoga',
            desc: 'Movement, breath and mindfulness to restore balance and mobility.',
            Icon: Sparkles
          },
          {
            title: 'Marma Chikitsa',
            desc: 'Revitalize vital energy points to restore physical and emotional balance.',
            Icon: Hand
          },
          {
            title: 'Acupressure',
            desc: 'Stimulate specific points to release tension, improve circulation and promote healing.',
            Icon: HandHeart
          },
          {
            title: 'Pain Reframed',
            desc: 'Reframe chronic pain with holistic routines that target the root cause.',
            Icon: HeartPulse
          }
        ].map(({ title, desc, Icon }) => (
          <div key={title} className="card p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-6 h-6 text-brand" />
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-gray-700 flex-1">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a href="https://wa.me/917317312985" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Consult on WhatsApp</a>
      </div>
    </Section>
  )
}
