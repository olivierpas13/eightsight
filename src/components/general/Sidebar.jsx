import { capitalize } from "lodash";

const Sidebar = ({current, sidebarOptions}) => {

  return (
    <ul className=" menu border-r-2 h-screen w-56 m-0 p-0 rounded-none col-span-1">
      {sidebarOptions.map((option) => (
        <li
          className={`${
            current == option.name
              ? "bg-gray-200 font-extrabold"
              : "bg-white text-gray-700"
          } text-lg cursor-pointer`}
          key={option.name}
        >
          <h2 className="text-inherit" onClick={option.onClick}>
            {option.icon}
            {capitalize(option.name)}
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
