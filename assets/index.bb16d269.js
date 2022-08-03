import{s as u,p as t,r as l,a as n,j as e,F as a}from"./index.40a748db.js";const h=u.div`
  width: 100%;
`,p=u.div`
  height: ${t(60)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 999;
  ul {
    width: 100%;
    display: flex;
    li {
      position: relative;
      width: 50%;
      text-align: center;
      color: gray;
      &.active{
        color: #000;
        font-weight: bold;
      }
      &.active::after {
        content: '';
        position: absolute;
        left: 39%;
        bottom: ${t(1)};
        width: 22%;
        height: ${t(4)};
        border-radius: ${t(2)};
        background-color: red;
      }
      span {
        padding: ${t(2)};
        line-height: ${t(60)};
        font-size: ${t(18)};
      }
    }
  }
`,g=u.div`
  text-align: center;
  margin-top: 100px;
`,F=()=>{const[r,o]=l.exports.useState("\u5F53\u524D\u8BA2\u5355"),i=d=>{o(d)},s=()=>e(a,{children:"\u5F53\u524D\u8BA2\u5355"}),c=()=>e(a,{children:"\u5386\u53F2\u8BA2\u5355"});return n(h,{children:[e(p,{children:n("ul",{children:[e("li",{className:r=="\u5F53\u524D\u8BA2\u5355"?"active":"",onClick:()=>i("\u5F53\u524D\u8BA2\u5355"),children:e("span",{children:"\u5F53\u524D\u8BA2\u5355"})}),e("li",{className:r=="\u5386\u53F2\u8BA2\u5355"?"active":"",onClick:()=>i("\u5386\u53F2\u8BA2\u5355"),children:e("span",{children:"\u5386\u53F2\u8BA2\u5355"})})]})}),e(g,{children:r=="\u5F53\u524D\u8BA2\u5355"?s():c()})]})};export{F as default};
