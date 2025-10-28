import Section from '@/components/Section'

export default function HealerPage() {
  return (
    <Section title="Meet Your Healer">
      <div className="grid md:grid-cols-2 gap-6 items-start md:items-center">
        <img src="/dr-gupta.jpg" alt="Portrait" className="w-full h-[28rem] md:h-[34rem] object-cover rounded-lg" />
        <div className="space-y-3 md:space-y-6">
          <p>For over two decades, I have dedicated my life to helping people overcome chronic health problems without lifelong dependence on medicines. My approach combines India’s ancient healing wisdom with safe, natural, and non-invasive practices that restore balance and vitality. </p>

          <p>I have helped patients with arthritis, diabetes, chronic pain, heart blockages, stress-related disorders, kidney and liver conditions, migraines, and other long-term illnesses. Many found relief, mobility, and renewed health after years of conventional treatment.</p>

          <p>I believe the human body has an incredible capacity to heal itself when given the right support. My mission is to guide people by restoring health, reducing medications, and helping them live pain-free, fulfilling lives.</p>
          <a className="btn btn-primary" href="/contact">Contact for appointment</a>
        </div>
      </div>
    </Section>
  )
}
