import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { AboutScreen } from "./pages/AboutScreen";
import { ContactScreen } from "./pages/ContactScreen";
import { IntroScreen } from "./pages/IntroScreen";
import { ProjectScreen } from "./pages/ProjectScreen";

export const App = () => {
  const [page, setPage] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const pageOne = useRef(null);
  const pageTwo = useRef(null);
  const pageThree = useRef(null);
  const pageFour = useRef(null);

  const changePage = ({ target: { value } }) => {
    setPage(parseInt(value));
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div>
        <div className="absolute card-main-container">
          <h1 className="card-main-title">GIULIANO CONTI</h1>
          <p className="card-main-subtitle">React developer</p>
          <div className="card-main-icons-container">
            <a className="card-main-icon-a" href="https://www.linkedin.com/in/giulianoconti/">
              <svg className="card-main-icon-svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a className="card-main-icon-a" href="https://github.com/GiuliannT">
              <svg className="card-main-icon-svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a className="card-main-icon-a" href="https://www.instagram.com/giulianocontii/">
              <svg className="card-main-icon-svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute menu-container">
          <button className="menu-btn menu-btn-sm" onClick={handleShowMenu}>
            MENU
          </button>

          <CSSTransition nodeRef={menuRef} in={showMenu} timeout={300} classNames="menu-transition" unmountOnExit mountOnEnter>
            <div ref={menuRef}>
              <button className={`menu-btn ${page === 0 && "menu-btn-active"}`} value={0} onClick={changePage}>
                INTRO
              </button>

              <button className={`menu-btn ${page === 1 && "menu-btn-active"}`} value={1} onClick={changePage}>
                SOBRE MI
              </button>

              <button className={`menu-btn ${page === 2 && "menu-btn-active"}`} value={2} onClick={changePage}>
                PROYECTOS
              </button>

              <button className={`menu-btn ${page === 3 && "menu-btn-active"}`} value={3} onClick={changePage}>
                CONTACTO
              </button>
            </div>
          </CSSTransition>
        </div>
      </div>

      <CSSTransition
        nodeRef={pageOne}
        className="container-img container-img-intro"
        in={page === 0}
        timeout={1000}
        classNames="page-transition"
        unmountOnExit
        mountOnEnter
      >
        <section ref={pageOne}>
          <IntroScreen setPage={setPage} />
        </section>
      </CSSTransition>

      <CSSTransition
        nodeRef={pageTwo}
        className="absolute container-img container-img-about"
        in={page === 1}
        timeout={1000}
        classNames="page-transition"
        unmountOnExit
        mountOnEnter
      >
        <section ref={pageTwo}>
          <AboutScreen setPage={setPage} />
        </section>
      </CSSTransition>

      <CSSTransition
        nodeRef={pageThree}
        className="absolute container-img container-img-projects"
        in={page === 2}
        timeout={1000}
        classNames="page-transition"
        unmountOnExit
        mountOnEnter
      >
        <section ref={pageThree}>
          <ProjectScreen />
        </section>
      </CSSTransition>

      <CSSTransition
        nodeRef={pageFour}
        className="absolute container-img container-img-contact"
        in={page === 3}
        timeout={1000}
        classNames="page-transition"
        unmountOnExit
        mountOnEnter
      >
        <section ref={pageFour}>
          <ContactScreen />
        </section>
      </CSSTransition>
    </div>
  );
};