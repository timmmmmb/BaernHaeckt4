(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <section class=\"social-media-section\">\r\n    <img class=\"social-media-icon\" src=\"\" alt=\"\">\r\n    <img class=\"social-media-icon\" src=\"\" alt=\"\">\r\n    <img class=\"social-media-icon\" src=\"\" alt=\"\">\r\n  </section>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n\r\n  <nav>\r\n    <div class=\"nav-element\" (click)=\"navigateTo('/')\">\r\n      <img class=\"logo\" src=\"assets/images/be-tourismus.png\" alt=\"be-tourismus\">\r\n    </div>\r\n    <div class=\"nav-element\" (click)=\"navigateTo('/regions')\">Regionen</div>\r\n    <div class=\"nav-element\" (click)=\"navigateTo('/offers')\">Angebote</div>\r\n    <div class=\"nav-element\" (click)=\"navigateTo('/login')\" id=\"userlink\">\r\n      <img class=\"user-icon\" src=\"/assets/icons/account.svg\" alt=\"\">\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\r\n<div class=\"sticker-container\">\r\n  <img class=\"sticker\" src=\"assets/images/sticker.png\">\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>\r\n\r\n<div class=\"main\">\r\n  <p class=\"sign\" align=\"center\">Sign in</p>\r\n  <section class=\"form1\">\r\n    <input class=\"un \" type=\"text\" align=\"center\" placeholder=\"E-Mail\" #email>\r\n    <input class=\"pass\" type=\"password\" align=\"center\" placeholder=\"Passwort\" #pass>\r\n    <button (click)=\"signIn(email.value, pass.value)\" class=\"submit\" align=\"center\">Sign in</button>\r\n    <p class=\"forgot\" align=\"center\" (click)=\"navigateTo('/register')\">Registrieren</p>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/offer/offer.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/offer/offer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"offer-cards\">\r\n\r\n      <img *ngIf=\"offer.category == 'Kultur'\" src=\"assets/icons/culture.svg\">\r\n      <img *ngIf=\"offer.category == 'Sport'\" src=\"assets/icons/sport.svg\">\r\n      <img *ngIf=\"offer.category == 'Transport'\" src=\"assets/icons/transport.svg\">\r\n    <h3>{{offer.name}}</h3>\r\n    <p>{{offer.description}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/offers/offers.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/offers/offers.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"offers\">\r\n  <app-offer *ngFor=\"let offer of region.offers\" [offer]=\"offer\"></app-offer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/qr-display/qr-display.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/qr-display/qr-display.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <ngx-qrcode\n    [elementType]=\"elementType\"\n    [value]=\"value\"\n    cssClass=\"aclass\"\n    errorCorrectionLevel=\"L\">\n  </ngx-qrcode>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/region-detail/region-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/region-detail/region-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-offers *ngIf=\"region\" [region]=\"region\"></app-offers>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/regions/regions.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/regions/regions.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"grid-container\">\r\n  <div class=\"regions\">\r\n    <div *ngFor=\"let region of regions\" id=\"{{region.name.toLowerCase()}}\" class=\"region-container\">\r\n      <div (click)=\"navigateTo('/region/' + region.name.toLowerCase())\">\r\n        <p class=\"region-name\">Region {{region.name}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>register works!</p>\r\n<div class=\"main\">\r\n  <p class=\"sign\" align=\"center\">Registrierung</p>\r\n  <section class=\"register\">\r\n    <input class=\"un \" type=\"text\" align=\"center\" placeholder=\"Vorname\" #firstname>\r\n    <input class=\"un \" type=\"text\" align=\"center\" placeholder=\"Nachname\" #lastname>\r\n    <input class=\"un \" type=\"text\" align=\"center\" placeholder=\"Geburtsdatum TT.MM.YYYY\" pattern=\"^\\s*(3[01]|[12][0-9]|0?[1-9])\\.(1[012]|0?[1-9])\\.((?:19|20)\\d{2})\\s*$\" #dateofbirth>\r\n    <input class=\"un \" type=\"text\" align=\"center\" placeholder=\"E-mail\" #email>\r\n    <input class=\"pass\" type=\"password\" align=\"center\" placeholder=\"Passwort\" #pass>\r\n    <button (click)=\"register(email.value, pass.value, firstname.value, lastname.value,dateofbirth.value)\" class=\"submit\" align=\"center\">Registrieren</button>\r\n  </section>\r\n\r\n  <div *ngIf=\"registerSucess\">\r\n    <p class=\"success\">Sie habe sich erfolgreich registriert und werden in wenigen Sekunden weitergeleitet!</p>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>user works!</p>\r\n\r\n<div class=\"profile\" *ngIf=\"displayProfile\">\r\n  <h2>Ihr Profil</h2>\r\n\r\n  <p>Vorname Name</p>\r\n  <p>Geburtsdatum</p>\r\n\r\n  <h2>Ihr Pass</h2>\r\n</div>\r\n\r\n<p *ngIf=\"notLoggedIn\">Bitte loggen Sie sich ein oder erstellen Sie ein kostenloses Login.</p>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/regions/regions.component */ "./src/app/components/regions/regions.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_region_detail_region_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/region-detail/region-detail.component */ "./src/app/components/region-detail/region-detail.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_qr_display_qr_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/qr-display/qr-display.component */ "./src/app/components/qr-display/qr-display.component.ts");











const routes = [
    { path: 'region/:region', component: _components_region_detail_region_detail_component__WEBPACK_IMPORTED_MODULE_7__["RegionDetailComponent"] },
    { path: 'regions', component: _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_3__["RegionsComponent"] },
    { path: 'offers', component: _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_5__["OffersComponent"] },
    { path: 'profile', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'qr-display', component: _components_qr_display_qr_display_component__WEBPACK_IMPORTED_MODULE_10__["QrDisplayComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'web-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.environment.ts":
/*!************************************!*\
  !*** ./src/app/app.environment.ts ***!
  \************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// export const environment = 'http://localhost:3333';
const environment = 'http://147.87.133.169:3333';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
/* harmony import */ var _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/regions/regions.component */ "./src/app/components/regions/regions.component.ts");
/* harmony import */ var _components_offer_offer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/offer/offer.component */ "./src/app/components/offer/offer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_region_detail_region_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/region-detail/region-detail.component */ "./src/app/components/region-detail/region-detail.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_regions_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/regions.service */ "./src/app/services/regions.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/offers.service */ "./src/app/services/offers.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_purchases_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/purchases.service */ "./src/app/services/purchases.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "./node_modules/@techiediaries/ngx-qrcode/fesm2015/techiediaries-ngx-qrcode.js");
/* harmony import */ var _components_qr_display_qr_display_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/qr-display/qr-display.component */ "./src/app/components/qr-display/qr-display.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_6__["OffersComponent"],
            _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_7__["RegionsComponent"],
            _components_offer_offer_component__WEBPACK_IMPORTED_MODULE_8__["OfferComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _components_region_detail_region_detail_component__WEBPACK_IMPORTED_MODULE_11__["RegionDetailComponent"],
            _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _components_qr_display_qr_display_component__WEBPACK_IMPORTED_MODULE_24__["QrDisplayComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_23__["NgxQRCodeModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_20__["StoreModule"].forRoot({ root: _store_app_reducer__WEBPACK_IMPORTED_MODULE_21__["appReducer"] }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_22__["StoreDevtoolsModule"].instrument(),
        ],
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _services_regions_service__WEBPACK_IMPORTED_MODULE_15__["RegionsService"], _services_offers_service__WEBPACK_IMPORTED_MODULE_16__["OffersService"], _services_products_service__WEBPACK_IMPORTED_MODULE_17__["ProductsService"], _services_purchases_service__WEBPACK_IMPORTED_MODULE_18__["PurchasesService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n  width: 175px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: rgba(255,255,255,0.7);\r\n  position: absolute;\r\n  width: 100vw;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.nav-element {\r\n  padding: 0 20px;\r\n  color:black;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.nav-element:visited {\r\n  color:black;\r\n}\r\n\r\n.nav-element:hover {\r\n  color: #c62c2c;\r\n  text-decoration: underline;\r\n}\r\n\r\n.user-icon {\r\n  width: 35px;\r\n  right: 20px;\r\n  position: absolute;\r\n}\r\n\r\n#userlink {\r\n  width: 40px;\r\n  height: 45px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0FBQ1I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICB3aWR0aDogMTc1cHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4ubmF2LWVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBjb2xvcjpibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm5hdi1lbGVtZW50OnZpc2l0ZWQge1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4ubmF2LWVsZW1lbnQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjYzYyYzJjO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICB3aWR0aDogMzVweDtcclxuICByaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiN1c2VybGluayB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateTo(url) {
        this.router.navigateByUrl(url);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  background-image: url('background.jpeg');\r\n  width: 100vw;\r\n  margin-left: -8px;\r\n  margin-top: 0;\r\n  top: 0;\r\n  position: absolute;\r\n  height: 100vh;\r\n  z-index: -1;\r\n}\r\n\r\n.sticker{\r\n  width: 50vw;\r\n  height: 38vw;\r\n  margin-top: 200px;\r\n  background-image: none}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUEwRDtFQUMxRCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGVnXCIpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW4tbGVmdDogLThweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnN0aWNrZXJ7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgaGVpZ2h0OiAzOHZ3O1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmV9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  background-color: #FFFFFF;\r\n  width: 400px;\r\n  height: 400px;\r\n  margin: 7em auto;\r\n  border-radius: 1.5em;\r\n  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.sign {\r\n  padding-top: 40px;\r\n  color: #b02418;\r\n  font-weight: bold;\r\n  font-size: 23px;\r\n}\r\n\r\n.un {\r\n  width: 76%;\r\n  color: rgb(38, 50, 56);\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  background: rgba(136, 126, 126, 0.04);\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  box-sizing: border-box;\r\n  border: 2px solid rgba(0, 0, 0, 0.02);\r\n  margin-bottom: 50px;\r\n  margin-left: 46px;\r\n  text-align: center;\r\n  margin-bottom: 27px;\r\n}\r\n\r\nform.form1 {\r\n  padding-top: 40px;\r\n}\r\n\r\n.pass {\r\n  width: 76%;\r\n  color: rgb(38, 50, 56);\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  background: rgba(136, 126, 126, 0.04);\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  box-sizing: border-box;\r\n  border: 2px solid rgba(0, 0, 0, 0.02);\r\n  margin-bottom: 50px;\r\n  margin-left: 46px;\r\n  text-align: center;\r\n  margin-bottom: 27px;\r\n}\r\n\r\n.un:focus, .pass:focus {\r\n  border: 2px solid rgba(0, 0, 0, 0.18) !important;\r\n\r\n}\r\n\r\n.submit {\r\n  cursor: pointer;\r\n  border-radius: 5em;\r\n  color: #fff;\r\n  background: linear-gradient(to right, #b02418, #fb6154);\r\n  border: 0;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  margin-left: 35%;\r\n  font-size: 13px;\r\n  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.forgot {\r\n  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);\r\n  color: #e7b7b9;\r\n  padding-top: 15px;\r\n}\r\n\r\na {\r\n  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);\r\n  color: #e7b7b9;\r\n  text-decoration: none\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .main {\r\n    border-radius: 0px;\r\n  }}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UsZ0RBQWdEOztBQUVsRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVEQUF1RDtFQUN2RCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgbWFyZ2luOiA3ZW0gYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxLjVlbTtcclxuICBib3gtc2hhZG93OiAwcHggMTFweCAzNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG59XHJcblxyXG4uc2lnbiB7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgY29sb3I6ICNiMDI0MTg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4udW4ge1xyXG4gIHdpZHRoOiA3NiU7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDU2KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTM2LCAxMjYsIDEyNiwgMC4wNCk7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbn1cclxuXHJcbmZvcm0uZm9ybTEge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucGFzcyB7XHJcbiAgd2lkdGg6IDc2JTtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgNTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEyNiwgMTI2LCAwLjA0KTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNDZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxufVxyXG5cclxuXHJcbi51bjpmb2N1cywgLnBhc3M6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xOCkgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1ZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjAyNDE4LCAjZmI2MTU0KTtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDExNywgMTE3LCAxMTcsIDAuMTIpO1xyXG4gIGNvbG9yOiAjZTdiN2I5O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSgxMTcsIDExNywgMTE3LCAwLjEyKTtcclxuICBjb2xvcjogI2U3YjdiOTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH19XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/user/user.actions */ "./src/app/store/user/user.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_user_user_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/user/user.reducer */ "./src/app/store/user/user.reducer.ts");







let LoginComponent = class LoginComponent {
    constructor(userService, store, router) {
        this.userService = userService;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.store.select(_store_user_user_reducer__WEBPACK_IMPORTED_MODULE_6__["selectUser"]).subscribe(user => {
            console.log(user);
            if (user.id) {
                this.navigateTo('/profile');
            }
        });
    }
    signIn(email, pass) {
        const userObj = {
            created: undefined,
            dateOfBirth: undefined,
            email: email,
            firstname: undefined,
            name: undefined,
            password: pass,
            id: undefined
        };
        this.userService.login(userObj).subscribe(user => {
            console.log(user);
            if (user) {
                this.store.dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateUser"](user));
                this.router.navigateByUrl('/');
            }
        });
    }
    navigateTo(url) {
        this.router.navigateByUrl(url);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/offer/offer.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/offer/offer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".offer-cards {\r\n  width: 30%;\r\n  border: 2px solid black;\r\n  padding: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vZmZlci9vZmZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vZmZlci9vZmZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmVyLWNhcmRzIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/offer/offer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/offer/offer.component.ts ***!
  \*****************************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OfferComponent = class OfferComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OfferComponent.prototype, "offer", void 0);
OfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer',
        template: __webpack_require__(/*! raw-loader!./offer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/offer/offer.component.html"),
        styles: [__webpack_require__(/*! ./offer.component.css */ "./src/app/components/offer/offer.component.css")]
    })
], OfferComponent);



/***/ }),

/***/ "./src/app/components/offers/offers.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/offers/offers.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".offers {\r\n  margin-top: 120px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vZmZlcnMvb2ZmZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29mZmVycy9vZmZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZlcnMge1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/offers/offers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/offers/offers.component.ts ***!
  \*******************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _services_regions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/regions.service */ "./src/app/services/regions.service.ts");




let OffersComponent = class OffersComponent {
    constructor(regionService, store) {
        this.regionService = regionService;
        this.store = store;
    }
    ngOnInit() {
    }
};
OffersComponent.ctorParameters = () => [
    { type: _services_regions_service__WEBPACK_IMPORTED_MODULE_3__["RegionsService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OffersComponent.prototype, "region", void 0);
OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: __webpack_require__(/*! raw-loader!./offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/offers/offers.component.html"),
        styles: [__webpack_require__(/*! ./offers.component.css */ "./src/app/components/offers/offers.component.css")]
    })
], OffersComponent);



/***/ }),

/***/ "./src/app/components/qr-display/qr-display.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/qr-display/qr-display.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXItZGlzcGxheS9xci1kaXNwbGF5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/qr-display/qr-display.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/qr-display/qr-display.component.ts ***!
  \***************************************************************/
/*! exports provided: QrDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrDisplayComponent", function() { return QrDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QrDisplayComponent = class QrDisplayComponent {
    constructor() {
        this.title = 'qr-display';
        this.elementType = 'url';
        this.value = 'Sat Sep 05 21:39:52 CEST 20206d00275d-a051-4b2e-b259-fd7fc168d0f0d82de43c-5bfd-49fe-8117-55de4a7ba0d7';
    }
};
QrDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qr-display',
        template: __webpack_require__(/*! raw-loader!./qr-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/qr-display/qr-display.component.html"),
        styles: [__webpack_require__(/*! ./qr-display.component.css */ "./src/app/components/qr-display/qr-display.component.css")]
    })
], QrDisplayComponent);



/***/ }),

/***/ "./src/app/components/region-detail/region-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/region-detail/region-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaW9uLWRldGFpbC9yZWdpb24tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/region-detail/region-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/region-detail/region-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionDetailComponent", function() { return RegionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_regions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/regions.service */ "./src/app/services/regions.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegionDetailComponent = class RegionDetailComponent {
    constructor(route, regionsService, store) {
        this.route = route;
        this.regionsService = regionsService;
        this.store = store;
    }
    ngOnInit() {
        console.log(this.route.snapshot.params.region);
        this.regionsService.getRegionByName(this.route.snapshot.params.region).subscribe((region) => {
            this.region = region[0];
        });
    }
};
RegionDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_regions_service__WEBPACK_IMPORTED_MODULE_2__["RegionsService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
RegionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-region-detail',
        template: __webpack_require__(/*! raw-loader!./region-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/region-detail/region-detail.component.html"),
        styles: [__webpack_require__(/*! ./region-detail.component.css */ "./src/app/components/region-detail/region-detail.component.css")]
    })
], RegionDetailComponent);



/***/ }),

/***/ "./src/app/components/regions/regions.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/regions/regions.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n  text-decoration: none;\r\n}\r\n.grid-container{\r\n  position: absolute;\r\n  width: 80vw;\r\n  left: 50%;\r\n  transform: translateX(-43%);\r\n}\r\n.regions{\r\n  margin-top: 15%;\r\n  display: grid;\r\n  grid-template-columns: 25% 25% 25%;\r\n  grid-template-rows: 150px 150px;\r\n  grid-column-gap: 2vw;\r\n  grid-row-gap: 15%;\r\n}\r\n.region-container{\r\n  background-color: dimgrey;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.region-container:hover {\r\n  transform: scale(1.1);\r\n  transition: all 0.5s ease;\r\n  cursor: pointer;\r\n}\r\n.region-name{\r\n  color: white;\r\n  text-align: right;\r\n  padding-right: 7px;\r\n  text-decoration: none;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px #66686a;\r\n}\r\n.region-name:hover{\r\n  color: #c62c2c;\r\n}\r\n#bern{\r\n  background-image: url('bern_city.jpg');\r\n  width: 100%;\r\n  height: auto;\r\n  background-size: cover;\r\n  background-size: 100% 100%;\r\n\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n#adelboden{\r\n  background-image: url('adelboden_lenk.jpg');\r\n  width: 100%;\r\n  height: auto;\r\n  background-size: cover;\r\n  background-size: 100% 100%;\r\n\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n#gstaad{\r\n  background-image: url('gstaad.jpg');\r\n  width: 100%;\r\n  height: auto;\r\n  background-size: cover;\r\n  background-size: 100% 100%;\r\n\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n#interlaken{\r\n  background-image: url('interlaken.jpg');\r\n  width: 100%;\r\n  height: auto;\r\n  background-size: cover;\r\n  background-size: 100% 100%;\r\n\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n#jungfrau{\r\n  background-image: url('jungfrau.jpg');\r\n  width: 100%;\r\n  height: auto;\r\n  background-size: cover;\r\n  background-size: 100% 100%;\r\n\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n#brienz{\r\n  background-image: url('brienz.jpeg');\r\n  width: 100%;\r\n  height: auto;\r\n  background-size: cover;\r\n  background-size: 100% 100%;\r\n\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n#jura{\r\n  background-image: url('jura.jpg');\r\n  width: 100%;\r\n  height: auto;\r\n  background-size: cover;\r\n  background-size: 100% 100%;\r\n\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpb25zL3JlZ2lvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxzQ0FBd0Q7RUFDeEQsV0FBVztFQUNYLFlBQVk7RUFJWixzQkFBc0I7RUFDdEIsMEJBQTBCOztFQUUxQiw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSwyQ0FBNkQ7RUFDN0QsV0FBVztFQUNYLFlBQVk7RUFJWixzQkFBc0I7RUFDdEIsMEJBQTBCOztFQUUxQiw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxtQ0FBcUQ7RUFDckQsV0FBVztFQUNYLFlBQVk7RUFJWixzQkFBc0I7RUFDdEIsMEJBQTBCOztFQUUxQiw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSx1Q0FBeUQ7RUFDekQsV0FBVztFQUNYLFlBQVk7RUFJWixzQkFBc0I7RUFDdEIsMEJBQTBCOztFQUUxQiw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxxQ0FBdUQ7RUFDdkQsV0FBVztFQUNYLFlBQVk7RUFJWixzQkFBc0I7RUFDdEIsMEJBQTBCOztFQUUxQiw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxvQ0FBc0Q7RUFDdEQsV0FBVztFQUNYLFlBQVk7RUFJWixzQkFBc0I7RUFDdEIsMEJBQTBCOztFQUUxQiw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxpQ0FBbUQ7RUFDbkQsV0FBVztFQUNYLFlBQVk7RUFJWixzQkFBc0I7RUFDdEIsMEJBQTBCOztFQUUxQiw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpb25zL3JlZ2lvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5ncmlkLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDMlKTtcclxufVxyXG4ucmVnaW9uc3tcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMTUwcHg7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAydnc7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxNSU7XHJcbn1cclxuXHJcbi5yZWdpb24tY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaW9uLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVnaW9uLW5hbWV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4ICM2NjY4NmE7XHJcbn1cclxuXHJcbi5yZWdpb24tbmFtZTpob3ZlcntcclxuICBjb2xvcjogI2M2MmMyYztcclxufVxyXG5cclxuI2Jlcm57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYmVybl9jaXR5LmpwZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5cclxuI2FkZWxib2RlbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9hZGVsYm9kZW5fbGVuay5qcGdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbiNnc3RhYWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvZ3N0YWFkLmpwZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5cclxuI2ludGVybGFrZW57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvaW50ZXJsYWtlbi5qcGdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbiNqdW5nZnJhdXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9qdW5nZnJhdS5qcGdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbiNicmllbnp7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYnJpZW56LmpwZWdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbiNqdXJhe1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2p1cmEuanBnXCIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/regions/regions.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/regions/regions.component.ts ***!
  \*********************************************************/
/*! exports provided: RegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsComponent", function() { return RegionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_regions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/regions.service */ "./src/app/services/regions.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _store_regions_regions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/regions/regions.actions */ "./src/app/store/regions/regions.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegionsComponent = class RegionsComponent {
    constructor(regionsService, router, store) {
        this.regionsService = regionsService;
        this.router = router;
        this.store = store;
        this.regions = [];
    }
    ngOnInit() {
        this.regionsService.getAllRegions().subscribe((regions) => {
            this.regions = regions;
            this.store.dispatch(new _store_regions_regions_actions__WEBPACK_IMPORTED_MODULE_4__["RegionsAddAll"](this.regions));
        });
    }
    navigateTo(url) {
        this.router.navigateByUrl(url);
    }
};
RegionsComponent.ctorParameters = () => [
    { type: _services_regions_service__WEBPACK_IMPORTED_MODULE_2__["RegionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
RegionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-regions',
        template: __webpack_require__(/*! raw-loader!./regions.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/regions/regions.component.html"),
        styles: [__webpack_require__(/*! ./regions.component.css */ "./src/app/components/regions/regions.component.css")]
    })
], RegionsComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  background-color: #FFFFFF;\r\n  width: 400px;\r\n  height: 550px;\r\n  margin: 7em auto;\r\n  border-radius: 1.5em;\r\n  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.sign {\r\n  padding-top: 40px;\r\n  color: #b02418;\r\n  font-weight: bold;\r\n  font-size: 23px;\r\n}\r\n\r\n.un {\r\n  width: 76%;\r\n  color: rgb(38, 50, 56);\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  background: rgba(136, 126, 126, 0.04);\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  box-sizing: border-box;\r\n  border: 2px solid rgba(0, 0, 0, 0.02);\r\n  margin-bottom: 50px;\r\n  margin-left: 46px;\r\n  text-align: center;\r\n  margin-bottom: 27px;\r\n}\r\n\r\n.dob{\r\n  width: 75%;\r\n  color: rgb(38, 50, 56);\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  padding: 9px 20px;\r\n  border: none;\r\n  margin-left: 43px;\r\n  text-align: center;\r\n}\r\n\r\nform.form1 {\r\n  padding-top: 40px;\r\n}\r\n\r\n.pass {\r\n  width: 76%;\r\n  color: rgb(38, 50, 56);\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  background: rgba(136, 126, 126, 0.04);\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  box-sizing: border-box;\r\n  border: 2px solid rgba(0, 0, 0, 0.02);\r\n  margin-bottom: 50px;\r\n  margin-left: 46px;\r\n  text-align: center;\r\n  margin-bottom: 27px;\r\n}\r\n\r\n.un:focus, .pass:focus {\r\n  border: 2px solid rgba(0, 0, 0, 0.18) !important;\r\n\r\n}\r\n\r\n.submit {\r\n  cursor: pointer;\r\n  border-radius: 5em;\r\n  color: #fff;\r\n  background: linear-gradient(to right, #b02418, #fb6154);\r\n  border: 0;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  margin-left: 30%;\r\n  font-size: 13px;\r\n  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);\r\n  margin-top: 30px;\r\n  margin-right: 50px;\r\n}\r\n\r\n.forgot {\r\n  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);\r\n  color: #e7b7b9;\r\n  padding-top: 15px;\r\n}\r\n\r\na {\r\n  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);\r\n  color: #e7b7b9;\r\n  text-decoration: none\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .main {\r\n    border-radius: 0px;\r\n  }}\r\n\r\n.success{\r\n  color: #b02418;\r\n  margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxnREFBZ0Q7O0FBRWxEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdURBQXVEO0VBQ3ZELFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEIsQ0FBQzs7QUFFSDtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA1NTBweDtcclxuICBtYXJnaW46IDdlbSBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDM1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbn1cclxuXHJcbi5zaWduIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBjb2xvcjogI2IwMjQxODtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi51biB7XHJcbiAgd2lkdGg6IDc2JTtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgNTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEyNiwgMTI2LCAwLjA0KTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNDZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxufVxyXG5cclxuLmRvYntcclxuICB3aWR0aDogNzUlO1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCA1Nik7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBwYWRkaW5nOiA5cHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtLmZvcm0xIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLnBhc3Mge1xyXG4gIHdpZHRoOiA3NiU7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDU2KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTM2LCAxMjYsIDEyNiwgMC4wNCk7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbn1cclxuXHJcblxyXG4udW46Zm9jdXMsIC5wYXNzOmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTgpICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2IwMjQxOCwgI2ZiNjE1NCk7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZm9yZ290IHtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSgxMTcsIDExNywgMTE3LCAwLjEyKTtcclxuICBjb2xvcjogI2U3YjdiOTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMTE3LCAxMTcsIDExNywgMC4xMik7XHJcbiAgY29sb3I6ICNlN2I3Yjk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9fVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgY29sb3I6ICNiMDI0MTg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/user/user.actions */ "./src/app/store/user/user.actions.ts");
/* harmony import */ var _store_user_user_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/user/user.reducer */ "./src/app/store/user/user.reducer.ts");







let RegisterComponent = class RegisterComponent {
    constructor(userService, store, router) {
        this.userService = userService;
        this.store = store;
        this.router = router;
        this.registerSucess = false;
    }
    ngOnInit() {
        this.store.select(_store_user_user_reducer__WEBPACK_IMPORTED_MODULE_6__["selectUser"]).subscribe(user => {
            console.log(user);
            if (user.id) {
                this.router.navigateByUrl('/profile');
            }
        });
    }
    register(email, pass, firstname, lastname, dateofbirth) {
        const userObj = {
            created: new Date(),
            dateOfBirth: dateofbirth,
            email: email,
            firstname: firstname,
            name: lastname,
            password: pass,
            id: undefined
        };
        this.userService.register(userObj).subscribe(user => {
            if (user) {
                this.store.dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUser"](user));
                this.registerSucess = true;
                setTimeout(() => {
                    this.router.navigateByUrl(('/'));
                }, 5000);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_user_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/user/user.reducer */ "./src/app/store/user/user.reducer.ts");






let UserComponent = class UserComponent {
    constructor(userService, store, router) {
        this.userService = userService;
        this.store = store;
        this.router = router;
        this.displayProfile = false;
        this.notLoggedIn = false;
    }
    ngOnInit() {
        this.store.select(_store_user_user_reducer__WEBPACK_IMPORTED_MODULE_5__["selectUser"]).subscribe(user => {
            console.log(user);
            if (user.id) {
                this.displayProfile = true;
            }
            else {
                this.notLoggedIn = true;
            }
        });
    }
};
UserComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/services/offers.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/offers.service.ts ***!
  \********************************************/
/*! exports provided: OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.environment */ "./src/app/app.environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let OffersService = class OffersService {
    constructor(http) {
        this.http = http;
        this.uri = _app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }) };
    }
    getAllOffers() {
        return this.http.get(this.uri + '/offers', this.headers);
    }
};
OffersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OffersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OffersService);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.environment */ "./src/app/app.environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
        this.uri = _app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }) };
    }
    getAllProducts() {
        return this.http.get(this.uri + '/products', this.headers);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "./src/app/services/purchases.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/purchases.service.ts ***!
  \***********************************************/
/*! exports provided: PurchasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesService", function() { return PurchasesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.environment */ "./src/app/app.environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PurchasesService = class PurchasesService {
    constructor(http) {
        this.http = http;
        this.uri = _app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }) };
    }
    getAllPurchases() {
        return this.http.get(this.uri + '/offers', this.headers);
    }
    getPurchasesByUser(userId) {
        return this.http.get(this.uri + `/offers/${userId}`, this.headers);
    }
};
PurchasesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PurchasesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PurchasesService);



/***/ }),

/***/ "./src/app/services/regions.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/regions.service.ts ***!
  \*********************************************/
/*! exports provided: RegionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsService", function() { return RegionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.environment */ "./src/app/app.environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let RegionsService = class RegionsService {
    constructor(http) {
        this.http = http;
        this.uri = _app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }) };
    }
    getAllRegions() {
        return this.http.get(this.uri + '/regions', this.headers);
    }
    getRegionByName(name) {
        return this.http.get(this.uri + `/regions/${name}`, this.headers);
    }
};
RegionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RegionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegionsService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.environment */ "./src/app/app.environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.uri = _app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }) };
    }
    login(user) {
        return this.http.post(this.uri + '/user-management/login', user, this.headers);
    }
    register(user) {
        return this.http.post(this.uri + '/user-management/register', user, this.headers);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appInitialState, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitialState", function() { return appInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _user_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.reducer */ "./src/app/store/user/user.reducer.ts");
/* harmony import */ var _regions_regions_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regions/regions.reducer */ "./src/app/store/regions/regions.reducer.ts");
/* harmony import */ var _offers_offers_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers/offers.reducer */ "./src/app/store/offers/offers.reducer.ts");



const appInitialState = {
    user: _user_user_reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"],
    regions: _regions_regions_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"],
    offers: _offers_offers_reducer__WEBPACK_IMPORTED_MODULE_2__["initialState"]
};
function appReducer(state = appInitialState, action) {
    const root = { root: state };
    return {
        user: _user_user_reducer__WEBPACK_IMPORTED_MODULE_0__["UserReducer"](state.user, action),
        regions: _regions_regions_reducer__WEBPACK_IMPORTED_MODULE_1__["RegionsReducer"](state.regions, action),
        offers: _offers_offers_reducer__WEBPACK_IMPORTED_MODULE_2__["OffersReducer"](state.offers, action)
    };
}


/***/ }),

/***/ "./src/app/store/offers/offers.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/offers/offers.actions.ts ***!
  \************************************************/
/*! exports provided: OffersActionTypes, ActionEx, OffersAdd, OffersAddAll, OffersRemove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersActionTypes", function() { return OffersActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEx", function() { return ActionEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersAdd", function() { return OffersAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersAddAll", function() { return OffersAddAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersRemove", function() { return OffersRemove; });
var OffersActionTypes;
(function (OffersActionTypes) {
    OffersActionTypes["Add"] = "[Offers Component] Add";
    OffersActionTypes["AddAll"] = "[Offers Component] AddAll";
    OffersActionTypes["Remove"] = "[Offers Component] Remove";
})(OffersActionTypes || (OffersActionTypes = {}));
class ActionEx {
}
class OffersAdd {
    constructor(payload) {
        this.payload = payload;
        this.type = OffersActionTypes.Add;
    }
}
OffersAdd.ctorParameters = () => [
    { type: undefined }
];
class OffersAddAll {
    constructor(payload) {
        this.payload = payload;
        this.type = OffersActionTypes.AddAll;
    }
}
OffersAddAll.ctorParameters = () => [
    { type: undefined }
];
class OffersRemove {
    constructor(payload) {
        this.payload = payload;
        this.type = OffersActionTypes.Remove;
    }
}
OffersRemove.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/store/offers/offers.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/offers/offers.reducer.ts ***!
  \************************************************/
/*! exports provided: adapter, initialState, OffersReducer, selectFeature, selectIds, selectEntities, selectAll, selectOffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersReducer", function() { return OffersReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeature", function() { return selectFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOffers", function() { return selectOffers; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/ngrx-entity.js");
/* harmony import */ var _offers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.actions */ "./src/app/store/offers/offers.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");



const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
// additional entity state properties
});
function OffersReducer(state = initialState, action) {
    switch (action.type) {
        case _offers_actions__WEBPACK_IMPORTED_MODULE_1__["OffersActionTypes"].Add:
            return adapter.addOne(action.payload, state);
        case _offers_actions__WEBPACK_IMPORTED_MODULE_1__["OffersActionTypes"].AddAll:
            return adapter.addMany(action.payload, state);
        case _offers_actions__WEBPACK_IMPORTED_MODULE_1__["OffersActionTypes"].Remove:
            return adapter.removeOne(action.payload.id, state);
        default:
            return state;
    }
}
const selectFeature = (state) => state.root.Offers;
const { selectIds, selectEntities, selectAll, } = adapter.getSelectors(selectFeature);
const selectOffers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAll, (state) => state);


/***/ }),

/***/ "./src/app/store/regions/regions.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/regions/regions.actions.ts ***!
  \**************************************************/
/*! exports provided: RegionsActionTypes, ActionEx, RegionsAdd, RegionsAddAll, RegionsRemove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsActionTypes", function() { return RegionsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEx", function() { return ActionEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsAdd", function() { return RegionsAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsAddAll", function() { return RegionsAddAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsRemove", function() { return RegionsRemove; });
var RegionsActionTypes;
(function (RegionsActionTypes) {
    RegionsActionTypes["Add"] = "[Regions Component] Add";
    RegionsActionTypes["AddAll"] = "[Regions Component] AddAll";
    RegionsActionTypes["Remove"] = "[Regions Component] Remove";
})(RegionsActionTypes || (RegionsActionTypes = {}));
class ActionEx {
}
class RegionsAdd {
    constructor(payload) {
        this.payload = payload;
        this.type = RegionsActionTypes.Add;
    }
}
RegionsAdd.ctorParameters = () => [
    { type: undefined }
];
class RegionsAddAll {
    constructor(payload) {
        this.payload = payload;
        this.type = RegionsActionTypes.AddAll;
    }
}
RegionsAddAll.ctorParameters = () => [
    { type: undefined }
];
class RegionsRemove {
    constructor(payload) {
        this.payload = payload;
        this.type = RegionsActionTypes.Remove;
    }
}
RegionsRemove.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/store/regions/regions.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/regions/regions.reducer.ts ***!
  \**************************************************/
/*! exports provided: adapter, initialState, RegionsReducer, selectFeature, selectIds, selectEntities, selectAll, selectRegions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsReducer", function() { return RegionsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeature", function() { return selectFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRegions", function() { return selectRegions; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/ngrx-entity.js");
/* harmony import */ var _regions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regions.actions */ "./src/app/store/regions/regions.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");



const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
// additional entity state properties
});
function RegionsReducer(state = initialState, action) {
    switch (action.type) {
        case _regions_actions__WEBPACK_IMPORTED_MODULE_1__["RegionsActionTypes"].Add:
            return adapter.addOne(action.payload, state);
        case _regions_actions__WEBPACK_IMPORTED_MODULE_1__["RegionsActionTypes"].AddAll:
            return adapter.addMany(action.payload, state);
        case _regions_actions__WEBPACK_IMPORTED_MODULE_1__["RegionsActionTypes"].Remove:
            return adapter.removeOne(action.payload.id, state);
        default:
            return state;
    }
}
const selectFeature = (state) => state.root.regions;
const { selectIds, selectEntities, selectAll, } = adapter.getSelectors(selectFeature);
const selectRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAll, (state) => state);


/***/ }),

/***/ "./src/app/store/user/user.actions.ts":
/*!********************************************!*\
  !*** ./src/app/store/user/user.actions.ts ***!
  \********************************************/
/*! exports provided: UserActionTypes, ActionEx, UpdateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEx", function() { return ActionEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["UpdateUser"] = "[User Component] UpdateUser";
})(UserActionTypes || (UserActionTypes = {}));
class ActionEx {
}
class UpdateUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UpdateUser;
    }
}
UpdateUser.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/store/user/user.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/store/user/user.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, UserReducer, selectFeature, selectUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReducer", function() { return UserReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeature", function() { return selectFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/app/store/user/user.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");


const initialState = {
    id: null,
    name: null,
    firstname: null,
    email: null,
    password: null,
    dateOfBirth: null,
    created: null
};
function UserReducer(state = initialState, action) {
    switch (action.type) {
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserActionTypes"].UpdateUser:
            return Object.assign({}, state, { id: action.payload.id, name: action.payload.name, firstname: action.payload.firstname, email: action.payload.email, dateOfBirth: action.payload.dateOfBirth, created: action.payload.created });
        default:
            return state;
    }
}
const selectFeature = (state) => state.root.user;
const selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectFeature, (state) => state);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projekte\BaernHaeckt4\web-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map