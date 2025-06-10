import { Button } from "@/components/ui/button";
import { PlaneBadge } from "@/components/ui/plane-badge";

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-1200 mx-auto px-5">
        <div className="text-center mb-16">
          <PlaneBadge className="mb-6">
            THE SIMPLEST IMPORTERS ON THE PLANET
          </PlaneBadge>

          <h2 className="text-56 font-semibold text-black mb-6 leading-tight">
            As easy as 1-2-3
          </h2>

          <p className="text-20 text-gray-600 mb-8 max-w-2xl mx-auto">
            All our importers get all your data into Plane, including tasks,
          </p>

          <Button className="bg-plane-blue hover:bg-plane-blue-alt text-white px-6 py-3 text-base font-medium rounded-md">
            Try it free
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          <ProcessStep
            number="1"
            title="Authorize"
            description="Let Plane to talk to your current work management software."
            showProgress
          />
          <ProcessStep
            number="2"
            title="Map"
            description="Choose how entities in your current tool map to Plane's simple and familiar entities."
          />
          <ProcessStep
            number="3"
            title="Sit back"
            description="Let Plane handle everything else. No loss, no complex configs, nothing."
          />
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  showProgress?: boolean;
}

function ProcessStep({
  number,
  title,
  description,
  showProgress,
}: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-plane-blue text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-6">
        {number}
      </div>

      <h3 className="text-2xl font-semibold text-black mb-4">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        {description}
      </p>

      {showProgress && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-plane-blue h-2 rounded-full animate-pulse"
            style={{ width: "65%" }}
          ></div>
        </div>
      )}
    </div>
  );
}
