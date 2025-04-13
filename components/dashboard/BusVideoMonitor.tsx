import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowDown, ArrowUp, Users } from "lucide-react";

interface BusVideoMonitorProps {
  videoUrl: string;
  peopleIn: number;
  peopleOut: number;
}

const BusVideoMonitor: React.FC<BusVideoMonitorProps> = ({
  videoUrl = "/videos/Recording 2025-03-17 221831.mp4", // Using public path
  peopleIn = 0,
  peopleOut = 0,
}) => {
  return (
    <Card className="w-full bg-gray-900 border-gray-800 text-white shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-400" />
          Live Monitoring
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
            <video
              className="w-full h-full object-cover"
              src={videoUrl}
              controls
              autoPlay
              muted
              loop
              onError={(e) => {
                console.error("Error loading video:", e);
              }}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <ArrowUp className="h-5 w-5" />
                <span className="font-medium">Entries</span>
              </div>
              <div className="text-2xl font-bold">{peopleIn}</div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <ArrowDown className="h-5 w-5" />
                <span className="font-medium">Exits</span>
              </div>
              <div className="text-2xl font-bold">{peopleOut}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusVideoMonitor;