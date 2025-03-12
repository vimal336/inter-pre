import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const bootstrapClasses = {
  layout: [
    { name: "container", desc: "Centers content and provides a responsive width." },
    { name: "container-fluid", desc: "Full-width container spanning the entire viewport." },
    { name: "row", desc: "Creates a horizontal group of columns using Flexbox." },
    { name: "col", desc: "Creates responsive columns inside a row." },
  ],
  flexbox: [
    { name: "d-flex", desc: "Applies display: flex to an element." },
    { name: "justify-content-center", desc: "Centers content horizontally." },
    { name: "align-items-center", desc: "Centers content vertically." },
    { name: "flex-column", desc: "Arranges flex items in a column." },
  ],
  spacing: [
    { name: "m-3", desc: "Adds margin of 1rem to all sides." },
    { name: "p-3", desc: "Adds padding of 1rem to all sides." },
    { name: "mx-auto", desc: "Centers an element horizontally." },
    { name: "mt-5", desc: "Adds top margin of 3rem." },
  ],
  typography: [
    { name: "text-center", desc: "Centers text horizontally." },
    { name: "fw-bold", desc: "Applies bold font weight." },
    { name: "text-primary", desc: "Changes text color to the primary theme color." },
    { name: "lh-lg", desc: "Applies large line height." },
  ],
  buttons: [
    { name: "btn", desc: "Base button styling." },
    { name: "btn-primary", desc: "Applies primary theme color to button." },
    { name: "btn-outline-secondary", desc: "Creates a bordered secondary button." },
    { name: "btn-lg", desc: "Increases button size." },
  ],
};

const BootstrapClasses = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Bootstrap Important Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="layout" className="w-full">
            <TabsList>
              {Object.keys(bootstrapClasses).map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(bootstrapClasses).map(([category, classes]) => (
              <TabsContent key={category} value={category}>
                <ul className="list-disc pl-5">
                  {classes.map((cls) => (
                    <li key={cls.name} className="mb-2">
                      <span className="font-semibold">{cls.name}</span>: {cls.desc}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BootstrapClasses;
