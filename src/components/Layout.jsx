import "@styles";
import "@stylesComponents/Layout.scss";

function Layout({ children }) {

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
    <main className="layout">
      {children}
    </main>
  );
}

export default Layout;
