import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { LucideIcon } from "lucide-react";


const StatCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="text-muted-foreground" size={20} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">{value}</div>
        {trend && <p className="text-sm text-muted-foreground mt-1">{trend}</p>}
      </CardContent>
    </Card>
  );
};

export default StatCard