import { useState, useEffect } from 'react';

const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 rounded-md font-medium transition-all ${className}`} {...props}>
    {children}
  </button>
);

function PlaneBadge({ children, className = "" }) {
  return (
    <div className={`whitespace-nowrap inline-flex max-w-min bg-[#E3EAFD] dark:bg-[#3368F04D] border border-[#0A0F2914] dark:border-[#FFFFFF24] text-[#133A9A] dark:text-white rounded-full px-3 py-1 text-xs font-medium ${className}`}>
      {children}
    </div>
  );
}

const FlowingLine = ({ delay = 0 }) => (
  <div className="relative w-8 h-24 flex justify-center">
    {/* Static blue glow around entire line - outer */}
    <div className="absolute w-6 h-full left-1/2 transform -translate-x-1/2 bg-blue-400 opacity-15 blur-lg" />

    {/* Static blue glow around entire line - inner */}
    <div className="absolute w-3 h-full left-1/2 transform -translate-x-1/2 bg-blue-500 opacity-25 blur-md" />

    {/* Static line core */}
    <div className="absolute w-0.5 h-full left-1/2 transform -translate-x-1/2 bg-gray-300 dark:bg-gray-600" />

    <div
      className="absolute w-0.5 h-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-90"
      style={{
        animation: 'flowDown 3s ease-in-out infinite',
        animationDelay: `${delay}s`,
        top: '0px'
      }}
    />
    <style>{`
      @keyframes flowDown {
        0% { transform: translateY(-50%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(150%); opacity: 0; }
      }
    `}</style>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-[#0A0A0A] overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="text-center">
          <PlaneBadge className="mb-6">
            THE SIMPLEST IMPORTERS ON THE PLANET
          </PlaneBadge>

          <h1 className="text-5xl md:text-6xl font-semibold text-black dark:text-white mb-6 leading-tight">
            Switch to plane in clicks
          </h1>

          <p className="text-xl text-gray-600 dark:text-[#FFFFFF99] mb-10 max-w-3xl mx-auto font-normal">
            Break out of chaotic, config-heavy software into Plane<br />
            with our ready importers for Jira, Linear, Asana, and more.
          </p>

          <Button 
  className="whitespace-nowrap border rounded-xl backdrop-blur-3xl max-w-min border-t-2 border-[#3F76FF] dark:border-[#3F76FF] !text-white dark:text-white !text-[#FFFFFF] px-4 py-2 text-sm font-medium mb-16 bg-blue-500 dark:[background:linear-gradient(0deg,rgba(63,118,255,0.12),rgba(63,118,255,0.12)),linear-gradient(rgba(63,118,255,0.2)_0%,rgba(63,118,255,0.04)_100%)]"
>
  Get started with a free workspace
</Button>

          {/* Integration Icons with Animated Lines */}
          <div className="relative mb-0">
            <div className="flex justify-center items-end gap-8">
              <IntegrationIcon name="Jira" available={true} comingSoon={undefined} />
              <IntegrationIcon name="Linear" available={true} comingSoon={undefined} />
              <IntegrationIcon name="Asana" available={true} comingSoon={undefined} />
              <IntegrationIcon name="GitHub" comingSoon={true} available={undefined} />
              <IntegrationIcon name="ClickUp" comingSoon={true} available={undefined} />
              <IntegrationIcon name="Notion" comingSoon={true} available={undefined} />
            </div>
          </div>

          {/* Kanban Interface */}
          <div className="relative">
            <div className="mx-auto w-full max-w-6xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">📋 Marketing</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">📋 Issues</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded transition-colors">
                    Filters
                  </button>
                  <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded transition-colors">
                    View
                  </button>
                  <button className="text-xs bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors">
                    + New issue
                  </button>
                </div>
              </div>

              {/* Kanban Board */}
              <div className="grid grid-cols-4 gap-4 p-6">
                {/* Not Started Column */}
                <KanbanColumn title="Not Started" count={7} emoji="">
                  <KanbanCard
                    id="PROJ-36"
                    title="Feature landing page structure"
                    priority="Low"
                    date="30 Oct"
                    color="orange"
                    assignee="A"
                  />
                  <KanbanCard
                    id="CONT-18"
                    title="New feature launch blog"
                    color="red" priority={undefined} date={undefined} assignee={undefined} />
                  <KanbanCard
                    id="CONT-15"
                    title="Email for existing users"
                    color="purple" priority={undefined} date={undefined} assignee={undefined} />
                </KanbanColumn>

                {/* Planned Column */}
                <KanbanColumn title="Planned" count={1} emoji="📋">
                  <KanbanCard
                    id="PROJ-32"
                    title="AI for feature marketing campaigns"
                    color="purple" priority={undefined} date={undefined} assignee={undefined} />
                </KanbanColumn>

                {/* In Progress Column */}
                <KanbanColumn title="In progress" count={6} emoji="⚡">
                  <KanbanCard
                    id="MKTNG-16"
                    title="Create social media campaigns"
                    color="blue" priority={undefined} date={undefined} assignee={undefined} />
                </KanbanColumn>

                {/* In Review Column */}
                <KanbanColumn title="In Review" count={4} emoji="👁">
                  <KanbanCard
                    id="MKTNG-16"
                    title="Data conversion"
                    color="purple" priority={undefined} date={undefined} assignee={undefined} />
                </KanbanColumn>
              </div>

              {/* Workflow Mapping Section */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-8 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center gap-4">
                      <ProgressStep active />
                      <ProgressLine active />
                      <ProgressStep active />
                      <ProgressLine active />
                      <ProgressStep active />
                      <ProgressLine active={undefined} />
                      <ProgressStep active={undefined} />
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: "75%" }} />
                  </div>

                  {/* Status Mapping */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-medium">J</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Jira Import</span>
                      </div>
                      <StatusBar color="bg-green-500 dark:bg-green-600" label="Done" />
                      <StatusBar color="bg-blue-400 dark:bg-blue-500" label="In Progress" />
                      <StatusBar color="bg-gray-400 dark:bg-gray-600" label="To Do" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-medium">P</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Plane Status</span>
                      </div>
                      <StatusBar color="bg-green-600 dark:bg-green-700" label="Done" />
                      <StatusBar color="bg-orange-500 dark:bg-orange-600" label="In Progress" />
                      <StatusBar color="bg-gray-800 dark:bg-gray-700" label="Todo" />
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

// Components
interface IntegrationIconProps {
  name: string;
  available?: boolean;
  comingSoon?: boolean;
}

const IntegrationIcon: React.FC<IntegrationIconProps> = ({ name, available, comingSoon }) => {
  const getIcon = (name: string) => {
    const icons: { [key: string]: string } = {
      "Jira": "/jira.png",
      "Linear": "/linear.png",
      "Asana": "/Asana.png",
      "GitHub": "/github.png",
      "ClickUp": "/clickup.png",
      "Notion": "/notion.png",
      "Monday": "/monday.png"
    };

    const iconPath = icons[name];
    if (!iconPath) return null;

    return (
      <img
        src={iconPath}
        alt={`${name} icon`}
        className="w-10 h-10 object-contain"
      />
    );
  };

  return (
    <div className="relative flex flex-col items-center group">
      {comingSoon && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="px-1 py-0.5 rounded-full text-[8px] border-1 border-blue-500 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider whitespace-nowrap">
            Coming Soon
          </div>
        </div>
      )}

      <div className={`w-16 h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 ${
        available 
          ? 'bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-600 shadow-lg' 
          : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
      }`}>
        {getIcon(name)}
      </div>

      <FlowingLine delay={Math.random() * 2} />
    </div>
  );
}

interface KanbanColumnProps {
  title: string;
  count: number;
  emoji: string;
  children: React.ReactNode;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, count, emoji, children }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
      <h3 className="text-sm font-medium mb-4 text-gray-700 dark:text-gray-300">
        {emoji} {title} <span className="text-gray-500 dark:text-gray-400">{count}</span>
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

interface KanbanCardProps {
  id: string;
  title: string;
  priority?: string;
  date?: string;
  color: string;
  assignee?: string;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ id, title, priority, date, color, assignee }) => {
  const colorClasses = {
    orange: 'bg-orange-500', red: 'bg-red-500', purple: 'bg-purple-500',
    blue: 'bg-blue-500', green: 'bg-green-500'
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2 h-2 rounded-full ${colorClasses[color] || 'bg-gray-400'}`} />
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{id}</span>
      </div>
      <p className="text-sm text-gray-900 dark:text-gray-100 mb-2 leading-snug">{title}</p>
      {(priority || date || assignee) && (
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          {assignee && <span className="font-medium">{assignee}</span>}
          {priority && <span>🏃 {priority}</span>}
          {date && <span>📅 {date}</span>}
        </div>
      )}
    </div>
  );
}

interface ProgressStepProps {
  active?: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({ active = false }) => (
  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
    active ? 'bg-blue-500 dark:bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
  }`}>
    <div className="w-4 h-4 bg-white rounded" />
  </div>
);

interface ProgressLineProps {
  active?: boolean;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ active = false }) => (
  <div className={`w-8 h-1 ${active ? 'bg-blue-500 dark:bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`} />
);

interface StatusBarProps {
  color: string;
  label: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ color, label }) => (
  <div className={`h-10 ${color} rounded-lg flex items-center px-4 shadow-sm`}>
    <span className="text-white text-sm font-medium">{label}</span>
  </div>
);