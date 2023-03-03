import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import SideBar from "../../elements/sidebar";
import Stepper from "../../elements/stepper";

function Dashboard() {
  const stateOpenSidebar: boolean = useAppSelector(
    (state) => state.openSidebar.Sidebar.open
  );
  useEffect(() => {
    console.log(stateOpenSidebar);
  });

  return (
    <div className="w-full h-screen flex">
      <SideBar />
      <div
        className={` ${
          stateOpenSidebar ? "sm:ml-20 w-full" : "w-full ml-72"
        } h-full pt-8 duration-500 flex flex-col items-center`}
      >
        <div className="">
          <Stepper />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
