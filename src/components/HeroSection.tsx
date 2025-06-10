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
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <IntegrationIcon name="Jira" available />
              <IntegrationIcon name="Linear" available />
              <IntegrationIcon name="Asana" available />
              <IntegrationIcon name="GitHub" comingSoon />
              <IntegrationIcon name="ClickUp" comingSoon />
              <IntegrationIcon name="Notion" comingSoon />
              <IntegrationIcon name="Monday" comingSoon />
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
