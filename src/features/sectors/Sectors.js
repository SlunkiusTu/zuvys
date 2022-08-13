import "./sectors.css";
import { getSectors } from "./SectorsApi";
import { Link } from "react-router-dom";

const Sectors = (props) => {
  const sectors = getSectors();

  return (
    <div className="sector">
      <h1>Sektoriai</h1>
      <div className="container">
        {sectors.map((o, i) => {
          return (
            <div className="sector" key={"sector-" + i}>
              <Link to={"/sectors/" + o.id}>
                <h2>{o.name}</h2>
                <img src={o.url} alt={o.name} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sectors;
