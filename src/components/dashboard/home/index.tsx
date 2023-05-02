import { Calendario } from "./Calendar";
import { culturaMeta } from "../../../assets/img/gestion";

import PostItem from "./PostItem";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="border border-solid flex flex-row max-md:flex-col w-full max-md:w-screen gap-1 max-md:overflow-y-scroll">
      <div className="bg-slate-800 rounded-sm text-white max-md:w-auto md:w-3/5">
        <section className="layout text-center items-center h-screen">
          <div className="header flex justify-center h-full items-center">
            <h2 className="text-2xl font-semibold">
              Gestion Humana - Creaciones Nadar.
            </h2>
          </div>
          <div className="leftSide flex flex-row justify-around w-full items-center">
            <button className="hover:bg-red-300 focus:bg-red-400 px-2 py-2 rounded-md bg-slate-500" onClick={() => navigate(`/home/informacion`)}>Historia</button>
            <button className="hover:bg-red-400 focus:bg-red-400 px-2 py-2 rounded-md bg-slate-500">Empleos</button>
            <button className="hover:bg-red-400 focus:bg-red-400 px-2 py-2 rounded-md bg-slate-500">Recreacion</button>
            <button className="hover:bg-red-400 focus:bg-red-400 px-2 py-2 rounded-md bg-slate-500">Fechas</button>
          </div>
          <div className="flex body justify-center mx-5">
            <img src={culturaMeta} alt="Cultura Meta" />
            {/* <Calendario /> */}
          </div>
          <div className="footer flex justify-center h-full items-center">
            <div className="">
              Informacion suplementaria de la empresa.
            </div>
          </div>
        </section>
      </div>
      <div className="md:w-2/5 max-md:w-full max-md:px-4 md:overflow-y-scroll post">
        {DUMY_DATA.map(
          (post: {
            id: number;
            username: string;
            userImg: string;
            imgPost: string;
            caption: string;
          }) => {
            return (
              <PostItem
                key={post.id}
                username={post.username}
                userImg={post.userImg}
                imgPost={post.imgPost}
                caption={post.caption}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

const DUMY_DATA = [
  {
    id: 1,
    username: "Johan",
    userImg: "https://links.papareact.com/3ke",
    imgPost:
      "https://resetmarketingdigital.com/wp-content/uploads/2019/10/Areas-de-recursos-humanos-innovadoras.jpg",
    caption: "Informacion general de recursos humanos prueba 1",
  },
  {
    id: 2,
    username: "Empleado 2",
    userImg: "https://links.papareact.com/3ke",
    imgPost:
      "https://www.aicad.es/asset/img/380x253/2/objetivos-para-el-rea-de-recursos-humanos.jpg",
    caption: "Informacion para vacante de puesto xxxxx",
  }
];

export default Home;
