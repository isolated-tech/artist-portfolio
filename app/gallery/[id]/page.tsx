"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, ZoomIn, ZoomOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Sample artwork data - in a real app, this would come from a database
const artworks = [
  {
    id: 1,
    title: "Arrebato",
    year: 2018,
    medium: "Acrílico sobre tela",
    dimensions: "40 × 60 cm",
    image: "https://i.imgur.com/8qUjSL5.png",
    description:
      "This piece explores the interplay of light and shadow through bold brushstrokes and a vibrant color palette. The composition creates a sense of movement and energy, inviting the viewer to experience the dynamic tension between structure and spontaneity.",
    price: "$4,800",
  },
  {
    id: 2,
    title: "Espíritus",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "130 × 100 cm",
    image: "https://i.imgur.com/Glu420Q.jpeg",
    description:
      "Inspired by the depths of the ocean, this painting uses various shades of blue to create a meditative atmosphere. The layered application of paint creates texture and depth, evoking the mysterious qualities of water and light.",
    price: "$3,200",
  },
  {
    id: 3,
    title: "Body ART",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "Díptico, 2 x 60 x 80 cm",
    image: "https://i.imgur.com/P0fAf5i.png.jpg",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 4,
    title: "Invitación",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "20 x 20 cm",
    image: "https://i.imgur.com/XEgDviV.png.png",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 5,
    title: "Hasta nunca (ojalá)",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "20 x 20 cm",
    image: "https://i.imgur.com/bCRV5Ug.jpegnunca.jpeg",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 6,
    title: "Parque de Diversiones",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/c2gDwTW.jpeg",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 7,
    title: "Regresión",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "60 x 90 cm",
    image: "https://i.imgur.com/UeDm3bQ.jpeg.jpg",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 8,
    title: "Niveles",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "80 x 90 cm",
    image: "https://i.imgur.com/ouBbwZe.png.png",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 9,
    title: "Fantasma del Pasado",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "50 x 70 cm",
    image: "https://i.imgur.com/bkrrNdM.png.png",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 10,
    title: "Reflexión",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/raH3liP.png.png",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 11,
    title: "Habla y Escucha",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/aSS6Yio.jpeg.jpeg",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 12,
    title: "Mi Rincón",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "80 x 100 cm",
    image: "https://i.imgur.com/wQKIK3k.jpeg.jpeg",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 13,
    title: "Mi Memento Mori",
    year: 2025,
    medium: "Escultura de resina Epoxy, botellas de Biktarvy, luz led",
    dimensions: "115 x 145 cm",
    image: "https://i.imgur.com/aktt0DJ.jpeg.jpeg",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
  },
  {
    id: 14,
    title: "Mi Papá",
    year: 2025,
    medium: "Cortometraje",
    dimensions: "Duración 1:30",
    image: "https://i.imgur.com/znEpsCB.jpeg.jpeg",
    description:
      "This mixed media piece incorporates elements of collage and painting to create a fragmented urban landscape. The work reflects on memory and perception in the context of city environments, with architectural forms emerging from abstract passages.",
    price: "$3,800",
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
              <p className="text-muted-foreground">{artwork.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">
                Solicitar información sobre esta pieza
              </Button>
            </div>
          </div>
        </div>

        {/* Related Works */}
        {relatedArtworks.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Works</h2>
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
