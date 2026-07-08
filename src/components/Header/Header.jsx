import { Bell, Globe, ShieldCheck, UserCircle } from "lucide-react";

function Header() {
  const now = new Date();

  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-IN");

  return (
    <header className="bg-slate-900 text-white border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide">
              CivicPulse
            </h1>

            <p className="text-sm text-slate-300">
              Municipal Operations Cockpit
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="hidden md:block text-center">
          <p className="text-sm text-slate-300">
            {date}
          </p>

          <p className="text-xl font-semibold">
            {time}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          <button className="flex items-center gap-2 text-sm hover:text-emerald-400 transition">
            <Globe size={18} />
            EN | मराठी
          </button>

          <button className="hover:text-emerald-400 transition">
            <Bell size={20} />
          </button>

          <button className="hover:text-emerald-400 transition">
            <UserCircle size={24} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;