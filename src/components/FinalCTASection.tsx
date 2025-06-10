import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>

      <div className="max-w-1200 mx-auto px-5 text-center relative z-10">
        <h2 className="text-56 font-semibold text-white mb-6 leading-tight">
          Ready to make the switch?
        </h2>

        <p className="text-20 text-white/90 mb-10 max-w-3xl mx-auto">
          Plane is the #1 new work management tool for teams of all shapes and
          sizes everywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md">
            See why
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-3 text-base font-medium rounded-md"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
