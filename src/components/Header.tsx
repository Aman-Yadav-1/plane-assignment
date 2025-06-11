import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-1200 mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-xl font-semibold text-black dark:text-white">plane</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center gap-1 text-sm font-medium text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors">
            Product
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors">
            Solutions
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors">
            Resources
            <ChevronDown className="w-4 h-4" />
          </div>
          <a
            href="#"
            className="text-sm font-medium text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Book a demo
          </a>
          <a
            href="#"
            className="text-sm font-medium text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Log in
          </a>
          <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}