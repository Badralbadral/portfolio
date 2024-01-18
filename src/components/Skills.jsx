import { Div } from "./Div";
import { Languages } from "./DummyDatas";
import { LanguagesS } from "./DummyDatas";

export const Skills = () => {
  return (
    <div className="py-24 px-20 flex flex-col items-center || max-[375px]:py-16 max-[375px]:px-4">
      <p className="font-medium text-sm text-gray-600 bg-gray-200 rounded-xl py-1 px-5">
        Skills
      </p>
      <p className="mb-12 mt-4 text-gray-600 font-normal text-xl || max-[375px]:font-normal max-[375px]:text-xl max-[375px]:text-center">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="w-[1216px] h-[248px] flex flex-col gap-12 || max-[375px]:w-[343px] max-[375px]:hidden">
        <div className="flex justify-between || max-[375px]:grid max-[375px]:grid-cols-3">
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
      <div className="flex justify-between || max-[375px]:grid max-[375px]:grid-cols-3 max-[375px]:gap-[20px] min-[375px]:hidden max-[375px]:block">
        {Languages.map((e) => {
          return <Div value={e.svg} />;
        })}
        {LanguagesS.map((e) => {
          return <Div value={e.svg} />;
        })}
      </div>
    </div>
  );
};
