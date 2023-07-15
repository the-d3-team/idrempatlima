import Link from "next/link";
import gamenav from "../data/gamenav";
import pragmatic from "../data/content.json";

const Content = () => {
  /* function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  } */
  /* 

var arr = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
arr.push(...arr2);
var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

console.log(result);

var arr = [{key:"11", value:"1100"},{key:"22", value:"2200"}];
var object = arr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: item.value }), {});

console.log(object)

  const newArr = pragmatic.map((element, index) => {
    return element + index;
  });
  console.log(newArr) */
  function makeid(length) {
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  function makeid1(length) {
    var result = "";
    var characters = "234";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
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

  pragmatic.map((int, index) => {
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
  const newList = pragmatic.map((item) => {
    if (item) {
      return {
        ...item,
      };
    }
    return item;
  });

  let gamename = gamenav.find((gamenames) => gamenames);
  return (
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
          {/* <nav className="games-nav">
            <ul>
              {gamenav.map((gamenavs) => (
                <li key={gamenavs}>
                  <Link href={gamenavs.link}>
                    <a className="game-nav-items">
                      <div className="hero-context">
                        <amp-carousel
                          type="carousel"
                          width="300"
                          height="80"
                          controls="no"
                          loop=""
                          autoplay=""
                          layout="fixed-height"
                          delay="2500"
                          role="region"
                          aria-label="Basic usage carousel"
                        >
                          <amp-img
alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                            width={62}
                            height={62}
                            layout="responsive"
                            alt={gamenavs.name}
                            src={`/static/images/${gamenavs.icon}`}
                          />
                        </amp-carousel>
                      </div>
                      <span>{gamenavs.name}</span>
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
                  width={32}
                  height={32}
                  alt="Pragmatic Play"
                  src={`/static/images/pragmatic-play.svg`}
                />
                <div className="slot-content-title-games">Pragmatic Play</div>
              </div>
            </header>
            <div className="slot-content">
              <div className="games-grid">
                {newList.map((gamelists, index) => (
                  <div key={index} className="games-list">
                    <div
                      className="games-items"
                      on={gamelists.tapmodal}
                      role="button"
                      tabIndex="0"
                    >
                      <div className="image-content">
                        <amp-img
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
                                    className="modal-pola-context"
                                    key={key}
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
                                        : gamelists.id == 4
                                        ? ""
                                        : polas.pola1}
                                    </div>
                                    <div>
                                      {gamelists.percentage <= 30
                                        ? "Main Dulu !!!"
                                        : gamelists.id == 4
                                        ? "BEBAS"
                                        : polas.pola2}
                                    </div>
                                    <div>
                                      {gamelists.percentage <= 30
                                        ? ""
                                        : gamelists.id == 4
                                        ? ""
                                        : polas.pola3}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {/* <button className='button-close' on={gamelists.closemodal}>
                              Tutup
                            </button> */}
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
          {/* <div>
          {newList.map((gamelists, index) => (
          <div>
            <p>{'{'}</p>
            <p>"value": {makeid1(1)}{makeid(3)},
            </p>
            <p>"icon": "",</p>
            <p>"name": ""</p>
            <p>{'},'}</p>
          </div>
          ))}
          </div> */}
        </section>
        {/*  <amp-list
  width="auto"
  height="100"
  layout="fixed-height"
  src="../data/query.json"
>
  <template type="amp-mustache">

    <div class="url-entry">
      <a href="{{url}}">{{title}}</a>
    </div>
  </template>
</amp-list> */}

        {/* <amp-script layout="container" script="myscript">
          <button>Hello amp-script!</button>
                      
          
        <form data-initialize-from-url
            method="get"
            action="https://example.com/search"    target="_top">
          <label>Search: <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"></input></label>
        </form>
        </amp-script>  */}
        {/* <div
        
          dangerouslySetInnerHTML={{
            __html: `<form
            method='post'
            action-xhr='https://localhost:3000/data'
            target='_blank'
            id='search-form'
            on='submit:autosuggest-list.hide;submit-success:results.show'
            autocomplete='off'
          >
          <div class='search-container'>
            <input
              id='query'
              name='query'
              type='text'
              class='search-box'
              on="input-debounced:AMP.setState({
                  query: event.value,
                  autosuggest: event.value
                }),
                autosuggest-list.show,
                results.hide"
              [value]="query || ''"
            />
            <button class='search-submit' type='submit'>Search</button>
            </div>
            <amp-list
            class='autosuggest-box'
            layout='fixed-height'
            height='120'
            src='/data/query'
            [src]="'/data/query?q=' + (autosuggest || '')"
            id='autosuggest-list'
            hidden
          >
          <template type='amp-mustache'>
{{#results}}
  <amp-selector
    keyboard-select-mode='focus'
    layout='container'
    on='select:AMP.setState({query: event.targetOption}),
    autosuggest-list.hide,{{id}}.scrollTo'
  >
    <div
      class='select-option no-outline'
      role='option'
      tabindex='0'
      on='tap:autosuggest-list.hide'
      option='{{title}}'
    >{{title}}</div>
{{/results}}
  </amp-selector>
</template>
</amp-list>
        `,
          }}
        />
        <ul id="myUL">
  <li><a href="#">Adele</a></li>
  <li><a href="#">Agnes</a></li>

  <li><a href="#">Billy</a></li>
  <li><a href="#">Bob</a></li>

  <li><a href="#">Calvin</a></li>
  <li><a href="#">Christina</a></li>
  <li><a href="#">Cindy</a></li>
</ul>
 */}
        <div className="list-btn-join">
          <a href="/pragmatic" className="button-47 text-bold text-dark dance">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>RTP Selengkapnya</span>
          </a>
        </div>
      </div>
      <div className="hero-wrapper">
        {/* <div className="hero-wrapper-title">
          <h1 className="text-big">
            Info Live RTP Slot Gacor Mudah Jackpot Terkini di Situs IDR45
          </h1>
          <div className="seo-text">
            <p>
              RTP adalah singkatan dari “ Return To Player “ yang artinya adalah
              saldo atau dana pengembalian yang sudah disedot oleh provider game
              tersebut. Jadi sangatlah penting untuk mengetahui RTP Slot itu
              apa, karena disinilah terciptanya rumus algoritma dalam permainan
              Game <a href="https://idr45b.com/">Slot Online</a>. Tidak
              banyak yang mengetahui apa artinya RTP Slot ini, sehingga disini
              mimin akan bantu menjelaskan secara detil tentang RTP Slot
              sehingga para agan-agan pecinta Judi Slot Online bisa mengetahui
              Bocoran RTP Slot Tertinggi di tahun 2023 ini.
            </p>
            <p>
              Kalau itu yang kamu rasakan dan kamu mau, mimin mau infoin kalo
              disini mimin bisa kasih solusi untuk semua permasalahan kamu di
              dunia <a href="https://idr45b.com/">slot online</a>.
            </p>
          </div>
        </div> */}
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
                <a href="https://idr45b.com/" target="_blank">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    src="../static/template/SLOT.jpg"
                    width="120"
                    height="175"
                  ></amp-img>
                </a>
                <a href="https://idr45b.com/" target="_blank">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    src="../static/template/CASINO.jpg"
                    width="120"
                    height="175"
                  ></amp-img>
                </a>
                <a href="https://idr45b.com/" target="_blank">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    src="../static/template/SPORTBOOK.jpg"
                    width="120"
                    height="175"
                  ></amp-img>
                </a>
                <a href="https://idr45b.com/" target="_blank">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    src="../static/template/TOGEL.jpg"
                    width="120"
                    height="175"
                  ></amp-img>
                </a>
                <a href="https://idr45b.com/" target="_blank">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    src="../static/template/TEMBAKIKAN.jpg"
                    width="120"
                    height="175"
                  ></amp-img>
                </a>
                <a href="https://idr45b.com/" target="_blank">
                  <amp-img
                    alt="IDR 45 Slot Online Gacor Gampang Maxwin Pragmatic"
                    src="../static/template/POKER.jpg"
                    width="120"
                    height="175"
                  ></amp-img>
                </a>
              </amp-carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wrapper-title">
        <h1 className="text-big">
          Info Live RTP Slot Gacor Mudah Jackpot Terkini di Situs IDR45
        </h1>
        <div>
          <table className="tables">
            <tbody className="table-div">
              <tr className="table-div">
                <th className="table-div">⚡Rtp Slot Pragmatic Tertinggi</th>
                <td className="table-div">
                  🔱Gates of Olympus,🍭Sweet Bonanza, Wild West Gold,
                  ⭐Starlight Princess, 💎Aztec Gems
                </td>
              </tr>
              <tr className="table-div">
                <th className="table-div">🏧Pembayaran BANK: </th>
                <td className="table-div">
                  💷BCA, BRI, BNI, Mandiri, 💴 CIMB, Danamon, 💴 BSI.
                </td>
              </tr>
              <tr className="table-div">
                <th className="table-div">🟢Pembayaran E-Money: </th>
                <td className="table-div">💳OVO, Gopay, Dana.</td>
              </tr>
              <tr className="table-div">
                <th className="table-div">📞Pembayaran Pulsa: </th>
                <td className="table-div">💳Telkomsel & XL.</td>
              </tr>
              <tr className="table-div">
                <th className="table-div">💸Minimal Deposit</th>
                <td className="table-div">
                  💰Rp. 10.000,- (Sepuluh Ribu Rupiah)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="seo-text">
          <h3>
            Slot Gacor Gampang Maxwin Pragmatic Play: Pengetahuan RTP Live Slot
            | Bocoran Terkini RTP Slot Pragmatic
          </h3>
          <p>
            RTP adalah singkatan dari “ Return To Player “ yang artinya adalah
            saldo atau dana pengembalian yang sudah disedot oleh provider game
            tersebut. Jadi sangatlah penting untuk mengetahui RTP Slot itu apa,
            karena disinilah terciptanya rumus algoritma dalam permainan Game{" "}
            <a href="https://idr45b.com/" target="_blank">
              Slot Online
            </a>
            . Tidak banyak yang mengetahui apa artinya RTP Slot ini, sehingga
            disini mimin akan bantu menjelaskan secara detil tentang RTP Slot
            sehingga para agan-agan pecinta Judi Slot Online bisa mengetahui
            Bocoran RTP Slot Tertinggi di tahun 2023 ini.
          </p>
          <p>
            Kalau itu yang kamu rasakan dan kamu mau, mimin mau infoin kalo
            disini mimin bisa kasih solusi untuk semua permasalahan kamu di
            dunia{" "}
            <a href="https://idr45b.com/" target="_blank">
              slot online
            </a>
            .
          </p>
          <p>
            RTP Slot kini menjadi alat ukur krusial bagi para penggemar judi
            slot online dimana saja. Kepercayaan mereka adalah bahwa dengan
            melihat info bocoran RTP live slot hari ini yang tertinggi, mereka
            akan memiliki peluang lebih besar untuk menang dalam permainan slot
            online. Diketahui bahwa RTP Live slot online hari ini telah menjadi
            topik yang paling sering dicari oleh pemain game slot berbasis uang
            asli. Mengingat algoritma sistematis dari RTP live slot telah
            disusun mengikuti mekanisme kerja mesin slot, ini membuktikan
            mengapa pecinta judi slot online menggunakan mata uang rupiah di
            Indonesia menjadikan RTP slot online sebagai acuan utama. Bahkan
            untuk provider game slot terbesar seperti Pragmatic Play, informasi
            seperti RTP live slot ini sangat penting. Banyak pemain yang
            memanfaatkan info bocoran RTP slot Pragmatic hari ini sebagai metode
            dalam memilih game slot terbaik untuk dimainkan. Oleh karena itu,
            mempertimbangkan bahwa tidak semua situs slot memiliki RTP yang
            benar-benar menggunakan sistem yang memadai, kami melalui halaman
            ini sengaja menampilkan RTP live slot online hari ini untuk pemain.
            Sehingga, slotmania dapat langsung menentukan pilihan pada game slot
            gacor hari ini, yang sangat gampang untuk menang.
          </p>
          <h3>
            RTP Live Slot Online Hari Ini Tertinggi: Pedoman Bermain Game Slot
            Gacor Gampang Maxwin Terbaik
          </h3>
          <p>
            RTP Live slot online hari ini tertinggi memang pantas dijadikan
            pedoman dalam bermain game slot terbaik. Alasannya? Slotmania dapat
            langsung mengetahui game slot apa yang sedang gacor hari ini. Dalam
            kata lain, penggemar judi game slot online dapat mengetahui game
            slot apa saja yang memiliki peluang jackpot tinggi dan mudah menang,
            atau dengan kata lain game slot gacor gampang Maxwin. Oleh karena
            itu, bocoran RTP slot online selalu menjadi informasi yang sangat
            banyak dicari oleh penggemar game slot. Meski demikian, pemain harus
            lebih berhati-hati ketika mencari link RTP slot hari ini. Hal ini
            karena tidak semua situs judi slot online melakukan analisis
            terhadap setiap game slot yang dimainkan oleh pemain. RTP live slot
            online harus digunakan dengan bijaksana dan tidak sembarangan.
            Biasanya, RTP live slot online ini diperbarui berdasarkan persentase
            kemenangan dari game slot tertentu yang berhasil dimenangkan oleh
            pemain. Oleh karena itu, RTP slot live sering dianggap sebagai cara
            terbaik untuk mencari game slot gacor hari ini. Cukup dengan
            mengandalkan RTP live slot tertinggi hari ini saja, Anda sudah dapat
            meminimalkan kerugian ketika bermain game judi slot online.
          </p>
          <h3>
            RTP Slot Live Tertinggi: Kunci Mencari Info Bocoran RTP Slot
            Pragmatic Hari Ini
          </h3>
          <p>
            RTP Slot Live tertinggi selalu digunakan oleh pemain dalam mencari
            info bocoran RTP slot Pragmatic hari ini karena alasan yang jelas.
            Para pecinta judi slot online uang asli tentu berharap bisa
            mendapatkan kemenangan besar ketika bermain slot online. Meski
            bermain slot online mudah bahkan untuk pemula, kemenangan tidak
            selalu mudah didapatkan. Inilah alasan utama pemain sering mencari
            cara mudah menang main slot online di internet. Beruntungnya,
            ketersediaan RTP slot tertinggi hari ini live menjadi solusi dan
            kunci sukses bermain game slot, termasuk dalam permainan Slot Gacor
            Gampang Maxwin Pragmatic Play. Para penggemar slot Pragmatic Play
            telah membuktikan sendiri bagaimana mereka dengan mudah menemukan
            game slot gacor hari ini yang gampang menang. Jika Anda kesulitan
            keluar dari siklus kekalahan, mungkin saatnya untuk mengandalkan RTP
            slot Pragmatic hari ini sebagai cara menang main judi slot paling
            gacor. Sampai saat ini, Pragmatic Play Indonesia telah merilis
            ratusan jenis mesin slot, dari klasik hingga video slot terbaik.
            Inilah sebabnya Anda bisa menjadikan info RTP slot ini sebagai
            bocoran RTP slot gacor hari ini.
          </p>
          <h3>
            Dapatkan Slot Gacor Gampang Maxwin Pragmatic Play dari 13 Situs
            dengan RTP Slot Live Tertinggi Hari Ini, Bermain Slot Gacor Jadi
            Lebih Mudah
          </h3>
          <p>
            Tidak dapat dipungkiri, Situs dengan RTP Slot Live telah menjadi
            favorit bagi pecinta slot online di Indonesia belakangan ini. Meski
            demikian, mencari situs dengan RTP live slot yang terbaik bukanlah
            tugas yang sederhana. Berbagai situs judi slot online di Indonesia
            menawarkan game slot terbaik dengan sedikit perbedaan. Karena ini,
            pemula dan bettor berpengalaman seringkali mengalami kekalahan
            ketika bermain game slot favorit mereka. Menanggapi hal tersebut,
            kami merasa terpanggil untuk membantu semua penggemar slot dalam
            memilih situs judi slot yang tepat untuk bermain game slot gacor
            yang gampang dimenangkan. Dengan demikian, kami mempersembahkan
            daftar 13 situs dengan RTP Slot Live tertinggi hari ini, yang
            dikenal sebagai penyedia Slot Gacor Gampang Maxwin Pragmatic Play
            dan game slot gacor lainnya:
          </p>
          <ol className="list-styled">
            <li style={{ textAlign: "inherit" }}>
              Pragmatic Play (RTP Slot 98,87%)
            </li>
            <p>
              Pragmatic play saat ini menjadi nama paling populer dalam
              persaingan game slot online terbaik hari ini. Bagaimana tidak?
              Hampir semua game slot gacor selalu hadir dari provider slot
              pragmatic play. Bahkan rtp slot pragmatic tertinggi hari ini belum
              mampu di kalahkan oleh provider game slot online manapun. Dengan
              permainan judi slot anti rungkat seperti gates of olympus, aztec
              gems, hingga sweet bonanza. Game slot pragmatic selalu menjadi
              salah satu situs rtp slot live tertinggi hari ini yang paling
              sering dipilih oleh pemain
            </p>
            <li style={{ textAlign: "inherit" }}>
              PG Soft / Pocket Gaming (RTP Slot 96,33%)
            </li>
            <p>
              PG Soft atau pocket gaming menjadi sangat populer dalam beberapa
              waktu belakangan ini. Pasalnya game slot gacor hari ini yang
              bettor mainkan sebagian besar dirilis oleh provider judi slot
              online yang satu ini. Tidak sedikit pula pemain yang selalu
              mencari pgsoft demo untuk mencoba keseruan semua mesin slot yang
              telah selalu diupdate setiap minggu oleh situs judi slot
              terpercaya di Indonesia tersebut.
            </p>
            <li style={{ textAlign: "inherit" }}>
              Joker123 / Joker gaming (RTP Slot 96,27%)
            </li>
            <p>
              Joker123 merupakan nama lain dari perusahaan joker gaming yang
              bergerak di industri I-Gaming internasional. Dimana game slot
              joker gaming selalu berhasil menarik perhatian para pecinta judi
              slot online uang asli di Indonesia. Terlebih jackpot megawin slot
              terbesar selalu disediakan oleh semua game slot joker123 kepada
              pemain. Tidak mengherankan jika rtp slot joker gaming juga
              sangatlah tinggi.
            </p>
            <li style={{ textAlign: "inherit" }}>
              Joker123 / Joker gaming (RTP Slot 96,27%)
            </li>
            <p>
              Joker123 merupakan nama lain dari perusahaan joker gaming yang
              bergerak di industri I-Gaming internasional. Dimana game slot
              joker gaming selalu berhasil menarik perhatian para pecinta judi
              slot online uang asli di Indonesia. Terlebih jackpot megawin slot
              terbesar selalu disediakan oleh semua game slot joker123 kepada
              pemain. Tidak mengherankan jika rtp slot joker gaming juga
              sangatlah tinggi.
            </p>
            <li style={{ textAlign: "inherit" }}>Habanero (RTP Slot 95,99%)</li>
            <p>
              Habanero game slot online terbaik yang sudah cukup lama dikenal
              oleh masyarakat Indonesia. Bahkan sebelum hadirnya slot pragmatic
              play, Semua pemain game slot selalu memainkan permainan habanero
              slot. Tema-tema menarik serta simbol bonus yang mudah dimengerti
              menjadi andalan dari slot habanero. Sehingga wajar saja jika
              provider game slot habanero memiliki rasio persentase rtp live
              slot tertinggi hari ini.
            </p>
            <li style={{ textAlign: "inherit" }}>
              Spadegaming (RTP Slot 95,51%)
            </li>
            <p>
              Spadegaming agen slot online terpercaya di Indonesia yang sudah
              cukup lama populer di luar sana. Bahkan untuk diketahui saja,
              Spadegaming yang dikenal dengan sebutan SG Slot ini juga telah
              berkembang dengan sangat pesat. Bukti tersebut terlihat dari jenis
              pilihan bahasa hingga mata uang yang disediakan. Situs slot gacor
              ini juga dikenal sebagai salah satu penyedia game slot deposit
              paling murah.
            </p>
            <li style={{ textAlign: "inherit" }}>Playtech (RTP Slot 95,12%)</li>
            <p>
              Playtech merupakan perusahaan besar yang bergerak dalam industri
              piranti lunak dan berhasil mengembangkan beragam jenis game slot
              gacor terbaik. Dimana situs slot online playtech di Indonesia juga
              berkembang dengan pesat. Para pecinta game slot online pastinya
              sudah sangat familiar dengan beberapa permainan game judi slot
              gampang menang seperti Fish Shooter bukan? Nah, Game slot rtp live
              tertinggi tersebut adalah salah satu permainan yang dikembangkan
              oleh perusahaan playtech internasional.
            </p>
            <li style={{ textAlign: "inherit" }}>
              Microgaming (RTP Slot 94,48%)
            </li>
            <p>
              Microgaming berhasil menjadi situs judi online terbaik karena
              menyatukan antara permainan casino online dan slot online kedalam
              satu permainan. Dimana pola slot terbaik untuk mendapat jackpot
              hingga tema menarik selalu dihadirkan. Tidak hanya itu saja, Micro
              Gaming juga selalu bersedia membagikan info rtp slot gacor hari
              ini kepada semua pemain. Itulah sebabnya situs judi slot online
              ini juga memiliki penggemar setia yang tidak sedikit jumlahnya.
            </p>
            <li style={{ textAlign: "inherit" }}>CQ9 (RTP Slot 94,23%)</li>
            <p>
              CQ9 Gaming selalu menarik untuk dipilih karena beragam fasilitas
              terbaik yang disediakan, Salah satunya RTP Live Slot. Mekanisme
              HTML5 selalu menjadi andalan utama agen judi slot CQ9 ketika
              mengembangkan permainan game slot gacor terbaru. Tidak
              mengherankan nama game slot cq9 gaming juga selalu masuk kedalam
              daftar situs slot yang ada rtp nya di forum diskusi manapun.
            </p>
            <li style={{ textAlign: "inherit" }}>
              YGGDrasil (RTP Slot 94,05%)
            </li>
            <p>
              YGGDrasil slot online terbaik yang dikenal sebagai penyedia game
              slot gacor terlengkap hari ini. Bahkan dalam kurun waktu singkat
              saja, YGG Drasil Slot selalu berhasil membuat pecinta judi slot
              uang asli terpukau dengan mesin slot terbaik yang dirilis.
              Keunggulan utama slot ygg drasil yang jarang dimiliki oleh agen
              slot online pada umumnya yaitu selalu merilis permainan judi game
              slot terbaru secara rutin.
            </p>
            <li style={{ textAlign: "inherit" }}>
              Top Trend Gaming (RTP Slot 93,37%)
            </li>
            <p>
              Top Trend Gaming memiliki reputasi yang mulai dipercaya oleh
              pecinta judi slot online di seluruh dunia. Setiap game slot online
              yang di rilis oleh TTG Slot ini cukup menarik. Dengan menawarkan
              payline dan pola slot kombinasi menang jackpot yang tidak rumit.
              Tentu semua penggemar game judi slot tertarik untuk menjajal
              keberuntungan mereka pada salah satu situs slot rtp live tertinggi
              ini.
            </p>
            <li style={{ textAlign: "inherit" }}>
              Flow Gaming (RTP Slot 93,22%)
            </li>
            <p>
              Flow Gaming situs judi slot deposit pulsa tanpa potongan yang
              wajib kalian pertimbangkan. Pasalnya tidak hanya slot rtp live
              saja yang disediakan untuk pemain, Slotmania juga bisa memenangkan
              sejumlah bonus menarik yang dihadirkan oleh agen slot online
              terpercaya di Indonesia yang satu ini.
            </p>
            <li style={{ textAlign: "inherit" }}>
              Play'n GO (RTP Slot 93,11%)
            </li>
            <p>
              Play'n GO game slot online dengan jackpot terbesar yang pantang
              untuk dilewatkan. Dengan rtp slot tertinggi hari ini yang tidak
              kalah dibandingkan lainnya. Para pemain ditawarkan keunikan dan
              kenyamanan bermain game slot menggunakan uang asli. Bahkan demo
              slot gratis yang dirilis oleh play'n go selalu mirip versi asli.
            </p>
            <li style={{ textAlign: "inherit" }}>
              Real Time Gaming / RTG (RTP Slot 92,68%)
            </li>
            <p>
              Real Time Gaming atau RTG Slot memang bukanlah menjadi situs judi
              slot rtp live tertinggi diantara beberapa pesaingnya. Namun
              demikian, Jangan menganggap remeh slot online yang satu ini.
              Pasalnya real time gaming selalu inovatif dalam mengembangkan game
              slot terbaik mereka sehingga wajar saja jika mereka selalu masuk
              kedalam jajaran daftar situs judi slot online terpercaya dan
              terbaik di Indonesia.
            </p>
          </ol>
          <h3>
            Mengungkap Rahasia Slot Gacor Gampang Maxwin Pragmatic Play: RTP
            Live Slot Hari Ini di Situs Slot Online Terpercaya di Indonesia
          </h3>
          <p>
            Rahasia RTP Live Slot Pragmatic terkini, sekarang tersedia secara
            gratis untuk para bettor melalui situs slot online terpercaya di
            Indonesia. Para penggemar game slot online berbasis uang asli
            sekarang dapat memeriksa semua RTP Live Slot Pragmatic teratas, yang
            semakin mempermudah pencarian mereka untuk Slot Gacor Gampang Maxwin
            Pragmatic Play yang mudah dimenangkan.
          </p>
          <p>
            Pragmatic Play, provider game slot yang popularitasnya terus
            meningkat, disediakan oleh hampir semua agen Pragmatic Play di
            Indonesia, menawarkan berbagai bonus menarik, cashback, dan
            keuntungan terbesar lainnya. Akan tetapi, jarang ada situs Slot
            Gacor Gampang Maxwin Pragmatic Play yang berani menampilkan RTP live
            slot tertinggi kepada pemainnya.
          </p>
          <p>
            Di situs game Slot Gacor Gampang Maxwin Pragmatic Play sendiri,
            pemain selalu mendapatkan bocoran RTP slot terkini. Sebagai salah
            satu situs slot terpercaya dan agen resmi Pragmatic Play di
            Indonesia, Slotmania memberikan kebebasan bagi pemain untuk meminta
            daftar RTP live slot melalui layanan pelanggan kami. Cukup klik live
            chat yang tersedia di halaman utama situs web kami, dan anda akan
            langsung terhubung dengan tim profesional yang siap memberikan info
            RTP slot live hari ini.
          </p>
          <p>
            Tips & Trik Memeriksa RTP Slot Online Hari Ini: Kata Kunci Populer
            di Google Ternyata, cara memeriksa RTP slot online adalah topik yang
            semakin populer di internet. Ini bukanlah fenomena yang aneh,
            mengingat banyak pemain yang kesulitan mencari situs Slot Gacor
            Gampang Maxwin Pragmatic Play. Hadirnya RTP live menjadi indikator
            utama dalam menentukan game slot online yang paling mudah
            dimenangkan.
          </p>
          <p>
            Sayangnya, banyak situs Slot Gacor Gampang Maxwin Pragmatic Play
            yang enggan memberikan bocoran RTP slot mudah menang kepada pemain.
            Alhasil, cara terbaik yang bisa dilakukan oleh pemain adalah dengan
            memeriksa info RTP live slot hari ini. Namun, mencari situs slot
            yang menampilkan RTP nya tidaklah mudah, sehingga pemain mulai
            mencari bagaimana cara memeriksa dan menghitung RTP live hari ini.
          </p>
          <p>
            Penguasaan berbagai aspek penting dalam permainan slot online,
            termasuk pengalaman bermain, adalah kunci untuk melakukan
            perhitungan ini. Meski bettor bisa mencari tahu cara memeriksa RTP
            slot online hari ini melalui mesin pencari Google, sebenarnya tidak
            perlu melakukan hal tersebut karena anda mencari ini semua di
            website{" "}
            <a href="http://idr45b.com/" target="_blank">
              idr45.nexus
            </a>
          </p>
        </div>
      </div>
      <div className="copyright-container container-slider">
        <div className="footer-contact">
          <a
            href="https://api.whatsapp.com/send?phone=6281264594807"
            target="_blank"
          >
            <amp-img
              src="../static/template/logo-whatsapp.png"
              width="30"
              height="30"
              layout="fixed"
              alt="WhatsApp IDR45"
            ></amp-img>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100093515358015"
            target="_blank"
          >
            <amp-img
              src="../static/template/facebook-contact-footer.png"
              width="30"
              height="30"
              layout="fixed"
              alt="Facebook IDR45"
            ></amp-img>
          </a>
          <a href="https://direct.lc.chat/15613281/" target="_blank">
            <amp-img
              src="../static/template/livechat-contact-footer.png"
              width="30"
              height="30"
              layout="fixed"
              alt="LiveChat IDR45"
            ></amp-img>
          </a>
        </div>
        <div className="copyright">
          <a
            className="copyright-text"
            href="https://idr45b.com/"
            target="_blank"
          >
            COPYRIGHT ©2023. All rights reserved to IDR45
          </a>
        </div>
      </div>
      <style jsx>{`
        .content-container {
          width: 100%;
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
        .hero-wrapper-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1168px;
          margin: 0 auto;
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
        .content-context {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 1168px;
          margin: 0 auto;
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
        .button-99 {
          background: linear-gradient(#3c3c3c,#000000)
          border: none;
          border-radius: 6px;
        }
        .list-btn-join {
            margin: auto 0;
            text-align: -webkit-center;
            max-width: 1168px;
            margin: 0 auto;
            background: #fff;
            width: 95%;
            padding: 40px;
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
            width: 24%;
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
            transform: translateX(0.2em) rotate(45deg) scale(1.1);
        }

        .button-47:hover span {
            transform: translateX(0.7em);
        }

        .button-47:active {
            transform: scale(0.95);
        }

        @keyframes fly-1 {
            from {
                transform: translateY(0.1em);
            }

            to {
                transform: translateY(-0.1em);
            }
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
        .container-seo-2 {
          max-width: 1168px;
          margin: 0 auto;
          padding-bottom: 40px;
          color: #fff;
          font-size: 24pt;
          text-shadow: 0 0 #000;
          line-height: 1.5;
          padding: 20px 0px 10px 0px;
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
        .container-seo-2 p {
          line-height: 1.5;
          margin-top: 10px;
          margin-bottom: 10px;
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
        .copyright-container {
          bottom: 0px;
          position: relative;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-content: flex-start;
          justify-content: space-evenly;
          align-items: center;
          font-size: 10pt;
          background: #821212;
          padding: 10px;
          background-image: url(../static/template/nav-lines.png);
        }
        .footer-contact {
          padding-top: 10px;
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

        @media screen and (max-width: 768px) {
          .slot {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
           .button-47 {
                width: 80%;
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
            padding-bottom: 0px;
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
  );
};

export default Content;
