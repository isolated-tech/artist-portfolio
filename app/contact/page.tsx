"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
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
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Póngase en Contacto</h2>
            <p className="text-muted-foreground mb-8">
              ¿Estás interesado en una obra en particular? ¿Tienes preguntas
              sobre la próxima exposición? ¿O tal vez te interesa encargar una
              pieza? Rellena el formulario a continuación y te responderé lo
              antes posible.
            </p>

            {formSubmitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mensaje"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" onClick={handleClick}>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Información de contacto
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:aalfaro90@gpofinalpa.com"
                    className="text-muted-foreground no-underline hover:underline"
                  >
                    aalfaro90@gpofinalpa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaInstagram className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Instagram</h3>
                  <a
                    href="https://www.instagram.com/jaap_1990/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    @jaap_1990
                  </a>
                </div>
              </div>
            </div>

            <Separator className="my-8" />
          </div>
        </div>
      </div>
    </main>
  );
}
