export const ExpBars = ({ title, list, list2, list3, list4, date }) => {
  return (
    <div className="w-[896px] h-fit bg-white p-8 rounded-xl flex gap-12">
      <h3 className="w-[206px] h-7 ">Upwork</h3>
      <div>
        <h4 className="text-gray-900 text-xl font-semibold mb-4">{title}</h4>
        <ul className="text-gray-600 list-disc flex flex-col gap-1 w-[350px]">
          <li>{list}</li>
          <li>{list2}</li>
          <li>{list3}</li>
          <li>{list4}</li>
        </ul>
      </div>
      <p className="text-gray-700 text-base font-normal">{date}</p>
    </div>
  );
};
