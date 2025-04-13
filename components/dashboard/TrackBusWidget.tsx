import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import {
  MapPin,
  Navigation,
  AlertTriangle,
  Info,
  RefreshCw,
} from "lucide-react";
import { cn } from "../../lib/utils";

interface BusLocation {
  id: string;
  latitude: number;
  longitude: number;
  speed: number;
  heading: number;
  lastUpdated: string;
  status: "on-time" | "delayed" | "stopped" | "out-of-service";
}

interface TrackBusWidgetProps {
  busId?: string;
  initialLocation?: BusLocation;
  showAlerts?: boolean;
}

const defaultBusLocation: BusLocation = {
  id: "BUS-1234",
  latitude: 40.7128,
  longitude: -74.006,
  speed: 25,
  heading: 90,
  lastUpdated: new Date().toISOString(),
  status: "on-time",
};

const TrackBusWidget = ({
  busId = "BUS-1234",
  initialLocation = defaultBusLocation,
  showAlerts = true,
}: TrackBusWidgetProps) => {
  const [busLocation, setBusLocation] = useState<BusLocation>(initialLocation);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"map" | "satellite">("map");

  // Simulate fetching updated bus location
  const refreshBusLocation = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      // Simulate small movement
      setBusLocation((prev) => ({
        ...prev,
        latitude: prev.latitude + (Math.random() * 0.01 - 0.005),
        longitude: prev.longitude + (Math.random() * 0.01 - 0.005),
        speed: Math.max(0, prev.speed + (Math.random() * 10 - 5)),
        lastUpdated: new Date().toISOString(),
      }));
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Initial load
    refreshBusLocation();

    // Set up interval for periodic updates
    const intervalId = setInterval(refreshBusLocation, 30000); // Update every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  const getStatusColor = (status: BusLocation["status"]) => {
    switch (status) {
      case "on-time":
        return "bg-green-500";
      case "delayed":
        return "bg-yellow-500";
      case "stopped":
        return "bg-red-500";
      case "out-of-service":
        return "bg-gray-500";
      default:
        return "bg-blue-500";
    }
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <Card className="w-full bg-gray-900 border-gray-800 text-white shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-400" />
            Track Bus
          </CardTitle>
          <Badge
            variant="outline"
            className={cn("px-3 py-1", getStatusColor(busLocation.status))}
          >
            {busLocation.status.replace("-", " ")}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Bus ID</p>
              <p className="font-medium">{busId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Last Updated</p>
              <p className="font-medium">
                {formatTime(busLocation.lastUpdated)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Speed</p>
              <p className="font-medium">{Math.round(busLocation.speed)} mph</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={refreshBusLocation}
              disabled={isLoading}
              className="bg-gray-800 hover:bg-gray-700"
            >
              <RefreshCw
                className={cn("h-4 w-4 mr-2", isLoading && "animate-spin")}
              />
              Refresh
            </Button>
          </div>

          <Tabs defaultValue="map" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger
                value="map"
                onClick={() => setViewMode("map")}
                className="data-[state=active]:bg-gray-700"
              >
                Map View
              </TabsTrigger>
              <TabsTrigger
                value="satellite"
                onClick={() => setViewMode("satellite")}
                className="data-[state=active]:bg-gray-700"
              >
                Satellite View
              </TabsTrigger>
            </TabsList>
            <TabsContent value="map" className="mt-2">
              <div className="relative w-full h-[200px] bg-gray-800 rounded-md overflow-hidden">
                {/* Map placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <img
                    src={`https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80`}
                    alt="Map view"
                    className="w-full h-full object-cover opacity-60"
                  />
                  {/* Bus marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center animate-pulse">
                      <Navigation
                        className="h-3 w-3 text-white"
                        style={{
                          transform: `rotate(${busLocation.heading}deg)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="satellite" className="mt-2">
              <div className="relative w-full h-[200px] bg-gray-800 rounded-md overflow-hidden">
                {/* Satellite view placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <img
                    src={`https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80`}
                    alt="Satellite view"
                    className="w-full h-full object-cover opacity-70"
                  />
                  {/* Bus marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-6 w-6 rounded-full bg-red-500 border-2 border-white flex items-center justify-center animate-pulse">
                      <Navigation
                        className="h-3 w-3 text-white"
                        style={{
                          transform: `rotate(${busLocation.heading}deg)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {showAlerts && (
            <div className="mt-2 p-2 bg-gray-800 rounded-md">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Current Location</p>
                  <p className="text-xs text-gray-400">
                    Latitude: {busLocation.latitude.toFixed(4)}, Longitude:{" "}
                    {busLocation.longitude.toFixed(4)}
                  </p>
                </div>
              </div>
              {busLocation.status === "delayed" && (
                <div className="flex items-start gap-2 mt-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Delay Alert</p>
                    <p className="text-xs text-gray-400">
                      Bus is currently running behind schedule. Expected delay:
                      5-10 minutes.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackBusWidget;
