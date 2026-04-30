import React from "react";

const StatsAndServices = () => {
  return (
    <div className="px-10 py-12">

      {/* Top Stats */}
      <p className="text-center text-gray-600 mb-10 text-lg">
        A few more facts about us in numbers
      </p>

      <div className="grid grid-cols-4 text-center mb-12">
        <div>
          <h1 className="text-3xl font-semibold">12 000+</h1>
          <p className="text-gray-500 text-sm mt-1">Hours of play annually</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">89%</h1>
          <p className="text-gray-500 text-sm mt-1">Player Retention Rate</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">1,200+</h1>
          <p className="text-gray-500 text-sm mt-1">Active Members</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">125+</h1>
          <p className="text-gray-500 text-sm mt-1">Annual Tournaments</p>
        </div>
      </div>

      <hr className="mb-12" />

      {/* Services Section */}
      <div className="grid grid-cols-3 gap-10 items-center">

        {/* Left Text */}
        <div>
          <span className="border px-4 py-1 rounded-full text-sm text-gray-600">
            Services
          </span>

          <h2 className="text-2xl mt-6 leading-relaxed">
            Explore our full range of coaching, training, and tennis experiences.
            From first serve to match point — we’ve got the right program for you.
          </h2>

          <button className="mt-6 bg-slate-900 text-white px-6 py-2 rounded-full">
            Explore More →
          </button>
        </div>

        {/* Middle Card */}
        <div className="relative h-[300px] rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1666913667023-4bfd0f6cff0a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>

          <div className="absolute inset-0 bg-black/30"></div>

          <span className="absolute top-4 left-4 bg-white/30 text-white text-xs px-3 py-1 rounded-full">
            Training Programs
          </span>

          <p className="absolute bottom-4 left-4 text-white text-sm w-[80%]">
            Programs designed for all ages and abilities.
          </p>

          <div className="absolute bottom-4 right-4 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">
            ↗
          </div>
        </div>

        {/* Right Card */}
        <div>
          <div className="relative h-[200px] rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200')",
              }}
            ></div>

            <div className="absolute inset-0 bg-black/30"></div>

            <span className="absolute top-4 left-4 bg-white/30 text-white text-xs px-3 py-1 rounded-full">
              Court Access
            </span>

            <p className="absolute bottom-4 left-4 text-white text-sm">
              Hourly Court Rental
            </p>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Step into a space built for players — to grow, compete, and thrive.
          </p>

          <div className="flex gap-3 mt-4">
            <button className="w-8 h-8 border rounded-full">←</button>
            <button className="w-8 h-8 border rounded-full">→</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsAndServices;