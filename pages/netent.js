import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import gamenav from "../data/gamenav";
import netent from "../data/netent";
import categories from "../data/categories.json";

const Netent = () => {
  var random = ["✅❌❌", "❌✅❌", "❌❌✅", "✅❌✅", "❌✅✅", "❌❌❌"];

  var randomx = ["❌❌❌", "❌❌❌", "❌❌❌", "❌❌❌", "❌❌❌", "❌❌❌"];

  var random2 = [10, 20, 50, 70, 100];

  var random3 = [
    "Auto",
    "Auto",
    "Manual 3",
    "Manual 5",
    "Manual 7",
    "Manual 9",
    "Auto",
    "Auto",
    "Auto",
    "Auto",
    "Auto",
    "Auto",
  ];
  var randomManual = [
    "Manual 3",
    "Manual 3",
    "Manual 3",
    "Manual 5",
    "Manual 5",
    "Manual 5",
    "Manual 7",
    "Manual 7",
    "Manual 7",
    "Manual 9",
    "Manual 9",
    "Manual 9",
  ];

  netent.map((int, index) => {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();

    int.id = index + 1;

    int.modal = "modal-" + int.id;
    int.tapmodal = "tap:modal-" + int.id;
    int.closemodal = "tap:modal-" + int.id + ".close";

    var randometime = day + year * month * date;
    var randomtime =
      randometime / (hour <= 0 ? 1 : hour) +
      int.id; /* * (int.id % 3 <=0 ? 1 : int.id % 3 ) */
    int.rndm = randomtime;
    int.percentage = (
      ((Math.floor(new Date().getTime() / 1000 - (int.value + randomtime)) %
        (int.value + randomtime)) /
        (int.value + randomtime)) *
      100
    ).toFixed(2);

    var hour2 = (hour + 7) % 24;
    var xx = (
      ((Math.floor(new Date().getTime() / 1000 - (int.value + randomtime)) %
        (int.value + randomtime)) /
        (int.value + randomtime)) *
      100
    ).toFixed(0);
    var target = (xx % 3) + 1;
    var randomTarget = (hour2 + target) % 24;
    if (randomTarget < 10) {
      randomTarget = "0" + randomTarget;
    }
    var min1 = xx % 60;
    var min2 = (xx * date) % 60;
    if (min1 < 10) {
      min1 = "0" + min1;
    }
    if (min2 < 10) {
      min2 = "0" + min2;
    }
    if (hour2 < 10) {
      hour2 = "0" + hour2;
    }
    var jamTarget = hour2 + ":" + min1 + " - " + randomTarget + ":" + min2;

    var n = int.id % 6;
    var nn = n <= 0 ? 1 : n;
    var r1 = (((randomtime + int.value) / int.id) * nn).toFixed(0);
    var r2 = ((randomtime * 2 - int.value) * nn).toFixed(0);
    var r3 = ((int.value * 3 + randomtime) * nn).toFixed(0);

    var n2 = int.id % 5;
    var nn2 = n2 <= 0 ? 2 : n2;
    var r4 = ((randomtime / int.id) * nn2).toFixed(0);
    var r5 = ((randomtime * 2 - int.value / int.id) * nn2).toFixed(0);
    var r6 = ((int.value * 3 + randomtime / int.id) / nn2).toFixed(0);

    var p = [r1 % 6, r2 % 6, r3 % 6];
    var p2 = [r4 % 5, r5 % 5, r6 % 5];
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (p[j] == p[k] && j != k) {
          p[k] = (p[k] + 1) % 6;
        }
      }
    }
    var p3 = [
      Math.pow(p[0], p2[0]) % 12,
      Math.pow(p[1], p2[1]) % 12,
      Math.pow(p[2], p2[2]) % 12,
    ];

    for (let j = 0; j < 3; j++) {
      if (random3[p3[0]] == "Auto") {
        var pola1 = random2[p2[0]] + " " + random[p2[0]] + " " + random3[p3[0]];
      } else {
        var pola1 = randomManual[p[0]] + " " + randomx[p[0]];
      }
    }

    for (let j = 0; j < 3; j++) {
      if (random3[p3[1]] == "Auto") {
        var pola2 = random2[p2[1]] + " " + random[p2[1]] + " " + random3[p3[1]];
      } else {
        var pola2 = randomManual[p[1]] + " " + randomx[p[1]];
      }
    }

    for (let j = 0; j < 3; j++) {
      if (random3[p3[2]] == "Auto") {
        var pola3 = random2[p2[2]] + " " + random[p2[2]] + " " + random3[p3[2]];
      } else {
        var pola3 = randomManual[p[2]] + " " + randomx[p[2]];
      }
    }

    int.pola = [{ pola1, pola2, pola3 }];

    int.jamgacor = jamTarget;
  });

  const netentList = netent.map((item) => {
    if (item) {
      return {
        ...item,
      };
    }
    return item;
  });

  return (
    <Layout>
      <div className="content-container">
        <div className="content-context">
          <section className="slot">
            <div className="hero-context">
              <amp-carousel
                type="carousel"
                height="80"
                controls="no"
                loop=""
                autoplay=""
                layout="fixed-height"
                delay="2500"
                role="region"
                aria-label="Basic usage carousel"
              >
                <button className="button-99 mb-1">
                  <a href="./pragmatic">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/pragmatic-play.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./idnslot">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/idnslot.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./pgsoft">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/pgsoft.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./microgaming">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/microgaming.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./bgaming">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/bgaming.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./gmw">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/gmw.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./redtiger">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/evolution-redtiger.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./habanero">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/habanero.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./btg">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/evolution-btg.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./netent">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/evolution-netent.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./spinomenal">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/spinomenal.svg"}
                    />
                  </a>
                </button>
                <button className="button-99 mb-1">
                  <a href="./yggdrasil">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      width={75}
                      height={75}
                      className="banner"
                      src={"/static/images/yggdrasil.svg"}
                    />
                  </a>
                </button>
              </amp-carousel>
            </div>
            {/* <nav className='games-nav'>
            <ul>
              {gamenav.map(gamenavs => (
              <li key={gamenavs}>
                <Link href={gamenavs.link}>
                  <a className='game-nav-items'>
                    <div className='logo-nav-items' >
                      <amp-img
alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic" width={62} height={62} layout="responsive" alt={gamenavs.name} src={`../static/images/${gamenavs.icon}`} />
                    </div>
                    <span>
                      {gamenavs.name}
                    </span>
                  </a>
                </Link>
              </li>
              ))}
            </ul>
          </nav> */}
            <div className="slot-container">
              <header className="slot-content-header">
                <div className="slot-content-active">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    width={32}
                    height={32}
                    alt="NetEnt"
                    src={`../static/images/evolution-netent.svg`}
                  />
                  <div className="slot-content-title-games">NetEnt</div>
                </div>
              </header>
              <div className="slot-content">
                <div className="games-grid">
                  {netentList.map((gamelists, index) => (
                    <div key={index} className="games-list">
                      <div
                        className="games-items"
                        on={gamelists.tapmodal}
                        role="button"
                        tabIndex="0"
                      >
                        <div className="image-content">
                          <amp-img
                            alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                            width={180}
                            height={120}
                            layout="intrinsic"
                            alt={gamelists.name}
                            src={gamelists.icon}
                            className="games-img"
                          />
                        </div>
                        <div className="background-sha" />
                        <div className="progress-content">
                          <div className="progress-bar">
                            <div
                              className="percent-bar "
                              style={{
                                width: `${gamelists.percentage}%`,
                                backgroundColor: `${
                                  gamelists.percentage > 60
                                    ? `#30cd54`
                                    : gamelists.percentage > 30
                                    ? `#ffca07`
                                    : `#fb2d41`
                                }`,
                                borderTopRightRadius: `${
                                  gamelists.percentage > 99 ? `4px` : `0px`
                                }`,
                                borderBottomRightRadius: `${
                                  gamelists.percentage > 99 ? `4px` : `0px`
                                }`,
                              }}
                            />
                            <div className="percent-value">
                              RTP : {gamelists.percentage}%
                            </div>
                          </div>
                        </div>
                        <span className="games-name">{gamelists.name}</span>
                      </div>
                      <amp-lightbox
                        id={gamelists.modal}
                        layout="nodisplay"
                        className="amplightbox"
                      >
                        <div className="popup-modal-container">
                          <div
                            className="popup-modal-wrapper"
                            on={gamelists.closemodal}
                            role="button"
                            tabIndex="0"
                          ></div>
                          <div className="popup-modal">
                            <div className="modal-content">
                              <button
                                className="button-close"
                                on={gamelists.closemodal}
                              >
                                <div className="icons-closebar">
                                  <div className="close-bars" />
                                  <div className="close-bars" />
                                </div>
                              </button>
                              <div className="modal-header-content">
                                <amp-img
                                  alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                                  width={180}
                                  height={120}
                                  layout="responsive"
                                  alt={gamelists.name}
                                  src={gamelists.icon}
                                  className="image-modal"
                                />
                                <div className="modal-header-title">
                                  <h1>RTP dan Pola</h1>
                                  <h2>{gamelists.name}</h2>
                                </div>
                              </div>
                              <div className="modal-body">
                                <h2>JAM GACOR</h2>
                                <div className="modal-gacor">
                                  {gamelists.jamgacor}
                                </div>
                              </div>
                              <div className="modal-body">
                                <h2>POLA</h2>
                                <div className="modal-gacor">
                                  {gamelists.pola.map((polas, key) => (
                                    <div
                                      key={key}
                                      className="modal-pola-context"
                                      style={{
                                        color: `${
                                          gamelists.percentage <= 30
                                            ? "#fb2d41"
                                            : "#fff"
                                        }`,
                                      }}
                                    >
                                      <div>
                                        {gamelists.percentage <= 30
                                          ? "JANGAN"
                                          : polas.pola1}
                                      </div>
                                      <div>
                                        {gamelists.percentage <= 30
                                          ? "Main Dulu !!!"
                                          : polas.pola2}
                                      </div>
                                      <div>
                                        {gamelists.percentage <= 30
                                          ? ""
                                          : polas.pola3}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <Link href="https://idr45b.com/">
                                <a className="btn-signup">Mainkan Sekarang</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </amp-lightbox>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="product-list">
          <article>
            <div className="container-seo-2">
              <h3 className="m-0">Pilihan Games</h3>
            </div>
          </article>
          <div className="content-context">
            <div className="carousel-hotgames">
              <div className="product-games item-8 item-xs-12 m-b-1 slider-area owl-carousel">
                <amp-carousel
                  height="175"
                  layout="fixed-height"
                  aria-label="Basic usage carousel"
                  type="carousel"
                >
                  <a href="https://idr45b.com/casino">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      src="../static/template/CASINOFORRTP.jpg"
                      width="120"
                      height="175"
                      alt="IDR45"
                    ></amp-img>
                  </a>
                  <a href="https://idr45b.com/slot/category/hot">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      src="../static/template/SLOTFORRTP.jpg"
                      width="120"
                      height="175"
                      alt="IDR45"
                    ></amp-img>
                  </a>
                  <a href="https://idr45b.com/sports">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      src="../static/template/SPORTFORRTP.jpg"
                      width="120"
                      height="175"
                      alt="IDR45"
                    ></amp-img>
                  </a>
                  <a href="https://idr45b.com/lotto">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      src="../static/template/TOGELFORRTP.jpg"
                      width="120"
                      height="175"
                      alt="IDR45"
                    ></amp-img>
                  </a>
                  <a href="https://idr45b.com/fishing">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      src="../static/template/TEMBAKIKANFORRTP.jpg"
                      width="120"
                      height="175"
                      alt="IDR45"
                    ></amp-img>
                  </a>
                  <a href="https://idr45b.com/poker">
                    <amp-img
                      alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                      src="../static/template/POKER.jpg"
                      width="120"
                      height="175"
                      alt="IDR45"
                    ></amp-img>
                  </a>
                </amp-carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-container container-slider">
          <div className="footer-contact">
            <a href="/">
              <amp-img
                alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                src="../static/template/logo-whatsapp.png"
                width="30"
                height="30"
                layout="fixed"
                alt="WhatsApp IDR45"
              ></amp-img>
            </a>
            <a href="/">
              <amp-img
                alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                src="../static/template/facebook-contact-footer.png"
                width="30"
                height="30"
                layout="fixed"
                alt="Facebook IDR45"
              ></amp-img>
            </a>
            <a href="/">
              <amp-img
                alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                src="../static/template/livechat-contact-footer.png"
                width="30"
                height="30"
                layout="fixed"
                alt="LiveChat IDR45"
              ></amp-img>
            </a>
          </div>
          <div className="copyright">
            <a className="copyright-text" href="https://idr45b.com/">
              COPYRIGHT ©2023. All rights reserved to IDR45
            </a>
          </div>
        </div>
        <style jsx>{`
          .content-container {
            width: 100%;
          }
          .content-context {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 1168px;
            margin: 0 auto;
          }
          .button-99 {
            background: linear-gradient(#3c3c3c,#000000)
            border: none;
            border-radius: 6px;
          }
          .slot {
            display: block;
            grid-gap: 16px;
            align-items: start;
            grid-template-columns: 1fr;
            background: #fff;
            padding: 10px;
            width: 95%;
            margin: 0 auto;
          }
          .hero-context {
            display: flex;
            flex-direction: row;
            width: 100%;
            max-width: 1168px;
            margin: 0 auto;
            align-content: center;
            justify-content: space-around;
            align-items: stretch;
          }
          .games-nav {
            background-color: #311c2f;
            border-radius: 8px;
          }
          .games-nav li {
            border-bottom: 1px solid #32223e;
            transition: 0.2s ease-in-out;
          }
          .games-nav li:hover {
            background-color: #32223e;
            transition: 0.2s ease-in-out;
          }
          .games-nav li:hover:first-child {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
          .games-nav li:hover:last-child {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }
          .games-nav a {
            color: inherit;
            transition: 0.2s ease-in-out;
          }
          .games-nav a:hover {
            color: #bf69e4;
            transition: 0.2s ease-in-out;
          }

          .games-nav span {
            font-size: 14px;
            margin-left: 16px;
          }
          .game-nav-items {
            position: relative;
            display: flex;
            align-items: center;
            padding: 8px 16px;
          }
          .logo-nav-items {
            width: 32px;
            height: 32px;
          }
          .slot-container {
            grid-column: 2/3;
          }
          .slot-content-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 16px;
            background-color: #1e1b1b;
            border-radius: 6px;
            margin-bottom: 12px;
          }
          .slot-content-active {
            display: flex;
            align-items: center;
          }
          .slot-content-title-games {
            font-size: 14px;
            margin-left: 10px;
          }
          .slot-content {
          }
          .games-grid {
            display: grid;
            grid-gap: 12px;
            grid-template-rows: minmax(0, 1fr);
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .games-list {
            background-color: #311c2f;
            border-radius: 8px;
            transition: 0.2s ease-in-out;
          }

          .games-list:hover {
            box-shadow: 1px 2px 15px rgb(91 237 243 / 75%);
            transition: 0.2s ease-in-out;
          }
          .games-items {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            position: relative;
          }
          .image-content {
            position: relative;
            padding-bottom: 66%;
            width: 100%;
          }
          .games-img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
          .background-sha {
            width: 100%;
            height: 60%;
            border-radius: 8px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(
              rgb(8 8 8 / 0%) 0,
              rgb(112 112 114 / 17%) 19%,
              rgb(72 72 72 / 64%) 35%,
              rgb(0 0 0) 52%,
              rgb(40 35 44) 75%,
              rgb(16 16 16) 100%
            );
          }
          .progress-content {
            padding: 6px;
            width: 100%;
          }
          .progress-bar {
            display: flex;
            width: 100%;
            border-radius: 4px;
            background-color: #e6e6e6;
            position: relative;
          }
          .percent-bar {
            background-color: green;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }
          .percent-value {
            width: 100%;
            top: 7px;
            position: absolute;
            font-size: 14px;
            font-weight: 700;
            text-align: center;
            color: #1d1d1d;
          }
          .games-name {
            width: 100%;
            font-size: 12px;
            text-align: center;
            padding: 0 8px 8px 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            position: relative;
          }
          .amplightbox {
            z-index: 21474836461;
          }
          .popup-modal-container {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
          }
          .popup-modal-wrapper {
            display: flex;
            height: 100%;
            width: 100%;
            align-items: center;
            background-color: rgb(0 0 0 / 70%);
            position: absolute;
            z-index: 2;
          }
          .popup-modal {
            width: 90%;
            max-width: 480px;
            margin: 0 auto;
            background-color: #2d1616;
            border-radius: 12px;
            position: relative;
            z-index: 99;
          }
          .modal-content {
            padding: 28px 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .modal-header-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 18px;
            width: 100%;
            position: relative;
          }
          .image-modal {
            border-radius: 8px;
            width: 142px;
            height: 95px;
          }
          .modal-header-title {
            display: flex;
            flex-direction: column;
          }
          .modal-header-title h1 {
            font-weight: 700;
            font-size: 28px;
            text-align: center;
            margin: 0;
            color: #fff;
          }
          .modal-header-title h2 {
            font-weight: 700;
            font-size: 22px;
            text-align: center;
            margin: 0;
            padding-top: 4px;
            color: #bf3cc1;
          }
          .button-close {
            width: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            border: 0px;
            position: absolute;
            right: 14px;
            top: 14px;
          }
          .button-close:hover {
            transform: rotate(90deg);
          }
          .icons-closebar {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 15px;
            height: 15px;
          }
          .close-bars {
            width: 19px;
            height: 3px;
            border-radius: 3px;
            position: relative;
            background: #faf5ff;
            transform-origin: 1px center;
          }
          .close-bars:nth-child(1) {
            transform: rotate(45deg);
          }
          .close-bars:nth-child(2) {
            transform: rotate(-45deg);
          }
          .modal-body {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .modal-body h2 {
            margin: 10px 0 6px;
            font-size: 20px;
            color: #bf3cc1;
            font-weight: 500;
          }
          .modal-gacor {
            background-color: #3b2056;
            padding: 22px;
            border-radius: 8px;
            width: 100%;
            text-align: center;
            font-size: 18px;
            font-weight: 800;
          }
          .modal-pola-context {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 84px;
          }
          .btn-signup {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 34px;
            color: #fff;
            background-color: #3b2056;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            padding: 0px 20px;
            margin-top: 16px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }
          .btn-signup:hover {
            background-color: #311c2f;
          }
          .container-seo-2 {
    max-width: 1168px;
    margin: 0 auto;
    color: #fff;
    font-size: 11pt;
    text-shadow: 0 0#000;
    line-height: 1.5;
    padding: 20px 0 10px 0px;
}
          .container-seo-2 a {
            color: #8a0017;
            text-decoration: none;
          }
          .container-seo-2 li {
            margin-left: 20px;
            padding-left: 10px;
            line-height: 1.5;
            margin-bottom: 5px;
          }
          .product-context{
          align-items: center;
        }
        .product-list{
          max-width: 1168px;
          margin: 0 auto;
          align-items: center;
          display: flex;
          flex-direction: column;
          padding-bottom: 0px;
        }
        .product-games{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: space-between;
          justify-content: space-around;
          align-items: center;
          padding: 10px;
        }
          .container-seo-2 p {
            line-height: 1.5;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .copyright-container {
            background: #311c2f;
            bottom: 0px;
            position: relative;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-content: flex-start;
            justify-content: space-evenly;
            align-items: center;
            font-size: 10pt;
            padding: 10px;
            background-image: url(../static/template/nav-lines.png);
          }
          .footer-contact {
            padding-top: 10px;
          }
          @media screen and (max-width: 768px) {
            .slot {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
             .product-list{
              padding-bottom: 100px;
            }
            .copyright-container {
              bottom: 50px;
            }
            .slot-container {
              grid-column: 1/3;
              width: 100%;
            }
            .games-nav {
              width: 100%;
              padding: 12px 0;
            }
            .games-nav ul {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .games-nav li {
              border-bottom: 0px;
              margin: 1px;
            }
            .game-nav-items {
              width: 48px;
              height: 48px;
              background-color: #3b2056;
              border-radius: 50%;
              position: relative;
              display: flex;
              align-items: center;
              padding: 2px;
            }
            .logo-nav-items {
              width: 45px;
              height: 45px;
            }
            .game-nav-items span {
              display: none;
            }
          }
          @media screen and (max-width: 440px) {
            .games-grid {
              grid-gap: 6px;
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }

            .progress-content {
              padding: 2px;
            }
            .percent-value {
              top: 8px;
              font-size: 12px;
            }
            .games-name {
              font-size: 10px;
              padding: 0 4px 4px 4px;
            }
            .modal-header-title h1 {
              font-weight: 500;
              font-size: 18px;
            }
            .modal-header-title h2 {
              font-weight: 500;
              font-size: 16px;
            }
            .image-modal {
              width: 110px;
              height: 73px;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

Netent.getInitialProps = async () => {
  // fetch list of posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1`);
  const posts = await res.json();
  // assign a random category
  posts.map((post) => {
    return (post.category =
      categories[Math.floor(Math.random() * categories.length)]);
  });
  return { posts };
};

export const config = { amp: true };

export default Netent;
