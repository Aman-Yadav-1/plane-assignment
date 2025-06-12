import React, { useState, useEffect } from 'react';

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-6 h-6">
    <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);

const FooterSection = ({ title, children, isExpanded = true, onToggle, hasToggle = true, href }) => (
  <div className="p-1 shrink h-auto">
    <div className="flex gap-1 items-start">
      {href ? (
        <a className="font-medium text-[#111111] dark:text-white text-[14px] hover:underline" href={href}>
          {title}
        </a>
      ) : (
        <div className="font-medium text-[#111111] dark:text-white text-[14px]">{title}</div>
      )}
      {hasToggle && (
        <button 
          className={`transform transition-transform duration-300 text-[#111111] dark:text-white ${isExpanded ? 'rotate-90' : ''}`}
          onClick={onToggle}
        >
          <ChevronIcon />
        </button>
      )}
    </div>
    <div className={`relative transform transition-all duration-300 overflow-hidden pt-1 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      {children && (
        <>
          <div className="absolute h-full w-[1.5px] -top-2 left-[3px] bg-[#c8c8d0] dark:bg-[#525252] rounded-full"></div>
          <div className="space-y-0">
            {children}
          </div>
        </>
      )}
    </div>
  </div>
);

const FooterLink = ({ children, href = '#', target = '_self' }) => (
  <div className="flex items-start mb-1 ml-3 text-[#4d4d4d] dark:text-white/60 hover:text-[#111111] dark:hover:text-white/80">
    <a target={target} className="text-[12px] transition-colors hover:underline" href={href}>
      {children}
    </a>
  </div>
);

export default function Footer() {
  const [isDark, setIsDark] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    projectTracking: true,
    projectManagement: true,
    useCases: true,
    solutions: true,
    industries: true,
    pricing: true,
    selfHosted: true,
    compare: true,
    resources: true,
    contact: true,
    company: true,
    legal: true
  });

  // Initialize theme on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = prefersDark;
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-x-4 gap-y-6 mb-8">
          {/* Column 1: Project + work tracking */}
          <div className="col-span-1">
            <FooterSection 
              title="Project + work tracking"
              isExpanded={expandedSections.projectTracking}
              onToggle={() => toggleSection('projectTracking')}
            >
              <FooterLink href="/issues">Work Items</FooterLink>
              <FooterLink href="/issues/issue-types">Work Item Types</FooterLink>
              <FooterLink href="/intake">Intake</FooterLink>
              <FooterLink href="/cycles">Cycles</FooterLink>
            </FooterSection>
            
            <FooterSection 
              title="Project + work management"
              isExpanded={expandedSections.projectManagement}
              onToggle={() => toggleSection('projectManagement')}
            >
              <FooterLink href="/project-work-management/epics-initiatives">Initiatives + Epics</FooterLink>
              <FooterLink href="/project-work-management/teamspaces">Teamspaces</FooterLink>
              <FooterLink href="/project-work-management/state-of-projects-and-updates">State Of Projects + Updates</FooterLink>
              <FooterLink href="/workflows-and-approvals">Workflows + Approvals</FooterLink>
            </FooterSection>

            <FooterSection title="Wiki" href="/wiki" hasToggle={false} />
            <FooterSection title="Delights" href="/delights" hasToggle={false} />
          </div>

          {/* Column 2: Use cases */}
          <div className="col-span-1">
            <FooterSection 
              title="Use cases"
              isExpanded={expandedSections.useCases}
              onToggle={() => toggleSection('useCases')}
            >
              <FooterLink href="/for-product">Product</FooterLink>
              <FooterLink href="/for-operations">Operations</FooterLink>
              <FooterLink href="/for-marketing">Marketing</FooterLink>
              <FooterLink href="/for-agile">Agile</FooterLink>
              <FooterLink href="/for-design">Design</FooterLink>
            </FooterSection>

            <FooterSection 
              title="Solutions"
              isExpanded={expandedSections.solutions}
              onToggle={() => toggleSection('solutions')}
            >
              <FooterLink href="/for-startups">Startups</FooterLink>
              <FooterLink href="/for-growing-teams">Growing Teams</FooterLink>
              <FooterLink href="/for-enterprise">Enterprise</FooterLink>
            </FooterSection>
            
            <FooterSection 
              title="Industries"
              isExpanded={expandedSections.industries}
              onToggle={() => toggleSection('industries')}
            >
              <FooterLink href="/for-aerospace">Aerospace</FooterLink>
              <FooterLink href="/for-healthcare">Healthcare</FooterLink>
              <FooterLink href="/for-government">Government</FooterLink>
            </FooterSection>
          </div>

          {/* Column 3: Integrations */}
          <div className="col-span-1">
            <FooterSection title="Importers" href="/imports" hasToggle={false} />
            <FooterSection title="Integrations" href="/integrations" hasToggle={false} />
            <FooterSection title="Plane Intelligence" href="/ai" hasToggle={false} />
          </div>

          {/* Column 4: Pricing */}
          <div className="col-span-1">
            <FooterSection 
              title="Pricing" 
              href="/pricing"
              isExpanded={expandedSections.pricing}
              onToggle={() => toggleSection('pricing')}
            >
              <FooterLink href="/pro">Pro</FooterLink>
              <FooterLink href="/business">New plans</FooterLink>
            </FooterSection>

            <FooterSection 
              title="Self Hosted" 
              href="/self-hosted"
              isExpanded={expandedSections.selfHosted}
              onToggle={() => toggleSection('selfHosted')}
            >
              <FooterLink href="/airgapped">Airgapped</FooterLink>
            </FooterSection>

            <FooterSection 
              title="Compare" 
              href="/compare"
              isExpanded={expandedSections.compare}
              onToggle={() => toggleSection('compare')}
            >
              <FooterLink href="/plane-vs-jira">Jira</FooterLink>
              <FooterLink href="/plane-vs-asana">Asana</FooterLink>
              <FooterLink href="/plane-vs-monday">Monday.com</FooterLink>
              <FooterLink href="/plane-vs-linear">Linear</FooterLink>
            </FooterSection>
          </div>

          {/* Column 5: Resources */}
          <div className="col-span-1">
            <FooterSection 
              title="Resources"
              isExpanded={expandedSections.resources}
              onToggle={() => toggleSection('resources')}
            >
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="https://docs.plane.so/" target="_blank">Docs</FooterLink>
              <FooterLink href="/changelog">Changelog</FooterLink>
              <FooterLink href="https://status.plane.so/" target="_blank">Status</FooterLink>
              <FooterLink href="/download">Download</FooterLink>
              <FooterLink href="/mobile">Mobile</FooterLink>
            </FooterSection>
            
            <FooterSection 
              title="Contact" 
              href="/contact"
              isExpanded={expandedSections.contact}
              onToggle={() => toggleSection('contact')}
            >
              <FooterLink href="/talk-to-sales">Talk to Sales</FooterLink>
              <FooterLink href="/contact">General inquiries</FooterLink>
            </FooterSection>
          </div>

          {/* Column 6: Company */}
          <div className="col-span-1">
            <FooterSection 
              title="Company"
              isExpanded={expandedSections.company}
              onToggle={() => toggleSection('company')}
            >
              <FooterLink href="/manifesto">Manifesto</FooterLink>
              <FooterLink href="/open-source">Open source</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
              <FooterLink href="/testimonials">Testimonials</FooterLink>
              <FooterLink href="https://jobs.ashbyhq.com/plane" target="_blank">Careers</FooterLink>
            </FooterSection>
          </div>

          {/* Column 7: Legal */}
          <div className="col-span-1">
            <FooterSection 
              title="Legal"
              isExpanded={expandedSections.legal}
              onToggle={() => toggleSection('legal')}
            >
              <FooterLink href="/legals/privacy-policy">Privacy policy</FooterLink>
              <FooterLink href="/legals/eula">EULA</FooterLink>
              <FooterLink href="/legals/dpa">DPA</FooterLink>
              <FooterLink href="/legals/terms-and-conditions">Terms and conditions</FooterLink>
            </FooterSection>
            
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <div className="flex-shrink-0">
                <img alt="GDPR" className="h-8 w-8" src="https://images.plane.so/logos/gdpr.webp" />
              </div>
              <div className="flex-shrink-0">
                <img alt="HIPAA" className="h-8 w-8" src="https://images.plane.so/logos/hipaa.webp" />
              </div>
              <div className="flex-shrink-0">
                <img alt="ISO" className="h-8 w-8" src="https://images.plane.so/logos/iso.webp" />
              </div>
              <div className="flex-shrink-0">
                <img alt="SOC2" className="h-8 w-8" src="https://images.plane.so/logos/soc2.webp" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright, logo, theme toggle and social */}
        <div className="text-[#111111] dark:text-white border-t border-[#E5E5E5] dark:border-[#525252] pt-6 flex items-center justify-between flex-wrap gap-4">
          {/* Copyright */}
          <div className="whitespace-nowrap text-sm">
            © 2025 Plane.
          </div>

          {/* Center - Logo and Theme Toggle */}
          <div className="flex flex-row justify-center items-center gap-2">
            {/* Plane Logo */}
            <div className="w-24 h-8 flex flex-col justify-center items-center">
              <div 
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: isDark 
                    ? "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA5NiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDhMMjAgMTZMMTIgMjRINEwxMiAxNkw0IDhIMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIyOCIgeT0iMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiPlBsYW5lPC90ZXh0Pgo8L3N2Zz4K')"
                    : "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA5NiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDhMMjAgMTZMMTIgMjRINEwxMiAxNkw0IDhIMTJaIiBmaWxsPSIjMTExMTExIi8+Cjx0ZXh0IHg9IjI4IiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTExMTExIj5QbGFuZTwvdGV4dD4KPC9zdmc+Cg==')"
                }}
              />
            </div>

            {/* Theme Toggle */}
            <div className="relative w-min bg-[#E9EAEC] dark:bg-[#1F2228] rounded-full flex items-center p-1">
              <button 
                type="button" 
                className={`relative z-10 outline-none p-1 md:p-2 rounded-full text-sm font-medium flex items-center justify-center transition-colors duration-500 ${
                  !isDark ? 'text-[#111111]' : 'text-gray-400'
                }`}
                onClick={toggleTheme}
              >
                <SunIcon />
              </button>
              <button 
                type="button" 
                className={`relative z-10 outline-none p-1 md:p-2 rounded-full text-sm font-medium flex items-center justify-center transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-gray-400'
                }`}
                onClick={toggleTheme}
              >
                <MoonIcon />
              </button>
              <div 
                className="absolute top-1/2 -translate-y-1/2 bg-white dark:bg-[#33363C] rounded-full transition-all ease-in-out duration-500 w-10 h-8"
                style={{
                  left: isDark ? '44px' : '4px'
                }}
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://discord.com/invite/A92xrEGCge" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 grid place-items-center text-[#111111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/planepowers" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 grid place-items-center text-[#111111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@planepowers" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 grid place-items-center text-[#111111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/planepowers/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 grid place-items-center text-[#111111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}