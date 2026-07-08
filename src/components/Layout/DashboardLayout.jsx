import ActionQueue from "../ActionQueue/ActionQueue";
import Anomalies from "../Anomalies/Anomalies";
import OperationsPulse from "../OperationsPulse/OperationsPulse";
import RecentActivity from "../RecentActivity/RecentActivity";

function DashboardLayout() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Section */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <ActionQueue />
          <Anomalies />
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <OperationsPulse />
          <RecentActivity />
        </div>

      </div>
    </main>
  );
}

export default DashboardLayout;