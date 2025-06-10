import { Button } from "@/components/ui/button";
import { PlaneBadge } from "@/components/ui/plane-badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
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
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <IntegrationIcon name="Jira" available />
              <IntegrationIcon name="Linear" available />
              <IntegrationIcon name="Asana" available />
              <IntegrationIcon name="GitHub" comingSoon />
              <IntegrationIcon name="ClickUp" comingSoon />
              <IntegrationIcon name="Notion" comingSoon />
              <IntegrationIcon name="Monday" comingSoon />
            </div>

            {/* Animated vertical lines connecting to Kanban board */}
            <div className="flex justify-center items-center gap-8 mb-4">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="w-0.5 h-16 bg-gradient-to-b from-plane-blue via-blue-400 to-transparent animate-breathe"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    transformOrigin: "top",
                  }}
                />
              ))}
            </div>

            {/* Kanban Interface Recreation */}
            <div className="relative mt-16">
              <div className="mx-auto w-full max-w-6xl bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        📋 Marketing
                      </span>
                      <span className="text-sm text-gray-600">📋 Issues</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-xs bg-gray-100 px-3 py-1 rounded">
                      Filters
                    </button>
                    <button className="text-xs bg-gray-100 px-3 py-1 rounded">
                      View
                    </button>
                    <button className="text-xs bg-blue-500 text-white px-3 py-1 rounded">
                      + New issue
                    </button>
                  </div>
                </div>

                {/* Kanban Board */}
                <div className="grid grid-cols-4 gap-4 p-6">
                  {/* Not Started Column */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-sm font-medium mb-3 text-gray-700">
                      Not Started <span className="text-gray-500">7</span>
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">PROJ-36</span>
                        </div>
                        <p className="text-xs">
                          Feature landing page structure
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs text-gray-500">A</span>
                          <span className="text-xs text-gray-500">🏃 Low</span>
                          <span className="text-xs text-gray-500">
                            📅 30 Oct
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">CONT-18</span>
                        </div>
                        <p className="text-xs">New feature launch blog</p>
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">CONT-15</span>
                        </div>
                        <p className="text-xs">Email for existing users</p>
                      </div>
                    </div>
                  </div>

                  {/* Planned Column */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-sm font-medium mb-3 text-gray-700">
                      📋 Planned <span className="text-gray-500">1</span>
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">PROJ-32</span>
                        </div>
                        <p className="text-xs">
                          AI for feature marketing campaigns
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* In Progress Column */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-sm font-medium mb-3 text-gray-700">
                      ⚡ In progress <span className="text-gray-500">6</span>
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">
                            MKTNG-16
                          </span>
                        </div>
                        <p className="text-xs">Create social media campaigns</p>
                      </div>
                    </div>
                  </div>

                  {/* In Review Column */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-sm font-medium mb-3 text-gray-700">
                      👁 In Review <span className="text-gray-500">4</span>
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">
                            MKTNG-16
                          </span>
                        </div>
                        <p className="text-xs">Data conversion</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow Section */}
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="max-w-2xl mx-auto">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                        <div className="w-8 h-1 bg-blue-500"></div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                        <div className="w-8 h-1 bg-blue-500"></div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                        <div className="w-8 h-1 bg-gray-300"></div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>

                    {/* Status Mapping */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs">J</span>
                          </div>
                          <span className="text-sm">Jira Import</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs">P</span>
                          </div>
                          <span className="text-sm">Plane Status</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Bars */}
                    <div className="grid grid-cols-2 gap-6 mt-4">
                      <div className="space-y-3">
                        <div className="h-8 bg-green-500 rounded flex items-center px-3">
                          <span className="text-white text-sm">Done</span>
                        </div>
                        <div className="h-8 bg-blue-400 rounded flex items-center px-3">
                          <span className="text-white text-sm">
                            In Progress
                          </span>
                        </div>
                        <div className="h-8 bg-gray-400 rounded flex items-center px-3">
                          <span className="text-white text-sm">To Do</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-8 bg-green-600 rounded flex items-center px-3">
                          <span className="text-white text-sm">Done</span>
                        </div>
                        <div className="h-8 bg-orange-500 rounded flex items-center px-3">
                          <span className="text-white text-sm">
                            In Progress
                          </span>
                        </div>
                        <div className="h-8 bg-gray-800 rounded flex items-center px-3">
                          <span className="text-white text-sm">Todo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  const getIcon = (name: string) => {
    switch (name) {
      case "Jira":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V11.513z"
              fill="#2684ff"
            />
            <path
              d="M24 11.513H12.429a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 25.004 24V11.513z"
              fill="#2684ff"
            />
          </svg>
        );
      case "Linear":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12L4 20L20 4L12 12Z" fill="#5E6AD2" />
          </svg>
        );
      case "Asana":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="6" r="4" fill="#F06A6A" />
            <circle cx="6" cy="16" r="4" fill="#F06A6A" />
            <circle cx="18" cy="16" r="4" fill="#F06A6A" />
          </svg>
        );
      case "GitHub":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
              fill="#333"
            />
          </svg>
        );
      case "ClickUp":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M2 18.439s3.846-9.189 10-9.189 10 9.189 10 9.189z"
              fill="#7B68EE"
            />
          </svg>
        );
      case "Notion":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.934zm14.337.745c.093.42 0 .84-.42.888l-.701.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
              fill="#000"
            />
          </svg>
        );
      case "Monday":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.568a1 1 0 01-1.414 0L12 13.414l-4.154 4.154a1 1 0 01-1.414-1.414L10.586 12 6.432 7.846a1 1 0 011.414-1.414L12 10.586l4.154-4.154a1 1 0 011.414 1.414L13.414 12l4.154 4.154a1 1 0 010 1.414z"
              fill="#FF6B6B"
            />
          </svg>
        );
      default:
        return <span className="text-2xl">{name.charAt(0)}</span>;
    }
  };

  return (
    <div className={`relative group ${available ? "animate-float" : ""}`}>
      <div
        className={`
        w-16 h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-300
        ${
          available
            ? "bg-white border-plane-blue text-plane-blue shadow-lg hover:shadow-xl"
            : "bg-gray-100 border-gray-300 text-gray-400"
        }
      `}
      >
        {getIcon(name)}
      </div>
      {comingSoon && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-plane-blue-light text-plane-blue-dark text-xs font-medium uppercase tracking-wider whitespace-nowrap">
            Coming soon
          </div>
        </div>
      )}
    </div>
  );
}
