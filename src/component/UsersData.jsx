import { useState } from "react";
import { ChevronDown, User } from "lucide-react";
import Down from '../assets/arrow_down.svg'
import Up from '../assets/arrow_up.svg'
const usersData = [
  { name: "Jane Smith", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Jennifer", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Alex Richard", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Your current rank", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Your current rank", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Your current rank", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Your current rank", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const ranks = [
  { id: 4, name: "Jane Smith", number: "#123456", up: true },
  { id: 5, name: "Jane Smith", number: "#123456", up: false },
  { id: 6, name: "Your current rank", number: "", up: false },
  { id: 7, name: "Jane Smith", number: "#123456", up: true },
];


export default function Leaderboard() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full pl-4 pr-4">
 <div className="h-[calc(100vh-160px)] overflow-y-auto ml-14 mr-14 pr-2 space-y-2 custom-scrollbar hidden sm:block">
  {usersData.map((user, index) => (
    <div 
      key={index} 
      className={`bg-white rounded-2xl flex flex-col border border-gray-200 ${
        activeIndex === index ? "!border-blue-500 border-1" : ""
      }`}
    >
      <div className="flex">
        {/* Left Number Section */}
        <span 
          className={`text-gray-700 font-semibold w-12 flex items-center justify-center bg-gray-100 border-l-4 border-gray-100 rounded-l-2xl ${
            activeIndex === index ? "h-[115px]" : "h-18"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Main Content */}
        <div className="flex-1">
          {/* Clickable Header */}
          <div 
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                <User className="w-6 h-6 text-gray-500" />
              </div>
              <span className="text-gray-900 font-medium">{user.name}</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${
              activeIndex === index ? "rotate-180" : ""
            }`} />
          </div>

          {/* Accordion Content */}
          {activeIndex === index && (
            <div className="pb-4 pl-6 pr-4 text-gray-700"> {/* Increased left padding */}
              {user.details}
            </div>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Custom Scrollbar CSS */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #d1d5db;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 3px;
        }
      
      `}</style>

      {/* small screen user data */}
      <div className="w-full mx-auto space-y-4  mb-10 block sm:hidden">
  {ranks.map((user, index) => (
    <div
      key={user.id}
      className={`bg-white border border-gray-200 rounded-2xl flex flex-col 
      ${activeIndex === index ? "!border-blue-500 border-2" : ""}`}
      onClick={() => setActiveIndex(index)}
    >
      {/* Top section with number, icon, and name */}
      <div className="flex">
        {/* Numbering Box (Left Side) */}
        <span className="text-gray-700 font-semibold border-none w-12 flex items-center justify-center bg-gray-100 border-l-4 border-gray-100 rounded-l-2xl">
          {String(user.id).padStart(2, "0")}
        </span>

        {/* Content Box */}
        <div className="flex-1 flex items-center justify-between p-4 cursor-pointer transition-all">
          {/* Left Side: Icon & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
              <User className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">{user.name}</p>
              {user.number && <p className="text-xs mt-1 text-gray-500">{user.number}</p>}
            </div>
          </div>

          {/* Right Side: Arrow */}
          {user.up ? (
               <img src={Up}/>
          ) : (
            <img src={Down}/>
          )}
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}

