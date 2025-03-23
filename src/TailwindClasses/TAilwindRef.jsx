const tailwindUtilities = [
  {
    title: "Breakpoints",
    values: [
      { label: "sm", description: "640px" },
      { label: "md", description: "768px" },
      { label: "lg", description: "1024px" },
      { label: "xl", description: "1280px" },
      { label: "2xl", description: "1536px" },
    ],
  },
  {
    title: "Spacing (Margin & Padding)",
    values: [
      { label: "mb-4", description: "1rem (16px) bottom margin" },
      { label: "mt-4", description: "1rem (16px) top margin" },
      { label: "pt-4", description: "1rem (16px) top padding" },
      { label: "pb-4", description: "1rem (16px) bottom padding" },
    ],
  },
  {
    title: "Typography",
    values: [
      { label: "text-sm", description: "14px" },
      { label: "text-base", description: "16px" },
      { label: "text-lg", description: "18px" },
      { label: "text-xl", description: "20px" },
      { label: "text-2xl", description: "24px" },
    ],
  },
  {
    title: "Borders & Shadows",
    values: [
      { label: "border-2", description: "2px border" },
      { label: "border-red-500", description: "Red border" },
      { label: "rounded-xl", description: "12px border radius" },
      { label: "shadow-lg", description: "Large shadow" },
    ],
  },
  {
    title: "Border Classes",
    values: [
      { label: "border", description: "1px solid" },
      { label: "border-2", description: "2px solid" },
      { label: "border-4", description: "4px solid" },
      { label: "border-8", description: "8px solid" },
      { label: "border-dashed", description: "Dashed Border" },
      { label: "border-dotted", description: "Dotted Border" },
      { label: "border-double", description: "Double Border" },
      { label: "border-collapse", description: "Collapse table borders" },
      { label: "border-separate", description: "Separate table borders" },
      { label: "border-gray-500", description: "Gray border color" },
      { label: "border-blue-500", description: "Blue border color" },
    ],
  },
  {
    title: "Backgrounds & Gradients",
    values: [
      { label: "bg-red-500", description: "Red background" },
      { label: "bg-gradient-to-r from-blue-500 to-green-500", description: "Blue to Green gradient" },
    ],
  },
  {
    title: "Hover & Focus Effects",
    values: [
      { label: "hover:bg-blue-700", description: "Changes background on hover" },
      { label: "focus:ring-2 focus:ring-green-500", description: "Focus outline effect" },
    ],
  },
  {
    title: "Transitions & Animations",
    values: [
      { label: "transition-all", description: "Smooth transition for all properties" },
      { label: "duration-300", description: "300ms transition duration" },
    ],
  },
  {
    title: "Dark Mode",
    values: [
      { label: "dark:bg-gray-800", description: "Background turns dark in dark mode" },
      { label: "dark:text-white", description: "Text turns white in dark mode" },
    ],
  },
  {
    title: "Auto Flow (Grid & Flexbox)",
    values: [
      { label: "grid-flow-row", description: "Auto flow items in a row" },
      { label: "grid-flow-col", description: "Auto flow items in a column" },
      { label: "auto-cols-auto", description: "Auto-sized columns" },
      { label: "auto-rows-auto", description: "Auto-sized rows" },
      { label: "flex-wrap", description: "Wrap items in flexbox" },
      { label: "flex-nowrap", description: "Prevent wrapping in flexbox" },
    ],
  },
];

const TailwindGuide = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Tailwind CSS Utilities</h1>
      {tailwindUtilities.map((section) => (
        <div key={section.title} className="mb-6">
          <h2 className="text-xl font-semibold mb-2 border-b-2 pb-1">{section.title}</h2>
          <table className="w-full border border-gray-300 text-left text-sm md:text-base border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Class</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {section.values.map((item) => (
                <tr key={item.label} className="border">
                  <td className="border px-4 py-2 font-mono">{item.label}</td>
                  <td className="border px-4 py-2">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TailwindGuide;