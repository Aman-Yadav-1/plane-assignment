import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlaneBadge } from "@/components/ui/plane-badge";
import {
  Check,
  Settings,
  Users,
  BarChart3,
  FileText,
  Filter,
  Plus,
} from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const cycleSteps = () => {
      setIsAnimating(true);

      // After 7 seconds, switch to next step
      setTimeout(() => {
        setActiveStep((prev) => {
          if (prev === 3) return 1; // Cycle back to 1 after 3
          return prev + 1;
        });
        setIsAnimating(false);
      }, 7000);
    };

    // Start the cycle after a brief delay
    const timer = setTimeout(() => {
      cycleSteps();
    }, 500);

    // Set up interval for continuous cycling
    const interval = setInterval(cycleSteps, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-1200 mx-auto px-5">
        <div className="text-center mb-16">
          <PlaneBadge className="mb-6">
            THE SIMPLEST IMPORTERS ON THE PLANET
          </PlaneBadge>

          <h2 className="text-4xl font-semibold text-black mb-6 leading-tight">
            As easy as 1-2-3
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            All our importers get all your data into Plane, including tasks,
            comments, files, and anything else, timestamped per the originals.
          </p>

          <Button className="bg-plane-blue hover:bg-plane-blue-alt text-white px-6 py-3 text-sm font-medium rounded-md">
            Try it free
          </Button>
        </div>

        {/* Process Steps Navigation */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 mb-12">
          <ProcessStep
            title="Authorize"
            description="Let Plane to talk to your current work management software."
            isActive={activeStep === 1}
            isAnimating={isAnimating && activeStep === 1}
            onClick={() => setActiveStep(1)}
          />
          <ProcessStep
            title="Map"
            description="Choose how entities in your current tool map to Plane's simple and familiar entities."
            isActive={activeStep === 2}
            isAnimating={isAnimating && activeStep === 2}
            onClick={() => setActiveStep(2)}
          />
          <ProcessStep
            title="Sit back"
            description="Let Plane handle everything else. No loss, no complex configs, nothing."
            isActive={activeStep === 3}
            isAnimating={isAnimating && activeStep === 3}
            onClick={() => setActiveStep(3)}
          />
        </div>

        {/* Interactive Content Area - Fixed Dimensions */}
        <div className="mt-16">
          <div className="w-full h-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {activeStep === 1 && <AuthorizeInterface />}
            {activeStep === 2 && <MapInterface />}
            {activeStep === 3 && <SitBackInterface />}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  title: string;
  description: string;
  isActive?: boolean;
  isAnimating?: boolean;
  onClick?: () => void;
}

function ProcessStep({
  title,
  description,
  isActive,
  isAnimating,
  onClick,
}: ProcessStepProps) {
  return (
    <div className="text-center cursor-pointer group" onClick={onClick}>
      <h3
        className={`text-lg font-semibold mb-4 transition-colors ${
          isActive ? "text-plane-blue" : "text-black"
        }`}
      >
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {description}
      </p>

      {/* Modern progress bar below description - same width as description */}
      <div className="flex justify-center">
        {isActive && (
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div
              className={`bg-plane-blue h-0.5 rounded-full transition-all duration-7000 ease-out ${
                isAnimating ? "w-full" : "w-0"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function AuthorizeInterface() {
  return (
    <div className="h-full p-8 flex flex-col">
      {/* Progress Icons */}
      <div className="flex justify-center items-center gap-6 mb-8">
        <div className="w-10 h-10 bg-plane-blue rounded-full flex items-center justify-center text-white">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-plane-blue"></div>
        <div className="w-10 h-10 bg-plane-blue rounded-full flex items-center justify-center text-white">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-plane-blue rounded-full flex items-center justify-center text-white">
          <Users className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <FileText className="w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h3 className="text-xl font-semibold text-black mb-4">
          Configure Jira
        </h3>

        <p className="text-sm text-gray-600 mb-6">
          Please select the Jira workspace and project you'd like to import.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Select Jira workspace
            </label>
            <div className="w-full p-3 bg-gray-100 rounded-md text-sm text-gray-700">
              Caravel
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Select Jira project
            </label>
            <div className="w-full p-3 bg-gray-100 rounded-md text-sm text-gray-700">
              Marketing
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio text-plane-blue"
                name="import-option"
                defaultChecked
              />
              <span className="ml-2 text-sm text-gray-700">
                Create as a label
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio text-plane-blue"
                name="import-option"
              />
              <span className="ml-2 text-sm text-gray-700">
                Add [issue_type ] in the title
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapInterface() {
  return (
    <div className="h-full p-8 flex flex-col">
      {/* Progress Icons */}
      <div className="flex justify-center items-center gap-6 mb-8">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-plane-blue"></div>
        <div className="w-10 h-10 bg-plane-blue rounded-full flex items-center justify-center text-white">
          <Users className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-plane-blue"></div>
        <div className="w-10 h-10 bg-plane-blue rounded-full flex items-center justify-center text-white">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <FileText className="w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full">
        <h3 className="text-xl font-semibold text-black mb-4">Map states</h3>

        <p className="text-sm text-gray-600 mb-6">
          We have automatically mapped your Jira statuses to Plane's default
          states. You can edit this, including adding new states from right
          here, to get your mapping of choice.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Filter Jira Status
            </span>
            <Filter className="w-4 h-4 text-gray-400" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Done</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">In Progress</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">To Do</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Done</span>
                </div>
              </div>
              <div className="p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">In Progress</span>
                </div>
              </div>
              <div className="p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Todo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SitBackInterface() {
  return (
    <div className="h-full p-6 flex flex-col">
      {/* Progress Icons */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <Users className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-plane-blue"></div>
        <div className="w-10 h-10 bg-plane-blue rounded-full flex items-center justify-center text-white">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-plane-blue"></div>
        <div className="w-10 h-10 bg-plane-blue rounded-full flex items-center justify-center text-white">
          <FileText className="w-5 h-5" />
        </div>
      </div>

      {/* Kanban Board Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Jira Import</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-3 h-3 text-gray-500" />
            <span className="text-xs text-gray-600">Issues</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="text-xs">
            <Filter className="w-3 h-3 mr-1" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            View
          </Button>
          <Button
            size="sm"
            className="bg-plane-blue hover:bg-plane-blue-alt text-xs"
          >
            <Plus className="w-3 h-3 mr-1" />
            New issue
          </Button>
        </div>
      </div>

      {/* Compact Kanban Board */}
      <div className="flex-1 grid grid-cols-4 gap-3 overflow-hidden">
        {["Backlog", "Todo", "In Progress", "Done"].map(
          (column, columnIndex) => (
            <div
              key={column}
              className="bg-gray-50 rounded-lg p-3 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-medium text-gray-700">{column}</h4>
                <Plus className="w-3 h-3 text-gray-400" />
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto">
                {Array.from({ length: columnIndex === 3 ? 2 : 3 }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-md p-2 shadow-sm border"
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                            columnIndex === 0
                              ? "bg-blue-500"
                              : columnIndex === 1
                                ? "bg-gray-400"
                                : columnIndex === 2
                                  ? "bg-purple-500"
                                  : "bg-red-500"
                          }`}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <div className="h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="h-1.5 bg-gray-100 rounded mb-1"></div>
                          <div className="flex gap-1">
                            <div className="h-1 w-6 bg-gray-100 rounded"></div>
                            <div className="h-1 w-8 bg-gray-100 rounded"></div>
                            <div className="h-1 w-4 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                )}

                {columnIndex < 3 && (
                  <button className="w-full p-2 text-left text-plane-blue hover:bg-blue-50 rounded-lg transition-colors text-xs">
                    <Plus className="w-3 h-3 inline mr-1" />
                    New issue
                  </button>
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
