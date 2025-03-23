
import { User } from "lucide-react";
import { useState } from "react";
import { GoDash } from "react-icons/go";
import Icon from '../assets/Icon.svg'
import Filters from '../assets/filter-lines.svg'
import Share from '../assets/share-06.svg'
import Verify3 from '../assets/Verified tick3.svg'
import Verify2 from '../assets/Verified tick2.svg'
import Verify1 from '../assets/Verified1.svg'
export default function Leaderboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
 
const players = [
  { name: "Jane Smith", score: "84 3/8", rank: 1, color: "text-blue-500", svg: Verify1 },
  { name: "Alex Richard", score: "74 3/8", rank: 2, color: "text-blue-500", svg: Verify2 },
  { name: "Jennifer", score: "64 3/8", rank: 3, color: "text-blue-500", svg: Verify3}
]
  return (
    <div className="py-6 px-4 sm:p-6 sm:pl-20 sm:pr-20  rounded-lg">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-start gap-4 sm:gap-0 sm:items-center mb-2">
        <div className="flex-1 min-w-[60%]">
          {/* Live Badge (Desktop) */}
          <span className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs font-medium text-[#2B3546] border border-[#DDE1E6] rounded-full w-max mb-1">
  <span className="w-2 h-2 bg-[#16C172] rounded-full"></span> Live
</span> 

          <h1 className="text-2xl font-semibold text-gray-900">Leaderboard</h1>
          <p className="text-gray-500 text-sm mt-1">2024 Soccer sports camp</p>
        </div>

        {/* Live Badge (Mobile) */}
        <span className="sm:hidden flex items-center gap-1 px-2 py-1 text-xs font-medium text-[#2B3546] border border-[#DDE1E6] rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full "></span> Live
        </span>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex gap-2 mt-10">
  {/* Compare Button */}
  <button className="flex items-center gap-1 px-4 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
    <img src={Icon} className="w-5 h-5 text-blue-600" alt="Compare Icon" />
    Compare
  </button>

  {/* Sort Button */}
  <button className="flex items-center gap-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
    <img src={Filters} className="w-5 h-4 text-blue-600" alt="Sort Icon" />
    Sort
  </button>

  {/* Share Button */}
  <button className="flex items-center gap-1 px-4 py-2
 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
    <img src={Share} className="w-5 h-4 text-white" alt="Share Icon" />
    Share   
  </button>
</div>

      </div>

      {/* Mobile Buttons */}
      <div className="w-full sm:hidden flex flex-col pt-3  ">
        <div className="flex gap-5 mb-4 w-full">
          <button onClick={() => setIsOpen(true)} className="w-1/2 flex items-center justify-center gap-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
          <img src={Icon} className="w-5 h-5 text-blue-600" alt="Compare Icon" />
            Compare
          </button>
          <button onClick={() => setIsSortOpen(true)} className="w-1/2 flex items-center justify-center gap-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
          <img src={Filters} className="w-5 h-5 text-blue-600" alt="Compare Icon" />
            Sort
          </button>
        </div>
        <button className="w-full flex items-center justify-center gap-1 px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        <img src={Share} className="w-5 h-5 text-blue-600" alt="Compare Icon" />
          Share
        </button>
        <hr className=" mt-4 text-gray-300" />
      </div>


      {/* Compare Modal */}
      {isOpen && (
  <div 
    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity"
    onClick={() => setIsOpen(false)}
  >
    <div
      className={`fixed bottom-0 left-0 w-full bg-white rounded-t-3xl transition-all duration-300 ease-out ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
      onClick={(e) => e.stopPropagation()} 
    >
      {/* Drag Handle */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-gray-100 rounded-full transition-colors"
        >
          {/* <GoDash size={44} className="text-gray-500" /> */}
          <GoDash className="text-gray-500 w-10 h-10 " />

        </button>
      </div>

      {/* Modal Content */}
      <h2 className="text-center text-lg font-semibold">Change Username</h2>
      <div className="flex flex-col gap-3">
        <label className="text-sm pl-4 font-semibold text-gray-600">Enter username</label>
        <input
          type="text"
          className="px-3 ml-3 mr-3 py-2 border border-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-100"
        />

        <label className="text-sm pl-4 font-semibold text-gray-600">Note</label>
        <div className="ml-3 mr-3 px-3 py-2 bg-gray-200 text-gray-500 rounded-full text-sm">
          Info entered here will appear publicly.
        </div>

        <button className="ml-3 mr-3 mb-8 mt-2 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
          Add
        </button>
      </div>
    </div>
  </div>
)}

      {/* Sort Modal */}
      {isSortOpen && (
  <div 
    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity"
    onClick={() => setIsSortOpen(false)} // Added backdrop click handler
  >
    <div 
      className={`fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-xl transition-all duration-300 ease-out ${
        isSortOpen ? "translate-y-0" : "translate-y-full"
      }`}
      onClick={(e) => e.stopPropagation()} // Prevent click propagation
    >
      {/* Close Handle */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsSortOpen(false)}
          className="hover:bg-gray-100 rounded-full transition-colors"
        >
          <GoDash size={44} className="text-gray-500" />
        </button>
      </div>

      {/* Modal Content */}
      <h2 className="text-center text-lg font-semibold">Change Username</h2>
      <div className="flex flex-col gap-3 ml-4 mt-3 mr-5">
        <div className="flex flex-col gap-1">
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
        <button className="w-full bg-blue-600 text-white py-2.5 mb-10 rounded-lg hover:bg-blue-700 transition-colors mt-2">
          Apply
        </button>
      </div>
    </div>
  </div>
)}

      <hr className="text-gray-300" />

      {/* tweak score user */}

      <div className="flex flex-col items-center w-full  sm:hidden">
  <div className="relative flex flex-col items-center">
    <div className="relative flex flex-col mt-4 items-center mb-6">
      {/* User Avatar */}
      <div className="relative flex items-center justify-center border-5 border-white w-20 h-20 bg-gray-100 rounded-full shadow-md">
        <span className="text-3xl text-gray-500"><User className="w-10 h-10" /></span>
        {/* SVG Badge */}
        <img src={Verify1} alt="Verified" className="absolute -bottom-1 -right-1 w-6 h-6" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <h3 className="mt-2 text-sm font-semibold text-gray-900">Jane Smith</h3>
        <p className="text-blue-500 font-bold text-sm">( 84 3/8 )</p>
      </div>
      <p className="text-gray-500 text-xs">#123456</p>
    </div>

    <div className="flex w-full justify-center gap-7 mb-3">
      {players.slice(1).map((player) => (
        <div key={player.rank} className="flex flex-col items-center">
          <div className="relative flex items-center justify-center w-20 h-20 border-5 border-white bg-gray-100 rounded-full shadow-md">
            <span className="text-9xl text-gray-500"><User className="w-10 h-10" /></span>
            {/* SVG Badge for Each Player */}
            <img src={player.svg} alt="Verified" className="absolute -bottom-1 -right-1 w-6 h-6" />
          </div>
          <div className="flex justify-center items-center mt-2 gap-1">
            <h3 className="text-sm font-semibold text-gray-900">{player.name}</h3>
            <p className={`text-sm ${player.color} font-bold`}>( {player.score} )</p>
          </div>
          <p className="text-gray-500 text-xs">#123456</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}