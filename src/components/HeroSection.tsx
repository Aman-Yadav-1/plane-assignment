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
            <div className="flex flex-wrap justify-center items-start gap-8 mb-4">
              <IntegrationIconWithLine name="Jira" available />
              <IntegrationIconWithLine name="Linear" available />
              <IntegrationIconWithLine name="Asana" available />
              <IntegrationIconWithLine name="GitHub" comingSoon />
              <IntegrationIconWithLine name="ClickUp" comingSoon />
              <IntegrationIconWithLine name="Notion" comingSoon />
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

function IntegrationIconWithLine({
  name,
  available,
  comingSoon,
}: IntegrationIconProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Jira":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
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
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M1.5 1.5l21 21M21 1.5L1.5 22.5"
              stroke="#5E6AD2"
              strokeWidth="2"
            />
            <circle cx="12" cy="12" r="3" fill="#5E6AD2" />
          </svg>
        );
      case "Asana":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="3" fill="#F06A6A" />
            <circle cx="6" cy="16" r="3" fill="#F06A6A" />
            <circle cx="18" cy="16" r="3" fill="#F06A6A" />
          </svg>
        );
      case "GitHub":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              fill="#333"
            />
          </svg>
        );
      case "ClickUp":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
              stroke="#7B68EE"
              strokeWidth="2"
              fill="none"
            />
            <path d="M12 7v10" stroke="#7B68EE" strokeWidth="2" />
            <path d="M7 9.5l5-2.5 5 2.5" stroke="#7B68EE" strokeWidth="2" />
          </svg>
        );
      case "Notion":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
              stroke="#000"
              strokeWidth="2"
              fill="none"
            />
            <path d="M8 12h8M8 8h8M8 16h6" stroke="#000" strokeWidth="2" />
          </svg>
        );
      default:
        return <span className="text-2xl text-gray-400">{name.charAt(0)}</span>;
    }
  };

  return (
    <div
      className={`relative group flex flex-col items-center ${available ? "animate-float" : ""}`}
    >
      <div
        className={`
        w-16 h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-300
        ${
          available
            ? "bg-white border-plane-blue shadow-lg hover:shadow-xl"
            : "bg-white border-gray-300"
        }
      `}
      >
        {getIcon(name)}
      </div>

      {/* Individual animated line for each icon */}
      <div
        className="w-0.5 h-20 bg-gradient-to-b from-plane-blue via-blue-400 to-transparent animate-breathe mt-2"
        style={{
          animationDelay: `${Math.random() * 2}s`,
          transformOrigin: "top",
        }}
      />

      {comingSoon && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-plane-blue-light text-plane-blue-dark text-xs font-medium uppercase tracking-wider whitespace-nowrap">
            Coming soon
          </div>
        </div>
      )}
    </div>
  );
}
