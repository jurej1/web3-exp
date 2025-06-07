import { z } from "zod";
import { isAddress } from "ethers";

export const SendTokensSchema = z.object({
  receiver: z.custom<string>(isAddress, "Invalid Address"),
  value: z.string(),
});

export type SendTokensSchemaType = z.infer<typeof SendTokensSchema>;
