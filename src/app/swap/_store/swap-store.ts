import { create } from "zustand";

export type SwapView = "swap" | "settings";

export type SwapState = {
  view: SwapView;
  updateView: (view: SwapView) => void;
};

const useSwapStore = create<SwapState>((set, get) => {
  return {
    view: "swap",
    updateView: (view) => set({ view }),
  };
});

export default useSwapStore;
