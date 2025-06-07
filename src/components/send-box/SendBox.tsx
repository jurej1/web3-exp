"use client";

import {
  SendTokensSchema,
  SendTokensSchemaType,
} from "@/lib/models/send-tokens-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useAccount, useBalance, useSendTransaction } from "wagmi";
import { useUserBalance } from "@/hooks/web3/useUserBalance";
import { Button } from "../ui/button";
import { Address, parseEther } from "viem";

export function SendBox() {
  const { address } = useAccount();

  const balanceResult = useUserBalance();

  const { data: hash, sendTransaction } = useSendTransaction();

  const form = useForm<SendTokensSchemaType>({
    resolver: zodResolver(SendTokensSchema),
    defaultValues: {
      receiver: "",
      value: "",
    },
  });

  function onSubmit(values: SendTokensSchemaType) {
    sendTransaction({
      to: values.receiver as Address,
      value: parseEther(values.value),
    });
  }

  return (
    <div className="h-[500px] w-[500px] rounded-2xl bg-gray-200 p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col items-center justify-evenly"
        >
          <FormItem className="w-full">
            <FormLabel>Send From</FormLabel>
            <Input readOnly placeholder={address} />
            <FormDescription>Your wallet address</FormDescription>
          </FormItem>

          <FormField
            control={form.control}
            name="receiver"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Send to</FormLabel>

                <FormControl>
                  <Input placeholder="Address " {...field} />
                </FormControl>

                <FormDescription>This is the receivers address</FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`0.00 ${balanceResult.data?.symbol || ""}`}
                    {...field}
                    onChange={(e) => {
                      // Allow only numbers and a single decimal point
                      const value = e.target.value;
                      const regex = /^[0-9]*\.?[0-9]*$/;
                      if (value === "" || regex.test(value)) {
                        field.onChange(value);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="text-end">
                  Available Balance: {balanceResult.data?.formatted}
                  {balanceResult.data?.symbol}
                </FormDescription>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
