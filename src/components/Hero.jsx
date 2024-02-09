export const Hero = () => {
  return (
    <div className="pt-44 pb-24 px-20 flex justify-center gap-[130px] max-[375px]:flex-col-reverse max-[375px]:py-16 max-[375px]:px-4 max-[375px]:gap-[90px] dark:bg-[#030712]">
      <div className="Bleft ">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 // max-[375px]:font-semibold max-[375px]:text-4xl max-[375px]:mb-2 dark:text-[#D1D5DB]">
          Hi, I’m Sagar 👋
        </h1>
        <p className="w-[750px] h-20 mb-12 text-base font-normal text-gray-600 // max-[375px]:font-normal max-[375px]:text-base max-[375px]:w-[343px] max-[375px]:mb-[130px] dark:text-[#D1D5DB]">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <p className="flex gap-2 items-center mb-2 text-base font-normal text-gray-600 dark:text-[#D1D5DB]">
          <svg
            className="dark:hidden"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="hidden dark:block"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Ahmedabad, India
        </p>
        <p className=" dark:text-[#D1D5DB] flex gap-2 items-center mb-2 text-base font-normal text-gray-600">
          <svg
            className="ml-2"
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={8} height={8} rx={4} fill="#10B981" />
          </svg>
          Available for new projects
        </p>
        <div className="relative top-[38px] left-2 flex items-center gap-[14px] dark:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00004 3.5C6.00004 2 5.00004 2 5.00004 2C4.70004 3.15 4.70004 4.35 5.00004 5.5C4.27191 6.51588 3.91851 7.75279 4.00004 9C4.00004 12.5 7.00004 14.5 10 14.5C9.61004 14.99 9.32004 15.55 9.15004 16.15C8.98004 16.75 8.93004 17.38 9.00004 18V22"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 18C4.49 20 4 16 2 16"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={19}
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M21 1C21 1 20.3 3.1 19 4.4C20.6 14.4 9.6 21.7 1 16C3.2 16.1 5.4 15.4 7 14C2 12.5 -0.5 6.6 2 2C4.2 4.6 7.6 6.1 11 6C10.1 1.8 15 -0.6 18 2.2C19.1 2.2 21 1 21 1Z"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2H15.5C15.9596 2 16.4148 2.09053 16.8394 2.26642C17.264 2.44231 17.6499 2.70012 17.9749 3.02513C18.2999 3.35013 18.5577 3.73597 18.7336 4.16061C18.9095 4.58525 19 5.04037 19 5.5C19 5.95963 18.9095 6.41475 18.7336 6.83939C18.5577 7.26403 18.2999 7.64987 17.9749 7.97487C17.6499 8.29988 17.264 8.55769 16.8394 8.73358C16.4148 8.90947 15.9596 9 15.5 9H12V2Z"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12.5C12 12.0404 12.0905 11.5852 12.2664 11.1606C12.4423 10.736 12.7001 10.3501 13.0251 10.0251C13.3501 9.70012 13.736 9.44231 14.1606 9.26642C14.5852 9.09053 15.0404 9 15.5 9C15.9596 9 16.4148 9.09053 16.8394 9.26642C17.264 9.44231 17.6499 9.70012 17.9749 10.0251C18.2999 10.3501 18.5577 10.736 18.7336 11.1606C18.9095 11.5852 19 12.0404 19 12.5C19 12.9596 18.9095 13.4148 18.7336 13.8394C18.5577 14.264 18.2999 14.6499 17.9749 14.9749C17.6499 15.2999 17.264 15.5577 16.8394 15.7336C16.4148 15.9095 15.9596 16 15.5 16C15.0404 16 14.5852 15.9095 14.1606 15.7336C13.736 15.5577 13.3501 15.2999 13.0251 14.9749C12.7001 14.6499 12.4423 14.264 12.2664 13.8394C12.0905 13.4148 12 12.9596 12 12.5Z"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V19.5C12 20.4283 11.6313 21.3185 10.9749 21.9749C10.3185 22.6313 9.42826 23 8.5 23C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="opacity-0 mt-10 dark:opacity-100 flex">
          <svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9998 28V24C21.1389 22.7473 20.7797 21.4901 19.9998 20.5C22.9998 20.5 25.9998 18.5 25.9998 15C26.0798 13.75 25.7298 12.52 24.9998 11.5C25.2798 10.35 25.2798 9.15 24.9998 8C24.9998 8 23.9998 8 21.9998 9.5C19.3598 9 16.6398 9 13.9998 9.5C11.9998 8 10.9998 8 10.9998 8C10.6998 9.15 10.6998 10.35 10.9998 11.5C10.2717 12.5159 9.91827 13.7528 9.99979 15C9.99979 18.5 12.9998 20.5 15.9998 20.5C15.6098 20.99 15.3198 21.55 15.1498 22.15C14.9798 22.75 14.9298 23.38 14.9998 24V28"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 24C10.49 26 10 22 8 22"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 10C28 10 27.3 12.1 26 13.4C27.6 23.4 16.6 30.7 8 25C10.2 25.1 12.4 24.4 14 23C9 21.5 6.5 15.6 9 11C11.2 13.6 14.6 15.1 18 15C17.1 10.8 22 8.4 25 11.2C26.1 11.2 28 10 28 10Z"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 11.5C11 10.5717 11.3687 9.6815 12.0251 9.02513C12.6815 8.36875 13.5717 8 14.5 8H18V15H14.5C13.5717 15 12.6815 14.6313 12.0251 13.9749C11.3687 13.3185 11 12.4283 11 11.5Z"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 8H21.5C21.9596 8 22.4148 8.09053 22.8394 8.26642C23.264 8.44231 23.6499 8.70012 23.9749 9.02513C24.2999 9.35013 24.5577 9.73597 24.7336 10.1606C24.9095 10.5852 25 11.0404 25 11.5C25 11.9596 24.9095 12.4148 24.7336 12.8394C24.5577 13.264 24.2999 13.6499 23.9749 13.9749C23.6499 14.2999 23.264 14.5577 22.8394 14.7336C22.4148 14.9095 21.9596 15 21.5 15H18V8Z"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 18.5C18 18.0404 18.0905 17.5852 18.2664 17.1606C18.4423 16.736 18.7001 16.3501 19.0251 16.0251C19.3501 15.7001 19.736 15.4423 20.1606 15.2664C20.5852 15.0905 21.0404 15 21.5 15C21.9596 15 22.4148 15.0905 22.8394 15.2664C23.264 15.4423 23.6499 15.7001 23.9749 16.0251C24.2999 16.3501 24.5577 16.736 24.7336 17.1606C24.9095 17.5852 25 18.0404 25 18.5C25 18.9596 24.9095 19.4148 24.7336 19.8394C24.5577 20.264 24.2999 20.6499 23.9749 20.9749C23.6499 21.2999 23.264 21.5577 22.8394 21.7336C22.4148 21.9095 21.9596 22 21.5 22C21.0404 22 20.5852 21.9095 20.1606 21.7336C19.736 21.5577 19.3501 21.2999 19.0251 20.9749C18.7001 20.6499 18.4423 20.264 18.2664 19.8394C18.0905 19.4148 18 18.9596 18 18.5Z"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 25.5C11 24.5717 11.3687 23.6815 12.0251 23.0251C12.6815 22.3687 13.5717 22 14.5 22H18V25.5C18 26.4283 17.6313 27.3185 16.9749 27.9749C16.3185 28.6313 15.4283 29 14.5 29C13.5717 29 12.6815 28.6313 12.0251 27.9749C11.3687 27.3185 11 26.4283 11 25.5Z"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 18.5C11 17.5717 11.3687 16.6815 12.0251 16.0251C12.6815 15.3687 13.5717 15 14.5 15H18V22H14.5C13.5717 22 12.6815 21.6313 12.0251 20.9749C11.3687 20.3185 11 19.4283 11 18.5Z"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <svg
          className="min-[376px]:hidden max-[375px]:block max-[375px]:relative max-[375px]:top-[68px] dark:hidden"
          width={301}
          height={280}
          viewBox="0 0 281 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={4.5} y={4} width={272} height={272} fill="#E5E7EB" />
          <rect
            x={4.5}
            y={4}
            width={272}
            height={272}
            stroke="white"
            strokeWidth={8}
          />
        </svg>
        <svg
          className="hidden min-[376px]:hidden max-[375px]:dark:block max-[375px]:relative max-[375px]:top-[68px]"
          width={281}
          height={280}
          viewBox="0 0 281 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={4.5} y={4} width={272} height={272} fill="#374151" />
          <rect
            x={4.5}
            y={4}
            width={272}
            height={272}
            stroke="#030712"
            strokeWidth={8}
          />
        </svg>
        <img
          className="shadow-[30px_25px_0px_0px_rgba(238,238,238)] dark:shadow-[30px_35px_0px_0px_rgba(55,65,81)] border-solid border-white dark:border-[#030712] border-[8px] w-[310px] h-[320px] // max-[375px]:w-[240px] max-[375px]:h-[284px] max-[375px]:shadow-[0px_0px_0px_0px_rgba(0,0,0)] max-[375px]:dark:shadow-[0px_0px_0px_0px_rgba(0,0,0)] max-[375px]:absolute max-[375px]:mt-10"
          src="/Pic1.png"
        />
      </div>
    </div>
  );
};
