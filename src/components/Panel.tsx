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

const ColorInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  max-width: 37.5rem;
  margin-left: auto;
`;

const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const OpacityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const OpacityLabel = styled.span`
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.mediumdark};
  min-width: 4rem;
  flex-shrink: 0;
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

  &[type="range"] {
    padding: 0;
    height: 2rem;
    background: transparent;
    cursor: pointer;
    
    &::-webkit-slider-track {
      width: 100%;
      height: 0.5rem;
      background: linear-gradient(90deg, transparent 0%, ${({ theme }) => theme.color.defaultText} 100%);
      border-radius: 0.25rem;
      border: 1px solid ${({ theme }) => theme.color.border};
    }
    
    &::-webkit-slider-thumb {
      appearance: none;
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.defaultText};
      border: 2px solid ${({ theme }) => theme.background.content};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.color.border};
      cursor: pointer;
    }
    
    &::-moz-range-track {
      width: 100%;
      height: 0.5rem;
      background: linear-gradient(90deg, transparent 0%, ${({ theme }) => theme.color.defaultText} 100%);
      border-radius: 0.25rem;
      border: 1px solid ${({ theme }) => theme.color.border};
    }
    
    &::-moz-range-thumb {
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.defaultText};
      border: 2px solid ${({ theme }) => theme.background.content};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.color.border};
      cursor: pointer;
    }
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
  control: 'color' | 'text' | 'number';
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
  const opacityRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Apply initial values
  Object.entries(config).forEach(([key, value]) => {
    emit(EVENTS.REQUEST, { [key]: value.value });
  });

  const parseColorWithOpacity = useCallback((colorValue: string | undefined) => {
    if (!colorValue) return { color: '#000000', opacity: 1 };
    
    const cleanColor = colorValue.trim().toLowerCase();
    
    // Check for RGBA
    const rgbaMatch = cleanColor.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);
    if (rgbaMatch && rgbaMatch[1] && rgbaMatch[2] && rgbaMatch[3] && rgbaMatch[4]) {
      const r = parseInt(rgbaMatch[1], 10);
      const g = parseInt(rgbaMatch[2], 10);
      const b = parseInt(rgbaMatch[3], 10);
      const a = parseFloat(rgbaMatch[4]);
      
      if (r <= 255 && g <= 255 && b <= 255 && a >= 0 && a <= 1) {
        const toHex = (n: number) => n.toString(16).padStart(2, '0');
        return { color: `#${toHex(r)}${toHex(g)}${toHex(b)}`, opacity: a };
      }
    }
    
    // Check for HSLA
    const hslaMatch = cleanColor.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d.]+)\s*\)$/);
    if (hslaMatch && hslaMatch[1] && hslaMatch[2] && hslaMatch[3] && hslaMatch[4]) {
      const h = parseInt(hslaMatch[1], 10);
      const s = parseInt(hslaMatch[2], 10);
      const l = parseInt(hslaMatch[3], 10);
      const a = parseFloat(hslaMatch[4]);
      
      if (h <= 360 && s <= 100 && l <= 100 && a >= 0 && a <= 1) {
        const hexColor = convertHslToHex(h, s, l);
        if (hexColor) {
          return { color: hexColor, opacity: a };
        }
      }
    }
    
    // Try to convert to hex for color picker
    const hexColor = convertToHexadecimal(colorValue);
    if (hexColor && isSixDigitHex(hexColor)) {
      return { color: hexColor, opacity: 1 };
    }
    
    // Fallback for non-convertible colors
    return { color: colorValue, opacity: 1 };
  }, []);

  const combineColorAndOpacity = useCallback((color: string, opacity: number) => {
    if (opacity === 1) {
      return color;
    }
    
    // Convert hex to rgba
    const hexMatch = color.match(/^#([0-9a-fA-F]{6})$/);
    if (hexMatch && hexMatch[1]) {
      const hex = hexMatch[1];
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    
    return color;
  }, []);

  const handleInputChange = useCallback((key: string, value: string) => {
    emit(EVENTS.REQUEST, { [key]: value });
  }, [emit]);

  const handleColorChange = useCallback((key: string, color: string) => {
    const opacityInput = opacityRefs.current[key];
    const opacity = opacityInput ? parseFloat(opacityInput.value) : 1;
    const finalValue = combineColorAndOpacity(color, opacity);
    emit(EVENTS.REQUEST, { [key]: finalValue });
  }, [emit, combineColorAndOpacity]);

  const handleOpacityChange = useCallback((key: string, opacity: number) => {
    const colorInput = inputRefs.current[key];
    const color = colorInput ? colorInput.value : '#000000';
    const finalValue = combineColorAndOpacity(color, opacity);
    emit(EVENTS.REQUEST, { [key]: finalValue });
  }, [emit, combineColorAndOpacity]);

  const handleClear = useCallback((key: string) => {
    const inputElement = inputRefs.current[key];
    const opacityElement = opacityRefs.current[key];
    if (inputElement) {
      inputElement.value = '';
      if (opacityElement) {
        opacityElement.value = '1';
      }
      emit(EVENTS.REQUEST, { [key]: '' });
    }
  }, [emit]);

  const handleClearAll = useCallback(() => {
    Object.keys(config).forEach(key => {
      handleClear(key);
    });
  }, [config, handleClear]);

  const handleReset = useCallback((key: string) => {
    const inputElement = inputRefs.current[key];
    const opacityElement = opacityRefs.current[key];
    const originalValue = (config as Record<string, Parameter>)[key]?.value || '';
    const inputType = (config as Record<string, Parameter>)[key]?.control;
    
    if (inputElement) {
      if (inputType === 'color') {
        const { color, opacity } = parseColorWithOpacity(originalValue);
        
        if (inputElement.type === 'color' && isSixDigitHex(color)) {
          inputElement.value = color;
        } else {
          inputElement.value = originalValue;
        }
        
        if (opacityElement) {
          opacityElement.value = opacity.toString();
        }
      } else {
        inputElement.value = originalValue;
      }
      
      emit(EVENTS.REQUEST, { [key]: originalValue });
    }
  }, [config, emit, parseColorWithOpacity]);

  const handleResetAll = useCallback(() => {
    Object.entries(config).forEach(([key, value]) => {
      handleReset(key);
    });
  }, [config, handleReset]);

  const convertHslToHex = useCallback((h: number, s: number, l: number): string | null => {
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
      r = g = b = lightness;
    } else {
      const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      r = hue2rgb(p, q, hue + 1/3);
      g = hue2rgb(p, q, hue);
      b = hue2rgb(p, q, hue - 1/3);
    }
    
    const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }, []);

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
      
      return convertHslToHex(h, s, l);
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
            <UtilityButton onClick={handleClearAll} title="Use the component's default values" aria-controls={Object.entries(config).map(([key]) => key).join(' ')}>
              Clear all
            </UtilityButton>
            <UtilityButton onClick={handleResetAll} title="Use the story's default values" aria-controls={Object.entries(config).map(([key]) => key).join(' ')}>
              Reset all
            </UtilityButton>
          </ButtonGroup>
        </Header>
        <List>
          {Object.entries(config).map(([key, value]) => {
            const isColorType = value.control === 'color';
            const { color, opacity } = isColorType ? parseColorWithOpacity(value.value) : { color: '', opacity: 1 };
            const canUseColorPicker = isColorType && isSixDigitHex(color);

            return (
              <ListItem key={key}>
                <InputRow>
                  <Label htmlFor={key}>{key}</Label>
                  {isColorType ? (
                    <ColorInputGroup>
                      <ColorRow>
                        <Input
                          ref={(el) => { inputRefs.current[key] = el; }}
                          id={key}
                          type={canUseColorPicker ? 'color' : 'text'}
                          defaultValue={canUseColorPicker ? color : value.value || ''}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          placeholder="Enter color"
                          aria-describedby={`id-${key}-description`}
                        />
                      </ColorRow>
                      {canUseColorPicker && (
                        <OpacityRow>
                          <OpacityLabel>Opacity:</OpacityLabel>
                          <Input
                            ref={(el) => { opacityRefs.current[key] = el; }}
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue={opacity.toString()}
                            onChange={(e) => handleOpacityChange(key, parseFloat(e.target.value))}
                            aria-label={`${key} opacity`}
                          />
                        </OpacityRow>
                      )}
                    </ColorInputGroup>
                  ) : (
                    <Input
                      ref={(el) => { inputRefs.current[key] = el; }}
                      id={key}
                      type={value.control}
                      defaultValue={value.value || ''}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      placeholder={`Enter ${value.control}`}
                      step={value.control === 'number' ? 1 : undefined}
                      aria-describedby={`${key}-description`}
                    />
                  )}
                  <ButtonGroup>
                    <UtilityButton onClick={() => handleClear(key)} title="Use the component's default value" aria-controls={key}>
                      Clear
                    </UtilityButton>
                    <UtilityButton onClick={() => handleReset(key)} title="Use the story's default value" aria-controls={key}>
                      Reset
                    </UtilityButton>
                  </ButtonGroup>
                </InputRow>
                {value.description && (
                  <Description id={`${key}-description`}>{value.description}</Description>
                )}
              </ListItem>
            );
          })}
        </List>
      </Container>
    </AddonPanel>
  );
});