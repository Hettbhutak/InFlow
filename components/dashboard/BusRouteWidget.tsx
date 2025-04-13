import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Clock, MapPin } from "lucide-react";

interface BusStop {
  id: string;
  name: string;
  time: string;
  status: "completed" | "current" | "upcoming";
}

interface BusRouteWidgetProps {
  routeNumber?: string;
  routeName?: string;
  stops?: BusStop[];
  progress?: number;
}

const BusRouteWidget: React.FC<BusRouteWidgetProps> = ({
  routeNumber = "42",
  routeName = "Downtown Express",
  stops = [
    {
      id: "1",
      name: "Central Station",
      time: "08:00",
      status: "completed",
    },
    {
      id: "2",
      name: "Market Square",
      time: "08:15",
      status: "completed",
    },
    {
      id: "3",
      name: "Tech Park",
      time: "08:30",
      status: "current",
    },
    {
      id: "4",
      name: "University",
      time: "08:45",
      status: "upcoming",
    },
    {
      id: "5",
      name: "Harbor View",
      time: "09:00",
      status: "upcoming",
    },
  ],
  progress = 45,
}) => {
  return (
    <Card className="w-full h-[500px] bg-gray-900 border-gray-800 text-white shadow-lg"> {/* Changed height from 250px to 400px */}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">
            Bus Route
            <Badge className="ml-2 bg-blue-600 hover:bg-blue-700">
              Route {routeNumber}
            </Badge>
          </CardTitle>
          <div className="text-sm text-gray-400">{routeName}</div>
        </div>
        <Progress value={progress} className="h-2 bg-gray-700" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2.5 top-0 h-full w-0.5 bg-gray-700"></div>

            {/* Bus stops */}
            <div className="space-y-3">
              {stops.map((stop) => (
                <div key={stop.id} className="flex items-center ml-1">
                  {/* Status indicator */}
                  <div
                    className={`w-4 h-4 rounded-full z-10 ${
                      stop.status === "completed"
                        ? "bg-green-500"
                        : stop.status === "current"
                          ? "bg-blue-500 animate-pulse"
                          : "bg-gray-600"
                    }`}
                  />

                  {/* Stop details */}
                  <div className="ml-4 flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span
                        className={`${
                          stop.status === "completed"
                            ? "text-gray-400"
                            : stop.status === "current"
                              ? "text-white font-medium"
                              : "text-gray-300"
                        }`}
                      >
                        {stop.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      <span className="text-gray-400">{stop.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusRouteWidget;
