import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ExhibitionPage() {
  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mb-12">
          <Image
            src="https://i.imgur.com/Glu420Q.jpeg"
            alt="Exhibition banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Manual para no repetirlo
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Una exposición de Alfonso Alfaro
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Sobre la exposición</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Esta exposición refleja cómo he afrontado mi diagnóstico de VIH y
              los cambios que han marcado mi vida en los últimos años. Es un
              proyecto multidisciplinario que incluye pintura, una escultura y
              un cortometraje; distintos lenguajes que dialogan entre sí para
              contar una misma historia. A través de escenas hedonistas, de
              adicción, aislamiento e introspección, retrato momentos que muchas
              veces preferimos no mostrar. Lo hago con la intención de invitar
              al espectador a presenciar esos estados con empatía y sin pena,
              pero también con humor. Quiero que pueda reír conmigo de lo
              absurdo que pueden llegar a ser los momentos más duros de la vida.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              El recorrido se divide en tres capítulos: Caos, Soledad y Luz.
              Algunas imágenes nacieron desde la confusión total; otras, desde
              la lucidez. Pero todas contienen algo verdadero. Las obras están
              conectadas entre sí para contar una historia con pocas palabras,
              pero con mucha carga emocional.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Este “manual” está hecho para no olvidar mi pasado turbulento, y
              muestra lo que me ha servido a mí para seguir adelante y, con
              suerte, no caer de nuevo. También es una invitación a que el
              espectador se reconozca en lo que ve, y quizás reflexione sobre
              sus propios ciclos mientras aprende algo sobre la realidad de
              vivir con VIH en el mundo actual. Para mí, este proceso fue
              profundamente catártico: una forma convertir la oscuridad en
              esperanza y transformar el dolor en sentido.
            </p>

            <Separator className="my-8" />

            <h2 className="text-3xl font-bold mb-6">Eventos Especiales</h2>

            <div className="space-y-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Cóctel de Inauguración
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>22 de mayo, 2025</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>6:00 PM - 10:00 PM</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Únete a nosotros para la noche de inauguración con la
                  presencia de la artista.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Recorrido con el Artista
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>31 de mayo, 2025</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>12:00 PM - 1:00 PM</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Alfonso Alfaro hablará sobre su proceso creativo, sus
                  influencias y los temas explorados en "Manual para no
                  repetirlo", seguido de una sesión de preguntas y respuestas.
                </p>
              </div>

              {/* <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Workshop: Abstract Techniques
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>July 6, 2025</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>1:00 PM - 4:00 PM</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  A hands-on workshop led by Alfonso Alfaro, exploring the
                  techniques and approaches used in her abstract compositions.
                  All materials provided. Limited to 15 participants.
                </p>
                <Button>Register for Workshop</Button>
              </div> */}
            </div>
          </div>

          <div>
            <div className="bg-muted/20 p-6 rounded-lg sticky top-6">
              <h3 className="text-xl font-bold mb-6">
                Detalles de la Exposición
              </h3>

              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Fechas</h4>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <span>22 de mayo - 07 de junio, 2025</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Ubicación</h4>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p>Galería Espacio Libre</p>
                      <p>Leibnitz 204, Anzures</p>
                      <p>Ciudad de México, CDMX</p>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <h4 className="font-medium mb-2">Gallery Hours</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Tuesday - Friday: 10:00 AM - 6:00 PM</li>
                    <li>Saturday: 11:00 AM - 5:00 PM</li>
                    <li>Sunday: 12:00 PM - 4:00 PM</li>
                    <li>Monday: Closed</li>
                  </ul>
                </div> */}
              </div>

              <Separator className="my-6" />

              {/* <div className="space-y-4">
                <Button className="w-full">Plan Your Visit</Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Contact for Private Viewing</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
