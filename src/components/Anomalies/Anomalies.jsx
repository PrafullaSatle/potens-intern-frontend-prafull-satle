import { useTranslation } from "react-i18next";

function Anomalies({ items, onReview }) {
  const { t } = useTranslation();

  const severityColor = {
    Critical: "text-red-600",
    High: "text-amber-600",
    Medium: "text-sky-600",
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {t("anomalies.title")}
          </h2>
          <p className="text-sm text-slate-500">
            {t("anomalies.subtitle")}
          </p>
        </div>

        <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
          {items.length} {t("anomalies.active")}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-6 col-span-full">
            {t("anomalies.empty", "No active anomalies")}
          </p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 hover:bg-slate-50 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-xs font-semibold uppercase ${severityColor[item.severity]}`}>
                    {t(`priority.${item.severity.toLowerCase()}`)}
                  </span>

                  <h3 className="font-semibold mt-1">{item.category}</h3>
                  <p className="text-sm text-slate-500 mt-1">{item.issue}</p>

                  <div className="flex gap-5 text-xs text-slate-400 mt-3">
                    <span>{t("anomalies.confidence")}: {item.confidence}%</span>
                    <span>{item.time}</span>
                  </div>
                </div>

                <button
                  onClick={() => onReview(item.id)}
                  className="px-3 py-1 rounded-lg border border-slate-300 text-sm hover:bg-slate-100 transition"
                >
                  {t("anomalies.review")}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Anomalies;