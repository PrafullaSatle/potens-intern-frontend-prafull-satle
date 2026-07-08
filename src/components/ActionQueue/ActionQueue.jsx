import { useTranslation } from "react-i18next";
import priorities from "../../data/priorities";
import ActionItem from "./ActionItem";

function ActionQueue() {
  const { t } = useTranslation();

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-semibold">
            {t("actionQueue.title")}
          </h2>

          <p className="text-sm text-slate-500">
            {t("actionQueue.subtitle")}
          </p>
        </div>

        <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
          {priorities.length} {t("actionQueue.pending")}
        </span>
      </div>

      <div className="mt-4 divide-y divide-slate-200">
        {priorities.map((item) => (
          <ActionItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default ActionQueue;