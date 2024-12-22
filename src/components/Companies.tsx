export const Companies = () => {
  const companies = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple",
    "Netflix", "Uber", "Airbnb", "Twitter", "LinkedIn",
    "Salesforce", "Intel", "IBM", "Oracle"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by professionals from leading companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {companies.map((company) => (
            <div key={company} className="company-card p-4 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 font-medium">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};