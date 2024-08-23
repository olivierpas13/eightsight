import Navbar from "./components/general/Navbar";
import { MdDashboard, MdAssistant } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { useState } from "react";
import AssistantModal from "./modals/AssistantModal";
import Sidebar from "./components/general/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Database from "./components/database/Database";

function App() {
  const [current, setCurrent] = useState("dashboard");

  const sidebarOptions = [
    {
      name: "dashboard",
      icon: <MdDashboard />,
      onClick: () => setCurrent("dashboard"),
    },
    {
      name: "database",
      icon: <FaDatabase />,
      onClick: () => setCurrent("database"),
    },
    {
      name: "assistant",
      icon: <MdAssistant />,
      onClick: () => {
        document.getElementById("assistant_modal").showModal();
      },
    },
  ];

  return (
    <div className="overflow-hidden">
      <AssistantModal />
      <div className="flex w-screen flex-col">
        <Navbar />
        <div className="flex  ">
          <Sidebar current={current} sidebarOptions={sidebarOptions} />
          {current === "dashboard" && <Dashboard/>}
          {current === "database" && <Database/>}

        </div>
      </div>
    </div>
  );
}

export default App;
