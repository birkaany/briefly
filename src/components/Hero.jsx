const Hero = () => {
  return (
    <header className="p-3 w-full my-6 flex flex-col">
      <nav className="container mx-auto flex justify-between w-full">
        <div className="text-white uppercase text-2xl ">
          <span className="text-yellow-400 font-bold">Brief</span>ly
        </div>
        <div>
          <a
            href="https://github.com/birkaany"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gray-800 px-6 py-3 text-white transition-all hover:text-gray-800 hover:bg-white pointer-events-none pointer-"
          >
            Github
          </a>
        </div>
      </nav>
      <div className="hero-content">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-white text-center py-16">
            <h1 className="text-5xl font-bold tracking-tighter xl:leading-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 px-2">
              Unlock the Web&apos;s Wisdom{" "}
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                Instantly
              </span>
            </h1>

            <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-500 mx-auto">
              Discover a faster way to grasp information from the web. Our
              AI-powered tool simplifies complex content, delivering concise
              summaries that save you time and effort. Dive into the web&apos;s
              vast knowledge with ease and efficiency.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
