import React, { memo, useCallback, useRef } from "react";
import type { CssProperty } from "src/types";
import { AddonPanel } from "storybook/internal/components";
import { useChannel, useParameter } from "storybook/manager-api";
import { styled, useTheme } from "storybook/theming";

import { EVENTS, KEY } from "../constants";

const Container = styled.div`
  padding: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: ${({ theme }) => theme.background.content};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const UtilityButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.background.content};
  color: ${({ theme }) => theme.color.defaultText};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.lighter};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 0 0.1875rem ${({ theme }) => theme.color.secondary}20;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const Label = styled.label`
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.defaultText};
  min-width: 12.5rem;
  flex-shrink: 0;
`;

const Input = styled.input`
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 1.125rem;
  padding: 1rem 1.25rem;
  border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.background.content};
  color: ${({ theme }) => theme.color.defaultText};
  flex: 1;
  min-height: 2rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
  max-width: 37.5rem;
  margin-left: auto;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 0 .1875rem ${({ theme }) => theme.color.secondary}20;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.mediumdark};
  }

  &[type="color"] {
    padding: .5rem .75rem;
    height: 3.75rem;
    cursor: pointer;
    border-radius: .5rem;
    
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      border: none;
      border-radius: .25rem;
      overflow: hidden;
    }
    
    &::-webkit-color-swatch {
      border: none;
      border-radius: .25rem;
    }
  }

  &[type="number"] {
    max-width: 12.5rem;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.mediumdark};
    font-style: italic;
  }
`;

const Description = styled.small`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.mediumdark};
  font-style: italic;
  line-height: 1.4;
`;

interface PanelProps {
  active: boolean;
}

interface Parameter {
  value: string | undefined;
  type: 'color' | 'text' | 'number';
  description?: string;
}

interface Parameters {
  [key: CssProperty]: Parameter;
}

export const Panel: React.FC<PanelProps> = memo(function MyPanel(props) {
  const theme = useTheme();
  const config = useParameter<Parameters>(
    KEY,
    {},
  );
  const emit = useChannel({});
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Apply initial values
  Object.entries(config).forEach(([key, value]) => {
    emit(EVENTS.REQUEST, { [key]: value.value });
  });

  const handleInputChange = useCallback((key: string, value: string) => {
    emit(EVENTS.REQUEST, { [key]: value });
  }, [emit]);

  const handleClear = useCallback((key: string) => {
    const inputElement = inputRefs.current[key];
      if (inputElement) {
        // Clear the input value
        inputElement.value = '';
        // Emit the clear event
        emit(EVENTS.REQUEST, { [key]: '' });
      }
  }, [config, emit]);

  const handleClearAll = useCallback(() => {
    Object.keys(config).forEach(key => {
      handleClear(key);
    });
  }, [config, handleClear]);

  const handleReset = useCallback((key: string) => {
    const inputElement = inputRefs.current[key];
    const originalValue = (config as Record<string, Parameter>)[key]?.value || '';
    const inputType = (config as Record<string, Parameter>)[key]?.type;
    
    if (inputElement) {
      // For color inputs, we need to handle the value conversion
      if (inputType === 'color' && inputElement.type === 'color') {
        const hexValue = convertToHexadecimal(originalValue);
        if (hexValue && isSixDigitHex(hexValue)) {
          inputElement.value = hexValue;
        } else {
          // If we can't convert to hex, the input will become a text input on next render
          inputElement.value = originalValue;
        }
      } else {
        // For text and number inputs, set directly
        inputElement.value = originalValue;
      }
      
      // Emit the reset event with original value
      emit(EVENTS.REQUEST, { [key]: originalValue });
    }
  }, [config, emit]);

  const handleResetAll = useCallback(() => {
    Object.entries(config).forEach(([key, value]) => {
      handleReset(key);
    });
  }, [config, handleReset]);

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
      <Container>
        <Header>
          <div><p>Clearing will use the component's default values | Resetting will use the story's default values</p></div>
          <ButtonGroup>
            <UtilityButton onClick={handleClearAll} title="Use the component's default values">
              Clear all
            </UtilityButton>
            <UtilityButton onClick={handleResetAll} title="Use the story's default values">
              Reset all
            </UtilityButton>
          </ButtonGroup>
        </Header>
        <List>
          {Object.entries(config).map(([key, value]) => (
            <ListItem key={key}>
              <InputRow>
                <Label htmlFor={key}>{key}</Label>
                <Input
                  ref={(el) => { inputRefs.current[key] = el; }}
                  id={key}
                  type={value.type === 'color' ? (isSixDigitHex(convertToHexadecimal(value.value)) ? 'color' : 'text') : value.type}
                  defaultValue={value.type === 'color' ? (isSixDigitHex(convertToHexadecimal(value.value)) ? convertToHexadecimal(value.value) : value.value) : value.value || ''}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  placeholder={`Enter ${value.type}`}
                  step={value.type === 'number' ? 1 : undefined}
                  aria-describedby={`id-${key}-description`}
                />
                <ButtonGroup>
                  <UtilityButton onClick={() => handleClear(key)} title="Use the component's default value">
                    Clear
                  </UtilityButton>
                  <UtilityButton onClick={() => handleReset(key)} title="Use the story's default value">
                    Reset
                  </UtilityButton>
                </ButtonGroup>
              </InputRow>
              {value.description && (
                <Description id={`id-${key}-description`}>{value.description}</Description>
              )}
            </ListItem>
          ))}
        </List>
      </Container>
    </AddonPanel>
  );
});