/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./src/components/nav/index.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./src/components/nav/index.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media only screen and (max-width: 481px) {\\n  .nav_nav__VzNfn {\\n    display: none;\\n  }\\n}\\n.nav_nav_mobMenu__cuPD3, .nav_nav_footer__MP6mQ {\\n  height: -moz-max-content;\\n  height: max-content;\\n}\\n@media only screen and (max-width: 481px) {\\n  .nav_nav_mobMenu__cuPD3, .nav_nav_footer__MP6mQ {\\n    display: block;\\n  }\\n}\\n\\n.nav_navList__1OnjZ {\\n  display: flex;\\n  -moz-column-gap: 40px;\\n       column-gap: 40px;\\n}\\n@media only screen and (max-width: 481px) {\\n  .nav_navList__1OnjZ {\\n    flex-direction: column;\\n    row-gap: 29px;\\n  }\\n  .nav_navList_footer__d5Moq {\\n    row-gap: 20px;\\n  }\\n}\\n.nav_navList__item__KcjEi {\\n  transition: all;\\n}\\n.nav_navList__item__KcjEi:hover {\\n  text-shadow: 0px 0px 20px #FFF;\\n}\\n.nav_navList__item_mobMenu__xWhhc {\\n  font-size: 24px;\\n  font-weight: 500;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/mixins.scss\",\"webpack://src/components/nav/index.module.scss\"],\"names\":[],\"mappings\":\"AAcI;ECZJ;IAEI,aAAA;EADF;AACF;AAGE;EACE,wBAAA;EAAA,mBAAA;AADJ;ADOI;ECPF;IAII,cAAA;EAAJ;AACF;;AAIA;EACE,aAAA;EACA,qBAAA;OAAA,gBAAA;AADF;ADHI;ECEJ;IAKI,sBAAA;IACA,aAAA;EAAF;EAEE;IACE,aAAA;EAAJ;AACF;AAGE;EACE,eAAA;AADJ;AAEI;EACE,8BAAA;AAAN;AAEI;EACE,eAAA;EACA,gBAAA;AAAN\",\"sourcesContent\":[\"@mixin devices($breakpoint) {\\r\\n  @if $breakpoint == smallDesk {\\r\\n    @media only screen and (max-width: 1000px) {\\r\\n      @content;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @if $breakpoint == tablet {\\r\\n    @media only screen and (max-width: 680px) {\\r\\n      @content;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @if $breakpoint == mobile {\\r\\n    @media only screen and (max-width: 481px) {\\r\\n      @content;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin scrollBar {\\r\\n  scrollbar-width: thin;\\r\\n  scrollbar-color: #FBFBFB #041028;\\r\\n  scrollbar-gutter: auto;\\r\\n\\r\\n  &::-webkit-scrollbar {\\r\\n    margin-right: 4px;\\r\\n    background: #041028;\\r\\n    width: 3px;\\r\\n    height: 3px;\\r\\n  }\\r\\n\\r\\n  &::-webkit-scrollbar-thumb {\\r\\n    background-color: #FBFBFB;\\r\\n    border-radius: 17px;\\r\\n    width: 3px;\\r\\n    height: 3px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin mainTitle {\\r\\n  font-size: 50px;\\r\\n  font-weight: 700;\\r\\n  line-height: normal;\\r\\n\\r\\n  @include devices(tablet) {\\r\\n    font-size: 30px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin blockTitle {\\r\\n  font-size: 36px;\\r\\n  font-weight: 700;\\r\\n  line-height: normal;\\r\\n\\r\\n  @include devices(tablet) {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin middleTitle {\\r\\n\\r\\n  @include devices(tablet) {\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin bodyText {\\r\\n  font-size: 20px;\\r\\n  font-weight: 400;\\r\\n  line-height: normal;\\r\\n\\r\\n  @include devices(tablet) {\\r\\n    font-size: 16px;\\r\\n    line-height: 18px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin nonSelect {\\r\\n  -webkit-user-select: none; /* Safari */\\r\\n  -moz-user-select: none; /* Old versions of Firefox */\\r\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\r\\n  user-select: none; /* Chrome, Edge, Opera and Firefox */\\r\\n}\\r\\n\\r\\n@mixin border($position) {\\r\\n  @if $position == 'bottom' {\\r\\n    border-bottom: 1px solid;\\r\\n  }\\r\\n\\r\\n  @if $position == 'top' {\\r\\n    border-top: 1px solid;\\r\\n  }\\r\\n\\r\\n  @if $position == 'full' {\\r\\n    border: 1px solid;\\r\\n  }\\r\\n\\r\\n  border-image-source: linear-gradient(96.56deg, #EF9CDA 0%, #121A6F 61.98%, #89A1EF 100%);\\r\\n  border-image-slice: 1; /* Slice the image into 9 equal parts */\\r\\n  border-image-width: 1; /* Set the width of the border */\\r\\n  border-image-repeat: stretch; /* Stretch the image to fill the border */\\r\\n}\\r\\n\\r\\n@mixin borderRounded($border-radius) {\\r\\n  &::after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    z-index: 0;\\r\\n    top: -1px;\\r\\n    right: -1px;\\r\\n    bottom: -1px;\\r\\n    left: -1px;\\r\\n    border-radius: $border-radius;\\r\\n    background-image: linear-gradient(\\r\\n      96.56deg,\\r\\n      #EF9CDA 0%,\\r\\n      #121A6F 61.98%,\\r\\n      #89A1EF 100%\\r\\n    );\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin circleBackground {\\r\\n  position: absolute;\\r\\n  z-index: 0;\\r\\n  width: 707px;\\r\\n  height: 707px;\\r\\n  border-radius: 50%;\\r\\n  border: 1px solid rgba(245, 245, 245, 0.11);\\r\\n\\r\\n  @include devices(tablet) {\\r\\n    width: 517.536px;\\r\\n    height: 517.536px;\\r\\n  }\\r\\n}\",\"@use \\\"src/styles/mixins.scss\\\" as mixins;\\r\\n\\r\\n.nav {\\r\\n  @include mixins.devices(mobile) {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  &_mobMenu, &_footer {\\r\\n    height: max-content;\\r\\n\\r\\n    @include mixins.devices(mobile) {\\r\\n      display: block;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\\r\\n.navList {\\r\\n  display: flex;\\r\\n  column-gap: 40px;\\r\\n\\r\\n  @include mixins.devices(mobile) {\\r\\n    flex-direction: column;\\r\\n    row-gap: 29px;\\r\\n\\r\\n    &_footer {\\r\\n      row-gap: 20px;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  &__item {\\r\\n    transition: all ;\\r\\n    &:hover {\\r\\n      text-shadow: 0px 0px 20px #FFF;\\r\\n    }\\r\\n    &_mobMenu {\\r\\n      font-size: 24px;\\r\\n      font-weight: 500;\\r\\n    }\\r\\n  }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"nav\": \"nav_nav__VzNfn\",\n\t\"nav_mobMenu\": \"nav_nav_mobMenu__cuPD3\",\n\t\"nav_footer\": \"nav_nav_footer__MP6mQ\",\n\t\"navList\": \"nav_navList__1OnjZ\",\n\t\"navList_footer\": \"nav_navList_footer__d5Moq\",\n\t\"navList__item\": \"nav_navList__item__KcjEi\",\n\t\"navList__item_mobMenu\": \"nav_navList__item_mobMenu__xWhhc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3NyYy9jb21wb25lbnRzL25hdi9pbmRleC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EscUZBQXFGLHFCQUFxQixvQkFBb0IsS0FBSyxHQUFHLG1EQUFtRCw2QkFBNkIsd0JBQXdCLEdBQUcsNkNBQTZDLHFEQUFxRCxxQkFBcUIsS0FBSyxHQUFHLHlCQUF5QixrQkFBa0IsMEJBQTBCLDBCQUEwQixHQUFHLDZDQUE2Qyx5QkFBeUIsNkJBQTZCLG9CQUFvQixLQUFLLGdDQUFnQyxvQkFBb0IsS0FBSyxHQUFHLDZCQUE2QixvQkFBb0IsR0FBRyxtQ0FBbUMsbUNBQW1DLEdBQUcscUNBQXFDLG9CQUFvQixxQkFBcUIsR0FBRyxPQUFPLHdJQUF3SSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxzREFBc0Qsb0NBQW9DLG9EQUFvRCxtQkFBbUIsU0FBUyxPQUFPLHFDQUFxQyxtREFBbUQsbUJBQW1CLFNBQVMsT0FBTyxxQ0FBcUMsbURBQW1ELG1CQUFtQixTQUFTLE9BQU8sS0FBSywwQkFBMEIsNEJBQTRCLHVDQUF1Qyw2QkFBNkIsZ0NBQWdDLDBCQUEwQiw0QkFBNEIsbUJBQW1CLG9CQUFvQixPQUFPLHNDQUFzQyxrQ0FBa0MsNEJBQTRCLG1CQUFtQixvQkFBb0IsT0FBTyxLQUFLLDBCQUEwQixzQkFBc0IsdUJBQXVCLDBCQUEwQixvQ0FBb0Msd0JBQXdCLE9BQU8sS0FBSywyQkFBMkIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsb0NBQW9DLHdCQUF3QixPQUFPLEtBQUssNEJBQTRCLG9DQUFvQyxPQUFPLEtBQUsseUJBQXlCLHNCQUFzQix1QkFBdUIsMEJBQTBCLG9DQUFvQyx3QkFBd0IsMEJBQTBCLE9BQU8sS0FBSywwQkFBMEIsaUNBQWlDLDBDQUEwQywwREFBMEQscURBQXFELDBDQUEwQyxrQ0FBa0MsaUNBQWlDLGlDQUFpQyxPQUFPLGtDQUFrQyw4QkFBOEIsT0FBTyxtQ0FBbUMsMEJBQTBCLE9BQU8sbUdBQW1HLDZCQUE2QixxRUFBcUUscUVBQXFFLCtDQUErQyw4Q0FBOEMsZ0JBQWdCLG9CQUFvQiwyQkFBMkIsbUJBQW1CLGtCQUFrQixvQkFBb0IscUJBQXFCLG1CQUFtQixzQ0FBc0MsMklBQTJJLE9BQU8sS0FBSyxpQ0FBaUMseUJBQXlCLGlCQUFpQixtQkFBbUIsb0JBQW9CLHlCQUF5QixrREFBa0Qsb0NBQW9DLHlCQUF5QiwwQkFBMEIsT0FBTyxLQUFLLDZDQUE2QyxjQUFjLHVDQUF1QyxzQkFBc0IsT0FBTywrQkFBK0IsNEJBQTRCLDZDQUE2Qyx5QkFBeUIsU0FBUyxPQUFPLEtBQUssa0JBQWtCLG9CQUFvQix1QkFBdUIsMkNBQTJDLCtCQUErQixzQkFBc0Isc0JBQXNCLHdCQUF3QixTQUFTLE9BQU8sbUJBQW1CLHlCQUF5QixpQkFBaUIseUNBQXlDLFNBQVMsbUJBQW1CLDBCQUEwQiwyQkFBMkIsU0FBUyxPQUFPLEtBQUssbUJBQW1CO0FBQ2x6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdi9pbmRleC5tb2R1bGUuc2Nzcz85YzFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MXB4KSB7XFxuICAubmF2X25hdl9fVnpOZm4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4ubmF2X25hdl9tb2JNZW51X19jdVBEMywgLm5hdl9uYXZfZm9vdGVyX19NUDZtUSB7XFxuICBoZWlnaHQ6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MXB4KSB7XFxuICAubmF2X25hdl9tb2JNZW51X19jdVBEMywgLm5hdl9uYXZfZm9vdGVyX19NUDZtUSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4ubmF2X25hdkxpc3RfXzFPbmpaIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWNvbHVtbi1nYXA6IDQwcHg7XFxuICAgICAgIGNvbHVtbi1nYXA6IDQwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgxcHgpIHtcXG4gIC5uYXZfbmF2TGlzdF9fMU9ualoge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAyOXB4O1xcbiAgfVxcbiAgLm5hdl9uYXZMaXN0X2Zvb3Rlcl9fZDVNb3Ege1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbiAgfVxcbn1cXG4ubmF2X25hdkxpc3RfX2l0ZW1fX0tjakVpIHtcXG4gIHRyYW5zaXRpb246IGFsbDtcXG59XFxuLm5hdl9uYXZMaXN0X19pdGVtX19LY2pFaTpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4ICNGRkY7XFxufVxcbi5uYXZfbmF2TGlzdF9faXRlbV9tb2JNZW51X194V2hoYyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9jb21wb25lbnRzL25hdi9pbmRleC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjSTtFQ1pKO0lBRUksYUFBQTtFQURGO0FBQ0Y7QUFHRTtFQUNFLHdCQUFBO0VBQUEsbUJBQUE7QUFESjtBRE9JO0VDUEY7SUFJSSxjQUFBO0VBQUo7QUFDRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FBREY7QURISTtFQ0VKO0lBS0ksc0JBQUE7SUFDQSxhQUFBO0VBQUY7RUFFRTtJQUNFLGFBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxlQUFBO0FBREo7QUFFSTtFQUNFLDhCQUFBO0FBQU47QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBkZXZpY2VzKCRicmVha3BvaW50KSB7XFxyXFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gc21hbGxEZXNrIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGlmICRicmVha3BvaW50ID09IHRhYmxldCB7XFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGlmICRicmVha3BvaW50ID09IG1vYmlsZSB7XFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgxcHgpIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc2Nyb2xsQmFyIHtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogI0ZCRkJGQiAjMDQxMDI4O1xcclxcbiAgc2Nyb2xsYmFyLWd1dHRlcjogYXV0bztcXHJcXG5cXHJcXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwNDEwMjg7XFxyXFxuICAgIHdpZHRoOiAzcHg7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcclxcbiAgICB3aWR0aDogM3B4O1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1haW5UaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGRldmljZXModGFibGV0KSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJsb2NrVGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBkZXZpY2VzKHRhYmxldCkge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtaWRkbGVUaXRsZSB7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBkZXZpY2VzKHRhYmxldCkge1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYm9keVRleHQge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBkZXZpY2VzKHRhYmxldCkge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbm9uU2VsZWN0IHtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJvcmRlcigkcG9zaXRpb24pIHtcXHJcXG4gIEBpZiAkcG9zaXRpb24gPT0gJ2JvdHRvbScge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaWYgJHBvc2l0aW9uID09ICd0b3AnIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGlmICRwb3NpdGlvbiA9PSAnZnVsbCcge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCg5Ni41NmRlZywgI0VGOUNEQSAwJSwgIzEyMUE2RiA2MS45OCUsICM4OUExRUYgMTAwJSk7XFxyXFxuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7IC8qIFNsaWNlIHRoZSBpbWFnZSBpbnRvIDkgZXF1YWwgcGFydHMgKi9cXHJcXG4gIGJvcmRlci1pbWFnZS13aWR0aDogMTsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgYm9yZGVyICovXFxyXFxuICBib3JkZXItaW1hZ2UtcmVwZWF0OiBzdHJldGNoOyAvKiBTdHJldGNoIHRoZSBpbWFnZSB0byBmaWxsIHRoZSBib3JkZXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJvcmRlclJvdW5kZWQoJGJvcmRlci1yYWRpdXMpIHtcXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgdG9wOiAtMXB4O1xcclxcbiAgICByaWdodDogLTFweDtcXHJcXG4gICAgYm90dG9tOiAtMXB4O1xcclxcbiAgICBsZWZ0OiAtMXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIDk2LjU2ZGVnLFxcclxcbiAgICAgICNFRjlDREEgMCUsXFxyXFxuICAgICAgIzEyMUE2RiA2MS45OCUsXFxyXFxuICAgICAgIzg5QTFFRiAxMDAlXFxyXFxuICAgICk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBjaXJjbGVCYWNrZ3JvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICB3aWR0aDogNzA3cHg7XFxyXFxuICBoZWlnaHQ6IDcwN3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjExKTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGRldmljZXModGFibGV0KSB7XFxyXFxuICAgIHdpZHRoOiA1MTcuNTM2cHg7XFxyXFxuICAgIGhlaWdodDogNTE3LjUzNnB4O1xcclxcbiAgfVxcclxcbn1cIixcIkB1c2UgXFxcInNyYy9zdHlsZXMvbWl4aW5zLnNjc3NcXFwiIGFzIG1peGlucztcXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIEBpbmNsdWRlIG1peGlucy5kZXZpY2VzKG1vYmlsZSkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9tb2JNZW51LCAmX2Zvb3RlciB7XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1peGlucy5kZXZpY2VzKG1vYmlsZSkge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5uYXZMaXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2x1bW4tZ2FwOiA0MHB4O1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWl4aW5zLmRldmljZXMobW9iaWxlKSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHJvdy1nYXA6IDI5cHg7XFxyXFxuXFxyXFxuICAgICZfZm9vdGVyIHtcXHJcXG4gICAgICByb3ctZ2FwOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjBweCAjRkZGO1xcclxcbiAgICB9XFxyXFxuICAgICZfbW9iTWVudSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibmF2XCI6IFwibmF2X25hdl9fVnpOZm5cIixcblx0XCJuYXZfbW9iTWVudVwiOiBcIm5hdl9uYXZfbW9iTWVudV9fY3VQRDNcIixcblx0XCJuYXZfZm9vdGVyXCI6IFwibmF2X25hdl9mb290ZXJfX01QNm1RXCIsXG5cdFwibmF2TGlzdFwiOiBcIm5hdl9uYXZMaXN0X18xT25qWlwiLFxuXHRcIm5hdkxpc3RfZm9vdGVyXCI6IFwibmF2X25hdkxpc3RfZm9vdGVyX19kNU1vcVwiLFxuXHRcIm5hdkxpc3RfX2l0ZW1cIjogXCJuYXZfbmF2TGlzdF9faXRlbV9fS2NqRWlcIixcblx0XCJuYXZMaXN0X19pdGVtX21vYk1lbnVcIjogXCJuYXZfbmF2TGlzdF9faXRlbV9tb2JNZW51X194V2hoY1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./src/components/nav/index.module.scss\n"));

/***/ })

});