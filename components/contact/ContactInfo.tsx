import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div>

      <h2 className="text-3xl font-bold">
        Get In Touch
      </h2>

      <p className="mt-4 text-slate-600">
        Feel free to contact us for local taxi,
        airport pickup, outstation tours or
        corporate travel bookings.
      </p>

      <div className="mt-10 space-y-6">

        <div className="flex gap-4">

          <Phone className="text-yellow-500" />

          <div>
            <h3 className="font-semibold">
              Phone
            </h3>

            <a
              href="tel:+917385370690"
              className="text-slate-600"
            >
              +91 7385370690
            </a>

            <br />

            <a
              href="tel:+919356990690"
              className="text-slate-600"
            >
              +91 9356990690
            </a>

          </div>

        </div>

        <div className="flex gap-4">

          <Mail className="text-yellow-500" />

          <div>
            <h3 className="font-semibold">
              Email
            </h3>

            <p>info@sharayutours.com</p>
          </div>

        </div>

        <div className="flex gap-4">

          <MapPin className="text-yellow-500" />

          <div>
            <h3 className="font-semibold">
              Address
            </h3>

            <p>
              Aundh,
              Pune,
              Maharashtra
            </p>
          </div>

        </div>

        <div className="flex gap-4">

          <Clock className="text-yellow-500" />

          <div>
            <h3 className="font-semibold">
              Working Hours
            </h3>

            <p>24×7</p>
          </div>

        </div>

      </div>

      <a
        href="https://wa.me/917385370690"
        target="_blank"
        className="mt-10 inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700"
      >
        <MessageCircle size={22} />

        WhatsApp Us
      </a>

    </div>
  );
}