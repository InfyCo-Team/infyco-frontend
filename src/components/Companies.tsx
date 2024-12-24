export const Companies = () => {
  const companies = [
    {
      name: "Airbnb",
      logo: "/lovable-uploads/logos/airbnb.svg"
    },
    {
      name: "Amazon",
      logo: "/lovable-uploads/logos/amazon.svg"
    },
    {
      name: "Meta",
      logo: "/lovable-uploads/logos/meta.svg"
    },
    {
      name: "Microsoft",
      logo: "/lovable-uploads/logos/microsoft.svg"
    },
    {
      name: "Spotify",
      logo: "/lovable-uploads/logos/spotify.svg"
    },
    {
      name: "Uber",
      logo: "/lovable-uploads/logos/uber.svg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Trusted by professionals from leading companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {companies.map((company) => (
            <div 
              key={company.name} 
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="h-8 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};