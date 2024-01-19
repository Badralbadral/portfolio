export const Hero = () => {
  return (
    <div className="pt-44 pb-24 px-20 flex justify-between max-[375px]:flex-col-reverse max-[375px]:py-16 max-[375px]:px-4 max-[375px]:gap-[90px] dark:bg-[#030712] ">
      <div className="Bleft ">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 // max-[375px]:font-semibold max-[375px]:text-4xl max-[375px]:mb-2 dark:text-[#D1D5DB]">
          Hi, I’m Sagar 👋
        </h1>
        <p className="max-w-screen-md h-20 mb-12 text-base font-normal text-gray-600 // max-[375px]:font-normal max-[375px]:text-base max-[375px]:w-[343px] max-[375px]:mb-[130px] dark:text-[#D1D5DB]">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <p className="flex gap-2 items-center mb-2 text-base font-normal text-gray-600 dark:text-[#D1D5DB]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Ahmedabad, India
        </p>
        <p className=" dark:text-[#D1D5DB] flex gap-2 items-center mb-2 text-base font-normal text-gray-600">
          <svg
            className="ml-2"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="8" height="8" rx="4" fill="#10B981" />
          </svg>
          Available for new projects
        </p>
        <div className="mt-12 flex gap-4">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 21V17C13.1392 15.7473 12.78 14.4901 12 13.5C15 13.5 18 11.5 18 8C18.08 6.75 17.73 5.52 17 4.5C17.28 3.35 17.28 2.15 17 1C17 1 16 1 14 2.5C11.36 2 8.64004 2 6.00004 2.5C4.00004 1 3.00004 1 3.00004 1C2.70004 2.15 2.70004 3.35 3.00004 4.5C2.27191 5.51588 1.91851 6.75279 2.00004 8C2.00004 11.5 5.00004 13.5 8.00004 13.5C7.61004 13.99 7.32004 14.55 7.15004 15.15C6.98004 15.75 6.93004 16.38 7.00004 17V21"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 1C21 1 20.3 3.1 19 4.4C20.6 14.4 9.6 21.7 1 16C3.2 16.1 5.4 15.4 7 14C2 12.5 -0.5 6.6 2 2C4.2 4.6 7.6 6.1 11 6C10.1 1.8 15 -0.6 18 2.2C19.1 2.2 21 1 21 1Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 2H15.5C15.9596 2 16.4148 2.09053 16.8394 2.26642C17.264 2.44231 17.6499 2.70012 17.9749 3.02513C18.2999 3.35013 18.5577 3.73597 18.7336 4.16061C18.9095 4.58525 19 5.04037 19 5.5C19 5.95963 18.9095 6.41475 18.7336 6.83939C18.5577 7.26403 18.2999 7.64987 17.9749 7.97487C17.6499 8.29988 17.264 8.55769 16.8394 8.73358C16.4148 8.90947 15.9596 9 15.5 9H12V2Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12.5C12 12.0404 12.0905 11.5852 12.2664 11.1606C12.4423 10.736 12.7001 10.3501 13.0251 10.0251C13.3501 9.70012 13.736 9.44231 14.1606 9.26642C14.5852 9.09053 15.0404 9 15.5 9C15.9596 9 16.4148 9.09053 16.8394 9.26642C17.264 9.44231 17.6499 9.70012 17.9749 10.0251C18.2999 10.3501 18.5577 10.736 18.7336 11.1606C18.9095 11.5852 19 12.0404 19 12.5C19 12.9596 18.9095 13.4148 18.7336 13.8394C18.5577 14.264 18.2999 14.6499 17.9749 14.9749C17.6499 15.2999 17.264 15.5577 16.8394 15.7336C16.4148 15.9095 15.9596 16 15.5 16C15.0404 16 14.5852 15.9095 14.1606 15.7336C13.736 15.5577 13.3501 15.2999 13.0251 14.9749C12.7001 14.6499 12.4423 14.264 12.2664 13.8394C12.0905 13.4148 12 12.9596 12 12.5Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V19.5C12 20.4283 11.6313 21.3185 10.9749 21.9749C10.3185 22.6313 9.42826 23 8.5 23C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <svg
          className="min-[376px]:hidden max-[375px]:block max-[375px]:relative max-[375px]:top-[30px]"
          width="301"
          height="280"
          viewBox="0 0 281 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4.5" y="4" width="272" height="272" fill="#E5E7EB" />
          <rect
            x="4.5"
            y="4"
            width="272"
            height="272"
            stroke="white"
            stroke-width="8"
          />
        </svg>
        <img
          className="shadow-[30px_25px_0px_0px_rgba(238,238,238)] border-solid border-white dark:border-[#030712] border-[8px] w-[310px] h-[320px] // max-[375px]:w-[240px] max-[375px]:h-[284px] max-[375px]:shadow-[0px_0px_0px_0px_rgba(0,0,0)] max-[375px]:absolute max-[375px]:mt-10"
          src="https://s3-alpha-sig.figma.com/img/f85c/f455/11cd2ba02a83d564218d6500a134a91d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6ilx-NOb63~KzVYyZfxx4qzRN~gm9QHjip~sIpK9MTVSZsX~huwLpZqpJyqW7GDTT8lB8QtBCj5-2PtU-Ygp48aaoTUuruT2gkBXQL~lHchh7pKMdkHIJrb2oMYnvdAYQNxOMjjUIF8HDscGx5Nt7iw4F0WHx0HmiLM~STQEdaUIw0hp1E28oW5KSCJTY9dpgSECxgzNyTUNroqNwgsE5X4gYOS6SIFW~iIc98LskU-vU9DVPo3dEzu2N-2Fz4UiQZedr6UAGezp4AEFbGvN6RWj7EetJyu7prBfAxtS4Q0dAi36VtSyse6uAVnFGuXHQ9Y83-~6UcTO1YSVEzzGQ__"
          alt=""
        />
      </div>
    </div>
  );
};
