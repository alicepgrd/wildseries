// Some data to make the trick
import type { RequestHandler } from "express";
const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((categories) =>
      categories.name.includes(req.query.q as string),
    );

    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const categorie = categories.find((p) => p.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
