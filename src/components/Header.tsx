import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 mx-auto flex items-center text-[#111111] dark:text-white transition-all duration-300 border-b border-[#0A0F2914] dark:border-[#1d1d1d]">
      <div className="absolute -z-10 w-full h-full top-0 left-0 backdrop-blur-3xl"></div>
      
      <div className="container mx-auto px-5 relative z-50 w-full flex items-center gap-2 p-2 py-4">
        <div className="absolute -z-10 w-full h-full top-0 left-0"></div>
        
        {/* Logo */}
        <div className="flex-1 flex">
          <a className="flex-shrink-0" href="/">
            <div className="text-xl font-semibold text-black dark:text-white">plane</div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="relative z-10 max-w-max flex-1 items-center justify-center hidden xl:block">
          <div style={{ position: "relative" }}>
            <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
              <li>
                <button className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Product 
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
                </button>
              </li>
              <li>
                <button className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Solutions 
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
                </button>
              </li>
              <li>
                <button className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Resources 
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
                </button>
              </li>
              <li>
                <a className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="/pricing">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden xl:flex items-center justify-end gap-4 flex-1">
          <div className="flex items-center gap-2">
            <a href="/talk-to-sales" target="_blank" className="relative flex-shrink-0 whitespace-nowrap text-center rounded-lg text-sm font-medium py-1.5 px-2">
              Book a demo
            </a>
            <a href="https://app.plane.so/" target="_blank" className="relative flex-shrink-0 whitespace-nowrap text-center rounded-lg text-sm font-medium py-1.5 px-2">
              Log in
            </a>
            <a className="flex-shrink-0 whitespace-nowrap text-center rounded-lg border border-[#4177fd] dark:border-white bg-[#4177fd] dark:bg-white text-white dark:text-black text-sm font-medium py-1.5 px-3.5" href="https://app.plane.so/sign-up">
              Sign up
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button" 
          className="flex-shrink-0 xl:hidden size-6 grid place-items-center"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="size-5" />
        </button>

        {/* Mobile Menu */}
        <div className={`fixed xl:hidden inset-0 z-50 size-full flex-col transition-all duration-200 ease-linear transform-gpu bg-gray-100/10 text-white backdrop-blur-[100px] ${isMobileMenuOpen ? 'left-0' : 'left-full hidden'}`}>
          <div className="h-16 px-4 flex items-center justify-end">
            <button 
              type="button" 
              className="size-10 grid place-items-center bg-black dark:bg-white text-white dark:text-black rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="size-6" />
            </button>
          </div>
          <div className="px-6 pb-16 space-y-6 overflow-y-scroll hide-scrollbar">
            <button className="flex items-center gap-1 cursor-pointer py-2 text-xs font-semibold">
              PRODUCT
              <ChevronDown className="size-3.5 transition-transform duration-300" />
            </button>
            <button className="flex items-center gap-1 cursor-pointer py-2 text-xs font-semibold">
              SOLUTIONS
              <ChevronDown className="size-3.5 transition-transform duration-300" />
            </button>
            <button className="flex items-center gap-1 cursor-pointer py-2 text-xs font-semibold">
              RESOURCES
              <ChevronDown className="size-3.5 transition-transform duration-300" />
            </button>
            <a className="block cursor-pointer py-2 text-xs font-semibold w-fit" href="/pricing">
              PRICING
            </a>
            <a className="flex items-start gap-4 pb-5" href="/talk-to-sales">
              <div>
                <div className="text-xs font-semibold mt-3">BOOK A DEMO</div>
              </div>
            </a>
            <a className="flex items-start gap-4 pb-5" href="https://app.plane.so/">
              <div>
                <div className="text-xs font-semibold mt-3">LOG IN</div>
              </div>
            </a>
            <a className="flex items-start gap-4 pb-5" href="https://app.plane.so/sign-up">
              <div>
                <div className="text-xs font-semibold mt-3">SIGN UP</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}