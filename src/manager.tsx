import React from "react";
import { addons, types } from "storybook/manager-api";

import { Panel } from "./components/Panel";
import { Title } from "./components/Title";
import { ADDON_ID, PANEL_ID } from "./constants";

/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */

// Register the addon
addons.register(ADDON_ID, (api) => {
  // Register a panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: Title,
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => <Panel active={active ?? false} />,
  });
});
