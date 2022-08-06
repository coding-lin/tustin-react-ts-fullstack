import{s as e,p as i,j as o,a as t}from"./index.baf1bd7f.js";const n=e.div`
  width: 100%;
`,s=e.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${i(60)};
  background: #fff;
  z-index: 999;
  .sousuo {
    input {
      width: 80%;
      margin-top: ${i(14)};
      margin-left: ${i(14)};
      padding-left: ${i(33)};
      font-size: ${i(14)};
      color: gray;
      height: ${i(32)};
      border: none;
      border-radius: ${i(16)};
      background: rgba(50, 50, 50, 0.1);
    }
    i {
      font-size: ${i(20)};
      position: absolute;
      left: ${i(22)};
      top: ${i(20)};
    }
  }
  .shop {
    display: flex;
    height: ${i(66)};
    background: #fff;
    h2 {
      height: ${i(22)};
      padding: ${i(2)};
      font-size: ${i(18)};
      font-weight: bold;
      margin-left: ${i(12)};
      margin-top: ${i(10)};
    }
    i {
      height: ${i(22)};
      padding: ${i(2)};
      margin-top: ${i(12)};
      font-size: ${i(16)};
      font-weight: bold;
    }
  }
`,d=()=>o(n,{children:t(s,{children:[t("div",{className:"sousuo",children:[o("input",{type:"text",placeholder:"\u641C\u7D22\u5546\u54C1"}),o("i",{className:"iconfont icon-sousuo"})]}),t("div",{className:"shop",children:[o("h2",{children:"\u5357\u660C\u5E02\u4E1C\u534E\u7406\u5DE5\u5927\u5B66\u5E97"}),o("i",{className:"iconfont icon-xiangyoujiantou"})]}),o("div",{})]})});export{d as default};
