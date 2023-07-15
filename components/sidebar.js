import Link from "next/link";
import navlists from "../data/navlists";

const Sidebar = () => {
  return (
    <amp-sidebar
      id="sidebar"
      className="sidebar"
      layout="nodisplay"
      side="right"
    >
      <div className="sidebar-menu">
        <ul>
          {navlists.map((navlist) => (
            <li key={navlist}>
              <Link href={navlist.link}>
                <a className="side-navitem">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    width={24}
                    height={24}
                    src={`/static/images/${navlist.icon}`}
                  />
                  <span>{navlist.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="side-button">
          <ul>
            <li>
              <Link href="https://IDR45.com/">
                <a className="btn-signin">Masuk</a>
              </Link>
            </li>
            <li>
              <Link href="https://idr45b.com/">
                <a className="btn-signup">Daftar</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </amp-sidebar>
  );
};

export default Sidebar;
