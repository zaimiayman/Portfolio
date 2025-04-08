import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

// Schema de validation
const contactSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().regex(/^[0-9+\s-]{6,}$/, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères")
});

const Contact = () => {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const handleEmailSend = async (data) => {
    if (!formRef.current) return;

    try {
      const response = await emailjs.sendForm(
        "service_ft8msjy", // Remplace par ton ID de service EmailJS
        "template_fclw266", // Remplace par ton ID de template EmailJS
        formRef.current,
        "6OXtNjxZKu-lKj5kk" // Remplace par ta clé publique EmailJS
      );
      console.log("SUCCESS!", response);
      alert("Message envoyé avec succès !");
      reset();
    } catch (error) {
      console.error("Échec de l'envoi", error);
      alert("Échec de l'envoi du message.");
    }
  };

  return (
    <section id="Contact" className="container mx-auto min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 lg:p-12">
        <h1 className="text-5xl font-semibold text-center mb-12">
          Contactez-<span className="text-[#218873] font-bold">Moi</span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <FaPhone className="text-[#218873] mr-4 text-2xl" />
              <p className="text-gray-600">+212 6 35 30 76 63</p>
            </div>
            <div className="flex items-center mb-8">
              <FaEnvelope className="text-[#218873] mr-4 text-2xl" />
              <p className="text-gray-600">zaimiayman8@gmail.com</p>
            </div>
            <div className="flex items-center mb-8">
              <FaMapMarkerAlt className="text-[#218873] mr-4 text-2xl" />
              <p className="text-gray-600">Sala Al Jadilda, Morocco</p>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit(handleEmailSend)} className="space-y-6">
            <input {...register("fullName")} placeholder="Nom Complet" className="w-full border p-3 rounded" />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            <input {...register("phone")} placeholder="Téléphone" className="w-full border p-3 rounded" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            <input {...register("email")} placeholder="Email" className="w-full border p-3 rounded" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <input {...register("subject")} placeholder="Sujet" className="w-full border p-3 rounded" />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            <textarea {...register("message")} placeholder="Message" className="w-full border p-3 rounded h-32"></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            <button type="submit" disabled={isSubmitting} className="w-full bg-[#218873] text-white py-3 rounded">
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);