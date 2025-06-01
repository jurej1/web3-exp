import { useAccount, useBalance } from "wagmi";

export const useUserBalance = () => {
  const { address } = useAccount();

  return useBalance({ address: address });
};
