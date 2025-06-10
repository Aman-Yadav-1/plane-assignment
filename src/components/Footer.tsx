export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-1200 mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-300">
              Project + work tracking
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Work Items
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Work Item Types
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Intake
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Cycles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-300">
              Use cases
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Operations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Agile
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-300">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Startups
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Remote Teams
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Consultants
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-300">
              Industries
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Software
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Finance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Education
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-300">
              Pricing
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Compare
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-300">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-xl font-semibold">plane</div>
            <div className="text-sm text-gray-400">
              © 2024 Plane. All rights reserved.
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-sm text-gray-400 hover:text-white">
              Light mode
            </button>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Discord</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.942 8.358a8.956 8.956 0 00-2.209-2.209 8.956 8.956 0 00-2.209-2.209c-.867-.867-1.824-1.506-2.858-1.92a9.956 9.956 0 00-3.333 0 8.956 8.956 0 00-2.858 1.92 8.956 8.956 0 00-2.209 2.209 8.956 8.956 0 00-2.209 2.209c-.414 1.034-1.053 1.991-1.92 2.858a9.956 9.956 0 000 3.333c.867.867 1.506 1.824 1.92 2.858a8.956 8.956 0 002.209 2.209 8.956 8.956 0 002.209 2.209c1.034.414 1.991 1.053 2.858 1.92a9.956 9.956 0 003.333 0c.867-.867 1.824-1.506 2.858-1.92a8.956 8.956 0 002.209-2.209 8.956 8.956 0 002.209-2.209c.414-1.034 1.053-1.991 1.92-2.858a9.956 9.956 0 000-3.333c-.867-.867-1.506-1.824-1.92-2.858z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 4.369s-.196-1.382-.796-1.992c-.76-.801-1.613-.805-2.004-.852C14.404 1.333 10 1.333 10 1.333s-4.404 0-7.2.192c-.391.047-1.244.051-2.004.852C.196 2.987 0 4.369 0 4.369S0 6.051 0 7.733v1.535c0 1.682 0 3.364 0 3.364s.196 1.382.796 1.992c.76.801 1.76.775 2.204.86 1.6.154 7 .2 7 .2s4.408-.006 7.204-.198c.391-.047 1.244-.051 2.004-.852.6-.61.796-1.992.796-1.992s0-1.682 0-3.364V7.733c0-1.682 0-3.364 0-3.364zM8 10.462V6.538L13.2 8.5 8 10.462z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
