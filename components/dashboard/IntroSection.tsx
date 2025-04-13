import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Users, Bus, Route, TrendingUp } from "lucide-react";

const IntroSection = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Inflow Bus Surveillance System
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real-time monitoring and analytics for your bus fleet. Track passenger flow, 
          optimize routes, and ensure safety with our comprehensive surveillance solution.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bus className="h-5 w-5 text-blue-400" />
              Active Buses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-gray-400 text-sm">Currently in service</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-green-400" />
              Total Passengers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,247</div>
            <p className="text-gray-400 text-sm">Today's count</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Route className="h-5 w-5 text-yellow-400" />
              Active Routes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-gray-400 text-sm">Operating now</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">98%</div>
            <p className="text-gray-400 text-sm">System uptime</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IntroSection;