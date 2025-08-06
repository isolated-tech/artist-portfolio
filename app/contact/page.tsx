"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/sendEmail";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      console.log(data.message); // "Email sent!"
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <main className="bg-[#014421] h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden">
      <div className="w-full max-w-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">CONTACTO</h1>

        <div>

            {formSubmitted ? (
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-4">
                  Gracias por tu mensaje
                </h3>
                <p className="mb-6">
                  Tu consulta ha sido recibida. Me pondré en contacto contigo
                  dentro de las próximas 48 horas.
                </p>
                <Button onClick={() => setFormSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleClick}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nombre</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nombre"
                      required
                      className="bg-transparent border-2 border-white text-white placeholder:text-gray-400 rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                      className="bg-transparent border-2 border-white text-white placeholder:text-gray-400 rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Mensaje</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mensaje"
                    required
                    className="bg-transparent border-2 border-white text-white placeholder:text-gray-400 rounded-3xl"
                  />
                </div>

                <Button type="submit" className="w-full bg-transparent text-white hover:text-gray-300 border-0 text-xl font-bold">
                  ENVIAR MENSAJE
                </Button>
              </form>
            )}
        </div>
      </div>
    </main>
  );
}
