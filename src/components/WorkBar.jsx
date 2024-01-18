export const WorkBar = () => {
  return (
    // rounded??
    <div className="flex mb-12 drop-shadow-md || max-[375px]:flex-col max-[375px]:items-center">
      <div className="w-[576px] h-[480px] rounded-s-xl border-[1px] border-gray-100 p-12 bg-gray-100 || max-[375px]:w-[343px] max-[375px]:h-[256px] max-[375px]:p-[32px]">
        <img
          className="max-[375px]:w-[279px] max-[375px]:h-[192px] max-[375px]:rounded-xl"
          src="https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYitTML6jMKPuAP2IWSes8W9g5f3qjAfXibD~fym3hK6hfGSEiSfNnMVIgVnn-3CMeztC3E9FuM1OPEGmDkUijQbJM~f58GdGXoiOGFVcklsPf4GiyEtfFoxiRwc9cge2LwJ6qYOTnJVg5YcEOsoX0Loz9qCRikZoKvvZAeiE1ctnmroxdvwlyzNdOUkqi6aeYWgqJQMBf3ux3Ju-2gY2Zu~Xjf8XbYnoWZ0Syo4o6cjT4S3U82rQ2LIZLuxHxuRrUyn1gUvFxmNLJHcXfrEqvjr0Ivsh6JJZSeoST0uVK7R0~pz1rAT~Hm41H6fYGwzO4wnllp3KzEWw3nQ~tuwPA__"
        />
      </div>
      <div className="flex flex-col gap-6 rounded-e-xl w-[576px] h-[480px] p-12 border-[1px] border-white bg-white || max-[375px]:w-[343px] max-[375px]:p-[32px] max-[375px]:h-[516px]">
        <h3 className="text-gray-900 text-xl font-semibold">Fiskil</h3>
        <p className="text-gray-600 font-normal text-[17px] || max-[375px]:w-[259px] max-[375px]:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-2">
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            React
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            Next.js
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            Typescript
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            Nest.js
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            PostgreSQL
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            Tailwindcss
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            Figma
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            Cypress
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            Storybook
          </p>
          <p className="bg-gray-200 rounded-xl py-1 px-5 text-gray-500 text-sm font-medium">
            Git
          </p>
        </div>
        <div>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 9H27V15"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 20L27 9"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
