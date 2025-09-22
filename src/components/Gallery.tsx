import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const galleryImages = [
    "/galeria/3A096755FA6501DB9359.jpeg",
    "/galeria/3A098C41FDBDD0AD8B0E.jpeg", 
    "/galeria/3A0B07C68FE7EADE9D94.jpeg",
    "/galeria/3A2DA211E1A3B9C40145.jpeg",
    "/galeria/3A2F5509E56D769961BB.jpeg",
    "/galeria/3A31F36C287C1A44363A.jpeg",
    "/galeria/3A3666F8AFEEC2118562.jpeg",
    "/galeria/3A42F004AE48D70466F1.jpeg",
    "/galeria/3A7E97806C3CEE6EDAB9.jpeg",
    "/galeria/3A80DFE4BED1E78556C2.jpeg",
    "/galeria/3A85C71E7068C930CE66.jpeg",
    "/galeria/3A95BEEF6C68D874F8F1.jpeg",
    "/galeria/3A9D9DFAF7115E97DE82.jpeg",
    "/galeria/3AA16279592FA0C5AD76.jpeg",
    "/galeria/3AC40C4195FBA956E582.jpeg",
    "/galeria/3AEA14CC43270FA41A8F.jpeg",
    "/galeria/logo1.jpeg"
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Galeria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça mais sobre nosso trabalho e nossa oficina especializada
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="max-w-2xl w-full">
            <video 
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              loop
              playsInline
            >
              <source src="/galeria/video1.mp4?v=2" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>

        <div className="flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <CardContent className="p-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src={image}
                              alt={`Foto da galeria ${index + 1}`}
                              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                              loading="lazy"
                            />
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full">
                            <img
                              src={image}
                              alt={`Foto da galeria ${index + 1}`}
                              className="w-full h-auto rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;