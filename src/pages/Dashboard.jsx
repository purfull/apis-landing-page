import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import UsageChart from "../components/UsageChart";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Activity, CreditCard, Key, TrendingUp } from "lucide-react";
import "../css/dashboard.scss";

const recentLogs = [
  { endpoint: "/email/verify", status: "200", time: "2 min ago" },
  { endpoint: "/location/lookup", status: "200", time: "5 min ago" },
  { endpoint: "/form/submit", status: "201", time: "8 min ago" },
  { endpoint: "/email/verify", status: "200", time: "12 min ago" },
  { endpoint: "/location/lookup", status: "429", time: "15 min ago" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <div className="container">
          <div>
            <h1>Dashboard</h1>
            <p>Monitor your API usage and performance</p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <StatCard
              title="API Calls"
              value="12,543"
              icon={Activity}
              trend="+12% from last month"
            />
            <StatCard
              title="Credits Remaining"
              value="8,457"
              icon={CreditCard}
              trend="Standard Plan"
            />
            <StatCard
              title="Active Keys"
              value="3"
              icon={Key}
              trend="2 production, 1 test"
            />
            <StatCard
              title="Success Rate"
              value="99.8%"
              icon={TrendingUp}
              trend="Excellent performance"
            />
          </div>
          
          {/* Recent Activity */}
          <Card className="recent-activity">
            <CardHeader>
              <CardTitle>Recent API Calls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="logs">
                {recentLogs.map((log, index) => (
                  <div key={index} className="log-item">
                    <div className="left">
                      <code>{log.endpoint}</code>
                      <span
                        className={`badge ${
                          log.status === "200" || log.status === "201"
                            ? "success"
                            : "error"
                        }`}
                      >
                        {log.status}
                      </span>
                    </div>
                    <span className="time">{log.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chart */}
          <UsageChart />

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
