import { useState } from "react";

export default function TanstackQuery() {
  const [query, setQuery] = useState("");

  const items = [
    "Apples",
    "Banana",
    "Cherry",
    "Dates",
    "Elderberry",
    "Fig",
    "Grapes",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">
      Search tanstack query
      </h1>

      <div className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search fruits..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        <ul className="mt-4 space-y-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="p-2 bg-white border rounded-md shadow-sm hover:bg-orange-50 transition"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center">No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
