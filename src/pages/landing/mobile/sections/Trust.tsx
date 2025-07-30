export default function Trust() {
  const logos = [
    "./images/utg.webp",
    "./images/turon.webp",
    "./images/ngmk.webp",
    "./images/gas.webp",
    "./images/sement.webp",
    "./images/gromxim.webp",
    "./images/p2o5.webp",
  ];

  return (
    <section className="my-14 overflow-hidden">
      <div className="container">
        <h2 className="font-bold text-2xl mb-6">Нам доверяют</h2>
        <div className="relative w-full overflow-hidden mt-8">
          <div className="flex w-max animate-marquee whitespace-nowrap gap-x-2">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-56 h-28 flex items-center justify-center">
                <img
                  src={logo}
                  alt="company logo"
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}