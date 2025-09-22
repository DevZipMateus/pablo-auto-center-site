const Gallery = () => {
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

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <video 
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/galeria/video2.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;