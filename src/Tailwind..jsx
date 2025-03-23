export default function TailwindReference() {
    const tailwindData = [
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
        title: "Margins & Padding",
        values: [
          { label: "mb-4", description: "16px (Bottom Margin)" },
          { label: "mt-4", description: "16px (Top Margin)" },
          { label: "pt-4", description: "16px (Top Padding)" },
          { label: "pb-4", description: "16px (Bottom Padding)" },
        ],
      },
      {
        title: "Font Sizes",
        values: [
          { label: "text-sm", description: "14px", preview: "text-sm" },
          { label: "text-base", description: "16px", preview: "text-base" },
          { label: "text-lg", description: "18px", preview: "text-lg" },
          { label: "text-xl", description: "20px", preview: "text-xl" },
          { label: "text-2xl", description: "24px", preview: "text-2xl" },
          { label: "text-3xl", description: "30px", preview: "text-3xl" },
        ],
      },
      {
        title: "Border Radius",
        values: [
          { label: "rounded-lg", description: "8px", preview: "rounded-lg" },
          { label: "rounded-xl", description: "12px", preview: "rounded-xl" },
          { label: "rounded-2xl", description: "16px", preview: "rounded-2xl" },
          { label: "rounded-3xl", description: "24px", preview: "rounded-3xl" },
        ],
      },
      {
        title: "Font Weights",
        values: [
          { label: "font-thin", description: "100", preview: "font-thin" },
          { label: "font-light", description: "300", preview: "font-light" },
          { label: "font-normal", description: "400", preview: "font-normal" },
          { label: "font-medium", description: "500", preview: "font-medium" },
          { label: "font-semibold", description: "600", preview: "font-semibold" },
          { label: "font-bold", description: "700", preview: "font-bold" },
        ],
      },
      {
        title: "Line Heights",
        values: [
          { label: "leading-none", description: "1.0 (tightest)", preview: "leading-none" },
          { label: "leading-tight", description: "1.25", preview: "leading-tight" },
          { label: "leading-normal", description: "1.5", preview: "leading-normal" },
          { label: "leading-relaxed", description: "1.625", preview: "leading-relaxed" },
          { label: "leading-loose", description: "2.0 (loosest)", preview: "leading-loose" },
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
        ],
      },
    ];
  
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Tailwind CSS Reference</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tailwindData.map((category, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-3">{category.title}</h2>
              <ul className="space-y-2">
                {category.values.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span className="text-sm md:text-base">{item.label} – {item.description}</span>
                    {item.preview && (
                      <span className={`px-2 py-1 bg-gray-100 ${item.preview} border border-gray-300 rounded`}>
                        Preview
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  