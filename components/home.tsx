import React from "react";
import Navbar from "./layout/Navbar";
import IntroSection from "./dashboard/IntroSection";
import PeopleCountWidget from "./dashboard/PeopleCountWidget";
import BusRouteWidget from "./dashboard/BusRouteWidget";
import TrackBusWidget from "./dashboard/TrackBusWidget";
import BusFleetStats from "./dashboard/BusFleetStats";
import PassengerAnalytics from "./dashboard/PassengerAnalytics";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950" id="top">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        <IntroSection />
        
        <div className="mt-8 space-y-8">
          <section id="fleet-overview">
            <h2 className="text-2xl font-bold text-white mb-4">Bus Fleet Overview</h2>
            <BusFleetStats />
          </section>

          <section id="analytics">
            <h2 className="text-2xl font-bold text-white mb-4">Analytics</h2>
            <PassengerAnalytics />
          </section>

          <section id="active-monitoring">
            <h2 className="text-2xl font-bold text-white mb-4">Active Monitoring</h2>
            <div className="space-y-6">
              <PeopleCountWidget
                currentCount={32}
                maxCapacity={50}
                percentageFull={64}
                trend="up"
                alerts={["Approaching capacity"]}
                busId="BUS-1234"
                lastUpdated="2 minutes ago"
                showVideoMonitor={true}
                videoUrl="/videos/bus-footage.mp4"
                peopleIn={45}
                peopleOut={13}
              />

              <div id="bus-tracking">
                <BusRouteWidget
                  routeNumber="42"
                  routeName="Downtown Express"
                  progress={45}
                />

                <TrackBusWidget busId="BUS-1234" showAlerts={true} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
