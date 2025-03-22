import { useState } from "react";
import { ChevronDown, User } from "lucide-react";

const usersData = [
  { name: "Jane Smith", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Jennifer", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Alex Richard", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Your current rank", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Your current rank", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
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
    <div className="w-full pl-18 pr-18">
      <div className="max-h-[400px] overflow-y-auto space-y-4 pr-4 custom-scrollbar hidden sm:block">
        {/* Add hidden and sm:block classes */}
        {usersData.map((user, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl flex flex-col">
            {/* Top section with number, icon, and name */}
            <div className="flex">
              {/* Numbering Box (Full Height, Left Border) */}
              <span className="text-gray-700 font-semibold w-12 flex items-center justify-center bg-gray-100 border-l-4 border-gray-100 rounded-l-lg">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content Box */}
              <div
                className={`flex-1 flex items-center justify-between p-4 cursor-pointer transition-all ${activeIndex === index ? "border rounded-2xl border-blue-500" : "border border-transparent"
                  }`}
                onClick={() => toggleAccordion(index)}
              >
                {/* Left Side: Icon & Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-gray-900 font-medium">{user.name}</span>
                </div>
                {/* Right Side: Chevron Icon */}
                <ChevronDown className={`w-5 h-5 transition-transform ${activeIndex === index ? "rotate-180" : ""}`} />
              </div>
            </div>

            {/* Show details when clicked */}
            {activeIndex === index && (
              <div className="p-4 text-gray-700">{user.details}</div>
            )}
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
      <div className="w-full mx-auto space-y-4 block sm:hidden">
        {ranks.map((user, index) => (
          <div key={user.id} className="bg-white  w-full border border-gray-200 rounded-2xl flex flex-col">
            {/* Top section with number, icon, and name */}
            <div className="flex  ">
              {/* Numbering Box (Left Side) */}
              <span className="text-gray-700 font-semibold w-12 flex items-center justify-center bg-gray-100 border-l-4 border-gray-100 rounded-l-lg">
                {String(user.id).padStart(2, "0")}
              </span>

              {/* Content Box */}
              <div
                className={`flex-1 flex items-center justify-between p-4  cursor-pointer transition-all 
              ${selectedId === user.id ? "border rounded-2xl border-blue-500" : "border border-transparent"}`}
                onClick={() => setSelectedId(user.id)}
              >
                {/* Left Side: Icon & Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{user.name}</p>
                    {user.number && <p className="text-xs text-gray-500">{user.number}</p>}
                  </div>
                </div>

                {/* Right Side: Arrow */}
                {user.up ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 fill-green-500"
                  >
                    <path d="M6 15l6-6 6 6" />
                  </svg>

                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 fill-red-500"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>

                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
