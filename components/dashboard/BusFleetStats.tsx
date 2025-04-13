import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Bus, Clock, Route, Calendar } from "lucide-react";

interface BusSchedule {
  routeId: string;
  routeName: string;
  departureTime: string;
  arrivalTime: string;
  busId: string;
  status: "active" | "completed" | "scheduled";
}

const BusFleetStats = () => {
  const dailySchedule: BusSchedule[] = [
    {
      routeId: "R1",
      routeName: "Downtown Express",
      departureTime: "06:00",
      arrivalTime: "22:00",
      busId: "BUS-1234",
      status: "active",
    },
    // Add more schedule entries
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bus className="h-5 w-5 text-blue-400" />
              Daily Operations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">48</div>
            <p className="text-gray-400 text-sm">Buses in service today</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-green-400" />
              Operating Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">18h</div>
            <p className="text-gray-400 text-sm">Average daily runtime</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Route className="h-5 w-5 text-yellow-400" />
              Total Routes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15</div>
            <p className="text-gray-400 text-sm">Active city routes</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 border-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Daily Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dailySchedule.map((schedule) => (
              <div
                key={schedule.busId}
                className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Bus className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="font-medium">{schedule.routeName}</p>
                    <p className="text-sm text-gray-400">Bus ID: {schedule.busId}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">
                    {schedule.departureTime} - {schedule.arrivalTime}
                  </p>
                  <p className="text-sm font-medium text-green-400">
                    {schedule.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusFleetStats;