import metrics from "../../data/metrics";

function OperationsPulse() {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Operations Pulse
        </h2>

        <p className="text-sm text-slate-500">
          Live overview of today's municipal operations
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">Open Requests</p>
          <h3 className="text-3xl font-bold mt-2">
            {metrics.openRequests}
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">Active Incidents</p>
          <h3 className="text-3xl font-bold mt-2">
            {metrics.activeIncidents}
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">Resolved Today</p>
          <h3 className="text-3xl font-bold mt-2 text-emerald-600">
            {metrics.resolvedToday}
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">Response Rate</p>
          <h3 className="text-3xl font-bold mt-2 text-blue-600">
            {metrics.responseRate}
          </h3>
        </div>

      </div>
    </section>
  );
}

export default OperationsPulse;