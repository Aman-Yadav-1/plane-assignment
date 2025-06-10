import { useState, useEffect } from 'react';

const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 rounded-md font-medium transition-all ${className}`} {...props}>
    {children}
  </button>
);

const PlaneBadge = ({ children, className }) => (
  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium uppercase tracking-wider ${className}`}>
    {children}
  </div>
);

const FlowingLine = ({ delay = 0 }) => (
  <div className="relative w-0.5 h-16 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 overflow-hidden">
    <div 
      className="absolute w-full h-8 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-80"
      style={{
        animation: 'flowDown 3s ease-in-out infinite',
        animationDelay: `${delay}s`,
        top: '-32px'
      }}
    />
    <style jsx>{`
      @keyframes flowDown {
        0% { transform: translateY(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(100px); opacity: 0; }
      }
    `}</style>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="text-center">
          <PlaneBadge className="mb-8 border-blue-500 border-1">
            THE SIMPLEST IMPORTERS ON THE PLANET
          </PlaneBadge>

          <h1 className="text-5xl md:text-6xl font-semibold text-black mb-6 leading-tight">
            Switch to plane in clicks
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-normal">
            Break out of chaotic, config-heavy software into Plane with our
            ready importers for Jira, Linear, Asana, and more.
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium rounded-md mb-16">
            Get started with a free workspace
          </Button>

          {/* Integration Icons with Animated Lines */}
          <div className="relative mb-0">
            <div className="flex justify-center items-end gap-8">
              <IntegrationIcon name="Jira" available={true} />
              <IntegrationIcon name="Linear" available={true} />
              <IntegrationIcon name="Asana" available={true} />
              <IntegrationIcon name="GitHub" comingSoon={true} />
              <IntegrationIcon name="ClickUp" comingSoon={true} />
              <IntegrationIcon name="Notion" comingSoon={true} />
            </div>
          </div>

          {/* Kanban Interface */}
          <div className="relative">
            <div className="mx-auto w-full max-w-6xl bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">📋 Marketing</span>
                    <span className="text-sm text-gray-600">📋 Issues</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">
                    Filters
                  </button>
                  <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">
                    View
                  </button>
                  <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors">
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
                    color="red"
                  />
                  <KanbanCard 
                    id="CONT-15"
                    title="Email for existing users"
                    color="purple"
                  />
                </KanbanColumn>

                {/* Planned Column */}
                <KanbanColumn title="Planned" count={1} emoji="📋">
                  <KanbanCard 
                    id="PROJ-32"
                    title="AI for feature marketing campaigns"
                    color="purple"
                  />
                </KanbanColumn>

                {/* In Progress Column */}
                <KanbanColumn title="In progress" count={6} emoji="⚡">
                  <KanbanCard 
                    id="MKTNG-16"
                    title="Create social media campaigns"
                    color="blue"
                  />
                </KanbanColumn>

                {/* In Review Column */}
                <KanbanColumn title="In Review" count={4} emoji="👁">
                  <KanbanCard 
                    id="MKTNG-16"
                    title="Data conversion"
                    color="purple"
                  />
                </KanbanColumn>
              </div>

              {/* Workflow Mapping Section */}
              <div className="border-t border-gray-200 p-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center gap-4">
                      <ProgressStep active />
                      <ProgressLine active />
                      <ProgressStep active />
                      <ProgressLine active />
                      <ProgressStep active />
                      <ProgressLine />
                      <ProgressStep />
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: "75%" }} />
                  </div>

                  {/* Status Mapping */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-medium">J</span>
                        </div>
                        <span className="text-sm font-medium">Jira Import</span>
                      </div>
                      <StatusBar color="bg-green-500" label="Done" />
                      <StatusBar color="bg-blue-400" label="In Progress" />
                      <StatusBar color="bg-gray-400" label="To Do" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-medium">P</span>
                        </div>
                        <span className="text-sm font-medium">Plane Status</span>
                      </div>
                      <StatusBar color="bg-green-600" label="Done" />
                      <StatusBar color="bg-orange-500" label="In Progress" />
                      <StatusBar color="bg-gray-800" label="Todo" />
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
function IntegrationIcon({ name, available, comingSoon }) {
  const getIcon = (name) => {
    const iconProps = "w-8 h-8";
    switch (name) {
      case "Jira":
        return (
          <svg className={iconProps} viewBox="0 0 256 256" fill="none">
            <rect width="256" height="256" rx="24" fill="#0052CC"/>
            <path d="M222 127.5c0 1.5-.8 2.8-2 3.6L144.8 186c-1.2.8-2.8.8-4 0l-75.2-54.9c-1.2-.8-2-2.1-2-3.6s.8-2.8 2-3.6L140.8 69c1.2-.8 2.8-.8 4 0l75.2 54.9c1.2.8 2 2.1 2 3.6z" fill="#2684FF"/>
            <path d="M142.8 97.3L93.5 61.5c-1.2-.8-2.8-.8-4 0L40.2 96.4c-1.2.8-2 2.1-2 3.6s.8 2.8 2 3.6l49.3 35.8c1.2.8 2.8.8 4 0l49.3-35.8c1.2-.8 2-2.1 2-3.6s-.8-2.9-2-3.7z" fill="#2684FF" opacity="0.8"/>
          </svg>
        );
      case "Linear":
        return (
          <svg className={iconProps} viewBox="0 0 256 256" fill="none">
            <rect width="256" height="256" rx="24" fill="#5E6AD2"/>
            <path d="M64 192L192 64" stroke="white" strokeWidth="12" strokeLinecap="round"/>
            <path d="M108 148L148 108" stroke="white" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="128" cy="128" r="8" fill="white"/>
            <path d="M64 64l32 32M160 160l32 32" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        );
      case "Asana":
        return (
          <svg className={iconProps} viewBox="0 0 256 256" fill="none">
            <rect width="256" height="256" rx="24" fill="#f06a6a"/>
            <circle cx="128" cy="80" r="28" fill="white"/>
            <circle cx="80" cy="176" r="28" fill="white"/>
            <circle cx="176" cy="176" r="28" fill="white"/>
          </svg>
        );
      case "GitHub":
        return (
          <svg className={iconProps} viewBox="0 0 256 256" fill="none">
            <rect width="256" height="256" rx="24" fill="#181717"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M128 24C77.3 24 36 65.3 36 116c0 40.6 26.3 75.1 62.8 87.3 4.6.8 6.3-2 6.3-4.4v-15.5c-25.6 5.6-31-12.3-31-12.3-4.2-10.7-10.2-13.5-10.2-13.5-8.3-5.7.6-5.6.6-5.6 9.2.7 14.1 9.5 14.1 9.5 8.2 14 21.5 10 26.7 7.6.8-5.9 3.2-10 5.8-12.3-20.4-2.3-41.8-10.2-41.8-45.4 0-10 3.6-18.2 9.5-24.6-.9-2.3-4.1-11.7.9-24.4 0 0 7.7-2.5 25.2 9.4 7.3-2 15.1-3.1 22.9-3.1s15.6 1 22.9 3.1c17.5-11.9 25.2-9.4 25.2-9.4 5 12.7 1.8 22.1.9 24.4 5.9 6.4 9.5 14.6 9.5 24.6 0 35.3-21.5 43.1-42 45.4 3.3 2.8 6.3 8.4 6.3 17v25.2c0 2.4 1.7 5.3 6.3 4.4C201.7 191.1 228 156.6 228 116c0-50.7-41.3-92-92-92z" fill="white"/>
          </svg>
        );
      case "ClickUp":
        return (
          <svg className={iconProps} viewBox="0 0 256 256" fill="none">
            <rect width="256" height="256" rx="24" fill="#7b68ee"/>
            <path d="M64 96l32 32 64-64" stroke="white" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M80 144l16 16 32-32M128 144l16 16 32-32" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="200" cy="64" r="12" fill="#ff4757"/>
          </svg>
        );
      case "Notion":
        return (
          <svg className={iconProps} viewBox="0 0 256 256" fill="none">
            <rect width="256" height="256" rx="24" fill="#000"/>
            <path d="M64 64h128v128H64z" stroke="white" strokeWidth="8" fill="none"/>
            <path d="M80 88h96M80 112h96M80 136h64" stroke="white" strokeWidth="6"/>
            <path d="M176 48l16 16-16 16" fill="#ff5757"/>
          </svg>
        );
      default:
        return <span className="text-2xl text-gray-400">{name.charAt(0)}</span>;
    }
  };

  return (
    <div className="relative flex flex-col items-center group">
      {comingSoon && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium uppercase tracking-wider whitespace-nowrap text-[10px]">
            Coming Soon
          </div>
        </div>
      )}
      
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 ${available ? 'bg-white border-blue-200 shadow-lg' : 'bg-gray-50 border-gray-200'}`}>
        {getIcon(name)}
      </div>
      
      <FlowingLine delay={Math.random() * 2} />
    </div>
  );
}

function KanbanColumn({ title, count, emoji, children }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-sm font-medium mb-4 text-gray-700">
        {emoji} {title} <span className="text-gray-500">{count}</span>
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function KanbanCard({ id, title, priority, date, color, assignee }) {
  const colorClasses = {
    orange: 'bg-orange-500', red: 'bg-red-500', purple: 'bg-purple-500',
    blue: 'bg-blue-500', green: 'bg-green-500'
  };

  return (
    <div className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2 h-2 rounded-full ${colorClasses[color] || 'bg-gray-400'}`} />
        <span className="text-xs text-gray-600 font-medium">{id}</span>
      </div>
      <p className="text-sm text-gray-900 mb-2 leading-snug">{title}</p>
      {(priority || date || assignee) && (
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {assignee && <span className="font-medium">{assignee}</span>}
          {priority && <span>🏃 {priority}</span>}
          {date && <span>📅 {date}</span>}
        </div>
      )}
    </div>
  );
}

const ProgressStep = ({ active }) => (
  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${active ? 'bg-blue-500' : 'bg-gray-300'}`}>
    <div className="w-4 h-4 bg-white rounded" />
  </div>
);

const ProgressLine = ({ active }) => (
  <div className={`w-8 h-1 ${active ? 'bg-blue-500' : 'bg-gray-300'}`} />
);

const StatusBar = ({ color, label }) => (
  <div className={`h-10 ${color} rounded-lg flex items-center px-4 shadow-sm`}>
    <span className="text-white text-sm font-medium">{label}</span>
  </div>
);