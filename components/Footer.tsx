export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container-slim py-8 text-sm grid gap-8 md:grid-cols-4">
        <div className="space-y-2 md:col-span-2">
          <div className="font-semibold">Med Free Cure</div>
          <p className="text-gray-600">Revere CHSL Flat No. C-1/9/02, Plot No: 1-8, Sector 2, Vashi, Navi Mumbai, Maharashtra 400703</p>
          <div className="pt-2">
            <a href="https://wa.me/917317312985" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm">Book on WhatsApp</a>
          </div>
        </div>
        <div className="space-y-1">
          <div className="font-semibold mb-1">Contact</div>
          <p className="text-gray-600">Phone/WhatsApp: +91 7317312985</p>
          <p className="text-gray-600">Email: yogaclinic9@gmail.com</p>
          <div className="mt-3">
            <div className="font-semibold mb-1">Hours</div>
            <p className="text-gray-600">Mon–Sat: 9:00 AM – 7:00 PM</p>
            <p className="text-gray-600">Sun: By appointment</p>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1">
            <li><a className="underline underline-offset-4 hover:text-brand" href="/services">Services</a></li>
            <li><a className="underline underline-offset-4 hover:text-brand" href="/meet-your-healer">Meet Your Healer</a></li>
            <li><a className="underline underline-offset-4 hover:text-brand" href="/testimonials">Testimonials</a></li>
            <li><a className="underline underline-offset-4 hover:text-brand" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-slim py-4 text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>Copyright © 2025 Med Free Cure – All Rights Reserved.</div>
          <div>Site designed by Taniya</div>
        </div>
      </div>
    </footer>
  )
}
