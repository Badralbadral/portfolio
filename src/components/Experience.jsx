import { ExpBars } from "./ExpBars";
import { Upworks } from "@/dummyData";

export const Experience = () => {
  return (
    <div className="h-[1240px] bg-gray-50 py-24 px-20 flex flex-col items-center || max-[375px]:py-16 max-[375px]:px-4">
      <p className="py-1 px-5 bg-gray-200 rounded-xl text-gray-600 text-sm font-medium mb-4">
        Experience
      </p>
      <p className="text-gray-600 text-xl font-normal mb-12 || max-[375px]:font-normal max-[375px]:text-xl max-[375px]:text-center">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col items-center gap-12 || max-[375px]:gap-[24px]">
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
        <div className="w-[896px] h-fit bg-white p-8 rounded-xl flex gap-12 drop-shadow-md || max-[375px]:gap-3 max-[375px]:w-[343px] max-[375px]:flex-col max-[375px]:mb-14">
          <h3 className="w-[206px] h-7 ">
            <img src="/logo-upwork.png" alt="" />
          </h3>
          <h6 className="text-gray-700 text-base font-normal || min-[375px]:hidden max-[375px]:block ">
            Dec 2015 - May 2017
          </h6>
          <div>
            <h4 className="text-gray-900 text-xl font-semibold mb-4">
              Full Stack Developer
            </h4>
            <ul className="text-gray-600 list-disc flex flex-col gap-1 w-[350px] || max-[375px]:w-[229px]">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-base font-normal || max-[375px]:hidden">
            Dec 2015 - May 2017
          </p>
        </div>
      </div>
    </div>
  );
};
