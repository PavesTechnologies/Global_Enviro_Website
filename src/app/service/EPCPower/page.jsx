"use client";
import { useEffect } from "react";

export default function EPCPowerPage() {
  useEffect(() => {
    window.location.replace("https://www.jettechenergy.com");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1e3d] text-white px-6">
      <div className="text-center space-y-4">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
        <h2 className="text-2xl font-bold">Redirecting to Jettech Energy...</h2>
        <p className="text-gray-300 text-sm">
          Taking you to{" "}
          <a
            href="https://www.jettechenergy.com"
            className="underline hover:text-blue-300"
          >
            www.jettechenergy.com
          </a>
        </p>
      </div>
    </div>
  );
}