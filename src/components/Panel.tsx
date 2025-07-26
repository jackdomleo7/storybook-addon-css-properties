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

  &[type="color"] {
    padding: 2px 4px;
    height: 32px;
    cursor: pointer;
  }

  &[type="number"] {
    width: 100px;
  }
`;

interface PanelProps {
  active: boolean;
}

interface Parameters {
  [key: CssProperty]: {
    value: string | undefined;
    type: 'color' | 'text' | 'number';
  };
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
    emit(EVENTS.REQUEST, { [key]: value.value });
  });

  const handleInputChange = useCallback((key: string, value: string) => {
    emit(EVENTS.REQUEST, { [key]: value });
  }, [emit]);

  function convertToHexadecimal(color: string): string | null {
    // Remove whitespace and convert to lowercase
    const cleanColor = color.trim().toLowerCase();
    
    // Check for 3-digit hex (e.g., #fff, #abc)
    const hex3Match = cleanColor.match(/^#([0-9a-f]{3})$/);
    if (hex3Match && hex3Match[1]) {
      const hex = hex3Match[1];
      // Expand 3-digit hex to 6-digit
      return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    
    // Check for 6-digit hex (already valid format)
    const hex6Match = cleanColor.match(/^#([0-9a-f]{6})$/);
    if (hex6Match && hex6Match[1]) {
      return cleanColor;
    }
    
    // Check for 8-digit hex (has alpha channel - return null)
    const hex8Match = cleanColor.match(/^#([0-9a-f]{8})$/);
    if (hex8Match && hex8Match[1]) {
      return null;
    }
    
    // Check for RGB (e.g., rgb(255, 0, 128))
    const rgbMatch = cleanColor.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
    if (rgbMatch && rgbMatch[1] && rgbMatch[2] && rgbMatch[3]) {
      const r = parseInt(rgbMatch[1], 10);
      const g = parseInt(rgbMatch[2], 10);
      const b = parseInt(rgbMatch[3], 10);
      // Validate RGB values are in range 0-255
      if (r > 255 || g > 255 || b > 255) return null;
      
      const toHex = (n: number) => n.toString(16).padStart(2, '0');
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    
    // Check for RGBA (has alpha channel - return null)
    const rgbaMatch = cleanColor.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/);
    if (rgbaMatch) {
      return null;
    }
    
    // Check for HSL (e.g., hsl(240, 100%, 50%))
    const hslMatch = cleanColor.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);
    if (hslMatch && hslMatch[1] && hslMatch[2] && hslMatch[3]) {
      const h = parseInt(hslMatch[1], 10);
      const s = parseInt(hslMatch[2], 10);
      const l = parseInt(hslMatch[3], 10);
      // Validate HSL values
      if (h > 360 || s > 100 || l > 100) return null;
      
      // Convert HSL to RGB
      const hue = h / 360;
      const saturation = s / 100;
      const lightness = l / 100;
      
      const hue2rgb = (p: number, q: number, t: number): number => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      
      let r: number, g: number, b: number;
      
      if (saturation === 0) {
        r = g = b = lightness; // achromatic
      } else {
        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        r = hue2rgb(p, q, hue + 1/3);
        g = hue2rgb(p, q, hue);
        b = hue2rgb(p, q, hue - 1/3);
      }
      
      const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0');
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    
    // Check for HSLA (has alpha channel - return null)
    const hslaMatch = cleanColor.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)$/);
    if (hslaMatch) {
      return null;
    }
    
    // If no recognized format, return null
    return null;
  }

  function isSixDigitHex(color: string|null): boolean {
    if (!color) return false;
    const hexMatch = color.match(/^#([0-9a-fA-F]{6})$/);
    return hexMatch !== null;
  }

  return (
    <AddonPanel {...props}>
      <List>
        {Object.entries(config).map(([key, value]) => (
          <ListItem key={key}>
            <Label htmlFor={key}>{key}:</Label>
            <Input
              id={key}
              type={value.type === 'color' ? (isSixDigitHex(convertToHexadecimal(value.value)) ? 'color' : 'text') : value.type}
              defaultValue={value.type === 'color' ? (isSixDigitHex(convertToHexadecimal(value.value)) ? convertToHexadecimal(value.value) : value.value) : value.value || ''}
              onChange={(e) => handleInputChange(key, e.target.value)}
              placeholder={`Enter ${value.type}`}
              step={value.type === 'number' ? 1 : undefined}
            />
          </ListItem>
        ))}
      </List>
    </AddonPanel>
  );
});
