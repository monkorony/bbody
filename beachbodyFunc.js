function changeHeader() {
  const imgHeader = document.querySelector("img.helper-image");
  const blockText = document.getElementsByClassName("of-hero__body-inner");
  const newImg =
    "https://cdn.shopify.com/s/files/1/0028/3407/1622/files/01-hero-d_900x.png?v=1554159994";
  imgHeader.src = newImg;
  const imgCssStr =
    "position: absolute;max-width: unset;height: 100%;width: unset;right: -85px;bottom:0";

  imgHeader.srcset = "";
  imgHeader.style.cssText = imgCssStr;
  document.querySelector(".of-hero__bg-mobile").style.height = "400px";

  blockText[1].innerHTML =
    '<div class="of-block-text of-block-text_large" style="background-color:transparent;position: relative;left:120px;bottom:48px;width:200px;"><h1 style="color:#fff;font-size: 20px;">The FREE 14-Day Results Plan</h1><div><ul style="margin: 15px 0 25px 15px;color: #fff;padding-left:15px;"><li class="hdr-li" style="margin: 0">Healthy Living</li><li class="hdr-li" style="margin: 0">Simple and fun!</li><li class="hdr-li" style="margin: 0"><span>Streamable</span></li></ul><p style="font-size:14px;"><strong>Lose up to 9lbs. in 14 Days - for Free\'</strong></p></div><div>';
  document
    .getElementById("hero-banner-sell-sell-page-openfit")
    .classList.remove("of-hero");
  document
    .getElementsByClassName("of-wide-width")[0]
    .classList.remove("of-hero");
}

changeHeader();
