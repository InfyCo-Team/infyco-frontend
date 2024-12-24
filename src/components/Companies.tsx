import { Link } from "react-router-dom";

export const Companies = () => {
  const companies = [
    {
      name: "Airbnb",
      logo: "/lovable-uploads/logos/airbnb.svg",
      mentorCount: 12,
      description: "Leading vacation rental platform"
    },
    {
      name: "Amazon",
      logo: "/lovable-uploads/logos/amazon.svg",
      mentorCount: 15,
      description: "Global e-commerce & cloud computing leader"
    },
    {
      name: "Meta",
      logo: "/lovable-uploads/logos/meta.svg",
      mentorCount: 8,
      description: "Social media & virtual reality pioneer"
    },
    {
      name: "Microsoft",
      logo: "/lovable-uploads/logos/microsoft.svg",
      mentorCount: 10,
      description: "Enterprise software & cloud solutions"
    },
    {
      name: "Spotify",
      logo: "/lovable-uploads/logos/spotify.svg",
      mentorCount: 6,
      description: "Music streaming technology leader"
    },
    {
      name: "Uber",
      logo: "/lovable-uploads/logos/uber.svg",
      mentorCount: 9,
      description: "Transportation & delivery platform"
    },
    {
      name: "Google",
      logo: "/lovable-uploads/logos/airbnb.svg", // Using placeholder logo
      mentorCount: 18,
      description: "Search & cloud technology giant"
    },
    {
      name: "Apple",
      logo: "/lovable-uploads/logos/amazon.svg", // Using placeholder logo
      mentorCount: 14,
      description: "Consumer technology innovator"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Learn from Industry Leaders
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Connect with experienced mentors from world-class technology companies
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Link
              key={company.name}
              to={`/mentors?company=${company.name.toLowerCase()}`}
              className="company-card-new group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/5 p-3 rounded-lg">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {company.mentorCount} mentors
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {company.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};