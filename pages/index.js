import IndexHead from "../components/IndexHead";

export default function Index() {
  const citiesJson = require("../cities/index.json");

  return (
    <div className="font-sans antialiased text-gray-800 dark:text-white">
      <IndexHead />
      <div className="bg-white dark:bg-black w-full min-h-screen">
        <div className="px-4 py-12 flex flex-col justify-center items-center">
          <svg
            className="mb-4 w-24 h-24 fill-current text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            viewBox="0 0 256 256"
          >
            <path fill="none" d="M0 0h256v256H0z" />
            <path opacity=".2" d="M160 216l-64-32V40l64 32v144z" />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="M96 184l-64 16V56l64-16M160 216l-64-32V40l64 32v144zM160 72l64-16v144l-64 16"
            />
          </svg>
          <h1 className="mb-8 text-5xl font-semibold">Cities API</h1>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Example end-point of city names in{" "}
            <span className="text-purple-600">Latvia</span> in{" "}
            <span className="text-purple-600">latvian</span> language:
          </p>
          <code className="mb-8 block px-3 py-2 text-sm border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-gray-900">
            GET /api/lv/lv
          </code>
          <table className="table-auto">
            <thead className="text-sm text-gray-500 dark:text-gray-400">
              <tr>
                <td className="px-3 py-2">Country</td>
                <td className="px-3 py-2">Languages</td>
              </tr>
            </thead>
            <tbody className="text-sm">
              {Object.keys(citiesJson).map((country) => (
                <tr
                  className="border divide-x dark:border-gray-800 dark:divide-gray-800"
                  key={country}
                >
                  <td className="px-3 py-2 uppercase" key={country}>
                    {country}
                  </td>
                  <td className="px-3 py-2" key="language">
                    {Object.keys(citiesJson[country]).map((language, i) => (
                      <span key={language}>
                        {language}
                        {i < Object.keys(citiesJson[country]).length - 1
                          ? ", "
                          : ""}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
