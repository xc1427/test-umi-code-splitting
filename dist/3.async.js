(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "FNTg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./src/pages/index.css
var pages = __webpack_require__("EDuE");

// CONCATENATED MODULE: ./src/pages/store.tsx
/* harmony default export */ var store = ([{
  id: '1',
  name: 'Davido',
  country: 'Nigeria',
  genre: 'Afro-Pop',
  albums: '2'
}, {
  id: '2',
  name: 'AKA',
  country: 'South-Africa',
  genre: 'Hip-Hop',
  albums: '4'
}, {
  id: '3',
  name: 'Seyi Shay',
  country: 'Nigeria',
  genre: 'R&B',
  albums: '2'
}, {
  id: '4',
  name: 'Sauti Sol',
  country: 'Kenya',
  genre: 'Soul',
  albums: '3'
}]);
// CONCATENATED MODULE: ./src/pages/Artists.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Artists; });



function Artists() {
  return external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, external_window_React_default.a.createElement("h1", null, "MTV Base Headline Artists 2019"), store.map(artist => {
    // tslint:disable-next-line: jsx-no-multiline-js
    return external_window_React_default.a.createElement("div", {
      id: "card-body",
      key: artist.id
    }, external_window_React_default.a.createElement("div", {
      className: "card"
    }, external_window_React_default.a.createElement("h2", null, artist.name), external_window_React_default.a.createElement("p", null, "genre: ", artist.genre), external_window_React_default.a.createElement("p", null, "Albums released: ", artist.albums)));
  }));
}

/***/ })

}]);