import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-yellow-400">
              Sharayu
            </h2>

            <p className="text-xl font-semibold text-white">
              Tours & Travels
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              Safe, reliable and affordable cab services in Pune and
              across Maharashtra. We provide airport transfers,
              outstation trips, local travel and corporate rides.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link href="/" className="block text-slate-400 hover:text-yellow-400">
                Home
              </Link>

              <Link href="/about" className="block text-slate-400 hover:text-yellow-400">
                About
              </Link>

              <Link href="/services" className="block text-slate-400 hover:text-yellow-400">
                Services
              </Link>

              <Link href="/routes" className="block text-slate-400 hover:text-yellow-400">
                Routes
              </Link>

              <Link href="/gallery" className="block text-slate-400 hover:text-yellow-400">
                Gallery
              </Link>

              <Link href="/contact" className="block text-slate-400 hover:text-yellow-400">
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Services
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>Airport Transfer</p>
              <p>Outstation Trips</p>
              <p>Local Taxi</p>
              <p>Corporate Travel</p>
              <p>One Way Trips</p>
              <p>Round Trips</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone className="mt-1 text-yellow-400" size={20} />

                <div>

                  <a
                    href="tel:7385370690"
                    className="block text-slate-300 hover:text-yellow-400"
                  >
                    +91 7385370690
                  </a>

                  <a
                    href="tel:9356990690"
                    className="block text-slate-300 hover:text-yellow-400"
                  >
                    +91 9356990690
                  </a>

                </div>

              </div>

              <div className="flex gap-3">

                <Mail className="mt-1 text-yellow-400" size={20} />

                <a
                  href="mailto:info@sharayutravels.com"
                  className="text-slate-300 hover:text-yellow-400"
                >
                  info@sharayutravels.com
                </a>

              </div>

              <div className="flex gap-3">

                <MapPin className="mt-1 text-yellow-400" size={20} />

                <p className="text-slate-300">
                  Aundh,
                  <br />
                  Pune,
                  Maharashtra
                </p>

              </div>

              <div className="flex gap-3">

                <Clock3 className="mt-1 text-yellow-400" size={20} />

                <p className="text-slate-300">
                  Open 24×7
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <p className="text-slate-500">
              © {new Date().getFullYear()} Sharayu Tours & Travels.
              All Rights Reserved.
            </p>

            <div className="flex gap-5">

             

              <a
                href="https://wa.me/917385370690"
                target="_blank"
                className="rounded-full bg-green-600 p-3 hover:bg-green-500"
              >
                <MessageCircle size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}