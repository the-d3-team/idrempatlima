import Link from "next/link";
import navlists from "../data/navlists";

const Header = () => {
  const datenow =
    ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][
      new Date().getDay()
    ] +
    ", " +
    new Date().getDate() +
    " " +
    [
      "Desember",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
    ][new Date().getMonth() + 1] +
    " " +
    new Date().getFullYear();

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-context">
          <div className="nav-logo">
            <div className="logo">
              <Link href="./">
                <a href="./" className="logo-icon">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    width={150}
                    height={50}
                    className="logo-img"
                    src={"/static/template/logo-idr45.svg"}
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="icon-toggle">
            <button on="tap:sidebar.toggle" className="sidebar-trigger">
              <div className="icons-bar">
                <div className="menu-bars" />
                <div className="menu-bars" />
                <div className="menu-bars" />
              </div>
            </button>
          </div> */}
          {/* <nav>
            <div className="navbar">
              <ul>
                {navlists.map((navlist) => (
                  <li key={navlist}>
                    <Link href={navlist.link}>
                      <a className="navitem">{navlist.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="grid-button">
            <ul>
              <li>
                <Link href="https://IDR45.com">
                  <a className="btn-signin">Masuk</a>
                </Link>
              </li>
              <li>
                <Link href="https://52.221.39.136/register">
                  <a className="btn-signup">Daftar</a>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* <div className="app-header-extra">
        <div className="date-header-extra">{datenow}</div>
      </div> */}
      {/* <div className="lc-frame">
        <div id="wafc" className="wafc">
          <a href="https://api.whatsapp.com/send?phone=6281264594807" target="_parent">
            <amp-img
alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
              src="../static/template/waicon2.gif"
              width="70"
              height="70"
              layout="fixed"
              alt="LiveChat IDR45"
            ></amp-img>
          </a>
        </div>
        <div
          id="lcfc"
          className="lcfc"
          role="lc"
          tabindex="0"
          on="tap:lcfc.hide,lcfo.show,wafc.hide"
        >
          <amp-img
alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
            src="../static/template/livechatIDR45.gif"
            width="60"
            height="70"
            layout="fixed"
            alt="LiveChat IDR45"
          ></amp-img>
        </div>
        <div id="lcfo" hidden>
          <div
            className="lcfo minimize"
            role="lc"
            tabindex="0"
            on="tap:lcfo.hide,lcfc.show,wafc.show"
          >
            -
          </div>
          <amp-iframe
            width="350"
            height="450"
            title="RTP IDR45 Livechat"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            src="https://secure.livechatinc.com/licence/15613281/v2/open_chat.cgi"
          >
            <amp-img
alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic" layout="fill" src="img/1x1.png" placeholder></amp-img>
          </amp-iframe>
        </div>
      </div> */}
      <style jsx>{`
        .header-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          position: sticky;
          top: 0;
          z-index: 2;
          background-image: url(../static/template/nav-lines.png);
        }
        .lc-frame {
          position: fixed;
          bottom: 0;
          right: 0;
          z-index: 100;
        }

        .lcfc {
          padding: 10px 20px;
          position: relative;
          top: 0px;
          border-radius: 20px 20px 0 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .wafc {
          padding: 10px 20px;
          position: relative;
          top: 5px;
          border-radius: 20px 20px 0 0;
          cursor: pointer;
        }
        .lcfo {
          position: relative;
          text-align: center;
          width: 20px;
          height: 20px;
          left: 290px;
          font-size: 50px;
          line-height: 10px;
          top: 30px;
          z-index: 100;
          cursor: pointer;
        }
        .header-container {
          height: 70px;
          width: 100%;
          margin: 0 auto;
          color: #fff;
          border-bottom: 1px solid #7c7c7c;
          background-color: #2d1616;
          box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%),
            0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);
          padding: 0px;
        }
        .header-context {
          display: flex;
          width: 100%;
          max-width: 1168px;
          margin: 0 auto;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: space-between;
          justify-content: space-around;
          align-items: center;
        }
        .nav-logo {
          display: flex;
          margin-left: 0px;
        }
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .sidebar-trigger {
          color: #fff;
          font-size: 14px;
          display: flex;
          height: 36px;
          justify-content: center;
          align-items: center;
          padding: 0 6px 0 10px;
        }
        .icon-toggle {
          display: none;
        }
        .icons-bar {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 15px;
          margin-left: 6px;
        }
        .menu-bars {
          width: 20px;
          height: 3px;
          border-radius: 3px;
          position: relative;
          background: #ffc302;
        }
        .date-header-extra {
          display: none;
        }
        .navbar ul,
        .grid-button ul {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar li,
        .grid-button li {
          margin: 0 3px;
          height: 54px;
        }
        .navbar a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 54px;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          padding: 0 12px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .navbar a:hover {
          color: #bf69e4;
        }
        .grid-button li {
          display: flex;
          align-items: center;
          margin: 0 3px;
          height: 54px;
        }
        .grid-button a.btn-signin {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 34px;
          color: #fff;
          background-color: #2ac7be;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          padding: 0 16px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .grid-button a.btn-signin:hover {
          background-color: #26b2aa;
        }
        .grid-button a.btn-signup {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 34px;
          color: #fff;
          background-color: #5d5c5e;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          padding: 0 16px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .grid-button a.btn-signup:hover {
          background-color: #1d1d22;
        }
        .grid-button a.btn-signin-1 {
          display: none;
        }
        @media screen and (max-width: 768px) {
          .header-container {
            border-bottom: 0px;
            box-shadow: none;
            padding: 10px;
          }
          .grid-button {
            display: none;
          }

          .header-context {
            display: grid;
            grid-template-columns: 1fr;
            -webkit-box-pack: start;
            -webkit-justify-content: start;
            -moz-box-pack: start;
            -ms-flex-pack: start;
            justify-content: start;
            -ms-flex-align: center;
            justify-items: center;
            align-items: stretch;
          }
          .app-header-extra {
            background-color: #5e1212;
            display: flex;
            align-content: stretch;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;
            height: 36px;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%),
              0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);
          }
          .date-header-extra {
            display: flex;
            font-size: 14px;
            font-weight: 600;
            padding-left: 12px;
            color: #d0cbd3;
          }
          .icon-toggle {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .navbar {
            display: none;
          }
        }
        @media screen and (max-width: 440px) {
          .icons-bar {
            margin-right: 0px;
          }
          .grid-button a.btn-signin {
            display: none;
          }
          .grid-button a.btn-signin-1 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 34px;
            color: #fff;
            background-color: #2ac7be;
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            text-align: center;
            padding: 0 16px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }
          .grid-button a.btn-signin-1:hover {
            background-color: #26b2aa;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
