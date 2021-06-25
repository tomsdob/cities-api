import cities from "../../../cities/index.json";

export default function handler(req, res) {
  const { country, language } = req.query;

  if (!cities[country]) {
    res.status(404).json({
      message: `The country '${country}' has not been found!`,
    });

    return;
  }

  if (!cities[country][language]) {
    res.status(404).json({
      message: `The language '${language}' for country '${country}' has not been found!`,
    });

    return;
  }

  res.status(200).json({
    data: cities[country][language],
  });
}
