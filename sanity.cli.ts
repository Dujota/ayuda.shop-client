/* eslint-disable no-process-env */
import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "@/lib/sanity/sanity.api";

const dev = process.env.NODE_ENV !== "production";
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

export default defineCliConfig({ api: { projectId, dataset } });
