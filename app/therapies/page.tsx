import Section from '@/components/Section'
import { Stethoscope, HandHeart, ShieldCheck, HeartPulse, Sparkles, Activity } from 'lucide-react'

export default function TherapiesPage(){
  return (
    <Section title="Therapies">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Acupressure Therapy',
            desc: 'Relieve pain and improve circulation by stimulating specific points safely and naturally.',
            Icon: HandHeart
          },
          {
            title: 'Marma Therapy',
            desc: 'Activate vital energy points to restore balance, reduce stress and support recovery.',
            Icon: ShieldCheck
          },
          {
            title: 'Therapeutic Yoga',
            desc: 'Gentle, targeted movements and breathwork to restore mobility and function.',
            Icon: Sparkles
          },
          {
            title: 'Holistic Routine',
            desc: 'Personalized daily routine (C.A.L.M) to address root cause and sustain results.',
            Icon: Activity
          },
          {
            title: 'Pain Reframing',
            desc: 'Education and guidance to reframe chronic pain and reduce fear‑avoidance.',
            Icon: HeartPulse
          },
          {
            title: 'Consultation & Assessment',
            desc: 'Detailed history, posture and lifestyle assessment to plan your healing path.',
            Icon: Stethoscope
          }
        ].map(({ title, desc, Icon }) => (
          <div key={title} className="card p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-6 h-6 text-brand" />
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-gray-700 flex-1">{desc}</p>
            <div className="mt-4">
              <a href="https://wa.me/917317312985" target="_blank" className="btn btn-outline text-sm">Book a session</a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
