// The order you see below are the layers ascending. Be mindful to maintain this order for expected outcomes.
export const Z_INDEX_LAYERS = {
  BASE: 'base',
  FRAME: 'frame',
  OVERLAY: 'overlay',
  DIALOG: 'dialog',
  NOTIFICATION: 'notification'
};

export interface Theme {
  themeId: string;
  isDefault: boolean;
  name: string;
  layoutColors: ThemeLayoutColors;
  layoutVariables: ThemeLayoutVariables;
  stylingVariables: ThemeStylingVariables;
  colorPalette: ThemeColorPalette;
  buttonColorPalette: ThemeButtonColorPalette;
  fonts: Array<ThemeFont>;
  accessibility: ThemeAccessibility;
  zIndexList?: Array<string>;
}

export interface ThemeLayoutColors {
  menuColor: string;
  headerColor: string;
  footerColor: string;
  bodyColor: string;
  contentColor: string;
}

export interface ThemeColorPalette {
  bgRed: string;
  bgOrange: string;
  bgYellow: string;
  bgGreen: string;
  bgBlue: string;
  bgPurple: string;
  bgBrown: string;
  bgGrey: string;

  extension: Array<ThemeColorPaletteExtension>;
}

export interface ThemeButtonColorPalette {
  okButtonColor: string;
  cancelButtonColor: string;
  deleteButtonColor: string;
  saveButtonColor: string;
  nextButtonColor: string;
  previousButtonColor: string;
  openButtonColor: string;
  closeButtonColor: string;
}

export interface ThemeLayoutVariables {
  disableGlobalHeaderFooter: boolean;
  headerHeight: string;
  footerHeight: string;
  menuWidth?: string;
}

export interface ThemeStylingVariables {
  inputTextSize: string;
  inputLabelSize: string;
  inputHeight: string;
  inputBgColor: string;
  inputPadding: string;

  borderColor: string;
  borderSize: string;
  borderRadius: string;

  tooltipBackgroundColor: string;
  tooltipTextSize: string;
  tooltipBorderSize: string;
  tooltipBorderColor: string;
  tooltipCaretSize?: string;
}

export interface ThemeColorPaletteExtension {
  className: string;
  color?: string;
  textColor?: string;
}

export interface ThemeFont {
  name: string;
  id?: string;
  source?: 'google' | 'adobe';
  isDefault?: boolean;
  isSerif?: boolean;
}

export interface ThemeAccessibility {
  enabled: boolean;
  highlightColor: string;
  highlightThickness: string;
  highlightOffset: string;
  hoverEnabled: boolean;
}
