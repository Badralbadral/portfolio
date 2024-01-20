import { useTheme } from "next-themes";
import { SideBar } from "./SideBar";
import { useState } from "react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className="fixed left-0 right-0 z-50 bg-white w-full flex justify-between items-center px-20 py-4 dark:bg-[#030712] // max-[375px]:w-[375px] max-[375px]:p-4 max-[375px]:flex-col max-[375px]:h-fit
     max-[375px]:overflow-hidden duration-300"
    >
      <div className=" text-3xl || max-[375px]:text-3xl max-[375px]:font-bold max-[375px]:flex  max-[375px]:gap-[209px]  ">
        <a href="#section1">&#60;SS /&#62;</a>
        <div onClick={toggle}>
          {open ? (
            <svg
              className="min-[376px]:hidden max-[375px]:block max-[375px]:relative max-[375px]:top-[5px] max-[375px]:right-[6px] max-[375px]:ml-[12px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon">
                <path
                  id="Vector"
                  d="M18 6L6 18"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M6 6L18 18"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          ) : (
            <svg
              className="min-[376px]:hidden max-[375px]:block "
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18H26"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 12H26"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 24H26"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="flex items-center max-[375px]:hidden">
        <nav className="flex gap-6 text-lg mr-12 text-gray-600 font-medium dark:text-[#D1D5DB] ">
          <a
            href="#section3"
            className="hover:bg-gray-900 dark:hover:bg-white dark:hover:text-[#111827] duration-300 rounded-xl hover:px-3 hover:text-[#D1D5DB]"
          >
            About
          </a>
          <a
            href="#section6"
            className="hover:bg-gray-900  dark:hover:bg-white dark:hover:text-[#111827] duration-300 rounded-xl hover:px-3 hover:text-[#D1D5DB]"
          >
            Work
          </a>
          <a
            href="#section5"
            className="hover:bg-gray-900  dark:hover:bg-white dark:hover:text-[#111827] duration-300 rounded-xl hover:px-3 hover:text-[#D1D5DB]"
          >
            Testimonials
          </a>
          <a
            href="#section7"
            className="hover:bg-gray-900  dark:hover:bg-white dark:hover:text-[#111827] duration-300 rounded-xl hover:px-3 hover:text-[#D1D5DB] max-[375px]:mb-1"
          >
            Contact
          </a>
        </nav>
        <div className="mr-5 text-gray-600 dark:text-[#D1D5DB] ">
          <p className="text-lg text-gray-600 font-normal min-[375px]:hidden">
            Switch Theme
          </p>
          <svg
            className="hidden dark:block cursor-pointer"
            onClick={() => setTheme(`light`)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z"
              stroke="#D1D5DB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 3V7"
              stroke="#D1D5DB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 5H17"
              stroke="#D1D5DB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className="dark:hidden cursor-pointer "
            onClick={() => setTheme(`dark`)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 2V4"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 20V22"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.92993 4.92999L6.33993 6.33999"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.6599 17.66L19.0699 19.07"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12H4"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 12H22"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.33993 17.66L4.92993 19.07"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.0699 4.92999L17.6599 6.33999"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <button className="text-gray-50 hover:bg-gray-50 hover:text-gray-900 hover:border-[1px] hover:border-gray-900 dark:hover:border-gray-50 dark:hover:bg-gray-900 dark:hover:text-gray-50 duration-300 w-[136px] h-9 rounded-xl bg-gray-900 dark:bg-white dark:text-[#111827]">
          Download CV
        </button>
      </div>
      {open && (
        <div className="min-[375px]:hidden">
          <SideBar />
        </div>
      )}
    </div>
  );
};
