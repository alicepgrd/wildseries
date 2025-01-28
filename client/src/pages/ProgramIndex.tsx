import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProgramIndex.css";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function ProgramIndex() {
  const [programs, setPrograms] = useState([] as Program[]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data: Program[]) => {
        setPrograms(data);
      });
  }, []);

  return (
    <section className="program-container">
      <Link to="/programs/new" className="add-button">
        Ajouter une nouvelle carte
      </Link>
      {programs?.map((program) => (
        <section key={program.id} className="program-card">
          <h2>{program.title}</h2>
          <img src={program.poster} alt={program.title} />
          <p>{program.synopsis}</p>
          <p className="info">
            {program.country} - {program.year}
          </p>
        </section>
      ))}
    </section>
  );
}

export default ProgramIndex;
