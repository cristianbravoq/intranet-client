import { Link } from "react-router-dom";
import "./style.css";

function NoFound() {
  return (
    <div className="page_404 w-4/5 h-screen">
      <div className="col-sm-10 flex flex-col text-center h-full justify-between">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404</h1>
        </div>
        <div className="contant_box_404">
          <h3 className="h2">Parece que estás perdido</h3>
          <p>¡La página que estás buscando no está disponible!</p>
          <Link className="link_404" to="/home">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoFound;
