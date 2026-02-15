export default function Home() {
  return (
    <div className="home-hero flex flex-1 flex-col items-center justify-center px-6">
      <div className="animate-fade-in-slow text-center">
        <h1 className="font-serif text-5xl tracking-tight text-cream sm:text-7xl">
          DMC Labs
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-taupe/40" />
        <p className="mt-6 text-sm tracking-widest text-cream-muted uppercase">
          Software, thoughtfully crafted.
        </p>
      </div>
    </div>
  )
}
