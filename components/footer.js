const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="lc-frame">
          <div id="wafc" className="wafc">
            <a
              href="https://api.whatsapp.com/send?phone=6281264594807"
              target="_blank"
            >
              <amp-img
                alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                src="../static/template/waicon2.gif"
                width="70"
                height="70"
                layout="fixed"
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
              src="../static/template/icons8-typing-48.png"
              width="60"
              height="60"
              layout="fixed"
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
                alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                layout="fill"
                src="img/1x1.png"
                placeholder
              ></amp-img>
            </amp-iframe>
          </div>
        </div>
        <div className="bottom-menu">
          <a
            href="https://idr45b.com/"
            target="_blank"
            className="menu-item mt-5"
          >
            <div className="menu-item-icon">
              <amp-img
                src="../static/template/icon-home.png"
                width="25"
                height="25"
                alt="Login slot online terpercaya dengan RTP terbaik seindonesia"
              ></amp-img>
            </div>
            <div className="menu-item-text text-small text-white">Login</div>
          </a>
          <a
            href="https://idr45b.com/"
            target="_blank"
            className="menu-item mt-5"
          >
            <div className="menu-item-icon">
              <amp-img
                src="../static/template/icon-login.png"
                width="25"
                height="25"
                alt="daftar slot online terbaik indonesia 2023"
              ></amp-img>
            </div>
            <div className="menu-item-text text-small text-white">Daftar</div>
          </a>
          <a
            href="https://idr45b.com/"
            target="_blank"
            className="menu-item tada"
          >
            <div className="menu-item-icon">
              <amp-img
                src="../static/template/iconidr45.svg"
                width="40"
                height="40"
                alt="bocoran jam gacor slot online indonesia terbaru"
              ></amp-img>
            </div>
          </a>
          <a href="https://idr45b.com/" className="menu-item mt-5">
            <div className="menu-item-icon">
              <amp-img
                src="../static/template/icon-promotion.png"
                width="25"
                height="25"
                alt="promo slot online terbesar 2023"
              ></amp-img>
            </div>
            <div className="menu-item-text text-small text-white">Promosi</div>
          </a>
          <a href="https://direct.lc.chat/15613281" className="menu-item mt-5">
            <div className="menu-item-icon">
              <amp-img
                src="../static/template/icon-livechat.png"
                width="25"
                height="25"
                alt="slot online dengan pelayanan terbaik dan tercepat"
              ></amp-img>
            </div>
            <div className="menu-item-text text-small text-white">Livechat</div>
          </a>
        </div>
        <style jsx>{`
          .footer-container {
            width: 100%;
            margin: 0 auto;
            padding: 20px 0;
            display: none;
            flex-direction: column;
            align-items: center;
            position: fixed;
            bottom: 0;
          }
          .lc-frame {
            position: fixed;
            bottom: 80px;
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
            background-color: #e40000;
          }
          .bottom-menu {
            position: fixed;
            bottom: 0;
            width: 100%;
            padding-top: 5px;
            padding-bottom: 5px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            height: 60px;
            background: radial-gradient(
              circle 214px at 46.5%54.2%,
              #821212 0,
              #000 96%
            );
            border-top: 1px solid #d6c67f;
            justify-content: space-around;
            align-items: center;
            z-index: 2;
            align-items: stretch;
            justify-items: center;
          }
          .menu-item {
            text-align: center;
            z-index: 2;
          }

          .tada {
            -webkit-animation-name: tada;
            animation-name: tada;
            -webkit-animation-duration: 2.5s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            animation-iteration-count: infinite;
          }

          @-webkit-keyframes tada {
            0% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }

            10%,
            20% {
              -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
              transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            }

            30%,
            50%,
            70%,
            90% {
              -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
              transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            }

            40%,
            60%,
            80% {
              -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
              transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            }

            100% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }

          @keyframes tada {
            0% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }

            10%,
            20% {
              -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
              transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            }

            30%,
            50%,
            70%,
            90% {
              -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
              transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            }

            40%,
            60%,
            80% {
              -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
              transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            }

            100% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }
          .menu-item-text {
            color: whitesmoke;
            letter-spacing: 0px;
            font-weight: 400;
          }
          .footer-wrapper {
            width: 100%;
            max-width: 1168px;
            padding: 20px 0;
            border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
          }
          @media screen and (max-width: 768px) {
            .footer-container {
              display: flex;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Footer;
