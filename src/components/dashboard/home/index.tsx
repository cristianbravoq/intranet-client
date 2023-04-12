import { Calendario } from "./Calendar";
import PostItem from "./PostItem";
import "./home.css";

function Home() {
  return (
    <div className="container flex gap-2">
      <div className="w-3/5 bg-slate-800 rounded-sm text-white">
        <section className="layout text-center items-center h-screen">
          <div className="header flex justify-center h-full items-center">
            <div className="">
              Recursos Humanos Creaciones Nadar.
            </div>
          </div>
          <div className="leftSide flex flex-col gap-3 justify-around w-full h-full items-center">
            <button className="hover:bg-red-400 px-2 rounded-md bg-slate-500">Mision</button>
            <button className="hover:bg-red-400 px-2 rounded-md bg-slate-500">Vision</button>
            <button className="hover:bg-red-400 px-2 rounded-md bg-slate-500">Vacantes</button>
            <button className="hover:bg-red-400 px-2 rounded-md bg-slate-500">Seguridad</button>
            <button className="hover:bg-red-400 px-2 rounded-md bg-slate-500">Recreacion</button>
            <button className="hover:bg-red-400 px-2 rounded-md bg-slate-500">Fechas</button>
          </div>
          <div className="body justify-center mr-5">
            <Calendario />
          </div>
          <div className="footer flex justify-center h-full items-center">
            <div className="">
              Informacion suplementaria de la empresa.
            </div>
          </div>
        </section>
      </div>
      <div className="w-2/5 overflow-y-scroll post">
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
    username: "Empleado 1",
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
  },
  {
    id: 1,
    username: "Empleado 1",
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
  },
  {
    id: 1,
    username: "Empleado 1",
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
  },
  {
    id: 1,
    username: "Empleado 1",
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
  },
];

export default Home;
