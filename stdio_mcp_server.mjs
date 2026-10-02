#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "dribbble",
  boardId: "dribbble-official",
  domain: "dribbble.com",
  npmName: "zc-dribbble-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
