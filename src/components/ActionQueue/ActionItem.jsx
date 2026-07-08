import { useTranslation } from "react-i18next";

function ActionItem({ item }) {
  const { t } = useTranslation();

  const priorityDot = {
    Critical: "🔴",
    High: "🟡",
    Medium: "🔵",
  };

  const getSlaStyle = (sla) => {
    const minutes = parseInt(sla, 10);
    if (minutes <= 30) return "bg-red-50 text-red-700";
    if (minutes <= 90) return "bg-amber-50 text-amber-700";
    return "bg-slate-100 text-slate-600";
  };

  return (
    <div className="flex flex-col gap-3 py-4 md:grid md:grid-cols-[100px_1fr_70px_90px_70px_120px] md:gap-3 md:items-center md:px-3 md:py-4 hover:bg-slate-50 transition">

      {/* Priority */}
      <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
        <span>{priorityDot[item.priority]}</span>
        {t(`priority.${item.priority.toLowerCase()}`)}
      </span>

      {/* Task + context */}
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-slate-900 md:truncate">
          {item.task}
        </h3>
        <p className="text-xs text-slate-400 md:truncate">
          {item.context}
        </p>
      </div>

      {/* Ward + Reported + SLA — stacked as a row on mobile, separate columns on desktop */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 md:contents">
        <span className="text-sm text-slate-600">
          {item.ward}
        </span>

        <span className="text-sm text-slate-600">
          {item.reported}
        </span>

        <span
          className={`inline-flex justify-center items-center px-2 py-1 rounded-full text-xs font-bold ${getSlaStyle(item.sla)}`}
        >
          {item.sla}
        </span>
      </div>

      {/* Action */}
      <div className="flex gap-1.5">
        <button className="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs text-white hover:bg-emerald-700 transition">
          {t("actionQueue.approve")}
        </button>

        <button className="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs hover:bg-slate-100 transition">
          {t("actionQueue.hold")}
        </button>
      </div>

    </div>
  );
}

export default ActionItem;