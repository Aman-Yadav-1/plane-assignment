import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-1200 mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-xl font-semibold text-black">plane</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center gap-1 text-sm font-medium text-black hover:text-plane-blue cursor-pointer">
            Product
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-black hover:text-plane-blue cursor-pointer">
            Solutions
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-black hover:text-plane-blue cursor-pointer">
            Resources
            <ChevronDown className="w-4 h-4" />
          </div>
          <a
            href="#"
            className="text-sm font-medium text-black hover:text-plane-blue"
          >
            Pricing
          </a>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-black hover:text-plane-blue"
          >
            Book a demo
          </a>
          <a
            href="#"
            className="text-sm font-medium text-black hover:text-plane-blue"
          >
            Log in
          </a>
          <Button className="bg-plane-blue hover:bg-plane-blue-alt text-white px-4 py-2 rounded-md text-sm font-medium">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
