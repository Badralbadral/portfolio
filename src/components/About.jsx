export const About = () => {
  return (
    <div className="py-24 px-20 bg-gray-50">
      <div className="w-full flex justify-center items-center  mb-12">
        <p className="text-sm font-medium text-gray-600 bg-gray-200 rounded-xl py-1 px-5">
          About me
        </p>
      </div>
      <div className="flex gap-12 justify-between">
        <div className="aboutL">
          <svg
            className="relative right-10 top-[30px] w-[400px] h-[480px]"
            width="280"
            height="320"
            viewBox="0 0 280 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="4" width="272" height="312" fill="#E5E7EB" />
            <rect
              x="4"
              y="4"
              width="272"
              height="312"
              stroke="white"
              stroke-width="8"
            />
          </svg>
          <img
            className="relative bottom-[476px] w-[400px] h-[460px] border-solid border-white border-[7px]"
            src="https://s3-alpha-sig.figma.com/img/8781/bda6/7a25952db5724f48492cd455a6e81952?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iD776LocC9a2IKsEEOaYst01NN5Lo3uvEsPe-g-xHHCoZ3YH2nTx6vngudPrjvMx9V8fPVT4IK3s3nj1Myeef6xBPc9vfd3E4iP1c2fe7QC-nBR2k~YbfdlJNFiyDEEFAXF6TtkbM5EehR2t8RehwXWG5DL-QW2AgEX4WhHCUHTCwg8YVAk0fK5PiQ2zyyV9zL0bfPyOdcr7ihc1WFlz7Tdf-PKy6ukX3mjD0Vo2wuGgontjFSSetothS6hfcwSOXmbzezxEO4NmD29qL1pCYvp2iVoFU~lu0h6JaoLlT3hc0LVsjWRZdSiwGHT0XXpjzdYHAbrDM70dMS1aH~n-hw__"
            alt=""
          />
        </div>
        <div className="px-14 max-w-2xl flex flex-col gap-4">
          <h3 className="mb-2 font-semibold text-3xl text-gray-900">
            Curious about me? Here you have it:
          </h3>
          <p className="font-normal text-base text-gray-600">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="font-normal text-base text-gray-600">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="font-normal text-base text-gray-600">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="font-normal text-base text-gray-600">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="font-normal text-base text-gray-600">
            Finally, some quick bits about me.
          </p>
          <div className="ml-7 flex gap-2">
            <ul className="w-72 list-disc font-normal text-base text-gray-600">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </ul>
            <ul className="w-72 list-disc font-normal text-base text-gray-600">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
          </div>
          <p className="font-normal text-base text-gray-600">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
