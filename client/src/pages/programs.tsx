import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

const ProgramsPage = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <>
      {programs?.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <img src={program.poster} alt={program.title} />
          <p>{program.synopsis}</p>
          <p>
            {program.country} - {program.year}
          </p>
        </div>
      ))}
    </>
  );
};

export default ProgramsPage;
