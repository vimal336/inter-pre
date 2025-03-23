import TailwindReference from "./Tailwind.";

const bootstrapClasses = {
  Layout: [
    { name: "container", desc: "Centers content and provides a responsive width." },
    { name: "container-fluid", desc: "Full-width container spanning the entire viewport." },
    { name: "row", desc: "Creates a horizontal group of columns using Flexbox." },
    { name: "col", desc: "Creates responsive columns inside a row." },
  ],
  Flexbox: [
    { name: "d-flex", desc: "Applies display: flex to an element." },
    { name: "justify-content-center", desc: "Centers content horizontally." },
    { name: "align-items-center", desc: "Centers content vertically." },
    { name: "flex-column", desc: "Arranges flex items in a column." },
  ],
  Spacing: [
    { name: "m-3", desc: "Adds margin of 1rem to all sides." },
    { name: "p-3", desc: "Adds padding of 1rem to all sides." },
    { name: "mx-auto", desc: "Centers an element horizontally." },
    { name: "mt-5", desc: "Adds top margin of 3rem." },
  ],
  Typography: [
    { name: "text-center", desc: "Centers text horizontally." },
    { name: "fw-bold", desc: "Applies bold font weight." },
    { name: "text-primary", desc: "Changes text color to the primary theme color." },
    { name: "lh-lg", desc: "Applies large line height." },
  ],
  Buttons: [
    { name: "btn", desc: "Base button styling." },
    { name: "btn-primary", desc: "Applies primary theme color to button." },
    { name: "btn-outline-secondary", desc: "Creates a bordered secondary button." },
    { name: "btn-lg", desc: "Increases button size." },
  ],
};

const BootstrapClasses = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Bootstrap Important Classes</h2>
      <div className="space-y-4">
        {Object.entries(bootstrapClasses).map(([category, classes], index) => (
          <details key={index} className="border rounded-lg p-4 bg-white shadow">
            <summary className="text-lg font-semibold cursor-pointer">
              {category}
            </summary>
            <ul className="mt-2 space-y-2">
              {classes.map((cls, i) => (
                <li key={i} className="p-2 border rounded-md bg-gray-100">
                  <span className="font-medium text-blue-600">{cls.name}:</span> {cls.desc}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
      <TailwindReference/> 
    </div>

  );
};

export default BootstrapClasses;
