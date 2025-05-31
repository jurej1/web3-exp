"use client";

import { RotateCcw, SlidersHorizontal, ChevronLeft } from "lucide-react";
import { useAccount } from "wagmi";
import { Button } from "../ui/button";
import useSwapStore from "@/app/swap/_store/swap-store";

export function SwapBox() {
  const { isConnected } = useAccount();

  var child = <SwapChild />;

  if (!isConnected) {
    child = (
      <div>
        <h1>Please connect your wallet</h1>
      </div>
    );
  }

  const view = useSwapStore((state) => state.view);

  if (view === "settings") {
    child = <SettingsBoxHeader />;
  }

  return (
    <div className="h-[400px] w-[600px] rounded-3xl bg-blue-50 p-4">
      {child}
    </div>
  );
}

function SwapChild() {
  return (
    <div className="flex-col">
      <SwapBoxHeader />
    </div>
  );
}

function SettingsChild() {
  return (
    <div className="flex-col">
      <SettingsBoxHeader />
    </div>
  );
}

function SettingsBoxHeader() {
  const updateView = useSwapStore((state) => state.updateView);

  return (
    <div className="flex items-center space-x-4">
      <Button onClick={() => updateView("swap")}>
        <ChevronLeft />
      </Button>
      <h1>Settings</h1>
    </div>
  );
}

function SwapBoxHeader() {
  const updateView = useSwapStore((state) => state.updateView);

  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <h1 className="font-bold">Swap</h1>
        <Button variant="link">Limit Order</Button>
      </div>
      <div className="space-x-2">
        <Button>
          <RotateCcw />
        </Button>
        <Button onClick={() => updateView("settings")}>
          <SlidersHorizontal />
        </Button>
      </div>
    </div>
  );
}
