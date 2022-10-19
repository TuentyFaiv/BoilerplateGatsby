import "@stylesComponents/Header.scss";

import { Language } from "@components";

export default function Header() {
  return (
    <header className="header">
      <p className="header__title">Header</p>
      <Language />
    </header>
  );
}
