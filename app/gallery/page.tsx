"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample artwork data
const artworks = [
  {
    id: 1,
    title: "Arrebato",
    year: 2018,
    medium: "Acrílico sobre tela",
    dimensions: "40 × 60 cm",
    image: "https://i.imgur.com/8qUjSL5.png",
  },
  {
    id: 2,
    title: "Espíritus",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "130 × 100 cm",
    image: "https://i.imgur.com/Glu420Q.jpeg",
  },
  {
    id: 3,
    title: "Body ART",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "Díptico, 2 x 60 x 80 cm",
    image: "https://i.imgur.com/P0fAf5i.png.jpg",
  },
  {
    id: 4,
    title: "Invitación",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "20 x 20 cm",
    image: "https://i.imgur.com/XEgDviV.png.png",
  },
  {
    id: 5,
    title: "Hasta nunca (ojalá)",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "20 x 20 cm",
    image: "https://i.imgur.com/bCRV5Ug.jpegnunca.jpeg",
  },
  {
    id: 6,
    title: "Parque de Diversiones",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/NJB98vc.jpeg",
  },
  {
    id: 7,
    title: "Regresión",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "60 x 90 cm",
    image: "https://i.imgur.com/t5rBgxM.png.jpg",
  },
  {
    id: 8,
    title: "Niveles",
    year: 2023,
    medium: "Óleo sobre tela",
    dimensions: "80 x 90 cm",
    image: "https://i.imgur.com/ouBbwZe.png.png",
  },
  {
    id: 9,
    title: "Fantasma del Pasado",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "50 x 70 cm",
    image: "https://i.imgur.com/bkrrNdM.png.png",
  },
  {
    id: 10,
    title: "Reflexión",
    year: 2024,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/raH3liP.png.png",
  },
  {
    id: 11,
    title: "Habla y Escucha",
    year: 2025,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    image: "https://i.imgur.com/aSS6Yio.jpeg.jpeg",
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
  {
    id: 14,
    title: "Mi Papá",
    year: 2025,
    medium: "Cortometraje",
    dimensions: "Duración 1:30",
    image: "https://i.imgur.com/znEpsCB.jpeg.jpeg",
  },
];

export default function GalleryPage() {
  const [sortOption, setSortOption] = useState("newest");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter artworks based on active category
  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeCategory);

  // Sort artworks based on selected option
  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    if (sortOption === "newest") return b.year - a.year;
    if (sortOption === "oldest") return a.year - b.year;
    if (sortOption === "title-asc") return a.title.localeCompare(b.title);
    if (sortOption === "title-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Galería</h1>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full sm:w-auto"
          >
            <TabsList className="grid inline-flex sm:w-auto">
              <TabsTrigger value="all">Todos</TabsTrigger>
            </TabsList>
          </Tabs>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Ordenar por
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={sortOption}
                onValueChange={setSortOption}
              >
                <DropdownMenuRadioItem value="newest">
                  Más reciente primero
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="oldest">
                  Más antiguo primero
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="title-asc">
                  Título (A–Z)
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="title-desc">
                  Título (Z–A)
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArtworks.map((artwork) => (
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
      </div>
    </main>
  );
}
