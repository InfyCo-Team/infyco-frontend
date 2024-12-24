import { Link } from "react-router-dom";

export const Companies = () => {
  const companies = [
    {
      name: "Airbnb",
      logo: "/lovable-uploads/logos/airbnb.svg",
      mentorCount: 12
    },
    {
      name: "Amazon",
      logo: "/lovable-uploads/logos/amazon.svg",
      mentorCount: 15
    },
    {
      name: "Meta",
      logo: "/lovable-uploads/logos/meta.svg",
      mentorCount: 8
    },
    {
      name: "Microsoft",
      logo: "/lovable-uploads/logos/microsoft.svg",
      mentorCount: 10
    },
    {
      name: "Spotify",
      logo: "/lovable-uploads/logos/spotify.svg",
      mentorCount: 6
    },
    {
      name: "Uber",
      logo: "/lovable-uploads/logos/uber.svg",
      mentorCount: 9
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Learn from Tech Leaders
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Connect with mentors from world-class companies who are ready to share their expertise
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <Link
              key={company.name}
              to={`/mentors?company=${company.name.toLowerCase()}`}
              className="company-card w-full max-w-[180px] h-[120px] p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-300 group"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {company.mentorCount} mentors
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};