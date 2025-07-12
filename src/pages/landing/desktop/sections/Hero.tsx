
export default function Hero() {
  return (
    <section className="mt-[4.625rem] mb-[8.8125rem]">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="w-[54.3125rem]">
                    <img src="./hero.svg" alt="hero" />
                </div>
                <div className="flex flex-col gap-y-8">
                    <img src="./hero-2.svg" alt="hero 2" />
                    <img src="./hero-3.svg" alt="hero 3" />
                </div>
            </div>
        </div>
    </section>
  )
}
