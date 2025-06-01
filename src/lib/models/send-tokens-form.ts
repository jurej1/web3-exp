import { z } from "zod";
import { isAddress } from "ethers";

export const SendTokensSchema = z.object({
  receiver: z.custom<string>(isAddress, "Invalid Address"),
  value: z.number(),
});

export type SendTokensSchemaType = z.infer<typeof SendTokensSchema>;
