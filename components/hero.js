import Link from "next/link";

const Hero = () => {
  const dates = new Date();
  const date = Math.floor(new Date().getTime() / 1000 - 3000) % 3000;
  /* const percentage =  (date / 3000 * 100).toFixed(2)


  const percentage6x = percentage<20 ? (date * 1.8 / 3000 * 100 ).toFixed(2) : percentage
  const percentage4x = percentage6x<40 ? (date * 1.6 / 3000 * 100 ).toFixed(2) : percentage6x 
  const percentage2x = percentage4x<55 ?  (date * 1.1 / 3000 * 100).toFixed(2) : percentage4x */

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
    <div className="hero-container">
      <section>
        <div className="container-join">
          <a href="./">
            <amp-img
              alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
              src="../static/template/zeusidr45opy.jpg"
              width="632"
              height="612"
              layout="responsive"
            ></amp-img>
          </a>
        </div>
      </section>
      <div className="container-join">
        <div className="link-container container-button">
          <a href="https://idr45b.com/" target="_blank" className="tron-log">
            LOGIN
          </a>
          <a
            href="https://idr45b.com/mobile/register"
            target="_blank"
            className="tron-reg"
          >
            REGISTER
          </a>
        </div>
        <div className="link-container-2 container-button">
          <a
            href="https://direct.lc.chat/15613281/"
            target="_blank"
            className="tron-lc"
          >
            <amp-img
              alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
              src="../static/template/message.png"
              width="30"
              height="30"
              layout="fixed"
            ></amp-img>
            &nbsp;&nbsp;LiveChat
          </a>
        </div>
        <div className="link-container-2 container-button">
          <a
            href="https://api.whatsapp.com/send?phone=6281264594807"
            className="tron-wa"
          >
            <amp-img
              alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
              src="../static/template/whatsapp.svg"
              width="160"
              height="40"
              layout="fixed"
            ></amp-img>
          </a>
        </div>
        <div className="link-container-2 container-button">
          <a
            href="https://www.facebook.com/profile.php?id=100093515358015"
            className="tron-fb"
          >
            <amp-img
              alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
              src="../static/template/facebook.svg"
              width="160"
              height="40"
              layout="fixed"
            ></amp-img>
          </a>
        </div>
      </div>
      <div className="join-dl container-join">
        <div className="apps-banner">
          <a href="https://idr45b.com/" target="_blank">
            <amp-img
              alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
              src="../static/template/appsbanner.png"
              width="315"
              height="83"
            />
          </a>
        </div>
        <div id="breathing-button" className="apps-dl">
          <a href="https://idr45b.com/" target="_blank">
            <amp-img
              alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
              src="../static/template/download-app.png"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>
      <div className="container-join">
        <div className="link-container-3 container-button">
          <a
            href="https://idr45b.com/"
            target="_blank"
            className="tron-link-1 adjust-link"
          >
            Link: idr45b.com
          </a>
          <a
            href="https://idr45b.com/mobile/register"
            target="_blank"
            className="tron-link-2"
          >
            GO
          </a>
        </div>
        <div className="link-container-3 container-button">
          <a
            href="https://idr45aa.com/"
            target="_blank"
            className="tron-link-1 adjust-link"
          >
            Link: idr45aa.com
          </a>
          <a
            href="https://idr45aa.com/mobile/register"
            target="_blank"
            className="tron-link-2"
          >
            GO
          </a>
        </div>
        <div className="link-container-3 container-button">
          <a
            href="http://www.idr45bb.com/"
            target="_blank"
            className="tron-link-1 adjust-link"
          >
            Link: idr45bb.com
          </a>
          <a
            href="http://www.idr45bb.com/mobile/register"
            className="tron-link-2"
            target="_blank"
          >
            GO
          </a>
        </div>
      </div>

      {/* <p>Some time: {dates.toJSON()}</p>
      <p>Some epoch: {dates.toTimeString()}</p>
      <p>Some epoch: {dates.toLocaleTimeString()}</p>
      
      <p>{date}</p>
      <p>{percentage}%</p>
      <p>{percentage6x}</p>
      <p>{percentage4x}</p>
      <amp-timeago
        width="0"
        height="15"
        datetime={dates.toJSON()}
        layout="responsive"
      >
        .
      </amp-timeago> */}
      <style jsx>{`
        .hero-container {
          width: 100%;
          background: #151515;
        }
        .hero-wrapper {
        }
        .tables {
          margin: 0 auto;
        }
        .table-div {
          margin-left: auto;
          margin-right: auto;
          border: 2px solid red;
          padding: 10px;
        }
        .list-styled {
          list-style-type: auto;
          margin: 0 auto;
          margin-left: 30px;
        }
        .link-container {
          display: flex;
          justify-content: center;
          font-size: var(--x-large-font);
          padding: 0;
          width: 100%;
          margin-top: 10px;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }
        .container-button {
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }
        .tron-log {
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 5px;
          color: #ffffff;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: calc(8px+1vh);
          font-style: normal;
          font-variant: normal;
          font-weight: 700;
          line-height: 15px;
          padding: 13px;
          background: linear-gradient(90deg, #e12f2f, #c92327, #b3161f);
          text-decoration: none;
          display: flex;
          cursor: pointer;
          text-align: center;
          justify-content: center;
          margin: 10px 0 10px 0;
          border-radius: 11px;
          margin-right: 3px;
          margin-left: 9px;
          background-image: linear-gradient(
            to right,
            #e12f2f 0%,
            #c92327 51%,
            #b3161f 100%
          );
          margin: 10px;
          padding: 15px 45px;
          text-align: center;
          text-transform: uppercase;
          transition: 0.5s;
          background-size: 200% auto;
          color: white;
        }
        .tron-log:hover {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }
        .tron-log:active {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }

        .btn-grad {
          background-image: linear-gradient(
            to right,
            #f09819 0%,
            #edde5d 51%,
            #f09819 100%
          );
          margin: 10px;
          padding: 15px 45px;
          text-align: center;
          text-transform: uppercase;
          transition: 0.5s;
          background-size: 200% auto;
          color: white;
          box-shadow: 0 0 20px #eee;
          border-radius: 10px;
          display: block;
        }

        .btn-grad:hover {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }

        .tron-reg {
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 5px;
          color: #ffffff;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: calc(8px+1vh);
          font-style: normal;
          font-variant: normal;
          font-weight: 700;
          line-height: 15px;
          padding: 13px;
          background: linear-gradient(90deg, #ffd200, #ffae00, #ffd800);
          text-decoration: none;
          display: flex;
          cursor: pointer;
          text-align: center;
          justify-content: center;
          margin: 10px 0 10px 0;
          border-radius: 11px;
          margin-left: 3px;
          margin-right: 9px;
          background-image: linear-gradient(
            to right,
            #ffd200 0%,
            #ffae00 51%,
            #ffd800 100%
          );
          margin: 10px;
          padding: 15px 45px;
          text-align: center;
          text-transform: uppercase;
          transition: 0.5s;
          background-size: 200% auto;
          color: white;

          display: block;
        }
        .tron-reg:hover {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }
        .tron-reg:active {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }
        .tron-link-1 {
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 5px;
          color: #161616;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: calc(8px+1vh);
          font-style: normal;
          font-variant: normal;
          font-weight: 700;
          line-height: 15px;
          padding: 13px;
          background: #fff;
          -webkit-box-shadow: 1px 1px 10px 0 rgb(223 221 217 / 20%);
          -moz-box-shadow: 1px 1px 10px 0 rgb(223 221 217 / 20%);
          box-shadow: inset 0 0 0.1rem rgb(223 221 217 / 20%);
          border: 1px solid #5e5d58;
          text-decoration: none;
          display: flex;
          cursor: pointer;
          text-align: center;
          justify-content: center;
          margin: 8px 0 10px 0;
          border-radius: 11px;
          width: 80%;
          margin-right: 5px;
          margin-left: 9px;
        }

        .adjust-link {
          justify-content: flex-start;
          padding-left: 30px;
        }
        .tron-link-2 {
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 5px;
          color: #fff;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: calc(8px+1vh);
          font-style: normal;
          font-variant: normal;
          font-weight: 700;
          line-height: 15px;
          padding: 13px;
          background: linear-gradient(180deg, #c00400 5%, #f1413d);
          text-decoration: none;
          display: flex;
          cursor: pointer;
          text-align: center;
          justify-content: center;
          margin: 8px 0 10px 0;
          border-radius: 11px;
          width: 20%;
          margin-right: 9px;
        }
        .link-container a {
          width: 50%;
          text-align: center;
          border-radius: 3px;
          font-weight: bold;
        }
        .tron-lc {
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 5px;
          color: #ffffff;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: calc(8px+1vh);
          font-style: normal;
          font-variant: normal;
          font-weight: 700;
          line-height: 15px;
          padding: 5px;
          background: linear-gradient(90deg, #20badb, #746dea, #f72afc);
          text-decoration: none;
          display: flex;
          cursor: pointer;
          text-align: center;
          justify-content: center;
          margin: 10px 0 10px 0;
          border-radius: 11px;
          align-items: center;
        }
        .tron-fb {
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 5px;
          color: #090909;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: calc(8px+1vh);
          font-style: normal;
          font-variant: normal;
          font-weight: 700;
          line-height: 15px;
          padding: 0.5px;
          background: linear-gradient(to right, #6b6b6b, #959595, #6b6b6b);
          box-shadow: inset 2px 1.5rem 3px -2px rgb(255 255 255 / 20%);
          text-decoration: none;
          background-color: #8ac279;
          display: flex;
          cursor: pointer;
          text-align: center;
          justify-content: center;
          margin: 10px 0 10px 0;
          border-radius: 11px;
        }
        .tron-wa {
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 5px;
          color: #090909;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: calc(8px+1vh);
          font-style: normal;
          font-variant: normal;
          font-weight: 700;
          line-height: 15px;
          padding: 0.5px;
          background: linear-gradient(to right, #c6d747, #70b992, #1d99f1);
          box-shadow: inset 2px 1.5rem 3px -2px rgb(255 255 255 / 20%);
          text-decoration: none;
          background-color: #8ac279;
          display: flex;
          cursor: pointer;
          text-align: center;
          justify-content: center;
          margin: 10px 0 10px 0;
          border-radius: 11px;
        }

        .link-container-2 {
          display: flex;
          justify-content: center;
          font-size: var(--x-large-font);
          padding: 0;
          width: 100%;
        }
        .link-container-2 a {
          width: 100%;
          text-align: center;
          border-radius: 3px;
          margin: 9px;
          font-weight: bold;
        }
        .join-dl {
          padding: 20px 20px;
          display: grid;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: space-between;
          justify-content: end;
          border-radius: 5px;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: center;
        }
        .apps-banner {
        }
        .link-container-3 {
          display: flex;
          justify-content: center;
          font-size: var(--x-large-font);
          padding: 0;
          width: 100%;
        }
        .link-container-3 a {
          text-align: center;
          border-radius: 3px;
          font-weight: bold;
        }
        .hero-wrapper-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1168px;
          margin: 0 auto;
        }
        .container-join {
          margin-bottom: 10px;
          max-width: 1168px;
          margin: 0 auto;
        }
        .text-join {
          margin: 30px;
        }
        .refresh-text {
          margin: 0 auto;
          text-align: center;
          padding-top: 20px;
        }
        .container-global {
          max-width: 1000px;
          margin: 0 auto;
        }
        .text-center {
          text-align: center;
        }
        .join-shadow {
          text-shadow: -2px 2px 0 rgb(0 0 0 / 50%),
            -2px 2px 0 rgb(255 255 255 / 20%);
        }
        .span-join {
          color: #d8b25b;
        }
        .join-shadow {
          text-shadow: -2px 2px 0 rgb(0 0 0 / 50%),
            -2px 2px 0 rgb(255 255 255 / 20%);
        }
        .hero-wrapper-title h1 {
          margin: 10px 0 2px;
          font-size: 32px;
          font-weight: 700;
          color: whitesmoke;
          text-align: center;
        }
        .hero-wrapper-title h2 {
          margin: 16px 0 10px;
          font-size: 20px;
          font-weight: 600;
          color: whitesmoke;
          text-shadow: none;
        }
        .p0 {
          padding: 0px;
        }
        .hero-wrapper-title p {
          margin: 0;
          font-size: 11pt;
          font-weight: 600;
          color: #000000;
        }
        .hero-context {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 1168px;
          margin: 0 auto;
        }
        .container-global {
          max-width: 1000px;
          margin: 0 auto;
        }
        .banner {
          border-radius: 12px;
          margin-top: 8px;
        }
        .amp-carousel-button-next {
          background-color: red;
        }
        .join {
          padding: 20px 0;
        }
        .list-btn-join {
          margin: auto 0;
          margin-top: 50px;
          margin-bottom: 30px;
          text-align: -webkit-center;
        }
        .button-47 {
          font-family: inherit;
          font-size: 18px;
          background: linear-gradient(90deg, #20badb, #746dea, #f72afc);
          color: white;
          padding: 0.7em 1em;
          padding-left: 0.9em;
          display: flex;
          align-items: center;
          border: none;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.2s;
          width: 30%;
        }
        .button-47 span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .button-47 svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .button-47:hover .svg-wrapper {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }

        .button-47:hover svg {
          transform: translateX(1.2em) rotate(45deg) scale(1.1);
        }

        .button-47:hover span {
          transform: translateX(2em);
        }

        .button-47:active {
          transform: scale(0.95);
        }

        .seo-text {
          color: whitesmoke;
          /* text-align: center; */
          font-size: 11pt;
          text-shadow: 0 0 black;
          line-height: 1.5;
          margin-top: 10px;
          margin-bottom: 10px px;
          padding: 20px 10px;
          max-width: 1168px;
          margin: 0 auto;
        }
        .seo-text p {
          color: whitesmoke;
          /* text-align: center; */
          font-size: 11pt;
          text-shadow: 0 0 black;
          line-height: 1.5;
          margin-top: 10px;
          margin-bottom: 10px px;
          max-width: 1168px;
          margin: 0 auto;
          font-weight: 400;
        }
        .seo-text a {
          color: #ffd761;
          text-decoration: none;
        }
        .seo-text p {
          line-height: 1.5;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        @keyframes fly-1 {
          from {
            transform: translateY(0.1em);
          }

          to {
            transform: translateY(-0.1em);
          }
        }
        @media screen and (max-width: 768px) {
          .hero-wrapper-title h2 {
            margin: 8px 0;
            color: whitesmoke;
          }
          .text-big {
            font-size: 18pt;
          }
          .join {
            grid-template-columns: 1fr;
            border-radius: 0;
            padding: 10px;
          }
          .button-47 {
            width: 50%;
            font-size: 13px;
          }
          .refresh-text {
            padding-top: 20px;
          }
        }

        @media screen and (max-width: 440px) {
          .hero-wrapper-title h1 {
            padding: 0 4px;
            font-size: 24px;
          }
          .hero-wrapper-title h2 {
            padding: 0 4px;
            font-size: 16px;
          }
        }
        @media screen and (max-width: 320px) {
          .join-dl {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
