import{s as a,p as i,a as o,j as n,T as t,V as e}from"./index.9bf647e9.js";const c=a.div`
  width: 100%;
  position: relative;
  padding-bottom: ${i(80)};
`,l=a.div`
  width: 100%;
  img {
    width: 100%;
    height: ${i(200)};
  }
`,r=a.div`
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
`,s=a.div`
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
`,d=a.ul`
  width: 90%;
  height: ${i(424)};
  background: #fff;
  margin-top: ${i(180)};
  margin-left: auto;
  margin-right: auto;
  border-radius: ${i(10)};
  li {
    position: relative;
    height: ${i(52)};
    display: flex;
    line-height: ${i(50)};
    border-bottom: ${i(1)} solid rgba(50, 50, 50, 0.10);
    i {
      margin-left: ${i(6)};
      margin-right: ${i(6)};
      padding: ${i(2)};
      font-size: ${i(20)};
    }
    span {
      font-family: "宋体";
      font-size: ${i(16)};
      padding: ${i(2)};
      font-weight: bold;
      &.yue {
        position: absolute;
        right: ${i(42)};
        color: gray;
      }
    }
    >i:last-child {
      position: absolute;
      right: ${i(10)};
      color: gray;
      font-weight: bold;
    }
  }
  >li:last-child {
    border-bottom: none;
  }
`,u=""+new URL("tustin.5a13cdd9.png",import.meta.url).href,g=()=>o(c,{children:[n(l,{children:n("img",{src:u})}),o(r,{children:[n("h2",{children:"Hey, \u9EC4\u5BB6\u6797"}),n("span",{children:"\u8BF4\u7231\u8D81\u73B0\u5728\uFF0C\u5C31\u662F\u9ED1\u51E4\u68A8"})]}),o(s,{children:[n("div",{className:"tx",children:n("img",{src:t})}),o("div",{className:"vip",children:[n("h2",{children:"\u5854\u5854\u4F1A\u5458"}),n("span",{children:"Lv1"})]}),o("div",{className:"info",children:[o("div",{children:[n("span",{children:"\u79EF\u5206"}),n("p",{children:"19"})]}),o("div",{children:[n("span",{children:"\u4F18\u60E0\u5238"}),n("p",{children:"3"})]}),o("div",{children:[n("span",{children:"\u4F1A\u5458\u7801"}),n("p",{children:n("img",{src:e})})]})]})]}),o(d,{children:[o("li",{children:[n("i",{className:"iconfont icon-zhanghuyue"}),n("span",{children:"\u8D26\u6237\u4F59\u989D"}),n("span",{className:"yue",children:"81\u5143"}),n("i",{className:"iconfont icon-xiangyoujiantou"})]}),o("li",{children:[n("i",{className:"iconfont icon-lipinka"}),n("span",{children:"\u793C\u54C1\u5361"}),n("i",{className:"iconfont icon-xiangyoujiantou"})]}),o("li",{children:[n("i",{className:"iconfont icon-gouwuche"}),n("span",{children:"\u8D2D\u7269\u8F66"}),n("i",{className:"iconfont icon-xiangyoujiantou"})]}),o("li",{children:[n("i",{className:"iconfont icon-dingdanguanli"}),n("span",{children:"\u8BA2\u5355\u7BA1\u7406"}),n("i",{className:"iconfont icon-xiangyoujiantou"})]}),o("li",{children:[n("i",{className:"iconfont icon-duihuan"}),n("span",{children:"\u56E2\u8D2D\u5151\u6362"}),n("i",{className:"iconfont icon-xiangyoujiantou"})]}),o("li",{children:[n("i",{className:"iconfont icon-renwu"}),n("span",{children:"\u4EFB\u52A1\u4E13\u533A"}),n("i",{className:"iconfont icon-xiangyoujiantou"})]}),o("li",{children:[n("i",{className:"iconfont icon-gerenzhongxin"}),n("span",{children:"\u4F1A\u5458\u8D44\u6599"}),n("i",{className:"iconfont icon-xiangyoujiantou"})]}),o("li",{children:[n("i",{className:"iconfont icon-saoyisao"}),n("span",{children:"\u626B\u4E00\u626B"}),n("i",{className:"iconfont icon-xiangyoujiantou"})]})]})]});export{g as default};
