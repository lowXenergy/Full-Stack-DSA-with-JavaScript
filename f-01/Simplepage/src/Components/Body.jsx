import React from "react";
import {  RiTrophyLine, RiMacbookLine } from "@remixicon/react";

const Body = () => {
  return (
    <div className="px-6 py-6 flex flex-col">
      <div className="flex items-center justify-between 3">
        <button className="border rounded-full px-4 py-1 text-gray-800">
          About Horizon
        </button>
        <p className="w-full max-w-[750px] text-xl leading-relaxed">
          At Horizon, we don't just play tennis — we live it. Since 2021, our
          club has been a home for players of all levels, from eager beginners
          to seasoned pros.
        </p>
      </div>

      {/* <div className="bg-gray-100 rounded-3xl p-8 w-[420px] shadow-sm mt-6"></div> */}
      <div className="flex gap-10 h-100">
        {/* 1st box */}
        <div className="bg-[#0D1A2D] text-white rounded-3xl p-8 w-1/3 mt-6 flex items-start gap-10 flex-col ">
          {/* <RiLandscapeFill /> */}
            < RiTrophyLine size="36" />
          <p className="text-3xl font-thin">
            Professional hard courts with tournament-grade lighting & climate
            control - play in perfect conditions, in any season.
          </p>
          <div className="flex items-center gap-2">
            <RiMacbookLine />
            <span className="font-thin text-[#435062] text-2xl">Game Mode</span>
          </div>
        </div>

        <div
  className="rounded-3xl overflow-hidden mt-6 w-1/3 bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1597893311798-9911ea4af043?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0')",
  }}
>
  <div className="rounded-3xl bg-white/20 backdrop-blur-md text-white p-4">
    Private & Group Lessons
  </div>
</div>

        <div className="bg-gray-100 rounded-3xl p-8 shadow-sm mt-6 w-1/3">
          <h1 className="text-5xl font-semibold text-slate-900">100+</h1>
          <h2 className="text-lg font-medium text-slate-800 mt-2">
            Pro Coaches
          </h2>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Certified professionals ready to boost your game from first serve to
            tournament level.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="text-sm text-slate-700 w-24">Beginner</span>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full bg-sky-400"
                    ></span>
                  ))}
                </div>
              </div>

              <span className="text-sm text-slate-700 w-8 text-right">55</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="text-sm text-slate-700 w-24">
                  Intermediate
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full bg-sky-400"
                    ></span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-slate-700 w-8 text-right">40</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="text-sm text-slate-700 w-24">Advanced</span>
                <div className="flex gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full bg-sky-400"
                    ></span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-slate-700 w-8 text-right">35</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
