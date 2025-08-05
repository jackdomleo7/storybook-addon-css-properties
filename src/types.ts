export interface Result {
  divs: DOMRect[];
  styled: DOMRect[];
}

export type CssProperty = `--${string}`;

export interface CssPropertyConfig {
  value?: string;
  control?: 'color' | 'text' | 'number';
  default?: string;
  description?: string;
}

export interface Category {
  [key: CssProperty]: CssPropertyConfig;
}

export interface Parameters {
  [key: string | CssProperty]: CssPropertyConfig | Category;
}
