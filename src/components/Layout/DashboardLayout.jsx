import { useState } from "react";
import { useTranslation } from "react-i18next";
import ActionQueue from "../ActionQueue/ActionQueue";
import Anomalies from "../Anomalies/Anomalies";
import OperationsPulse from "../OperationsPulse/OperationsPulse";
import RecentActivity from "../RecentActivity/RecentActivity";

import initialPriorities from "../../data/priorities";
import initialAnomalies from "../../data/anomalies";
import initialActivities from "../../data/activities";

function DashboardLayout() {
  const { i18n } = useTranslation();

  const [actionItems, setActionItems] = useState(initialPriorities);
  const [anomalyItems, setAnomalyItems] = useState(initialAnomalies);
  const [activityItems, setActivityItems] = useState(initialActivities);

  const getCurrentTime = () =>
    new Date().toLocaleTimeString(i18n.language === "mr" ? "mr-IN" : "en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const addActivity = (entry) => {
    setActivityItems((prev) => [
      { id: `act-${Date.now()}`, time: getCurrentTime(), ...entry },
      ...prev,
    ]);
  };

  // ActionQueue handlers
  const handleApprove = (id) => {
    const item = actionItems.find((i) => i.id === id);
    if (!item) return;

    setActionItems((prev) => prev.filter((i) => i.id !== id));
    addActivity({
      status: "Approved",
      activity: item.task,
      ward: item.ward,
      officer: "You",
    });
  };

  const handleHold = (id) => {
    const item = actionItems.find((i) => i.id === id);
    if (!item) return;

    setActionItems((prev) => prev.filter((i) => i.id !== id));
    addActivity({
      status: "Assigned",
      activity: item.task,
      ward: item.ward,
      officer: "You",
    });
  };

  // Anomalies handler
  const handleReview = (id) => {
    const item = anomalyItems.find((i) => i.id === id);
    if (!item) return;

    setAnomalyItems((prev) => prev.filter((i) => i.id !== id));
    addActivity({
      status: "Completed",
      activity: item.category,
      ward: item.ward || "—",
      officer: "You",
    });
  };

  return (
    <main className="max-w-[calc(100vw-60px)] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Section */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <ActionQueue
            items={actionItems}
            onApprove={handleApprove}
            onHold={handleHold}
          />
          <Anomalies
            items={anomalyItems}
            onReview={handleReview}
          />
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <OperationsPulse />
          <RecentActivity items={activityItems} />
        </div>

      </div>
    </main>
  );
}

export default DashboardLayout;