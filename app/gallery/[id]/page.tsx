"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, ZoomIn, ZoomOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const handleClick = async () => {
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
    });

    const data = await res.json();
    console.log(data.message); // "Email sent!"
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Sample artwork data - in a real app, this would come from a database
const artworks = [
  {
    id: 1,
    title: "Arrebato",
    year: 2018,
    medium: "Acrílico sobre tela",
    dimensions: "40 × 60 cm",
    image: "https://i.imgur.com/8qUjSL5.png",
    description: [
      "Pinté esta pieza en el periodo más tormentoso de mi vida. Sinceramente, nunca la terminé ni la firmé. Durante los últimos dos años, mientras trabajaba en la exposición, consideré intervenirla, pero habría sido deshonesto.",
      "Me parecía más importante conservarla tal como salió en ese momento: cruda, inestable, sin cerrar.La conceptualicé mientras escuchaba Bone Machine de Tom Waits repetidamente, creyendo que estaba pintando algo oscuro y poético. En retrospectiva, estaba deprimido, autodestructivo y actuando erráticamente. Esta pintura era un grito de ayuda, aunque yo no lo sabía del todo.",
    ],
    price: "$45,000 MXN",
  },
  {
    id: 2,
    title: "Espíritus",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "130 × 100 cm",
    image: "https://i.imgur.com/Glu420Q.jpeg",
    description: [
      "Este cuadro surgió de la necesidad de pintar sin filtros. Es visceral, impulsivo, y elegí una composición circular para representar esos ciclos que uno jura que va a romper… y no siempre puede.",
      "Para mí, el título Espíritus encierra muchas cosas: el alcohol, las sustancias, y eso invisible que se te mete y te cambia cuando te embriagas. A veces no sabes si estás celebrando, destruyéndote, o ambas. Sin entrar en demasiados detalles, puedo decir que pinté desde la experiencia. Y, lamentablemente, salirse de ese ciclo muchas veces parece imposible.",
    ],
    price: "$150,000 MXN",
  },
  {
    id: 3,
    title: "Body ART",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "Díptico, 2 x 60 x 80 cm",
    image: "https://i.imgur.com/P0fAf5i.png.jpg",
    description: [
      "Este díptico representa un antes y un después.",
      "En la primera parte —BODY— estoy atrapado en un mar de cuerpos. Sexo, deseo, hedonismo, compulsión. No era el mejor lugar para estar, pero en su momento parecía buena idea. La mano (mi mano) pide auxilio e intenta escapar.",
      "En la segunda —ART (Antiretroviral Therapy)— ya no hay cuerpos, pero sí pastillas. Muchas. Biktarvy, todos los días. No hay escapatoria, pero al menos hay tratamiento. Y doy gracias por ello.",
    ],
    price: "$120,000 MXN",
  },
  {
    id: 4,
    title: "Invitación",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "20 x 20 cm",
    image: "https://i.imgur.com/XEgDviV.png.png",
    description: [
      "Esta obra parte de una escena íntima que, en otro contexto, podría parecer tierna: alguien levanta mi rostro con delicadeza. Pero hay algo inquietante en ese gesto; algo no termina de sentirse bien.",
      "La pinté pensando en esos momentos en que uno acepta una invitación al placer no porque lo desee realmente, sino porque no sabe a dónde más ir. Cuando estás deprimido, confundido o simplemente cansado, cualquier escape parece buena idea.",
      "Obra exhibida en el MEAM Hall de Barcelona como parte de una exposición colectiva internacional (2024–2025).",
    ],
    price: "$60,000 MXN",
  },
  {
    id: 5,
    title: "Hasta nunca (ojalá)",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "20 x 20 cm",
    image: "https://i.imgur.com/bCRV5Ug.jpegnunca.jpeg",
    description: [
      "Una representación de esa claridad brutal que llega justo después de cometer un error. Pero cuando tropiezas con la misma piedra una, y otra, y otra vez, empiezas a perder la confianza en ti mismo.",
      "El “ojalá” del título lo dice todo: quiero que sea la última vez, pero con las compulsiones no hay certezas, solo la intención de seguir intentándolo.",
    ],
    price: "$40,000 MXN",
  },
  {
    id: 6,
    title: "Parque de Diversiones",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/c2gDwTW.jpeg",
    description: [
      "Estos últimos años han sido una montaña rusa, tanto física como emocional. Esta obra parte de una metáfora sencilla: algo que suele considerarse placentero y divertido —el sexo— a mí me trajo enfermedad, náusea, debilidad y una profunda sensación de emasculación.",
      "Me subí a la montaña rusa y pasé por un túnel muy oscuro.",
    ],
    price: "$80,000 MXN",
  },
  {
    id: 7,
    title: "Regresión",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "60 x 90 cm",
    image: "https://i.imgur.com/UeDm3bQ.jpeg.jpg",
    description: [
      "Después del diagnóstico, sentí que retrocedí varios años. Me volví más inseguro, más frágil, más dependiente.",
      "Y aunque lo agradezco profundamente, el cuidado de mis papás fue tan constante que volví a sentirme como un niño. Esta obra es una forma de agradecer ese amor, pero también de reconocer lo difícil que fue reencontrarme conmigo mismo en medio de tanta preocupación.",
    ],
    price: "$90,000 MXN",
  },
  {
    id: 8,
    title: "Niveles",
    year: 2023,
    medium: "Óleo sobre tela",
    dimensions: "80 x 90 cm",
    image: "https://i.imgur.com/ouBbwZe.png.png",
    description: [
      "En el medio estoy yo, solo, encerrado en mi departamento, con las luces apagadas y las cortinas cerradas. No quería que nadie me viera.",
      "Arriba, una imagen de crianza idealizada. Abajo, mi impulso sexual más básico. Entre ambos niveles, me quedé suspendido, sin saber si quería volver a subir o dejarme caer.",
    ],
    price: "$90,000 MXN",
  },
  {
    id: 9,
    title: "Fantasma del Pasado",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "50 x 70 cm",
    image: "https://i.imgur.com/bkrrNdM.png.png",
    description: [
      "¿Quién es el fantasma del pasado?",
      "¿Van Gogh y otros artistas cuya vida bohemia y autodestructiva idealicé durante años?",
      "¿Las personas a quienes lastimé y cuya imagen aún me pesa?",
      "¿O mis hábitos más oscuros, esperando a que baje la guardia?",
      "Esta pintura representa el momento en que mis demonios me alcanzaron. Quise retratar cómo el pasado —ya sea en forma de errores, secretos o heridas no resueltas— puede aparecer de golpe y echar a perder las cosas.",
    ],
    price: "$60,000 MXN",
  },
  {
    id: 10,
    title: "Reflexión",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/raH3liP.png.png",
    description: [
      "Hay algo particularmente duro en pasar las fiestas sin compañía. Navidad, Año Nuevo, el frío de esa temporada... todo parece recordarte que estás solo, y después del diagnóstico, me sentí más solo que nunca. Pensé que volver a tener una relación ya no era posible.",
      "Me sentía tan vacío como ese aparador. Y al ver esos maniquíes femeninos, plásticos y sin vida, también me tuve que replantear el tipo de conexión que estaba buscando.",
    ],
    price: "$60,000 MXN",
  },
  {
    id: 11,
    title: "Habla y Escucha",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/aSS6Yio.jpeg.jpeg",
    description: [
      "Una cita semanal que, para mí, se ha vuelto casi un sacramento.",
      "Ella siempre escucha con atención. Me acompaña. Me da luz.",
    ],
    price: "$70,000 MXN",
  },
  {
    id: 12,
    title: "Mi Rincón",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "80 x 100 cm",
    image: "https://i.imgur.com/wQKIK3k.jpeg.jpeg",
    description: [
      "Este es mi lugar favorito. No siempre lo fue, pero lo transformé con arte y con la compañía de mi gatita Tomasín.",
      "Aquí pinté gran parte de esta exposición y dejé mi corazón en el lienzo.",
    ],
    price: "$90,000 MXN",
  },
  {
    id: 13,
    title: "Mi Memento Mori",
    year: 2025,
    medium: "Escultura de resina Epoxy, botellas de Biktarvy, luz led",
    dimensions: "115 x 145 cm",
    image: "https://i.imgur.com/aktt0DJ.jpeg.jpeg",
    description: [
      "No necesito poner un cráneo sobre mi escritorio: ya tengo mis pastillas para recordarme que debo aprovechar cada día.",
    ],
    price: "$150,000 MXN",
  },
  {
    id: 14,
    title: "Mi Papá",
    year: 2025,
    medium: "Cineminuto (proyección)",
    dimensions: "Duración 1 min (video)",
    image: "https://i.imgur.com/znEpsCB.jpeg.jpeg",
    description: [
      "Breve cortometraje metanarrativo en el que mi familia y yo recreamos una reunión familiar.",
      "En ella, mi papá —interpretándose a sí mismo— intenta persuadirme de mantener en secreto mi diagnóstico de VIH.",
      "La escena pone en evidencia un antiguo paradigma que él mismo ha superado y termina subrayando el apoyo incondicional que hoy me brinda, junto con el respaldo amoroso de toda mi familia.",
    ],
    price: "No a la venta",
  },
  // Additional artworks would be defined here
];

export default function ArtworkDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Find the artwork based on the ID from the URL
  const artwork =
    artworks.find((art) => art.id === Number.parseInt(params.id)) ||
    artworks[0];

  // Find related artworks (same category)
  const relatedArtworks = artworks
    .filter((art) => art.category === artwork.category && art.id !== artwork.id)
    .slice(0, 3);

  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="p-0 mb-4">
            <Link href="/gallery">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a la Galería
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artwork Image */}
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border cursor-zoom-in">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-full">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0 overflow-hidden">
                <div className="relative w-full h-[90vh] overflow-auto">
                  <div
                    className={`relative min-h-full ${
                      isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      fill
                      className={`object-contain transition-transform duration-300 ${
                        isZoomed ? "scale-150" : "scale-100"
                      }`}
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute bottom-4 right-4 bg-black/70 text-white border-none hover:bg-black/90"
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    {isZoomed ? (
                      <ZoomOut className="h-5 w-5" />
                    ) : (
                      <ZoomIn className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Artwork Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {artwork.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{artwork.year}</p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Técnica</span>
                <span className="font-medium">{artwork.medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dimensiones</span>
                <span className="font-medium">{artwork.dimensions}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Precio</span>
                <span className="font-medium">{artwork.price}</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Sobre esta obra</h2>
              <div className="text-muted-foreground space-y-4">
                {artwork.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/contact"}>
                <Button className="flex-1">
                  Solicitar información sobre esta pieza
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Works */}
        {relatedArtworks.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Obras relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArtworks.map((relatedArtwork) => (
                <Link
                  key={relatedArtwork.id}
                  href={`/gallery/${relatedArtwork.id}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={relatedArtwork.image || "/placeholder.svg"}
                        alt={relatedArtwork.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-medium">
                        {relatedArtwork.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {relatedArtwork.year}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
