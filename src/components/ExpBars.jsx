export const ExpBars = ({ title, list, date }) => {
  return (
    <div className="dark:bg-[#1F2937] w-[896px] h-fit bg-white p-8 rounded-xl flex gap-12 drop-shadow-md || max-[375px]:gap-3 max-[375px]:w-[343px] max-[375px]:flex-col">
      <h3 className="w-[206px]">
        <img src="/logo-upwork.png" />
      </h3>
      <h6 className="text-gray-700 dark:text-[#D1D5DB] text-base font-normal || min-[375px]:hidden max-[375px]:block ">
        {date}
      </h6>
      <div>
        <h4 className="dark:text-[#D1D5DB] text-gray-900 text-xl font-semibold mb-4">
          {title}
        </h4>
        <ul className="dark:text-[#D1D5DB] text-gray-600 list-disc flex flex-col gap-1 w-[350px] || max-[375px]:w-[279px]">
          {list.map((e, index) => {
            return <li key={index}>{e}</li>;
          })}
        </ul>
      </div>
      <p className="  dark:text-[#D1D5DB]text-gray-700 text-base font-normal || max-[375px]:hidden">
        {date}
      </p>
    </div>
  );
};
