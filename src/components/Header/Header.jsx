import { useState, useEffect } from "react";
import { Bell, Globe, ShieldCheck, UserCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dateLocale = i18n.language === "mr" ? "mr-IN" : "en-IN";

  const date = now.toLocaleDateString(dateLocale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString(dateLocale);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "mr" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("appLanguage", newLang);
  };

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
              {t("header.title")}
            </h1>

            <p className="text-sm text-slate-300">
              {t("header.subtitle")}
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

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm hover:text-emerald-400 transition"
            aria-label={t("header.language")}
          >
            <Globe size={18} />
            {i18n.language === "en" ? "EN | मराठी" : "मराठी | EN"}
          </button>

          <button className="hover:text-emerald-400 transition" aria-label={t("header.notifications")}>
            <Bell size={20} />
          </button>

          <button className="hover:text-emerald-400 transition" aria-label={t("header.profile")}>
            <UserCircle size={24} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;