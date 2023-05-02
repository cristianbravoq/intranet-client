import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import SideBar from "../../elements/sidebar";

function Dashboard() {

  const stateOpenSidebar: boolean = useAppSelector(
    (state) => state.openSidebar.Sidebar.open
  );
  
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <SideBar />
      <div
        className={`${
          stateOpenSidebar ? "sm:ml-20 w-full" : "w-full ml-72"
        } h-full duration-500 flex flex-col items-center`}
      >
        <div className={`${!stateOpenSidebar && "max-md:hidden"} flex overflow-hidden justify-center w-full`}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;