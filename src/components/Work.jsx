import { WorkBar } from "./WorkBar";
import { WorkBarRev } from "./WorkBarRev";

export const Work = () => {
  return (
    <div className="py-24 px-20 h-[1848px] flex flex-col items-center">
      <p className="py-1 px-5 bg-gray-200 rounded-xl text-gray-600 text-sm font-medium mb-4">
        Work
      </p>
      <p className="text-gray-600 text-xl font-normal mb-12">
        Some of the noteworthy projects I have built:
      </p>
      <div>
        <WorkBar />
        <WorkBarRev />
        <WorkBar />
      </div>
    </div>
  );
};
