import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Shield, Lock, AlertCircle, Bus } from "lucide-react";
import { Link } from "react-router-dom";

interface DriverLoginPageProps {
  onLogin?: (driverId: string, password: string) => Promise<void>;
}

const DriverLoginPage: React.FC<DriverLoginPageProps> = ({
  onLogin = async () => {
    // This is a mock implementation
    console.log("Driver login attempted");
    return Promise.resolve();
  },
}) => {
  const navigate = useNavigate();
  const [driverId, setDriverId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Basic validation
      if (!driverId || !password) {
        throw new Error("Please enter both driver ID and password");
      }

      await onLogin(driverId, password);
      navigate("/driver/dashboard"); // Redirect to driver dashboard on success
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <Shield className="h-10 w-10 text-blue-500 mr-2" />
            <div>
              <h1 className="text-3xl font-bold text-white">Inflow</h1>
              <p className="text-sm text-gray-400">Bus Surveillance System</p>
            </div>
          </div>
        </div>

        <Card className="bg-gray-900 border-gray-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Driver Login
            </CardTitle>
            <CardDescription className="text-gray-400 text-center">
              Enter your driver credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-md bg-red-900/30 border border-red-800 flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="driverId" className="text-gray-300">
                  Driver ID
                </Label>
                <div className="relative">
                  <Bus className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="driverId"
                    type="text"
                    placeholder="DRV-12345"
                    value={driverId}
                    onChange={(e) => setDriverId(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-600 focus:ring-blue-600"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Link
                    to="/driver/forgot-password"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-600 focus:ring-blue-600"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login as Driver"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-sm">
              Not a driver?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-300">
                Standard Login
              </Link>
            </p>
          </CardFooter>
        </Card>

        <p className="text-center text-gray-500 text-xs mt-8">
          © 2023 Inflow Bus Surveillance System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DriverLoginPage;
