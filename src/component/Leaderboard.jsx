import { ArrowLeftRight } from "lucide-react";
import { MdOutlineSort } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { User } from "lucide-react";
import { useState } from "react";
import { GoDash } from "react-icons/go";
export default function Leaderboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const players = [
    { name: "Jane Smith", score: "84 3/8", rank: 1, color: "text-blue-500", bg: "bg-yellow-400" },
    { name: "Alex Richard", score: "74 3/8", rank: 2, color: "text-blue-500", bg: "bg-blue-400" },
    { name: "Jennifer", score: "64 3/8", rank: 3, color: "text-blue-500", bg: "bg-gray-400" },
  ];
  return (
    <div className="py-6 px-4 sm:p-6 sm:pl-20 sm:pr-20 mt-10 rounded-lg">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-start gap-4 sm:gap-0 sm:items-center mb-2">
        <div className="flex-1 min-w-[60%]">
          {/* Live Badge (Desktop) */}
          <span className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 border rounded-full w-max mb-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> Live
          </span>
          <h1 className="text-2xl font-semibold text-gray-900">Leaderboard</h1>
          <p className="text-gray-500">2024 Soccer sports camp</p>
        </div>

        {/* Live Badge (Mobile) */}
        <span className="sm:hidden flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-700 border rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full "></span> Live
        </span>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex gap-2  mt-10">
          <button className="flex items-center gap-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            <ArrowLeftRight size={16} />
            Compare
          </button>
          <button className="flex items-center gap-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            <MdOutlineSort size={16} />
            Sort
          </button>
          <button className="flex items-center gap-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <RiShareForwardLine size={16} />
            Share
          </button>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="w-full sm:hidden flex flex-col gap-2 ">
        <div className="flex gap-5 mb-4 w-full">
          <button onClick={() => setIsOpen(true)} className="w-1/2 flex items-center justify-center gap-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            <ArrowLeftRight size={20} />
            Compare
          </button>
          <button onClick={() => setIsSortOpen(true)} className="w-1/2 flex items-center justify-center gap-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            <MdOutlineSort size={20} />
            Sort
          </button>
        </div>
        <button className="w-full flex items-center justify-center gap-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          <RiShareForwardLine size={20} />
          Share
        </button>
        <hr className=" mt-4 text-gray-300" />
      </div>


      {/* Compare Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity">
          <div
            className={`fixed bottom-0 left-0 w-full bg-white rounded-t-3xl p-4 transition-all duration-300 ease-out ${isOpen ? "translate-y-0" : "translate-y-full"
              }`}
          >
            {/* Drag Handle */}
            <div className="flex justify-center mb-2">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <GoDash size={44} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <h2 className="text-center text-lg font-semibold mb-4">Change Username</h2>
            <div className="flex flex-col gap-3">
              <label className="text-sm text-gray-600">Enter username</label>
              <input
                type="text"
                defaultValue="Shoaib K."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="text-sm text-gray-600">Note</label>
              <div className="w-full px-3 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm">
                Info entered here will appear publicly.
              </div>

              <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sort Modal */}
      {isSortOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity">
          <div className={`fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-xl p-4 transition-all duration-300 ease-out ${isSortOpen ? "translate-y-0" : "translate-y-full"}`}>
            {/* Close Handle */}
            <div className="flex justify-center mb-1">
              <button
                onClick={() => setIsSortOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <GoDash size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <h2 className="text-center text-lg font-semibold mb-4">Sort Options</h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                {[
                  "Longest to shortest wingspan",
                  "Longest to tiniest Wingspan",
                  "Tallest person in the room",
                  "Longest wingspan in the room"
                ].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="sort"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      defaultChecked={index === 0}
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors mt-2">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}



      <hr className="text-gray-300" />

      {/* tweak score user */}

      <div className="flex flex-col  items-center w-full p-4 sm:hidden">
        <div className="relative flex flex-col items-center">
          <div className="relative flex flex-col mt-10 items-center mb-6">
            {/* User Avatar */}
            <div className="relative flex items-center justify-center border-5 border-white w-20 h-20 bg-gray-200 rounded-full shadow-md">
              <span className="text-3xl text-gray-500"><User className="w-10 h-10" /></span>
              {/* 10-point Star Badge */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 flex items-center justify-center text-white font-bold text-sm rounded-full clip-star bg-yellow-400">
                1
              </div>
            </div>
            <div className="flex justify-center  items-center gap-2">
              <h3 className="mt-2 text-lg font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-blue-500 font-bold text-sm">( 84 3/8 )</p>
            </div>

            <p className="text-gray-500 text-xs">#123456</p>
          </div>

          <div className="flex w-full justify-center gap-10">
            {players.slice(1).map((player) => (
              <div key={player.rank} className="flex flex-col items-center">
                <div className="relative flex items-center justify-center w-20 h-20 border-5 border-white bg-gray-200 rounded-full shadow-md">
                  <span className="text-9xl text-gray-500"><User className="w-10 h-10" /></span>
                  <div
                    className={`absolute -bottom-1 -right-1 w-8 h-8 flex items-center justify-center text-white font-bold text-sm rounded-full clip-star ${player.bg}`}
                  >
                    {player.rank}
                  </div>
                </div>
                <div className="flex justify-center  items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">{player.name}</h3>
                  <p className={`text-sm ${player.color} font-bold`}>( {player.score} )</p>
                </div>
                <p className="text-gray-500 text-xs">#123456</p>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
          .clip-star {
            clip-path: polygon(
              50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 
              50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%
            );
          }
        `}
        </style>
      </div>

    </div>
  );
}