import React, { Fragment, memo, useCallback, useState } from "react";
import { Result } from "src/types";
import { AddonPanel } from "storybook/internal/components";
import { useChannel } from "storybook/manager-api";
import { styled, useTheme } from "storybook/theming";

import { EVENTS } from "../constants";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = memo(function MyPanel(props) {
  const theme = useTheme();

  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [{ divs, styled }, setState] = useState<Result>({
    divs: [],
    styled: [],
  });

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => {
      setState(newResults);
    },
  });

  const fetchData = useCallback(() => {
    emit(EVENTS.REQUEST);
  }, [emit]);

  return (
    <AddonPanel {...props}>
      <p>Your CSS Properties will be listed here...</p>
    </AddonPanel>
  );
});
