import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <div className="relative z-0 overflow-hidden my-5 bg-white dark:bg-gradient-to-br dark:from-purple-900 dark:to-blue-900">
      {/* Light mode gradient overlay */}
      <div 
        className="relative pt-20 md:pt-40 dark:hidden"
        style={{
          background: "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, rgb(255, 255, 255) 100%)"
        }}
      >
        <section className="flex flex-col justify-center items-center px-2">
          <div className="relative text-[50px] sm:text-6xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[195px] !leading-[0.85] font-bold tracking-[-0.074em] text-black text-center">
            <div className="relative whitespace-pre-wrap">
              {/* Arrow decoration */}
              <div className="absolute 2xl:-top-[100px] 2xl:-left-[80px] xl:-top-[100px] xl:-left-[80px] lg:-top-[110px] lg:-left-[110px] md:-top-[110px] md:-left-[110px] sm:-top-[140px] sm:-left-[135px] -top-[140px] -left-[135px] scale-[0.4] sm:scale-[0.4] md:scale-[0.6] lg:scale-75 2xl:scale-100">
                <img alt="arrow" src="https://images.plane.so/imports/final-cta/arrow.svg" />
              </div>
              
              {/* Grid decoration */}
              <div className="absolute -top-[60px] -right-[130px] sm:-top-[40px] sm:-right-[110px] md:top-[35px] md:-right-[90px] lg:top-[80px] lg:-right-[70px] xl:top-[135px] xl:-right-[40px] 2xl:top-[200px] 2xl:-right-[20px] scale-[0.4] sm:scale-[0.4] md:scale-[0.6] lg:scale-75 2xl:scale-100">
                <img alt="grid" src="https://images.plane.so/imports/final-cta/grid.svg" />
              </div>
              
              Move in to a{'\n'}peaceful Plane.
            </div>
          </div>

          <div className="mt-10 text-lg text-black opacity-90 text-center sm:whitespace-pre-wrap relative z-10">
            Plane is the #1 new work management tool for teams{'\n'}of all shapes and sizes everywhere.
          </div>

          <div className="mt-10 md:mt-16 mb-4 flex gap-2">
          <a 
  rel="noopener noreferrer" 
  target="_blank" 
  href="https://app.plane.so/sign-up"
>
  <div className="whitespace-nowrap border rounded-[12px] backdrop-blur-3xl max-w-min border-t-2 px-6 py-3 text-base font-medium backdrop-blur-xl !text-white dark:text-white border-[#3F76FF] dark:border-[#3F76FF]"
    style={{
      background: "linear-gradient(0deg, rgb(63, 118, 255), rgb(63, 118, 255)), linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.04) 100%)"
    }}
  >
    See why
  </div>
</a>    
            <a 
  rel="noopener noreferrer" 
  target="_blank" 
  href="/talk-to-sales"
>
  <div className="whitespace-nowrap border rounded-[12px] backdrop-blur-3xl max-w-min px-6 py-3 text-base font-medium bg-transparent dark:bg-[#3F76FF1F] border-[#3F76FF] dark:border-[#3F76FF80] text-[#3F76FF] dark:text-white backdrop-blur-0">
    Talk to Sales
  </div>
</a>
          </div>
        </section>
      </div>

      {/* Dark mode gradient overlay */}
      <div 
        className="relative pt-20 md:pt-40 hidden dark:block"
        style={{
          background: "linear-gradient(0deg, rgb(10, 10, 10) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, rgb(10, 10, 10) 100%)"
        }}
      >
        <section className="flex flex-col justify-center items-center px-2">
          <div className="relative text-[50px] sm:text-6xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[195px] !leading-[0.85] font-bold tracking-[-0.074em] text-white text-center">
            <div className="relative whitespace-pre-wrap">
              {/* Arrow decoration */}
              <div className="absolute 2xl:-top-[100px] 2xl:-left-[80px] xl:-top-[100px] xl:-left-[80px] lg:-top-[110px] lg:-left-[110px] md:-top-[110px] md:-left-[110px] sm:-top-[140px] sm:-left-[135px] -top-[140px] -left-[135px] scale-[0.4] sm:scale-[0.4] md:scale-[0.6] lg:scale-75 2xl:scale-100">
                <img alt="arrow" src="https://images.plane.so/imports/final-cta/arrow.svg" />
              </div>
              
              {/* Grid decoration */}
              <div className="absolute -top-[60px] -right-[130px] sm:-top-[40px] sm:-right-[110px] md:top-[35px] md:-right-[90px] lg:top-[80px] lg:-right-[70px] xl:top-[135px] xl:-right-[40px] 2xl:top-[200px] 2xl:-right-[20px] scale-[0.4] sm:scale-[0.4] md:scale-[0.6] lg:scale-75 2xl:scale-100">
                <img alt="grid" src="https://images.plane.so/imports/final-cta/grid.svg" />
              </div>
              
              Move in to a{'\n'}peaceful Plane.
            </div>
          </div>

          <div className="mt-10 text-lg text-[#E5E5E5] opacity-90 text-center sm:whitespace-pre-wrap relative z-10">
            Plane is the #1 new work management tool for teams{'\n'}of all shapes and sizes everywhere.
          </div>

          <div className="mt-10 md:mt-16 mb-4 flex gap-2">
            <a 
              rel="noopener noreferrer" 
              target="_blank" 
              href="https://app.plane.so/sign-up"
            >
              <div 
                className="whitespace-nowrap border rounded-[12px] backdrop-blur-3xl max-w-min border-t-2 px-6 py-3 text-base font-medium backdrop-blur-xl text-white border-[#3F76FF]"
                style={{
                  background: "linear-gradient(135deg, #3F76FF 0%, #8B5CF6 100%)"
                }}
              >
                See why
              </div>
            </a>
            
            <a 
              rel="noopener noreferrer" 
              target="_blank" 
              href="/talk-to-sales"
            >
              <div className="whitespace-nowrap border rounded-[12px] backdrop-blur-3xl max-w-min px-6 py-3 text-base font-medium bg-[#3F76FF1F] border-[#3F76FF80] text-white backdrop-blur-0">
                Talk to Sales
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}