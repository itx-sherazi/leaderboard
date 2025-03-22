import { Layers, User } from "lucide-react";
import Logo from '../assets/Logo.svg'

export default function Navbar() {
  return (
    <div className="flex justify-between border-b border-gray-300 items-center p-4 md:p-6 lg:p-3 lg:pl-20 lg:pr-20">
      {/* Left Side: Logo & Title */}
      <div className="flex items-center">
        <div className=" p-2 rounded-lg">
          <img src={Logo} className="p-0 m-0 border-0 bg-transparent" />

        </div>
        <span className="leaderboard-title">LeaderBoard</span>
      </div>

      {/* Right Side: User Icon */}
      <div className="p-2 bg-gray-100 rounded-full">
        <User className="text-gray-700" size={24} />
      </div>
    </div>
  );
}
