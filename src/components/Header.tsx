import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  return (
    <header className="h-16 bg-gray-300 flex items-center px-12 justify-between">
      <h1>Header</h1>

      <ConnectButton />
    </header>
  );
}
