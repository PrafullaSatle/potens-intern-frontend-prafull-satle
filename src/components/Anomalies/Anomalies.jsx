import anomalies from "../../data/anomalies";

function Anomalies() {
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
            Anomalies
          </h2>

          <p className="text-sm text-slate-500">
            Automated system alerts requiring review
          </p>
        </div>

        <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
          {anomalies.length} Active
        </span>
      </div>

      <div className="space-y-4">
        {anomalies.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 hover:bg-slate-50 transition"
          >
            <div className="flex justify-between items-start">

              <div>
                <span
                  className={`text-xs font-semibold uppercase ${severityColor[item.severity]}`}
                >
                  {item.severity}
                </span>

                <h3 className="font-semibold mt-1">
                  {item.category}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {item.issue}
                </p>

                <div className="flex gap-5 text-xs text-slate-400 mt-3">
                  <span>Confidence: {item.confidence}%</span>
                  <span>{item.time}</span>
                </div>
              </div>

              <button className="px-3 py-1 rounded-lg border border-slate-300 text-sm hover:bg-slate-100 transition">
                Review
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Anomalies;