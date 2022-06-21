export interface ITheme {
  colors: IColorTheme;
  inlineStyle?: string;
}

export interface IColorTheme {
  background: string;
  primaryText: string;
  primary: string;
  secondary: string;
  support: string;
  error: string;
}

const defaultTheme: ITheme = {
  colors: {
    background: '#00233D',
    primaryText: '#044B4B',
    primary: '#ADDCFF',
    secondary: '#838996',
    support: '#114B5F',
    error: '#92140C'
  }
};

export default defaultTheme;