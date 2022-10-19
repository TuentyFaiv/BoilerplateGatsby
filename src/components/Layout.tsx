import { ServiceProvider } from "@context";

import type { LayoutProps } from "@typing/proptypes";

import "@styles";
import "@stylesComponents/Layout.scss";

function Layout({ children }: LayoutProps) {

  /* Effect to add a script */
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.textContent = ``;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <ServiceProvider>
      <main className="layout">
        {children}
      </main>
    </ServiceProvider>
  );
}

export default Layout;
