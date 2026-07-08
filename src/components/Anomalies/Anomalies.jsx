import { useTranslation } from "react-i18next";
import anomalies from "../../data/anomalies";

function Anomalies() {
  const { t } = useTranslation();

  const severityColor = {
    Critical: "bg-red-50 text-red-700",
    High: "bg-amber-50 text-amber-700",
    Medium: "bg-sky-50 text-sky-700",
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
          {anomalies.length} {t("anomalies.active")}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {anomalies.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 hover:bg-slate-50 transition"
          >
            <div className="flex justify-between items-start">

              <div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${severityColor[item.severity]}`}
                >
                  {t(`priority.${item.severity.toLowerCase()}`)}
                </span>

                {/* category/issue/time come from dummy data (anomalies.js)
                    and are not translated via i18n JSON — rendered as-is. */}
                <h3 className="font-semibold mt-1">
                  {item.category}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {item.issue}
                </p>

                <div className="flex gap-5 text-xs text-slate-400 mt-3">
                  <span>{t("anomalies.confidence")}: {item.confidence}%</span>
                  <span>{item.time}</span>
                </div>
              </div>

              <button className="px-3 py-1 rounded-lg border border-slate-300 text-sm hover:bg-slate-100 transition">
                {t("anomalies.review")}
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Anomalies;