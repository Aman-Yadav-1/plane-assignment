import { useState, useEffect } from "react";
import {
  Check,
  Settings,
  Users,
  BarChart3,
  FileText,
  Filter,
  Plus,
} from "lucide-react";

// Simple Button component
function Button({ children, className = "", variant = "default", size = "default", ...props }) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-8 px-3 text-xs"
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Simple PlaneBadge component
function PlaneBadge({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 ${className}`}>
      {children}
    </div>
  );
}

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
    <section className="bg-white dark:bg-[#0A0A0A] font-sans min-h-screen">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="text-center mb-16">
          <PlaneBadge className="mb-6">
            THE SIMPLEST IMPORTERS ON THE PLANET
          </PlaneBadge>

          <h2 className="text-6xl font-semibold text-black dark:text-white mb-6 leading-tight">
            As easy as 1-2-3
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            All our importers get all your data into Plane, including tasks,
            comments, files, and anything else, timestamped per the originals.
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium rounded-xl">
            Try it free
          </Button>
        </div>

        {/* Process Steps Navigation */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 mb-12">
          <ProcessStep
            title="Authorize"
            description={"Let Plane to talk to your current work\nmanagement software."}
            isActive={activeStep === 1}
            isAnimating={isAnimating && activeStep === 1}
            onClick={() => {
              setIsAnimating(false);
              setActiveStep(1);
              setTimeout(() => setIsAnimating(true), 50);
            }}
          />
          <ProcessStep
            title="Map"
            description={"Choose how entities in your current tool map to\nPlane's simple and familiar entities."}
            isActive={activeStep === 2}
            isAnimating={isAnimating && activeStep === 2}
            onClick={() => {
              setIsAnimating(false);
              setActiveStep(2);
              setTimeout(() => setIsAnimating(true), 50);
            }}
          />
          <ProcessStep
            title="Sit back"
            description={"Let Plane handle everything else. No loss,\nno complex configs, nothing."}
            isActive={activeStep === 3}
            isAnimating={isAnimating && activeStep === 3}
            onClick={() => {
              setIsAnimating(false);
              setActiveStep(3);
              setTimeout(() => setIsAnimating(true), 50);
            }}
          />
        </div>

        {/* Interactive Content Area - Fixed Dimensions with Double Borders */}
        <div className="mt-16">
          {/* Outer border container */}
          <div className="w-full h-[600px] bg-gray-200 dark:bg-gray-700 rounded-2xl p-1 shadow-xl">
            {/* Inner border container */}
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-600 overflow-hidden">
              {activeStep === 1 && <AuthorizeInterface />}
              {activeStep === 2 && <MapInterface />}
              {activeStep === 3 && <SitBackInterface />}
            </div>
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
        className={`text-xl font-semibold transition-colors ${
          isActive ? "text-black dark:text-white" : "text-black dark:text-white"
        }`}
      >
        {title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
        {description}
      </p>

      <div className="flex justify-center">
        {isActive && (
          <div className="w-[80%] bg-gray-200 dark:bg-gray-600 rounded-full h-0.5">
            <div
              className={`bg-blue-600 h-0.5 rounded-full transition-all duration-[7000ms] ease-out ${
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
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-blue-600"></div>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <Users className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <FileText className="w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
          Configure Jira
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Please select the Jira workspace and project you'd like to import.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Jira workspace
            </label>
            <div className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-200">
              Caravel
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Jira project
            </label>
            <div className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-200">
              Marketing
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <label className="flex items-center">
              <input
                type="radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600"
                name="import-option"
                defaultChecked
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">
                Create as a label
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600"
                name="import-option"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">
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
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-blue-600"></div>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <Users className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-blue-600"></div>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <FileText className="w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Map states</h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          We have automatically mapped your Jira statuses to Plane's default
          states. You can edit this, including adding new states from right
          here, to get your mapping of choice.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filter Jira Status
            </span>
            <Filter className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-200">Done</span>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-200">In Progress</span>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-200">To Do</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-200">Done</span>
                </div>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-200">In Progress</span>
                </div>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-200">Todo</span>
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
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <Users className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          <Settings className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-blue-600"></div>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div className="w-12 h-0.5 bg-blue-600"></div>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <FileText className="w-5 h-5" />
        </div>
      </div>

      {/* Kanban Board Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            <span className="text-sm font-medium text-black dark:text-white">Jira Import</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-3 h-3 text-gray-500 dark:text-gray-400" />
            <span className="text-xs text-gray-600 dark:text-gray-300">Issues</span>
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
            className="bg-blue-600 hover:bg-blue-700 text-xs"
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
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300">{column}</h4>
                <Plus className="w-3 h-3 text-gray-400 dark:text-gray-500" />
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto">
                {Array.from({ length: columnIndex === 3 ? 2 : 3 }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-md p-2 shadow-sm border border-gray-200 dark:border-gray-600"
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
                          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
                          <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded mb-1"></div>
                          <div className="flex gap-1">
                            <div className="h-1 w-6 bg-gray-100 dark:bg-gray-700 rounded"></div>
                            <div className="h-1 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                            <div className="h-1 w-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                )}

                {columnIndex < 3 && (
                  <button className="w-full p-2 text-left text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors text-xs">
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