import Section from '@/components/Section'

export default function FaqsPage(){
  const faqs = [
    { q: 'What is the duration of a session?', a: 'Typically 30–60 minutes depending on the therapy.' },
    { q: 'Do therapies have side effects?', a: 'They are natural and without medicines; side effects are minimal.' },
    { q: 'How many sessions do I need?', a: 'Varies by condition; your healer will guide you.' },
  ]
  return (
    <Section title="FAQs">
      <div className="space-y-3">
        {faqs.map((f, idx) => (
          <details key={idx} className="card p-5">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a href="https://wa.me/917317312985" target="_blank" className="btn btn-primary">Ask on WhatsApp</a>
        <a href="/contact" className="btn btn-outline">Contact & Directions</a>
      </div>
    </Section>
  )
}
