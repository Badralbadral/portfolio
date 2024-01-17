import { ExpBars } from "./ExpBars";
import { Upworks } from "@/dummyData";

export const Experience = () => {
  return (
    <div className="h-[1240px] bg-gray-50 py-24 px-20 flex flex-col items-center">
      <p className="py-1 px-5 bg-gray-200 rounded-xl text-gray-600 text-sm font-medium mb-4">
        Experience
      </p>
      <p className="text-gray-600 text-xl font-normal mb-12">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col items-center gap-12">
        {Upworks.map((e) => {
          return (
            <ExpBars
              title={e.title}
              list={e.list}
              list2={e.list2}
              list3={e.list3}
              list4={e.list4}
              date={e.date}
            />
          );
        })}
      </div>
    </div>
  );
};
