import React, { memo, useCallback, useEffect } from "react";
import type { CssProperty } from "src/types";
import { AddonPanel } from "storybook/internal/components";
import { useChannel, useParameter } from "storybook/manager-api";
import { styled, useTheme } from "storybook/theming";

import { EVENTS, KEY } from "../constants";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
`;

const Label = styled.label`
  flex: 0 0 auto;
  min-width: 120px;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 4px;
`;

interface PanelProps {
  active: boolean;
}

interface Parameters {
  [key: CssProperty]: string | undefined;
}

export const Panel: React.FC<PanelProps> = memo(function MyPanel(props) {
  const theme = useTheme();
  const config = useParameter<Parameters>(
    KEY,
    {},
  );
  const emit = useChannel({});

  // Apply initial values
  Object.entries(config).forEach(([key, value]) => {
    emit(EVENTS.REQUEST, { [key]: value });
  });

  const handleInputChange = useCallback((key: string, value: string) => {
    emit(EVENTS.REQUEST, { [key]: value });
  }, [emit]);

  return (
    <AddonPanel {...props}>
      <List>
        {Object.entries(config).map(([key, value]) => (
          <ListItem key={key}>
            <Label htmlFor={key}>{key}:</Label>
            <Input
              id={key}
              type="text"
              defaultValue={value || ''}
              onChange={(e) => handleInputChange(key, e.target.value)}
              placeholder="Enter value"
            />
          </ListItem>
        ))}
      </List>
    </AddonPanel>
  );
});
