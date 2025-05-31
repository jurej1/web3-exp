import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between bg-gray-300 px-12">
      <h1>Header</h1>

      <ConnectButton />
    </header>
  );
}
