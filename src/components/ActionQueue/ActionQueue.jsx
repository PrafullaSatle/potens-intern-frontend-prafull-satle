import { useTranslation } from "react-i18next";
import ActionItem from "./ActionItem";

function ActionQueue({ items, onApprove, onHold }) {
  const { t } = useTranslation();

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6">
      <div className="flex justify-between items-center mb-5 gap-2">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">
            {t("actionQueue.title")}
          </h2>

          <p className="text-xs md:text-sm text-slate-500">
            {t("actionQueue.subtitle")}
          </p>
        </div>

        <span className="text-xs md:text-sm bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
          {items.length} {t("actionQueue.pending")}
        </span>
      </div>

      <div className="hidden md:grid grid-cols-[100px_1fr_70px_90px_70px_120px] gap-3 px-3 py-2 text-xs font-semibold text-slate-400 uppercase bg-slate-50 rounded-t-lg border-b border-slate-200">
        <span>{t("actionQueue.priority")}</span>
        <span>{t("actionQueue.task")}</span>
        <span>{t("actionQueue.ward")}</span>
        <span>{t("actionQueue.reported")}</span>
        <span>{t("actionQueue.sla")}</span>
        <span>{t("actionQueue.action")}</span>
      </div>

      <div className="divide-y divide-slate-200">
        {items.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-6">
            {t("actionQueue.empty", "No pending items")}
          </p>
        ) : (
          items.map((item) => (
            <ActionItem
              key={item.id}
              item={item}
              onApprove={onApprove}
              onHold={onHold}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ActionQueue;