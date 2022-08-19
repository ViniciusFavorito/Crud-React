import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        blue: string;
      };
    };
  }
}
