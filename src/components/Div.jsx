export const Div = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center">
      {value} <p className="mt-3 text-gray-600 dark:text-[#D1D5DB]">{title}</p>
    </div>
  );
};
