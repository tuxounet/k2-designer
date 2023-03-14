// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../app/src/router";
export const trpc = createTRPCReact<AppRouter>();
