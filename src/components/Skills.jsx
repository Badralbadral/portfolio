import { Div } from "./Div";
import { Languages } from "@/dummyData";
import { LanguagesS } from "@/dummyData";

export const Skills = () => {
  return (
    <div className="dark:bg-[#030712] py-24 px-20 flex flex-col items-center || max-[375px]:py-16 max-[375px]:px-4">
      <p className="dark:bg-[#374151] dark:text-[#D1D5DB] font-medium text-sm text-gray-600 bg-gray-200 rounded-xl py-1 px-5">
        Skills
      </p>
      <p className="dark:text-[#D1D5DB] mb-12 mt-4 text-gray-600 font-normal text-xl || max-[375px]:font-normal max-[375px]:text-xl max-[375px]:text-center">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="w-[1216px] h-[248px] flex flex-col gap-12 || max-[375px]:w-[343px] max-[375px]:hidden">
        <div className="flex justify-between">
          {Languages.map((e) => {
            return <Div value={e.svg} title={e.title} />;
          })}
        </div>
        <div className="flex justify-between">
          {LanguagesS.map((e) => {
            return <Div value={e.svg} title={e.title} />;
          })}
        </div>
      </div>
      <div className="flex justify-between || max-[375px]:grid max-[375px]:grid-cols-3 max-[375px]:gap-[20px] min-[375px]:hidden max-[375px]:block">
        {Languages.map((e) => {
          return <Div value={e.svg} title={e.title} />;
        })}
        {LanguagesS.map((e) => {
          return <Div value={e.svg} title={e.title} />;
        })}
      </div>
    </div>
  );
};
