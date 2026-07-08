import activities from "../../data/activities";

function RecentActivity() {
  const statusColor = {
    Approved: "text-emerald-600",
    Assigned: "text-blue-600",
    Escalated: "text-red-600",
    Completed: "text-slate-600",
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Recent Activity
          </h2>

          <p className="text-sm text-slate-500">
            Latest operational updates across wards
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 hover:bg-slate-50 transition"
          >
            <span
              className={`text-xs font-semibold uppercase ${statusColor[item.status]}`}
            >
              {item.status}
            </span>

            <h3 className="font-semibold mt-1">
              {item.activity}
            </h3>

            <div className="flex justify-between mt-3 text-xs text-slate-500">
              <span>{item.ward}</span>
              <span>{item.officer}</span>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentActivity;