import { useTranslation } from "react-i18next";
import metrics from "../../data/metrics";
import useLiveCounter from "../../hooks/useLiveCounter";

function OperationsPulse() {
  const { t } = useTranslation();
  const liveRequests = useLiveCounter(metrics.openRequests);

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-slate-900">
          {t("operationsPulse.title")}
        </h2>

        <p className="text-sm text-slate-500">
          {t("operationsPulse.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            {t("operationsPulse.openRequests")}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {liveRequests}
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            {t("operationsPulse.activeIncidents")}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {metrics.activeIncidents}
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            {t("operationsPulse.resolvedToday")}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-600">
            {metrics.resolvedToday}
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            {t("operationsPulse.responseRate")}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-600">
            {metrics.responseRate}
          </h3>
        </div>

      </div>
    </section>
  );
}

export default OperationsPulse;