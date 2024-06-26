export const About = () => {
  return (
    <div className="py-24 px-20 bg-gray-50 max-[375px]:py-16 max-[375px]:px-4 dark:bg-[#111827]">
      <div className="w-full flex justify-center items-center mb-12">
        <p className="dark:bg-[#374151] dark:text-[#D1D5DB] text-sm font-medium text-gray-600 bg-gray-200 rounded-xl py-1 px-5 mb-6">
          About me
        </p>
      </div>
      <div className="flex gap-[20px] justify-center // max-[375px]:flex-col ">
        <div className="max-[375px]:flex max-[375px]:flex-col max-[375px]:items-center">
          <img
            className="max-[376px]:relative min-[376px]:hidden max-[376px]:block dark:hidden mb-9"
            src="/Background.png"
            width={`301px`}
          />
          <svg
            className="hidden max-[375px]:relative max-[375px]:top-[0px] bottom-10 max-[375px]:mb-[45px] min-[376px]:hidden max-[375px]:dark:block relative"
            width={321}
            height={340}
            viewBox="0 0 321 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x={4.5} y={4} width={312} height={352} fill="#374151" />
            <rect
              x={4.5}
              y={4}
              width={312}
              height={352}
              stroke="#111827"
              strokeWidth={8}
            />
          </svg>
          <img
            className="w-[400px] h-[460px] relative left-4 border-solid dark:border-[#030712] border-white border-[7px] shadow-[-30px_35px_0px_0px_rgba(238,238,238)] dark:shadow-[-30px_28px_0px_0px_rgba(55,65,81)] // max-[375px]:w-[260px] max-[375px]:h-[340px] max-[375px]:shadow-[0px_0px_0px_0px_rgba(0,0,0)] max-[375px]:dark:shadow-[0px_0px_0px_0px_rgba(0,0,0)] max-[375px]:absolute max-[375px]:left-[57px] max-[375px]:top-[1060px] max-[375px]:dark:top-[1026px]"
            src="/Pic2.png"
            alt=""
          />
        </div>
        <div className="px-14  max-w-2xl flex flex-col gap-4 // max-[375px]:w-[343px] max-[375px]:p-0">
          <h3 className="dark:text-[#D1D5DB] mb-2 font-semibold text-3xl text-gray-900 // max-[375px]:font-semibold max-[375px]:text-2xl">
            Curious about me? Here you have it:
          </h3>
          <p className="dark:text-[#D1D5DB]  font-normal text-base text-gray-600">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className=" dark:text-[#D1D5DB] font-normal text-base text-gray-600">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="dark:text-[#D1D5DB] font-normal text-base text-gray-600">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="dark:text-[#D1D5DB] font-normal text-base text-gray-600">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="dark:text-[#D1D5DB] font-normal text-base text-gray-600">
            Finally, some quick bits about me.
          </p>
          <div className="ml-7 flex gap-2">
            <ul className="dark:text-[#D1D5DB] w-72 list-disc font-normal text-base text-gray-600">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </ul>
            <ul className="dark:text-[#D1D5DB] w-72 list-disc font-normal text-base text-gray-600">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
          </div>
          <p className="dark:text-[#D1D5DB] font-normal text-base text-gray-600">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
