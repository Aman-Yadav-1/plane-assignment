export default function DataIntegritySection() {
  return (
    <section className="pt-12 pb-16 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-[#3368F04D] text-blue-600 dark:text-white text-xs font-semibold rounded-full mb-6 uppercase tracking-wider dark:border dark:border-[#FFFFFF24]">
            ZERO DATA LOSS
          </div>

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Give all your data a<br />
            new nicer Plane to live.
          </h2>

          <p className="text-gray-600 dark:text-[#FFFFFF99] mb-8 max-w-lg mx-auto leading-relaxed">
            With our importers, you have the assurance of 100% data integrity.<br />
            Should something go wrong, just start the import again.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 dark:border dark:rounded-[12px] dark:backdrop-blur-3xl dark:border-t-2 dark:border-[#3F76FF] dark:hover:border-[#3F76FF] text-white dark:text-white px-5 py-2.5 text-sm font-medium rounded-md dark:rounded-[12px] transition-colors dark:bg-gradient-to-b dark:from-[#3F76FF20] dark:to-[#3F76FF08]">
            Try for yourself
          </button>
        </div>

        {/* Main visualization card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-12 relative overflow-hidden" style={{minHeight: '420px'}}>
            
            {/* Subtle inner glow effect */}
            <div className="absolute inset-4 bg-gradient-to-br from-white/50 via-green-50/40 to-white/20 dark:from-gray-800/50 dark:via-gray-700/40 dark:to-gray-800/20 rounded-xl"></div>
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-12 left-12 w-20 h-20 bg-teal-200 dark:bg-gray-600 rounded-2xl transform rotate-12"></div>
              <div className="absolute bottom-12 right-12 w-16 h-16 bg-green-200 dark:bg-gray-600 rounded-xl transform -rotate-12"></div>
              <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-emerald-200 dark:bg-gray-600 rounded-lg transform rotate-45"></div>
              <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-teal-200 dark:bg-gray-600 rounded-xl transform -rotate-12"></div>
            </div>

            {/* Top left - Files */}
            <div className="absolute top-8 left-12 z-10">
              <div className="text-base text-gray-500 dark:text-gray-400 mb-1 font-medium">Drive</div>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1">Files</div>
              <div className="text-lg text-gray-500 dark:text-gray-400 font-medium">Cloud storage</div>
            </div>

            {/* Top center - Tasks */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="text-base text-gray-500 dark:text-gray-400 mb-1 text-center font-medium">Issues</div>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1 text-center">Tasks</div>
              <div className="text-lg text-gray-500 dark:text-gray-400 text-center font-medium">Work items</div>
            </div>

            {/* Top right - Pages */}
            <div className="absolute top-8 right-12 z-10">
              <div className="text-base text-gray-500 dark:text-gray-400 mb-1 text-right font-medium">Notion</div>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1 text-right">Pages</div>
              <div className="text-lg text-gray-500 dark:text-gray-400 text-right font-medium">Confluence</div>
            </div>

            {/* Middle left - Cycles */}
            <div className="absolute top-1/2 left-12 transform -translate-y-1/2 z-10">
              <div className="text-base text-gray-500 dark:text-gray-400 mb-1 font-medium">Sprints</div>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">Cycles</div>
            </div>

            {/* Central 100% - massive and prominent */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <div className="text-blue-500 dark:text-blue-400 leading-none mb-4" style={{
                fontSize: '160px', 
                fontWeight: '700', 
                textShadow: '0 0 60px rgba(59, 130, 246, 0.2)'
              }}>
                100%
              </div>
              <div className="text-4xl text-blue-600 dark:text-blue-400 font-bold tracking-wide">
                Data integrity
              </div>
            </div>

            {/* Bottom left - Epics */}
            <div className="absolute bottom-8 left-12 z-10">
              <div className="text-base text-gray-500 dark:text-gray-400 mb-1 font-medium">Objectives</div>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1">Epics</div>
              <div className="text-lg text-gray-500 dark:text-gray-400 font-medium">Campaigns</div>
            </div>

            {/* Bottom right - Comments */}
            <div className="absolute bottom-8 right-12 z-10">
              <div className="text-base text-gray-500 dark:text-gray-400 mb-1 text-right font-medium">Task activity</div>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 text-right">Comments</div>
            </div>

            {/* Subtle connecting dots for visual flow */}
            <div className="absolute inset-0 pointer-events-none opacity-15 z-5">
              <div className="absolute top-20 left-1/4 w-2 h-2 bg-teal-400 dark:bg-gray-500 rounded-full"></div>
              <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-green-400 dark:bg-gray-500 rounded-full"></div>
              <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-emerald-400 dark:bg-gray-500 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-teal-400 dark:bg-gray-500 rounded-full"></div>
              <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-green-300 dark:bg-gray-500 rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-300 dark:bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}