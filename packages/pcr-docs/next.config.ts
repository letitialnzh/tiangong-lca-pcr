import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This repository maintains its own governed AGENTS.md contract; never let `next dev`
  // append generated agent rules to a tracked file.
  agentRules: false,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // TypeScript 7 has no JavaScript compiler API; use the local tsc CLI.
    useTypeScriptCli: true,
    // Each page worker loads the complete manifest; bound duplicated metadata within 6 GB.
    cpus: 2,
  },
};

export default nextConfig;
