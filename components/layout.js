import Head from "next/head";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

const Layout = (props) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://idr45.com/` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <div className="site-wrapper">
      <Head>
        <title>IDR45: Slot Online Gacor Gampang Maxwin</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <base href="/" />
        <meta
          name="description"
          content="Dapatkan Informasi Terbaru RTP Live yang di Update Setiap Hari, Bocoran Pola, dan Jam Gacor. IDR45 situs slot online terbaik dengan bonus berlimpah seperti slot deposit tanpa potongan dan slot terbaru."
        />
        <meta
          name="keywords"
          content="IDR45, IDR 45, IDR ,45 ,IDR RTP, POLA SLOT IDR45, IDR45, IDR45, IDR45 login, IDR45slot, IDR45 slot, IDR45, slot IDR45 login, agen slot IDR45, IDR45 8,slot online IDR45, IDR45 slot terpercaya, RTP slot online, RTP gacor, Gacor, slot online terbaik, slot online terpercaya, Slot Pragmatic, Slot Online, Slot Pragmatic Terbaik, Agen Pragmatic, Agen Pragmatic Terpercaya, Agen Pragmatic Terbaik, deposit pulsa tanpa potongan, idr slot terbaik, pola slot, pola rtp, pola gacor, gacor slot"
        />
        <meta
          name="google-site-verification"
          content="p_ORxnLMMqUEXhqxBoGy_yQPH1OXJdXkyeqUNpMyQu0"
        />
        <meta
          name="google-site-verification"
          content="aJBMBqLmdE5q-VnPb9LqE1wHqGnGmL4RnLqU3rHIrzg"
        />
        <meta
          name="google-site-verification"
          content="T9XIEedNX9an9EQVJ_pimt9olmNE_vKSDBsAJ_gTzWs"
        />
        <meta name="author" content="IDR45" />
        <meta name="language" content="id" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="geo.country" content="ID" />
        <meta name="language" content="ID" />
        <meta name="tgn.nation" content="Indonesia" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@IDR45" />
        <meta
          name="twitter:title"
          content="IDR45 Situs Judi Slot Online Gacor Terbaik dan Terlengkap Tahun 2023"
        />
        <meta
          name="twitter:description"
          content="IDR45 adalah salah satu dari antara Bandar judi slot online terpercaya di Indonesia. Menyediakan permainan slot online gacor dan casino online terbaik dengan dukungan bocoran jam gacor terlengkap"
        />
        <meta name="twitter:image" content="" />
        <meta name="theme-color" content="#fff" />
        <meta
          property="og:title"
          content="IDR45 Situs Judi Slot Online Gacor Gampang Menang Tahun 2023"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="IDR45 adalah salah satu dari antara Bandar judi slot online terpercaya di Indonesia. Menyediakan permainan slot online gacor dan casino online terbaik dengan dukungan bocoran jam gacor terlengkap"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://www.IDR458.com/" />
      </Head>
      <DefaultSeo canonical={canonicalUrl} />
      <Header />
      <Hero />
      <div className="content-wrapper">{props.children}</div>

      <Footer />

      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-size: 10px;
        }
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          width: 100%;
          height: 100%;
          font-size: 16px;
          margin: 0;
          padding: 0;
          background: whitesmoke;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
            "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
          text-rendering: optimizeLegibility;
          background: #2d1616;
        }

        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: #f1f1f1;
          border-radius: 4px;
        }

        h1,
        h2 {
          color: #333;
          margin: 50px 0 25px;
          line-height: 1.3;
        }
        h1 {
          font-weight: 700;
          margin: 0 0 30px;
          font-size: 3.2rem;
        }
        h2 {
          font-size: 2.8rem;
        }
        a,
        a:hover {
          color: #fff;
          text-decoration: none;
          background-color: transparent;
        }
        ul {
          list-style-type: none;
        }
        .sidebar-trigger {
          background: transparent;
          border: 0;
          outline: none;
          padding: 15px 20px;
          cursor: pointer;
          font-size: 22px;
        }
        .slot {
          padding-bottom: 0px;
        }
        .sidebar {
          background-color: #3b2056;
          color: #fff;
          width: 300px;
          top: 0px;
        }
        .sidebar-menu {
          padding: 20px;
        }
        .sidebar-menu li {
          padding: 12px;
        }
        .sidebar-menu a {
          display: flex;
          align-items: center;
        }
        .side-navitem span {
          margin-left: 12px;
        }
        .side-button {
          padding: 30px 16px;
        }
        .side-button ul {
          display: flex;
          justify-content: space-between;
        }
        .side-button a.btn-signin {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 34px;
          width: 126px;
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
        .side-button a.btn-signin:hover {
          background-color: #26b2aa;
        }
        .side-button a.btn-signup {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 34px;
          width: 126px;
          color: #fff;
          background-color: #3b2056;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          padding: 0 16px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .side-button a.btn-signup:hover {
          background-color: #311c2f;
        }
        .content-wrapper {
          position: relative;
          margin: 10px auto;
        }
        .percent-bar {
          height: 32px;
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
          );
        }
        .progress-bar {
          height: 32px;
        }
        .text-shadow {
          text-shadow: -1px 1px 0 #d1d1d1, -2px 2px 0 rgb(0 0 0 / 20%);
        }
        .text-light {
          color: #fbfbfb;
        }
        .text-big {
          font-size: 36pt;
        }
        .text-bold {
          font-weight: 700;
        }
        .show {
          display: block;
        }
        .hide {
          display: none;
        }
        .amp-carousel-button {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Layout;
