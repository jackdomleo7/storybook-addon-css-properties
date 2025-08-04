import React, { memo, useCallback, useRef, useEffect, useState } from "react";
import type { CssProperty } from "src/types";
import { AddonPanel } from "storybook/internal/components";
import { useChannel, useParameter } from "storybook/manager-api";
import { styled } from "storybook/theming";

import { EVENTS, KEY } from "../constants";

const Container = styled.div`
  padding: 0;
  font-family: ${({ theme }) => theme.typography.fonts.base};
  background-color: ${({ theme }) => theme.background.content};
  height: 100%;
  overflow-y: auto;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .625rem .9375rem;
  border-bottom: 1px solid ${({ theme }) => theme.appBorderColor};
  background: ${({ theme }) => theme.background.content};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const ToolbarText = styled.div`
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  color: ${({ theme }) => theme.color.mediumdark};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: .375rem;
`;

const Button = styled.button`
  font-family: ${({ theme }) => theme.typography.fonts.base};
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  padding: .375rem .75rem;
  border: 1px solid ${({ theme }) => theme.appBorderColor};
  border-radius: ${({ theme }) => (theme.appBorderRadius / 16)}rem;
  background-color: ${({ theme }) => theme.background.content};
  color: ${({ theme }) => theme.color.defaultText};
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    border-color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.background.hoverable};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 0 .0625rem ${({ theme }) => theme.color.secondary};
  }

  &:active {
    background-color: ${({ theme }) => theme.background.app};
  }
`;

const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.div`
  display: table-header-group;
  background: ${({ theme }) => theme.background.app};
`;

const TableHeaderRow = styled.div`
  display: table-row;
`;

const TableHeaderCell = styled.div`
  display: table-cell;
  padding: .5rem .9375rem;
  font-family: ${({ theme }) => theme.typography.fonts.base};
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.dark};
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.appBorderColor};
  
  &:first-child {
    width: 30%;
  }
  
  &:nth-child(2) {
    width: 20%;
  }
  
  &:nth-child(3) {
    width: auto;
  }
  
  &:last-child {
    width: 1%;
    white-space: nowrap;
  }
`;

const TableBody = styled.div`
  display: table-row-group;
`;

const TableRow = styled.div`
  display: table-row;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.hoverable};
  }
`;

const TableCell = styled.div`
  display: table-cell;
  padding: .625rem .9375rem;
  vertical-align: middle;
  border-bottom: 1px solid ${({ theme }) => theme.appBorderColor};
  font-family: ${({ theme }) => theme.typography.fonts.base};
  font-size: ${({ theme }) => (theme.typography.size.s2 / 16)}rem;
`;

const PropertyName = styled.div`
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: .25rem;
  user-select: all;
`;

const PropertyDescription = styled.div`
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  color: ${({ theme }) => theme.color.mediumdark};
  line-height: 1.4;
`;

const DefaultValueCell = styled.div`
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  color: ${({ theme }) => theme.color.mediumdark};
  
  &.has-value {
    color: ${({ theme }) => theme.color.defaultText};
    background: ${({ theme }) => theme.background.app};
    padding: .25rem .375rem;
    border-radius: .1875rem;
    border: 1px solid ${({ theme }) => theme.appBorderColor};
    display: inline-flex;
    user-select: all;
  }
`;

const ColorControlContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: .25rem;
  border: 1px solid ${({ theme }) => theme.appBorderColor};
  background: ${({ color }) => color};
  cursor: pointer;
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease-out;
  
  &:hover {
    border-color: ${({ theme }) => theme.color.secondary};
    transform: scale(1.05);
  }
  
  &:focus-within,
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 0 .125rem ${({ theme }) => theme.color.secondary}33, inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
  
  /* Checkered background for transparency */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, #ccc 25%, transparent 25%), 
      linear-gradient(-45deg, #ccc 25%, transparent 25%), 
      linear-gradient(45deg, transparent 75%, #ccc 75%), 
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: .5rem .5rem;
    background-position: 0 0, 0 .25rem, .25rem -.25rem, -.25rem 0rem;
    border-radius: calc(.25rem - 1px);
    z-index: -1;
  }
`;

const HiddenColorInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const ControlRow = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

const Input = styled.input`
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  padding: .375rem .5rem;
  border: 1px solid ${({ theme }) => theme.appBorderColor};
  border-radius: ${({ theme }) => (theme.appBorderRadius / 16)}rem;
  background-color: ${({ theme }) => theme.background.content};
  color: ${({ theme }) => theme.color.defaultText};
  flex: 1;
  min-width: 0;
  max-width: 13rem;
  transition: border-color 0.15s ease-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.secondary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.mediumdark};
  }

  &[type="color"] {
    width: 2rem;
    height: 2rem;
    padding: .125rem;
    cursor: pointer;
    
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      border: none;
      border-radius: .125rem;
      overflow: hidden;
    }
    
    &::-webkit-color-swatch {
      border: none;
      border-radius: .125rem;
    }
  }

  &[type="range"] {
    padding: 0;
    height: 1.25rem;
    background: transparent;
    cursor: pointer;
    appearance: none;
    max-width: 9.5rem;
    
    &::-webkit-slider-track {
      width: 100%;
      height: .25rem;
      background: ${({ theme }) => theme.appBorderColor};
      border-radius: .125rem;
    }
    
    &::-webkit-slider-thumb {
      appearance: none;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.secondary};
      cursor: pointer;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      transition: all 0.15s ease-out;
      
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }
    }
    
    &::-moz-range-track {
      width: 100%;
      height: .25rem;
      background: ${({ theme }) => theme.appBorderColor};
      border-radius: .125rem;
      border: none;
    }
    
    &::-moz-range-thumb {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.secondary};
      cursor: pointer;
      border: none;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      transition: all 0.15s ease-out;
      
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }
    }
    
    &:focus {
      outline: none;
      
      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 .125rem ${({ theme }) => theme.color.secondary}33, 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      
      &::-moz-range-thumb {
        box-shadow: 0 0 0 .125rem ${({ theme }) => theme.color.secondary}33, 0 1px 2px rgba(0, 0, 0, 0.1);
      }
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.mediumdark};
    font-style: italic;
  }
`;

const ColorTextInput = styled(Input)`
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  min-width: 8rem;
  flex: 1;
`;

const OpacityLabel = styled.label`
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  color: ${({ theme }) => theme.color.mediumdark};
  white-space: nowrap;
`;

const OpacityValue = styled.span`
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  color: ${({ theme }) => theme.color.defaultText};
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  min-width: 2.5rem;
  text-align: right;
`;

const SmallButton = styled(Button)`
  padding: .25rem .5rem;
  font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
`;

const EmptyState = styled.div`
  padding: 2.5rem 1.25rem;
  text-align: center;
  color: ${({ theme }) => theme.color.mediumdark};
  
  h3 {
    font-family: ${({ theme }) => theme.typography.fonts.base};
    font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    margin: 0 0 .5rem 0;
    color: ${({ theme }) => theme.color.defaultText};
  }
  
  p {
    font-family: ${({ theme }) => theme.typography.fonts.base};
    font-size: ${({ theme }) => (theme.typography.size.s2 / 16)}rem;
    margin: 0;
    line-height: 1.4;
  }
  
  code {
    font-family: ${({ theme }) => theme.typography.fonts.mono};
    background: ${({ theme }) => theme.background.app};
    padding: .125rem .25rem;
    border-radius: .1875rem;
    font-size: ${({ theme }) => (theme.typography.size.s1 / 16)}rem;
  }
`;

interface PanelProps {
  active: boolean;
}

interface Parameter {
  value?: string;
  control?: 'color' | 'text' | 'number';
  default?: string;
  description?: string;
}

interface Parameters {
  [key: CssProperty]: Parameter;
}

export const Panel: React.FC<PanelProps> = memo(function MyPanel(props) {
  const config = useParameter<Parameters>(
    KEY,
    {},
  );
  const emit = useChannel({});
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const opacityRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const opacityDisplayRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
  const colorTextInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({}); 
  const colorSwatchRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // State to track current values for controlled inputs
  const [currentValues, setCurrentValues] = useState<{ [key: string]: string }>({});

  // Reset values when config changes (story navigation)
  useEffect(() => {
    const newValues: { [key: string]: string } = {};
    Object.entries(config).forEach(([key, value]) => {
      const currentValue = value.value || '';
      newValues[key] = currentValue;
      // Always emit events for all configured properties, even if empty
      emit(EVENTS.REQUEST, { [key]: currentValue });
    });
    setCurrentValues(newValues);
  }, [config, emit]);

  // Update color swatches when current values change
  useEffect(() => {
    Object.entries(currentValues).forEach(([key, value]) => {
      const colorSwatch = colorSwatchRefs.current[key];
      const configValue = (config as Record<string, Parameter>)[key];
      
      if (colorSwatch && configValue?.control === 'color') {
        // Use the current value or fallback to black if empty
        colorSwatch.style.backgroundColor = value || '#000000';
      }
    });
  }, [currentValues, config]);

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
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    
    return color;
  }, []);

  const convertCssColorNameToHex = useCallback((colorName: string): string | null => {
    // Create a temporary div to let the browser compute the color
    const div = document.createElement('div');
    div.style.color = colorName;
    
    // Check if the browser recognized the color
    if (div.style.color) {
      document.body.appendChild(div);
      const computedColor = window.getComputedStyle(div).color;
      document.body.removeChild(div);
      
      // Parse rgb() or rgba() format
      const rgbMatch = computedColor.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/);
      if (rgbMatch && rgbMatch[1] && rgbMatch[2] && rgbMatch[3]) {
        const r = parseInt(rgbMatch[1], 10);
        const g = parseInt(rgbMatch[2], 10);
        const b = parseInt(rgbMatch[3], 10);
        const toHex = (n: number) => n.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      }
    }
    
    return null;
  }, []);

  const handleInputChange = useCallback((key: string, value: string) => {
    setCurrentValues(prev => ({ ...prev, [key]: value }));
    emit(EVENTS.REQUEST, { [key]: value });
  }, [emit]);

  const handleColorTextInputChange = useCallback((key: string, value: string) => {
    // Update state first
    setCurrentValues(prev => ({ ...prev, [key]: value }));
    
    // Parse the new color value to update color picker and opacity slider
    const { color, opacity } = parseColorWithOpacity(value);
    
    // Update hidden color input if it's a valid hex color
    const colorInput = inputRefs.current[key];
    if (colorInput && isSixDigitHex(color)) {
      colorInput.value = color;
    }
    
    // Update opacity slider and display if it's a parseable color with opacity
    const opacityInput = opacityRefs.current[key];
    const opacityDisplay = opacityDisplayRefs.current[key];
    
    // Show opacity slider for hex colors and CSS color names
    const canShowOpacity = isSixDigitHex(color) || convertCssColorNameToHex(value);
    if (opacityInput && canShowOpacity) {
      opacityInput.value = opacity.toString();
    }
    if (opacityDisplay) {
      opacityDisplay.textContent = `${Math.round(opacity * 100)}%`;
    }
    
    // Update color swatch
    const colorSwatch = colorSwatchRefs.current[key];
    if (colorSwatch) {
      colorSwatch.style.backgroundColor = value;
    }
    
    emit(EVENTS.REQUEST, { [key]: value });
  }, [emit, parseColorWithOpacity, convertCssColorNameToHex]);

  const handleColorChange = useCallback((key: string, color: string) => {
    const opacityInput = opacityRefs.current[key];
    const opacity = opacityInput ? parseFloat(opacityInput.value) : 1;
    const finalValue = combineColorAndOpacity(color, opacity);
    
    // Update state
    setCurrentValues(prev => ({ ...prev, [key]: finalValue }));
    
    // Update color text input with the final value (including opacity if < 1)
    const colorTextInput = colorTextInputRefs.current[key];
    if (colorTextInput) {
      colorTextInput.value = finalValue;
    }
    
    // Update color swatch
    const colorSwatch = colorSwatchRefs.current[key];
    if (colorSwatch) {
      colorSwatch.style.backgroundColor = finalValue;
    }
    
    emit(EVENTS.REQUEST, { [key]: finalValue });
  }, [emit, combineColorAndOpacity, setCurrentValues]);

  const handleOpacityChange = useCallback((key: string, opacity: number) => {
    const colorInput = inputRefs.current[key];
    const color = colorInput ? colorInput.value : '#000000';
    let finalValue: string;
    
    // If opacity is 1, just return the original color
    if (opacity === 1) {
      finalValue = color;
    } else {
      // Try to combine with opacity
      finalValue = combineColorAndOpacity(color, opacity);
      
      // If combineColorAndOpacity couldn't handle it (like CSS color names), 
      // try to convert to rgba using the browser
      if (finalValue === color && opacity !== 1) {
        const colorTextInput = colorTextInputRefs.current[key];
        const originalValue = colorTextInput ? colorTextInput.value : color;
        
        // Use browser to convert CSS color name to rgb
        const div = document.createElement('div');
        div.style.color = originalValue;
        if (div.style.color) {
          document.body.appendChild(div);
          const computedColor = window.getComputedStyle(div).color;
          document.body.removeChild(div);
          
          const rgbMatch = computedColor.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
          if (rgbMatch && rgbMatch[1] && rgbMatch[2] && rgbMatch[3]) {
            const r = parseInt(rgbMatch[1], 10);
            const g = parseInt(rgbMatch[2], 10);
            const b = parseInt(rgbMatch[3], 10);
            finalValue = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          }
        }
      }
    }
    
    // Update state
    setCurrentValues(prev => ({ ...prev, [key]: finalValue }));
    
    // Update opacity display
    const opacityDisplay = opacityDisplayRefs.current[key];
    if (opacityDisplay) {
      opacityDisplay.textContent = `${Math.round(opacity * 100)}%`;
    }
    
    // Update color text input with the final value
    const colorTextInput = colorTextInputRefs.current[key];
    if (colorTextInput) {
      colorTextInput.value = finalValue;
    }
    
    // Update color swatch
    const colorSwatch = colorSwatchRefs.current[key];
    if (colorSwatch) {
      colorSwatch.style.backgroundColor = finalValue;
    }
    
    emit(EVENTS.REQUEST, { [key]: finalValue });
  }, [emit, combineColorAndOpacity]);

  const handleClear = useCallback((key: string) => {
    const inputElement = inputRefs.current[key];
    const opacityElement = opacityRefs.current[key];
    const opacityDisplay = opacityDisplayRefs.current[key];
    const colorTextInput = colorTextInputRefs.current[key];
    const colorSwatch = colorSwatchRefs.current[key];
    
    // Update state
    setCurrentValues(prev => ({ ...prev, [key]: '' }));
    
    if (inputElement) {
      inputElement.value = '';
      if (opacityElement) {
        opacityElement.value = '1';
      }
      if (opacityDisplay) {
        opacityDisplay.textContent = '100%';
      }
      if (colorTextInput) {
        colorTextInput.value = '';
      }
      if (colorSwatch) {
        colorSwatch.style.backgroundColor = '#000000';
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
    const opacityDisplay = opacityDisplayRefs.current[key];
    const colorTextInput = colorTextInputRefs.current[key];
    const colorSwatch = colorSwatchRefs.current[key];
    const originalValue = (config as Record<string, Parameter>)[key]?.value || '';
    const inputType = (config as Record<string, Parameter>)[key]?.control;
    
    // Update state
    setCurrentValues(prev => ({ ...prev, [key]: originalValue }));
    
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
        if (opacityDisplay) {
          opacityDisplay.textContent = `${Math.round(opacity * 100)}%`;
        }
        if (colorTextInput) {
          colorTextInput.value = originalValue;
        }
        if (colorSwatch) {
          colorSwatch.style.backgroundColor = originalValue;
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
        <Toolbar>
          <ToolbarText>
            <span id="clear-label">Clear uses component defaults</span> • <span id="reset-label">Reset uses story defaults</span>
          </ToolbarText>
          <ButtonGroup>
            <Button 
              onClick={handleClearAll} 
              title="Use the component's default values"
              aria-controls={Object.keys(config).join(' ')}
              aria-describedby="clear-label"
            >
              Clear all
            </Button>
            <Button 
              onClick={handleResetAll} 
              title="Use the story's default values"
              aria-controls={Object.keys(config).join(' ')}
              aria-describedby="reset-label"
            >
              Reset all
            </Button>
          </ButtonGroup>
        </Toolbar>
        
        {Object.keys(config).length === 0 ? (
          <EmptyState>
            <h3>No CSS Properties configured</h3>
            <p>
              Add CSS variables to your story using the <code>cssVars</code> parameter.
            </p>
          </EmptyState>
        ) : (
          <Table>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Default</TableHeaderCell>
                <TableHeaderCell>Control</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            
            <TableBody>
              {Object.entries(config).map(([key, value]) => {
                const controlType = value.control || 'text';
                const isColorType = controlType === 'color';
                const currentValue = currentValues[key] || value.value || '';
                const { color, opacity } = isColorType ? parseColorWithOpacity(currentValue) : { color: '', opacity: 1 };
                const canUseColorPicker = isColorType && isSixDigitHex(color);
                const canShowOpacitySlider = isColorType && (isSixDigitHex(color) || convertCssColorNameToHex(currentValue || ''));

                return (
                  <TableRow key={key}>
                    <TableCell>
                      <PropertyName>{key}</PropertyName>
                      {value.description && (
                        <PropertyDescription id={`${key}-description`}>{value.description}</PropertyDescription>
                      )}
                    </TableCell>
                    
                    <TableCell>
                      <DefaultValueCell className={value.default ? 'has-value' : ''}>
                        {value.default || '–'}
                      </DefaultValueCell>
                    </TableCell>
                    
                    <TableCell>
                      <ControlsContainer>
                        {isColorType ? (
                          <>
                            <ControlRow>
                              <ColorControlContainer>
                                <ColorSwatch 
                                  ref={(el) => { colorSwatchRefs.current[key] = el; }}
                                  color={canUseColorPicker ? combineColorAndOpacity(color, opacity) : (currentValue || '#000000')}
                                  role="button"
                                  tabIndex={0}
                                  aria-label={`Color swatch for ${key}. Current color: ${currentValue || 'not set'}. Click to open color picker.`}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      const colorInput = inputRefs.current[key];
                                      if (colorInput) {
                                        colorInput.click();
                                      }
                                    }
                                  }}
                                >
                                  <HiddenColorInput
                                    ref={(el) => { inputRefs.current[key] = el; }}
                                    id={key}
                                    type="color"
                                    value={canUseColorPicker ? color : '#000000'}
                                    onChange={(e) => handleColorChange(key, e.target.value)}
                                    aria-label={`Color picker for ${key}`}
                                    aria-describedby={value.description ? `${key}-description` : undefined}
                                  />
                                </ColorSwatch>
                                <ColorTextInput
                                  ref={(el) => { colorTextInputRefs.current[key] = el; }}
                                  type="text"
                                  value={currentValue}
                                  onChange={(e) => handleColorTextInputChange(key, e.target.value)}
                                  placeholder="Enter color"
                                  aria-label={`Color value for ${key}`}
                                  aria-describedby={value.description ? `${key}-description` : undefined}
                                />
                              </ColorControlContainer>
                            </ControlRow>
                            {canShowOpacitySlider && (
                              <ControlRow>
                                <OpacityLabel htmlFor={`${key}-opacity`}>Opacity:</OpacityLabel>
                                <Input
                                  ref={(el) => { opacityRefs.current[key] = el; }}
                                  id={`${key}-opacity`}
                                  type="range"
                                  min="0"
                                  max="1"
                                  step="0.01"
                                  value={opacity.toString()}
                                  onChange={(e) => handleOpacityChange(key, parseFloat(e.target.value))}
                                  aria-label={`Opacity for ${key}`}
                                  aria-valuetext={`${Math.round(opacity * 100)} percent`}
                                  aria-describedby={`${key}-opacity-value`}
                                />
                                <OpacityValue 
                                  ref={(el) => { opacityDisplayRefs.current[key] = el; }}
                                  id={`${key}-opacity-value`}
                                >
                                  {Math.round(opacity * 100)}%
                                </OpacityValue>
                              </ControlRow>
                            )}
                          </>
                        ) : (
                          <ControlRow>
                            <Input
                              ref={(el) => { inputRefs.current[key] = el; }}
                              id={key}
                              type={controlType}
                              value={currentValue}
                              onChange={(e) => handleInputChange(key, e.target.value)}
                              placeholder={`Enter ${controlType}`}
                              step={controlType === 'number' ? 1 : undefined}
                              aria-label={`${controlType} input for ${key}`}
                              aria-describedby={value.description ? `${key}-description` : undefined}
                            />
                          </ControlRow>
                        )}
                      </ControlsContainer>
                    </TableCell>
                    
                    <TableCell>
                      <ButtonGroup>
                        <SmallButton 
                          onClick={() => handleClear(key)} 
                          title="Use component default"
                          aria-controls={key}
                          aria-describedby="clear-label"
                        >
                          Clear
                        </SmallButton>
                        <SmallButton 
                          onClick={() => handleReset(key)} 
                          title="Use story default"
                          aria-controls={key}
                          aria-describedby="reset-label"
                        >
                          Reset
                        </SmallButton>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </Container>
    </AddonPanel>
  );
});