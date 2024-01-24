import { WorkBar } from "./WorkBar";
import { Fiskil } from "@/dummyData";

export const Work = () => {
  return (
    <div className="dark:bg-[#030712] py-24 px-20 flex flex-col items-center || max-[375px]:py-16 max-[375px]:px-4">
      <p className="dark:bg-[#374151] dark:text-[#D1D5DB]  py-1 px-5 bg-gray-200 rounded-xl text-gray-600 text-sm font-medium mb-4">
        Work
      </p>
      <p className=" dark:text-[#D1D5DB] text-gray-600 text-xl font-normal mb-12 || max-[375px]:font-normal max-[375px]:text-xl max-[375px]:text-center">
        Some of the noteworthy projects I have built:
      </p>
      <div>
        {Fiskil.map((e, index) => {
          return (
            <WorkBar title={e.title} desc={e.desc} index={index} key={index} />
          );
        })}
      </div>
    </div>
  );
};
