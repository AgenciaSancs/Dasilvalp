export function Trust() {
  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 text-center">
          <div className="flex flex-col items-center">
            <p className="font-headline text-6xl font-bold text-gold">10+</p>
            <p className="mt-2 text-xl font-medium">Years of Experience</p>
            <p className="mt-1 text-muted-foreground max-w-md">
              Serving the industry with dedication and unmatched expertise in vehicle maintenance.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-headline text-6xl font-bold text-gold">100%</p>
            <p className="mt-2 text-xl font-medium">Certified Technicians</p>
            <p className="mt-1 text-muted-foreground max-w-md">
              Our team consists of highly skilled and certified professionals committed to quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
