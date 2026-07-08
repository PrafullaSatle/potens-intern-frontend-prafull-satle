function ActionItem({ item }) {
  const priorityStyle = {
    Critical: "bg-red-50 text-red-700",
    High: "bg-amber-50 text-amber-700",
    Medium: "bg-sky-50 text-sky-700",
  };

  return (
    <div className="px-2 py-4 hover:bg-slate-50 transition">
      <div className="flex items-start justify-between gap-4">

        {/* Left */}
        <div className="flex-1">

          <span
            className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold uppercase ${priorityStyle[item.priority]}`}
          >
            {item.priority}
          </span>

          <h3 className="mt-2 text-base font-semibold text-slate-900">
            {item.task}
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            {item.context}
          </p>

          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <span>{item.ward}</span>

            <span>•</span>

            <span>{item.reported}</span>

            <span>•</span>

            <span>SLA {item.sla}</span>
          </div>

        </div>

        {/* Right */}
        <div className="flex gap-2 self-center">

          <button className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-700 transition">
            Approve
          </button>

          <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100 transition">
            Hold
          </button>

        </div>

      </div>
    </div>
  );
}

export default ActionItem;