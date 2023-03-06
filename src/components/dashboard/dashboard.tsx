import { useAppSelector } from "../../app/hooks";
import SideBar from "../../elements/sidebar";
import GiftCard from "./giftCard";

const Menus = [
  { title: "Capacitaciones", component: GiftCard },
  { title: "Comercial", component: GiftCard },
  { title: "Rappi", component: GiftCard },
  { title: "Gif Cards", component: GiftCard },
];

function Dashboard() {
  const stateOpenSidebar: boolean = useAppSelector(
    (state) => state.openSidebar.Sidebar.open
  );
  return (
    <div className="w-full h-screen flex">
      <SideBar />
      <div
        className={` ${
          stateOpenSidebar ? "sm:ml-20 w-full" : "w-full ml-72"
        } h-full pt-8 duration-500 flex flex-col items-center`}
      >
        <div className=" w-2/3">
          <h2 className="text-center text-2xl">Gift Cards</h2>
          <GiftCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;