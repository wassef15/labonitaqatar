"use client";

import { useState } from "react";

export default function BookPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const services = [
    { value: "moroccan", ar: "الحمام المغربي", en: "The Moroccan Ritual" },
    { value: "massage", ar: "المساج العلاجي", en: "Massages" },
    { value: "facial", ar: "العناية بالبشرة", en: "Facials" },
    { value: "body", ar: "نحت الجسم والتنسيق", en: "Body Rituals & Contouring" },
    { value: "hair", ar: "العناية بالشعر", en: "Hair Care Rituals" },
    { value: "nails", ar: "العناية باليدين والقدمين", en: "Hands & Feet Rituals" },
    { value: "makeup", ar: "المكياج الاحترافي", en: "Glow-Up Makeup" },
    { value: "fitness", ar: "اللياقة والعافية", en: "Fitness & Wellness" },
    { value: "wedding", ar: "حفلات الزفاف", en: "Weddings Planning" },
    { value: "private-events", ar: "الفعاليات الخاصة", en: "Private Events" },
    { value: "pool", ar: "السباحة", en: "Swimming Session" },
    { value: "aquafit", ar: "لياقة مائية", en: "Aquatic Fitness" },
    { value: "gym", ar: "الجيم", en: "Gym Session" }
  ];

  const timeSlots = [
    "10:00 AM","11:00 AM","12:00 PM","1:00 PM",
    "2:00 PM","3:00 PM","4:00 PM","5:00 PM",
    "6:00 PM","7:00 PM","8:00 PM"
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    preferredLanguage: locale === "ar" ? "Arabic" : "English"
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔐 Prevent past dates
  const today = new Date().toISOString().split("T")[0];

  const generateBookingID = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `LB-${Date.now().toString().slice(-6)}-${random}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedService = services.find(
      (s) => s.value === formData.service
    );

    const bookingID = generateBookingID();

    const message = `
✨ LA BONITA CUSTOMER RESERVATION ✨
---------------------------------------

Booking ID: ${bookingID}

Guest Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Requested Service:
${selectedService?.ar}
${selectedService?.en}

Appointment Date: ${formData.date}
Time Slot: ${formData.time}

Preferred Language:
${formData.preferredLanguage}

---------------------------------------
Kindly confirm availability.
`;

    const whatsappNumber = "97455043492";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen py-32 bg-[var(--color-cream)] px-8">
      <div className="max-w-3xl mx-auto space-y-12">

        <h1 className="text-5xl font-light text-[var(--color-burgundy)] text-center">
          {locale === "ar" ? "احجز موعدك" : "Book Appointment"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-12 shadow-xl"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={locale === "ar" ? "الاسم الكامل" : "Full Name"}
            required
            className="w-full border p-4 focus:outline-none focus:border-[var(--color-gold)]"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border p-4 focus:outline-none focus:border-[var(--color-gold)]"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={locale === "ar" ? "رقم الهاتف" : "Phone Number"}
            required
            className="w-full border p-4 focus:outline-none focus:border-[var(--color-gold)]"
          />

          <input
            type="date"
            name="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border p-4 focus:outline-none focus:border-[var(--color-gold)]"
          />

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border p-4 focus:outline-none focus:border-[var(--color-gold)]"
          >
            <option value="">
              {locale === "ar" ? "اختاري الوقت" : "Select Time"}
            </option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border p-4 focus:outline-none focus:border-[var(--color-gold)]"
          >
            <option value="">
              {locale === "ar" ? "اختاري الخدمة" : "Select Service"}
            </option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {locale === "ar" ? service.ar : service.en}
              </option>
            ))}
          </select>


          <button
            type="submit"
            className="w-full py-4 bg-[var(--color-burgundy)] text-white hover:bg-[var(--color-gold)] transition duration-300"
          >
            {locale === "ar" ? "إرسال عبر واتساب" : "Send via WhatsApp"}
          </button>

        </form>
      </div>
    </section>
  );
}