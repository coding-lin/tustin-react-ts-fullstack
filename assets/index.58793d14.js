import{g as c,S as p,s as d,p as e,r,a as h,j as t,b as a,c as g}from"./index.57ab5e7f.js";const u=i=>({type:p,data:i}),f=()=>i=>{c().then(n=>{const s=u(n.data);i(s)})},m=d.div`
  width: 100%;
  margin-top: ${e(114)};
  height: ${e(130)};
  background: #fff;
  .slider-container {
    position: relative;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border-radius: ${e(14)};
    height: ${e(120)};
    overflow: hidden;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      bottom: ${e(6)};
    }
    span.swiper-pagination-bullet {
      width: ${e(10)};
      height: ${e(10)};
    }
    .swiper-pagination-bullet-active {
      background: #000;
    }
  }
`,$=i=>{const{bannersList2:n}=i,[s,l]=r.exports.useState(null);return r.exports.useEffect(()=>{if(n.length&&!s){let o=new h(".slider-container",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}});l(o)}},[n.length,s]),t(m,{children:a("div",{className:"slider-container",children:[t("div",{className:"swiper-wrapper",children:n.map(o=>t("div",{className:"swiper-slide",children:t("div",{className:"slider-nav",children:t("img",{src:o.imageUrl,width:"100%",height:"100%"})})},o.imageUrl))}),t("div",{className:"swiper-pagination"})]})})},w=r.exports.memo($),b=d.div`
  width: 100%;
`,v=d.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${e(60)};
  background: #fff;
  z-index: 999;
  .sousuo {
    input {
      width: 80%;
      margin-top: ${e(14)};
      margin-left: ${e(14)};
      padding-left: ${e(33)};
      font-size: ${e(14)};
      color: gray;
      height: ${e(32)};
      border: none;
      border-radius: ${e(16)};
      background: rgba(50, 50, 50, 0.1);
    }
    i {
      font-size: ${e(20)};
      position: absolute;
      left: ${e(22)};
      top: ${e(20)};
    }
  }
  .shop {
    display: flex;
    height: ${e(66)};
    background: #fff;
    h2 {
      height: ${e(22)};
      padding: ${e(2)};
      font-size: ${e(18)};
      font-weight: bold;
      margin-left: ${e(12)};
      margin-top: ${e(10)};
    }
    i {
      height: ${e(22)};
      padding: ${e(2)};
      margin-top: ${e(12)};
      font-size: ${e(16)};
      font-weight: bold;
    }
  }
`,x=i=>{const{bannersList2:n}=i;console.log(n);const{getBannerData2Dispatch:s}=i;return r.exports.useEffect(()=>{s()},[]),a(b,{children:[a(v,{children:[a("div",{className:"sousuo",children:[t("input",{type:"text",placeholder:"\u641C\u7D22\u5546\u54C1"}),t("i",{className:"iconfont icon-sousuo"})]}),a("div",{className:"shop",children:[t("h2",{children:"\u5357\u660C\u5E02\u4E1C\u534E\u7406\u5DE5\u5927\u5B66\u5E97"}),t("i",{className:"iconfont icon-xiangyoujiantou"})]}),t("div",{})]}),t(w,{bannersList2:n})]})},S=i=>({bannersList2:i.food.bannersList2}),N=i=>({getBannerData2Dispatch(){i(f())}}),E=g(S,N)(x);export{E as default};
