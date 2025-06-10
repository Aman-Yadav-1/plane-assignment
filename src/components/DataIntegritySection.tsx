import { Button } from "@/components/ui/button";
import { PlaneBadge } from "@/components/ui/plane-badge";

export default function DataIntegritySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-1200 mx-auto px-5">
        <div className="text-center mb-16">
          <PlaneBadge className="mb-6">ZERO DATA LOSS</PlaneBadge>

          <h2 className="text-56 font-semibold text-black mb-6 leading-tight">
            Give all your data a <br />
            <span className="text-plane-blue">safe new home</span>
          </h2>

          <p className="text-20 text-gray-600 mb-8 max-w-3xl mx-auto">
            With our importers, you have the assurance of 100% data integrity.
            Should something go wrong, just start the import again.
          </p>

          <Button className="bg-plane-blue hover:bg-plane-blue-alt text-white px-6 py-3 text-base font-medium rounded-md mb-16">
            Try for yourself
          </Button>
        </div>

        {/* Large illustration */}
        <div className="relative">
          <div className="mx-auto w-full max-w-5xl h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-plane-blue-light rounded-lg opacity-60"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-plane-blue rounded-lg opacity-40"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-plane-blue-alt rounded-full opacity-30"></div>

            <div className="text-center">
              <div className="text-plane-blue text-2xl mb-4">🔒</div>
              <div className="text-gray-600 text-xl">
                100% Data Integrity Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
