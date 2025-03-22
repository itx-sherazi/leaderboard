import { Layers, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between border-b border-gray-300 items-center p-4 md:p-6 lg:p-3 lg:pl-20 lg:pr-20">
      {/* Left Side: Logo & Title */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 p-2 rounded-lg">
          <Layers className="text-white" size={24} />
        </div>
        <span className="text-lg font-semibold text-gray-700">LeaderBoard</span>
      </div>

      {/* Right Side: User Icon */}
      <div className="p-2 bg-gray-100 rounded-full">
        <User className="text-gray-700" size={24} />
      </div>
    </div>
  );
}
