import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Users, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";
import BusVideoMonitor from "./BusVideoMonitor";

interface PeopleCountWidgetProps {
  currentCount?: number;
  maxCapacity?: number;
  percentageFull?: number;
  trend?: "up" | "down" | "stable";
  alerts?: string[];
  busId?: string;
  lastUpdated?: string;
  showVideoMonitor?: boolean;
  videoUrl?: string;
  peopleIn?: number;
  peopleOut?: number;
}

const PeopleCountWidget = ({
  currentCount = 32,
  maxCapacity = 50,
  percentageFull = 64,
  trend = "up",
  alerts = ["Approaching capacity"],
  busId = "BUS-1234",
  lastUpdated = "2 minutes ago",
  showVideoMonitor = true,
  videoUrl = "/bus-footage.mp4",
  peopleIn = 45,
  peopleOut = 13,
}: PeopleCountWidgetProps) => {
  // Calculate if the bus is getting crowded (over 75% capacity)
  const isCrowded = percentageFull > 75;

  // Determine progress color based on capacity
  const progressColor = isCrowded ? "bg-red-500" : "bg-green-500";

  // Trend icon based on passenger count trend
  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : null;

  return (
    <div className="space-y-4">
      {/* Existing PeopleCountWidget card */}
      <Card className="w-full bg-gray-900 text-white border-gray-800 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-400" />
              People Count
            </CardTitle>
            <Badge variant="outline" className="text-xs bg-gray-800">
              Bus ID: {busId}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Current occupancy section */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-gray-400 text-sm mb-2">Current Occupancy</h3>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">{currentCount}</div>
                <div className="text-gray-400 text-sm">passengers</div>
                {TrendIcon && (
                  <TrendIcon
                    className={`ml-2 h-5 w-5 ${trend === "up" ? "text-red-400" : "text-green-400"}`}
                  />
                )}
              </div>
            </div>

            {/* Capacity metrics section */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-gray-400 text-sm mb-2">Capacity</h3>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{percentageFull}% Full</span>
                  <span className="text-sm text-gray-400">
                    {currentCount}/{maxCapacity}
                  </span>
                </div>
                <Progress
                  value={percentageFull}
                  max={100}
                  className="h-2 bg-gray-700"
                  indicatorClassName={`${isCrowded ? "bg-red-500" : "bg-green-500"}`}
                />
                <div
                  className={`text-xs mt-1 ${isCrowded ? "text-red-400" : "text-green-400"}`}
                >
                  {isCrowded ? "High occupancy" : "Normal occupancy"}
                </div>
              </div>
            </div>

            {/* Alerts section */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-gray-400 text-sm mb-2">Alerts</h3>
              {alerts.length > 0 ? (
                <div className="space-y-2">
                  {alerts.map((alert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-amber-400 text-sm"
                    >
                      <AlertTriangle className="h-4 w-4" />
                      <span>{alert}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-green-400 text-sm flex items-center gap-2">
                  <span>No alerts at this time</span>
                </div>
              )}
            </div>
          </div>

          {/* Historical data visualization placeholder */}
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <h3 className="text-gray-400 text-sm mb-3">
              Occupancy Trend (Last Hour)
            </h3>
            <div className="h-16 flex items-end space-x-1">
              {/* Simplified bar chart visualization */}
              {[35, 40, 38, 42, 45, 40, 38, 32, 30, 32, 35, 32].map(
                (value, i) => (
                  <div
                    key={i}
                    className={`w-full ${value > 40 ? "bg-red-500" : "bg-blue-500"} rounded-t`}
                    style={{ height: `${(value / 50) * 100}%` }}
                  />
                ),
              )}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>-60m</span>
              <span>-45m</span>
              <span>-30m</span>
              <span>-15m</span>
              <span>Now</span>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-right">
            Last updated: {lastUpdated}
          </div>
        </CardContent>
      </Card>

      {/* Video Monitor */}
      {showVideoMonitor && (
        <BusVideoMonitor
          videoUrl={videoUrl}
          peopleIn={peopleIn}
          peopleOut={peopleOut}
        />
      )}
    </div>
  );
};

export default PeopleCountWidget;
