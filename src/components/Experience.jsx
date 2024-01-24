import { ExpBars } from "./ExpBars";
import { Upworks } from "@/dummyData";

export const Experience = () => {
  return (
    <div className="dark:bg-[#111827] h-[1320px] bg-gray-50 py-24 px-20 flex flex-col items-center || max-[375px]:py-16 max-[375px]:px-4">
      <p className="dark:bg-[#374151] dark:text-[#D1D5DB] py-1 px-5 bg-gray-200 rounded-xl text-gray-600 text-sm font-medium mb-4">
        Experience
      </p>
      <p className=" dark:text-[#D1D5DB] text-gray-600 text-xl font-normal mb-12 || max-[375px]:font-normal max-[375px]:text-xl max-[375px]:text-center">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col items-center gap-12 || max-[375px]:gap-[24px]">
        {Upworks.map((e) => {
          return <ExpBars title={e.title} list={e.list} date={e.date} />;
        })}
      </div>
    </div>
  );
};
