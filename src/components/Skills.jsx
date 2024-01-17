import { Div } from "./Div";
import { Languages } from "@/dummyData";
import { LanguagesS } from "@/dummyData";

export const Skills = () => {
  return (
    <div className="py-24 px-20 flex flex-col items-center">
      <p className="font-medium text-sm text-gray-600 bg-gray-200 rounded-xl py-1 px-5">
        Skills
      </p>
      <p className="mb-12 mt-4 text-gray-600 font-normal text-xl">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="w-[1216px] h-[248px] flex flex-col gap-12">
        <div className="flex justify-between">
          {Languages.map((e) => {
            return <Div value={e.svg} />;
          })}
        </div>
        <div className="flex justify-between">
          {LanguagesS.map((e) => {
            return <Div value={e.svg} />;
          })}
        </div>
      </div>
    </div>
  );
};
