"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

// Sample featured works data
const featuredWorks = [
  {
    id: 2,
    title: "Espíritus",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "130 × 100 cm",
    image: "https://i.imgur.com/Glu420Q.jpeg",
  },
  {
    id: 4,
    title: "Invitación",
    year: 2023,
    medium: "Óleo sobre tela",
    dimensions: "20 x 20 cm",
    image: "https://i.imgur.com/XEgDviV.png.png",
  },
  {
    id: 7,
    title: "Regresión",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "60 x 90 cm",
    image: "https://i.imgur.com/t5rBgxM.png.jpg",
  },
  {
    id: 8,
    title: "Niveles",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "80 x 90 cm",
    image: "https://i.imgur.com/ouBbwZe.png.png",
  },
  {
    id: 12,
    title: "Mi Rincón",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "80 x 100 cm",
    image: "https://i.imgur.com/wQKIK3k.jpeg.jpeg",
  },
  {
    id: 13,
    title: "Mi Memento Mori",
    year: 2025,
    medium: "Escultura de resina Epoxy",
    dimensions: "115 x 145 cm",
    image: "https://i.imgur.com/aktt0DJ.jpeg.jpeg",
  },
];

export default function FeaturedWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(featuredWorks.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= featuredWorks.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(0, featuredWorks.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const currentWorks = featuredWorks.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Obras Destacadas</h2>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={featuredWorks.length <= itemsPerPage}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={featuredWorks.length <= itemsPerPage}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentWorks.map((artwork) => (
            <Link
              key={artwork.id}
              href={`/gallery/${artwork.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium">{artwork.title}</h3>
                  <p className="text-muted-foreground">{artwork.year}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {artwork.medium}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/gallery">Ver Todas las Obras</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
