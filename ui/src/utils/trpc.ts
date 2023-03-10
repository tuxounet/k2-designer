// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../app/src/server";
export const trpc = createTRPCReact<AppRouter>();
