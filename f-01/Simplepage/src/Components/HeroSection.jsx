import AvatarGroup from "./small";
const Hero = () => {
  return (
    <div className="px-6 py-6">

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden">
        
        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
          alt="tennis"
          className="w-full h-[75vh] object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          
          <h1 className="text-white text-6xl s:text-6xl leading-tight font-light ">
            Unleash Your Inner Champion Today.
            <br />
            All In One Place.
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl text-xl font-light">
            Join the ultimate tennis experience — where passion meets performance,
            and every swing brings you closer to victory.
          </p>

          <button className="mt-6 bg-[#0D1A2D] text-white px-6 py-3 rounded-full font-light text-xl">
            Start your own journey
          </button>
        </div>

        {/* BOTTOM LEFT INFO */}
        <div className="absolute flex justify-center align-center bottom-6 left-6 text-white text-sm font-light">
          <p>Train with real professionals.
          <br/>Get the real results.</p>
          <AvatarGroup/>
        </div>

        {/* SOCIAL LINKS */}
        <div className="absolute bottom-6 right-6 text-white text-sm flex font-light gap-4">
          <span>Instagram ↗</span>
          <span>Facebook ↗</span>
          <span>TikTok ↗</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;