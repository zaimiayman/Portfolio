import React from "react";
import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema de validation
const contactSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().regex(/^\+?[0-9\s-]{6,}$/, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères")
});

const ContactInfoItem = ({ Icon, title, content }) => (
  <div className="flex items-center mb-8">
    <Icon className="text-[#218873] mr-4 text-2xl min-w-[30px]" />
    <div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert("Message envoyé avec succès!");
  };

  return (
    <section id="Contact" className="container mx-auto min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl  p-8 lg:p-12">
        <h1 className="text-5xl font-semibold sm:text-5xl text-center mb-12">
          Contactez-<span className="text-[#218873] font-bold">Moi</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfoItem
              Icon={FaPhone}
              title="Téléphone"
              content="+212 6 35 30 76 63"
            />
            <ContactInfoItem
              Icon={FaEnvelope}
              title="Email"
              content="zaimiayman8@gmail.com"
            />
            <ContactInfoItem
              Icon={FaMapMarkerAlt}
              title="Adresse"
              content="Sala Al Jadilda, Morocco"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Nom Complet
                </label>
                <input
                  {...register("fullName")}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                    errors.fullName ? "border-red-500" : "focus:ring-2 focus:ring-[#218873]"
                  }`}
                  placeholder="Votre nom"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Téléphone
                </label>
                <input
                  {...register("phone")}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                    errors.phone ? "border-red-500" : "focus:ring-2 focus:ring-[#218873]"
                  }`}
                  placeholder="Numéro de téléphone"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                {...register("email")}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                  errors.email ? "border-red-500" : "focus:ring-2 focus:ring-[#218873]"
                }`}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Sujet
              </label>
              <input
                {...register("subject")}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                  errors.subject ? "border-red-500" : "focus:ring-2 focus:ring-[#218873]"
                }`}
                placeholder="Objet du message"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                {...register("message")}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                  errors.message ? "border-red-500" : "focus:ring-2 focus:ring-[#218873]"
                } h-32`}
                placeholder="Votre message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#218873] text-white py-4 px-8 rounded-lg font-medium hover:bg-[#1a6b5a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#218873] disabled:opacity-50"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);