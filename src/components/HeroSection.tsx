import { Button } from "@/components/ui/button";
import { PlaneBadge } from "@/components/ui/plane-badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Horizontal flowing curved gradient background elements */}
      <div className="absolute inset-0">
        {/* Left flowing curve - flows from left edge across screen */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="leftFlowGradient" cx="0%" cy="30%" r="150%">
                <stop
                  offset="0%"
                  stopColor="rgb(196, 181, 253)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="40%"
                  stopColor="rgb(196, 181, 253)"
                  stopOpacity="0.25"
                />
                <stop
                  offset="70%"
                  stopColor="rgb(196, 181, 253)"
                  stopOpacity="0.1"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(196, 181, 253)"
                  stopOpacity="0"
                />
              </radialGradient>
            </defs>
            <path
              d="M0,0 C400,50 600,100 900,180 C1050,220 1150,260 1200,300 L1200,0 L0,0 Z"
              fill="url(#leftFlowGradient)"
            />
          </svg>
        </div>

        {/* Right flowing curve - flows from right edge across screen */}
        <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient
                id="rightFlowGradient"
                cx="100%"
                cy="70%"
                r="150%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(196, 181, 253)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="40%"
                  stopColor="rgb(196, 181, 253)"
                  stopOpacity="0.25"
                />
                <stop
                  offset="70%"
                  stopColor="rgb(196, 181, 253)"
                  stopOpacity="0.1"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(196, 181, 253)"
                  stopOpacity="0"
                />
              </radialGradient>
            </defs>
            <path
              d="M1200,600 C800,550 600,500 300,420 C150,380 50,340 0,300 L0,600 L1200,600 Z"
              fill="url(#rightFlowGradient)"
            />
          </svg>
        </div>
      </div>
      <div className="max-w-1200 mx-auto px-5 pt-22 pb-20">
        <div className="text-center">
          <PlaneBadge className="mb-8">
            THE SIMPLEST IMPORTERS ON THE PLANET
          </PlaneBadge>

          <h1 className="text-64 font-semibold text-black mb-6 leading-tight">
            Switch to plane in clicks
          </h1>

          <p className="text-20 text-gray-600 mb-10 max-w-3xl mx-auto font-normal">
            Break out of chaotic, config-heavy software into Plane with our
            ready importers for Jira, Linear, Asana, and more.
          </p>

          <Button className="bg-plane-blue hover:bg-plane-blue-alt text-white px-6 py-3 text-base font-medium rounded-md mb-16">
            Get started with a free workspace
          </Button>

          {/* Integration Flow Animation */}
          <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <IntegrationIcon name="Jira" available />
              <IntegrationIcon name="Linear" available />
              <IntegrationIcon name="Asana" available />
              <IntegrationIcon name="GitHub" comingSoon />
              <IntegrationIcon name="ClickUp" comingSoon />
              <IntegrationIcon name="Notion" comingSoon />
              <IntegrationIcon name="Monday" comingSoon />
            </div>

            {/* Hero Image */}
            <div className="relative mt-16">
              <div className="mx-auto w-full max-w-4xl">
                <img
                  src="https://images.plane.so/imports/hero/hero-dark.webp"
                  alt="Plane imports dashboard preview"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface IntegrationIconProps {
  name: string;
  available?: boolean;
  comingSoon?: boolean;
}

function IntegrationIcon({
  name,
  available,
  comingSoon,
}: IntegrationIconProps) {
  return (
    <div className={`relative group ${available ? "animate-float" : ""}`}>
      <div
        className={`
        w-16 h-16 rounded-xl flex items-center justify-center text-sm font-medium border-2
        ${
          available
            ? "bg-white border-plane-blue text-plane-blue shadow-lg"
            : "bg-gray-100 border-gray-300 text-gray-400"
        }
      `}
      >
        {name}
      </div>
      {comingSoon && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
          Coming soon
        </div>
      )}
    </div>
  );
}
