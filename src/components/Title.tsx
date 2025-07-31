import React from 'react';

import { Badge } from 'storybook/internal/components';
import { useParameter, useStorybookApi } from 'storybook/manager-api';

import { KEY, PANEL_ID } from '../constants';
import type { CssProperty } from '../types';

interface Parameter {
  value?: string;
  control?: 'color' | 'text' | 'number';
  default?: string;
  description?: string;
}

interface Parameters {
  [key: CssProperty]: Parameter;
}

export function Title() {
  const api = useStorybookApi();
  const selectedPanel = api.getSelectedPanel();
  const config = useParameter<Parameters>(KEY, {});
  
  const propertiesCount = Object.keys(config).length;
  
  const suffix =
    propertiesCount === 0 ? null : (
      <Badge compact status={selectedPanel === PANEL_ID ? 'active' : 'neutral'}>
        {propertiesCount}
      </Badge>
    );

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span>CSS Properties</span>
      {suffix}
    </div>
  );
}
