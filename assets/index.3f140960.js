import{s as n,p as i,a as e,j as t,T as r,V as d}from"./index.0e01b61d.js";const o=n.div`
  width: 100%;
  position: relative;
`,h=n.div`
  width: 100%;
  img {
    width: 100%;
    height: ${i(200)};
  }
`,a=n.div`
  width: 100%;
  height: ${i(82)};
  background: rgba(50, 50, 50, 0.1);
  color: #fff;
  position: absolute;
  top: ${i(118)};
  h2 {
    font-size: ${i(20)};
    margin-left: ${i(20)};
    margin-top: ${i(8)};
    padding: ${i(1)};
  }
  span {
    margin-left: ${i(20)};
    padding: ${i(2)};
    font-size: ${i(13)};
  }
`,l=n.div`
  width: 90%;
  height: ${i(180)};
  position: absolute;
  border-radius: ${i(10)};
  background: #fff;
  top: ${i(182)};
  left: 5%;
  .tx {
    img {
      position: absolute;
      width: ${i(60)};
      height: ${i(60)};
      border-radius: 50%;
      top: ${i(-24)};
      right: ${i(22)};
    }
  }
  .vip {
    margin: ${i(20)};
    display: flex;
    h2 {
      font-size: ${i(16)};
      font-weight: 600;
      padding: ${i(4)};
    }
    span {
      width: ${i(30)};
      height: ${i(20)};
      line-height: ${i(20)};
      text-align: center;
      font-size: ${i(14)};
      font-weight: bold;
      color: #fff;
      border-radius: ${i(2)};
      background: rgba(50, 50, 50, 0.2);
      padding: ${i(2)} ${i(8)};
    }
  }
  .info {
    display: flex;
    div {
      width: 30%;
      height: ${i(116)};
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      span {
        margin-bottom: ${i(15)};
        font-size: ${i(15)};
        padding: ${i(2)};
        color: gray;
      }
      p {
        height: ${i(34)};
        font-size: ${i(26)};
        line-height: ${i(34)};
        font-weight: 600;
      }
      img {
        width: ${i(38)};
        height: ${i(34)};
      }
    }
    >div:first-child::after {
      content: "";
      left: 33%;
      position: absolute;
      background-color: rgba(50, 50, 50, 0.1);
      width: ${i(1)};
      height: ${i(60)};
    }
    >div:nth-child(2)::after {
      content: "";
      left: 66%;
      position: absolute;
      background-color: rgba(50, 50, 50, 0.1);
      width: ${i(1)};
      height: ${i(60)};
    }
  }
`,s=n.ul`
  width: 90%;
  background: #fff;
`,c=""+new URL("tustin.5a13cdd9.png",import.meta.url).href,g=()=>e(o,{children:[t(h,{children:t("img",{src:c})}),e(a,{children:[t("h2",{children:"Hey, \u9EC4\u5BB6\u6797"}),t("span",{children:"\u8BF4\u7231\u8D81\u73B0\u5728\uFF0C\u5C31\u662F\u9ED1\u51E4\u68A8"})]}),e(l,{children:[t("div",{className:"tx",children:t("img",{src:r})}),e("div",{className:"vip",children:[t("h2",{children:"\u5854\u5854\u4F1A\u5458"}),t("span",{children:"Lv1"})]}),e("div",{className:"info",children:[e("div",{children:[t("span",{children:"\u79EF\u5206"}),t("p",{children:"19"})]}),e("div",{children:[t("span",{children:"\u4F18\u60E0\u5238"}),t("p",{children:"3"})]}),e("div",{children:[t("span",{children:"\u4F1A\u5458\u7801"}),t("p",{children:t("img",{src:d})})]})]})]}),e(s,{children:[t("li",{}),t("li",{}),t("li",{}),t("li",{}),t("li",{}),t("li",{}),t("li",{}),t("li",{})]})]});export{g as default};
