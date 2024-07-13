import { bindThemeParamsCSSVars, useThemeParams } from '@telegram-apps/sdk-react';

const Header = () => {
  const css = useThemeParams();

  bindThemeParamsCSSVars(css, (key) => {
    return `--${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`;
  });

  return <div>dsds</div>;
};

export default Header;
