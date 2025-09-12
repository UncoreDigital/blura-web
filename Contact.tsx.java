"use client";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxZDa-eKBQkE_fdOz-OJYMTvKS9ZpQbc2ouOgM6ZiPOEENY8_yP8AuAQ4uxU3lrHd4XrQ/exec", // Replace with your Apps Script URL
        { method: "POST", body: formData }
      );

      const result = await response.json();

      if (result.result === "success") {
        setSuccessMessage("Message sent successfully!");
        formRef.current.reset();
      } else {
        setSuccessMessage("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage("Error sending message. Try again.");
    }
  };

  return (
    <section className="w-full bg-white" id="contact">
      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border px-2 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border px-2 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="border px-2 py-2"
          />
          <select name="business" className="border px-2 py-2">
            <option value="">Select Business</option>
            <option value="Cafe">Cafe</option>
            <option value="Hotels">Hotels</option>
            <option value="Retailers">Retailers</option>
            <option value="Event organizers">Event organizers</option>
            <option value="Distributor">Distributor</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="border px-2 py-2"
          />
          <button type="submit" className="bg-blue-700 text-white px-4 py-2">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
