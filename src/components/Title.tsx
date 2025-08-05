import React from 'react';

import { Badge } from 'storybook/internal/components';
import { useParameter, useStorybookApi } from 'storybook/manager-api';

import { KEY, PANEL_ID } from '../constants';
import type { CssProperty, Parameters } from '../types';

// Helper function to check if a key is a CSS property (starts with --)
function isCssProperty(key: string): key is CssProperty {
  return key.startsWith('--');
}

// Helper function to count flattened parameters
function countFlattenedParameters(config: Parameters): number {
  let count = 0;
  
  Object.entries(config).forEach(([key, value]) => {
    if (isCssProperty(key)) {
      // Direct CSS property
      count++;
    } else {
      // Category - count all CSS properties in it
      const category = value as Record<string, any>;
      Object.keys(category).forEach((cssKey) => {
        if (isCssProperty(cssKey)) {
          count++;
        }
      });
    }
  });
  
  return count;
}

export function Title() {
  const api = useStorybookApi();
  const selectedPanel = api.getSelectedPanel();
  const config = useParameter<Parameters>(KEY, {});
  
  const propertiesCount = countFlattenedParameters(config);
  
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
