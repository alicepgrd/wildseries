import type { ReactNode } from "react";

export type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: string;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

function ProgramForm({ children, defaultValue, onSubmit }: ProgramFormProps) {
  return (
    <form
      className="program-form"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.warn(formData);
        const title = formData.get("title") as string;
        const synopsis = formData.get("synopsis") as string;
        const poster = formData.get("poster") as string;
        const country = formData.get("country") as string;
        const year = formData.get("year") as string;

        onSubmit({
          title,
          synopsis,
          poster,
          country,
          year,
        });
      }}
    >
      <label htmlFor="title">Titre de la série</label>
      <input
        type="text"
        name="title"
        defaultValue={defaultValue.title}
        placeholder="Titre"
      />
      <label htmlFor="synopsis">Description de la série</label>
      <input
        type="text"
        name="synopsis"
        defaultValue={defaultValue.synopsis}
        placeholder="Description"
      />
      <label htmlFor="poster">Lien de l'image de la série</label>
      <input
        type="text"
        name="poster"
        defaultValue={defaultValue.poster}
        placeholder="URL de l'image"
      />
      <label htmlFor="country">Pays de production de la série</label>
      <input
        type="text"
        name="country"
        defaultValue={defaultValue.country}
        placeholder="Pays de production"
      />
      <label htmlFor="year">Année de production de la série</label>
      <input
        type="text"
        name="year"
        defaultValue={defaultValue.year}
        placeholder="Année de production"
      />
      <button type="submit">{children}</button>
    </form>
  );
}

export default ProgramForm;
