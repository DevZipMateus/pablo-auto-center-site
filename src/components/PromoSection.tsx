const PromoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/promo-jimny.jpg" 
              alt="Especialista em veículos 4x4 e Suzuki Jimny - Pablo Auto Center" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/promo-compass.jpg" 
              alt="Especialista em Jeep Renegade e Compass - Pablo Auto Center" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;