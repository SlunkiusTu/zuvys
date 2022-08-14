import { useParams } from "react-router-dom";

export default function Sector() {
  let params = useParams();
  return (
    <main>
      <h2>Sektorius {params.sectorId}</h2>
    </main>
  );
}
