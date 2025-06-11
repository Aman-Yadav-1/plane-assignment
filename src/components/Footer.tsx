import React from 'react';
import { useTheme } from '../context/ThemeContext';

const FooterLink = ({ children, href = '#' }: { children: React.ReactNode; href?: string }) => (
  <a href={href} className="text-[11px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
    {children}
  </a>
);

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-6">
    <h3 className="text-[10px] font-medium text-gray-900 dark:text-white uppercase tracking-wider">{title}</h3>
    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  </div>
);

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 mb-8">
          {/* Column 1: Project + work tracking */}
          <div className="space-y-6">
            <FooterSection title="Project + work tracking">
              <li><FooterLink>Work Items</FooterLink></li>
              <li><FooterLink>Work Item Types</FooterLink></li>
              <li><FooterLink>Intake</FooterLink></li>
              <li><FooterLink>Cycles</FooterLink></li>
            </FooterSection>
            
            <FooterSection title="Project + work management">
              <li><FooterLink>Initiatives + Epics</FooterLink></li>
              <li><FooterLink>Teammates</FooterLink></li>
              <li><FooterLink>State Of Projects + Updates</FooterLink></li>
              <li><FooterLink>Workspaces + Approvals</FooterLink></li>
            </FooterSection>

            <h3 className="text-[10px] font-medium text-gray-900 dark:text-white uppercase tracking-wider">Wiki</h3>
            <h3 className="text-[10px] font-medium text-gray-900 dark:text-white uppercase tracking-wider">Delights</h3>
          </div>

          {/* Column 2: Use cases */}
          <div className="space-y-6">
            <FooterSection title="Use cases">
              <li><FooterLink>Product</FooterLink></li>
              <li><FooterLink>Frontend</FooterLink></li>
              <li><FooterLink>Operations</FooterLink></li>
              <li><FooterLink>Marketing</FooterLink></li>
              <li><FooterLink>Agile</FooterLink></li>
              <li><FooterLink>Design</FooterLink></li>
            </FooterSection>

            <FooterSection title="Solutions">
              <li><FooterLink>Startups</FooterLink></li>
              <li><FooterLink>Growing Teams</FooterLink></li>
              <li><FooterLink>Enterprise</FooterLink></li>
            </FooterSection>
            
            <FooterSection title="Industries">
              <li><FooterLink>Software</FooterLink></li>
              <li><FooterLink>Healthcare</FooterLink></li>
              <li><FooterLink>Government</FooterLink></li>
            </FooterSection>
          </div>

          {/* Column 3: Integrations */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-medium text-gray-900 dark:text-white uppercase tracking-wider">Importers</h3>
            <h3 className="text-[10px] font-medium text-gray-900 dark:text-white uppercase tracking-wider">Integrations</h3>
            <h3 className="text-[10px] font-medium text-gray-900 dark:text-white uppercase tracking-wider">Plane Intelligence</h3>
          </div>

          {/* Column 4: Pricing */}
          <div className="space-y-6">
            <FooterSection title="Pricing">
              <li><FooterLink>Pro</FooterLink></li>
              <li><FooterLink>New Plans</FooterLink></li>
            </FooterSection>

            <FooterSection title="Self Hosted">
              <li><FooterLink>Airgapped</FooterLink></li>
            </FooterSection>

            <FooterSection title="Compare">
              <li><FooterLink>Jira</FooterLink></li>
              <li><FooterLink>Asana</FooterLink></li>
              <li><FooterLink>Monday</FooterLink></li>
              <li><FooterLink>Linear</FooterLink></li>
            </FooterSection>
          </div>

          {/* Column 5: Resources */}
          <div className="space-y-6">
            <FooterSection title="Resources">
              <li><FooterLink>Documentation</FooterLink></li>
              <li><FooterLink>Changelog</FooterLink></li>
              <li><FooterLink>Roadmap</FooterLink></li>
              <li><FooterLink>Discord</FooterLink></li>
              <li><FooterLink>Status</FooterLink></li>
              <li><FooterLink>Self-Hosted</FooterLink></li>
            </FooterSection>
            
            <FooterSection title="Help">
              <li><FooterLink>Talk to Sales</FooterLink></li>
              <li><FooterLink>General Inquiries</FooterLink></li>
            </FooterSection>
          </div>

          {/* Column 6: Company */}
          <div className="space-y-6">
            <FooterSection title="Company">
              <li><FooterLink>Manifesto</FooterLink></li>
              <li><FooterLink>Team</FooterLink></li>
              <li><FooterLink>Security</FooterLink></li>
              <li><FooterLink>Testimonials</FooterLink></li>
              <li><FooterLink>Careers</FooterLink></li>
            </FooterSection>
          </div>

          {/* Column 7: Legal */}
          <div className="space-y-6">
            <FooterSection title="Legal">
              <li><FooterLink>Privacy Policy</FooterLink></li>
              <li><FooterLink>Terms of Service</FooterLink></li>
              <li><FooterLink>Security</FooterLink></li>
              <li><FooterLink>DPA</FooterLink></li>
              <li><FooterLink>Terms and conditions</FooterLink></li>
            </FooterSection>
          </div>
        </div>

        {/* Bottom section with copyright, logo and social */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
          {/* Copyright */}
          <div className="text-xs text-gray-700 dark:text-gray-300 mb-4 md:mb-0">
            © 2025 Plane. All rights reserved.
          </div>

          {/* Center - Plane logo with theme toggle switch */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Plane</span>
            </div>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <span className="sr-only">Discord</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.1 13.107 13.107 0 01-1.872-1.884.077.077 0 01.05-.117c.2-.03.402-.04.61-.04s.41.01.61.04a.077.077 0 01.05.117 12.9 12.9 0 01-1.2 1.5 17.9 17.9 0 004.06 1.018 15.7 15.7 0 004.17-.01 18.11 18.11 0 004.07-1.009 12.9 12.9 0 01-1.2-1.5.077.077 0 01.05-.117c.2-.03.402-.04.61-.04s.41.01.61.04c.04.012.07.042.05.117a13.1 13.1 0 01-1.872 1.884.077.077 0 00-.041.1c.36.698.772 1.362 1.225 1.993a.077.077 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.42 2.157-2.42 1.21 0 2.157 1.087 2.157 2.42 0 1.334-.946 2.42-2.157 2.42zm7.975 0c-1.21 0-2.157-1.085-2.157-2.419 0-1.333.947-2.42 2.157-2.42 1.21 0 2.157 1.087 2.157 2.42 0 1.334-.946 2.42-2.157 2.42z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
