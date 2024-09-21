import Navbar from "../Components/Navbar/Navbar"


const LandingPage = () => {
  return (
    <div>
    <Navbar />
  
  <section className="flex flex-col items-center justify-center gap-8 md:gap-16 text-center h-screen px-4">
    <div className="container mx-auto flex flex-col items-center justify-center gap-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide">Welcome To</h2>
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
        Easy<span className="text-[#00BD5F]">Paisa</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#00BD5F] uppercase tracking-wide">
        Career Platform
      </h2>
    </div>

    <p className="text-xl sm:text-2xl md:text-3xl uppercase tracking-wide px-4">
      Begin your journey to working 
      <span className="bg-[#00BD5F]">cashless</span> & creating <br />
      <span className="bg-[#00BD5F]">the future of payments</span> with 
      <span className="bg-[#00BD5F]">easypaisa</span>
    </p>
  </section>

  <section className="bg-[#00BD5F] flex flex-col md:flex-row items-center justify-center p-8">

    <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl m-4 text-[#302F68] font-bold">
        Why Easypaisa?
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl m-4 text-[#302F68]">
        At easypaisa, we are working towards revolutionizing the future of our relationship with money, 
        in order to transform Pakistan for the better. With us, you will learn to translate your dreams 
        into reality and feel truly empowered.
      </p>
    </div>

    <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
      <img src="/public/images/easy.png" alt="Easypaisa Image" className="w-3/4 md:w-full" />
    </div>
  </section>
</div>

  )
}

export default LandingPage