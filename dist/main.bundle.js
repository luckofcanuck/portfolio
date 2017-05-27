webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.showing = false;
    }
    ;
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(169),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.projects = [
            {
                title: "CCPhoto",
                subtitle: "A front-end portfolio designed and built for Clark Clifford Photography.",
                description: "This is a photography portfolio I built for a client. I built it with Angular 4 and Bootstrap. It is a minimalist design, intended to be simple to navigate and pleasant to view.",
                img: "/assets/img/ccphoto.png",
                url: "http://clarkcliffordphoto.com"
            },
            {
                title: "Beer Diary,",
                subtitle: "A full-stack application for learning about and storing information on beers.",
                description: "This is a full-stack app built with Mongo, Express, AngularJS, and Node. I built user authentication that securely stores passwords and login info. The signed in user can then look up any beer they might be drinking. The app performs HTTP requests to an external API, and retrieves information on said beer. The user can then store that beer to the database I built, attached to their user ID, and rate or make notes about the beer for future reference. This project is here to showcase backend, API, CRUD, and full-stack familiarity and ability.",
                img: "/assets/img/beer.png",
                url: "http://beerdiary.timothymdawson.com"
            },
            {
                title: "KandJ Diaries",
                subtitle: "A CSS styling and positioning showcase extravaganza.",
                description: "This project was an exercise in conversion. KandJ Diaries is an archived out-of-use website that I rewrote from scratch in order to showcase my abilities in converting PSDs, wireframes, or, in this case, another webpage. I can clean things up, make them functional, and turn whatever vision a client has into a reality.",
                img: "/assets/img/jumboK.png",
                url: "/kandj"
            }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__(170),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "* {\n\tcolor: darkgrey;\n}\n\n/*header*/\n.homeHeader {\n\tposition: relative;\n\tleft: 24px;\n    top: 24px;\n}\n\n.homeHeader:hover .homeName {\n\tcolor: lightgrey;\n\ttransition: all 0.2s ease;\n\tcursor: pointer;\n}\n\n.homeHeader:hover .homeSubtitle {\n\tcolor: lightgrey;\n\ttransition: all 0.2s ease;\n\tcursor: pointer;\n}\n\n.homeName {\n\tfont-size: 20px;\n\tcolor: grey;\n\twidth: 140px;\n\ttext-align: center;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.homeSubtitle {\n\tfont-size: 16px;\n\tcolor: grey;\n\twidth: 140px;\n\ttext-align: center;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.homeSubtitle::before {\n\tcontent: '';\n\tborder-top: 1px solid lightgrey;\n\twidth: 140px;\n\tposition: absolute;\n\ttop: 26px;\n\tleft: 0px;\n\t-webkit-animation: widen 0.5s ease;\n\t        animation: widen 0.5s ease;\n}\n\n@-webkit-keyframes widen {\n\tfrom {width: 0px;}\n\tto {width: 140px;}\n}\n\n@keyframes widen {\n\tfrom {width: 0px;}\n\tto {width: 140px;}\n}\n\n\n\n\n\n\n\n\n\n/*mainabout*/\nh2 {\n\tcolor: darkorange;\n\ttext-align: center;\n\tmargin-top: 50px;\n\tmargin-bottom: 50px;\n}\n\n.aboutRow {\n\tmargin-top: 120px;\n\tposition: relative;\n}\n\n.aboutImage {\n\tposition: relative;\n}\n\n.aboutImage img {\n\tmax-width: 100%;\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.aboutRow ul {\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin-top: 30px;\n\ttext-align: center;\n}\n\na {\n    text-decoration: none !important;\n\ttext-align: center !important;\n}\n\n.aboutLink {\n\tcolor: darkorange;\n\ttransition: all 0.3s ease;\n\ttext-align: center;\n}\n\n.aboutLink:hover {\n\tcolor: orange;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n}\n\n@media (max-width: 768px) {\n\t.aboutRow {\n\t\ttext-align: center;\n\t}\n}\n\n\n\n\n\n\n\n\n/*scroll*/\ni {\n\tcolor: darkorange;\n\tmargin-top: 80px;\n\tmargin-bottom: 20px;\n\ttext-align: center;\n}\n\nh1 {\n\tmargin-top: 50px;\n\twidth: 100%;\n\ttext-align: center;\n\tcolor: darkgrey;\n}\n\nh4 {\n\twidth: 100%;\n\tcolor: darkorange;\n\ttext-align: center;\n}\n\nh4:hover {\n\tcursor: pointer;\n\tcolor: orange;\n}\n\n\n.down {\n\tposition: relative;\n\twidth: 100px;\n\tmargin-left: -50px;\n\tleft: 50vw;\n\tmargin-top: 0px;\n\tcolor: white;\n}\n\n\n\n\n\n\n\n\n\n\n/*logos*/\n.logoWrapper .row {\n    height: 100%;\n    position: relative;\n\tmargin-bottom: 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.logoDiv img {\n\tmax-width: 200px;\n\tmax-height: 175px;\n    width: auto;\n    height: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n}\n\n@media (max-width: 768px) {\n\t.logoWrapper .row {\n\t\tdisplay: block;\n\t}\n\n\t.logoDiv img {\n\t\tmargin-bottom: 30px;\n\t}\n}\n\n\n/*resume*/\n.projectLink {\n\tcolor: orange;\n}\n.projectLink:hover {\n\tcolor: darkorange;\n\tcursor: pointer;\n}\n\nh5 {\n\tcolor: grey;\n}\n\nb {\n\tcolor: lightgrey;\n}\n\n\n\n\n\n\n\n/*links*/\n.bottomlinks {\n\ttext-align: center;\n\tmargin-top: 30px;\n\tmargin-bottom: 30px;\n\tcolor: grey;\n\tfont-size: 24px;\n}\n\n.bottomlinks:hover {\n\tcolor: orange;\n\ttransition: all 0.3s ease;\n\tcursor: pointer;\n}\n\n.contactLink {\n\ttext-align: center;\n\tcolor: lightgrey;\n\tmargin-top: 50px;\n\tmargin-bottom: 50px;\n}\n\n.contactLink:hover {\n\tcolor: grey;\n\tcursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".contactWrapper {\n    position: relative;\n    top: 50px;\n    text-align: center;\n}\n\n.contactWrapper div {\n    margin: 24px;\n}\n\n.contactNumber {\n    color: darkgrey;\n}\n\n.contactEmail {\n    color: darkorange;\n}\n\n.contactEmail:hover {\n    color: orange;\n    cursor: pointer;\n}\n\n.git {\n    color: darkgrey;\n}\n\n.git:hover {\n    color: grey;\n    cursor: pointer;\n}\n\n.linked {\n    color: darkgrey;\n}\n\n.linked:hover {\n    color: grey;\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n.homeHeader {\n\tposition: relative;\n\tleft: 24px;\n    top: 24px;\n}\n\n.homeHeader:hover .homeName {\n\tcolor: lightgrey;\n\ttransition: all 0.2s ease;\n\tcursor: pointer;\n}\n\n.homeHeader:hover .homeSubtitle {\n\tcolor: lightgrey;\n\ttransition: all 0.2s ease;\n\tcursor: pointer;\n}\n\n.homeName {\n\tfont-size: 20px;\n\tcolor: grey;\n\twidth: 140px;\n\ttext-align: center;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.homeSubtitle {\n\tfont-size: 16px;\n\tcolor: grey;\n\twidth: 140px;\n\ttext-align: center;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.homeSubtitle::before {\n\tcontent: '';\n\tborder-top: 1px solid lightgrey;\n\twidth: 140px;\n\tposition: absolute;\n\ttop: 26px;\n\tleft: 0px;\n\t-webkit-animation: widen 0.5s ease;\n\t        animation: widen 0.5s ease;\n}\n\n@-webkit-keyframes widen {\n\tfrom {width: 0px;}\n\tto {width: 140px;}\n}\n\n@keyframes widen {\n\tfrom {width: 0px;}\n\tto {width: 140px;}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".homeContent {\n\tposition: relative;\n\ttop: 100px;\n}\n\n.homeCardHeaders {\n\twidth: 25vw;\n\ttext-align: center;\n}\n\ni {\n\tcolor: darkorange;\n\tmargin-top: 80px;\n\tmargin-bottom: 20px;\n\ttext-align: center;\n}\n\nh1 {\n\tmargin-top: 50px;\n\twidth: 100%;\n\ttext-align: center;\n\tcolor: darkgrey;\n}\n\n.down {\n\tposition: relative;\n\twidth: 100px;\n\tmargin-left: -50px;\n\tleft: 50vw;\n\tmargin-top: 0px;\n\tcolor: white;\n}\n\nh2 {\n\tmargin-top: 0px !important;\n\tcolor: darkgrey;\n}\n\nh3 {\n\tcolor: darkorange;\n\ttext-align: center;\n}\n\nh4 {\n\twidth: 100%;\n\tcolor: darkorange;\n\ttext-align: center;\n}\n\nh4:hover {\n\tcolor: orange;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n}\n\n.homeHeader {\n\tposition: relative;\n\tleft: 24px;\n    top: 24px;\n}\n\n.cardText {\n\tcolor: white;\n}\n\n.homeHeader:hover .homeName {\n\tcolor: lightgrey;\n\ttransition: all 0.2s ease;\n\tcursor: pointer;\n}\n\n.homeHeader:hover .homeSubtitle {\n\tcolor: lightgrey;\n\ttransition: all 0.2s ease;\n\tcursor: pointer;\n}\n\n\n\n.homeName {\n\tfont-size: 20px;\n\tcolor: grey;\n\twidth: 140px;\n\ttext-align: center;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n\n.homeSubtitle {\n\tfont-size: 16px;\n\tcolor: grey;\n\twidth: 140px;\n\ttext-align: center;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.homeSubtitle::before {\n\tcontent: '';\n\tborder-top: 1px solid lightgrey;\n\twidth: 140px;\n\tposition: absolute;\n\ttop: 26px;\n\tleft: 0px;\n\t-webkit-animation: widen 0.5s ease;\n\t        animation: widen 0.5s ease;\n}\n\n@-webkit-keyframes widen {\n\tfrom {width: 0px;}\n\tto {width: 140px;}\n}\n\n@keyframes widen {\n\tfrom {width: 0px;}\n\tto {width: 140px;}\n}\n\n\n\n\n\n.projectWrapper {\n\tposition: relative;\n\tmargin-top: 100px;\n}\n\n.contactLink {\n\ttext-align: center;\n\tcolor: lightgrey;\n\tmargin-top: 50px;\n\tmargin-bottom: 50px;\n}\n\n.contactLink:hover {\n\tcolor: grey;\n\tcursor: pointer;\n}\n\n\n\n@media (max-width: 991px) {\n\t.homeCardHeaders {\n\t\twidth: 60vw;\n\t\tposition: relative;\n\t\tleft: 20vw;\n\t}\n\n\ti {\n\t\tmargin-top: 24px;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "img {\n    width: 90%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nh2, h4, p {\n    text-align: center;\n    color: darkgrey;\n}\n\n.container {\n    position: relative;\n    top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*navbar always showing*/\n    /*navbar hamburger*/\n#nav-icon {\n    width: 15vw;\n\theight: 15vw;\n\tmax-width: 30px;\n\tmax-height: 50px;\n  \tposition: fixed;\n\ttop: 16px;\n  \tright: 16px;\n\tz-index: 1001 !important;\n}\n\n#nav-icon:hover {\n\ttransition: all 0.1s ease;\n\tcursor: pointer;\n}\n\n#nav-icon:hover span {\n\tbackground-color: #C76D18;\n}\n\n#nav-icon span {\n\tdisplay: block;\n \tposition: absolute;\n \theight: 2px;\n \twidth: 100%;\n  \tbackground-color: rgba(155, 155, 155, 1);\n  \tborder-radius: 9px;\n  \topacity: 1;\n  \tleft: 0;\n  \ttransition: .25s ease-in-out;\n}\n\n#nav-icon.normal #span1 {\n  \ttop: 0px;\n}\n\n#nav-icon.normal #span2 {\n  \ttop: 10px;\n}\n\n#nav-icon.normal #span3 {\n  \ttop: 20px;\n}\n\n#nav-icon.x #span1 {\n  \ttop: 10px;\n  \t-webkit-transform: rotate(135deg);\n  \t        transform: rotate(135deg);\n\tcolor: red;\n}\n\n#nav-icon.x #span2 {\n  \topacity: 0;\n  \tleft: 60px;\n\ttop: 15px;\n}\n\n#nav-icon.x #span3 {\n  \ttop: 10px;\n  \t-webkit-transform: rotate(-135deg);\n  \t        transform: rotate(-135deg);\n}\n    /*navbar hamburger*/\n/*end of navbar always showing*/\n\n\n\n/*real navigation*/\n.navShowing {\n\tbackground-color: rgba(85, 85, 85, 1);\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\ttop: 0px;\n\tleft: 0px;\n\tz-index: 1000;\n\ttransition: all 0.5s ease;\n\toverflow: scroll;\n}\n\n\n.navHiding {\n\tbackground-color: rgba(80, 80, 80, 0);\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 100vh;\n\tleft: 0px;\n\ttransition: all 0.4s ease-out;\n}\n\n.navHiding h1 {\n    display: none;\n\tmargin-top: 150px;\n\tmargin-left: 100px;\n\tcolor: rgba(80, 80, 80, 1);\n\tfont-family: \"Work Sans\", sans-serif;\n    transition: all 0.2s ease-out;\n}\n\n.navShowing h1 {\n    display: none;\n\tmargin-top: 150px;\n\tmargin-left: 100px;\n\tcolor: darkorange;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.boxesWrapper {\n    position: relative;\n    top: 20vh;\n}\n\n\n.navboxWrap {\n\tposition: relative;\n    line-height: 200px;\n}\n\n.navbox {\n    width: 80vw;\n    height: 200px;\n\tmax-width: 300px;\n\tvertical-align: middle;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 20px;\n\tposition: relative;\n\tbackground-color: rgba(280, 280, 280, 1);\n\tfont-size: 16px;\n\ttext-align: center;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.navbox:hover {\n\tbackground-image: linear-gradient(135deg, rgba(215, 215, 215, 1) 50%, rgba(210, 210, 210, 1) 50%);\n\tcursor: pointer;\n\ttransition: all 0.5s ease;\n\tfont-size: 20px;\n\tcolor: grey;\n}\n/*real navigation*/\n\n\n\n\n\n/*media queriesssssss*/\n@media (max-width: 991px){\n\t/*.footerDirect{\n\t\tposition: static;\n\t}\n\t.footerRow {\n\t\ttext-align: center;\n\t}\n\n\t.footerRow span {\n\t\tdisplay: block;\n\t}\n\t.animated {\n\t\tdisplay: none;\n\t}\n\t.homeMainContent{\n\t\twidth: 80vw;\n\t\tleft: 10vw;\n\t}*/\n\t.navbox {\n\t\theight: 100px;\n\t}\n    .navboxWrap {\n        line-height: 100px;\n    }\n\t/*.devFooterContact{\n\t\topacity: 0;\n\t}\n\t.devFooterNumber{\n\t\tleft: 50%;\n\t\ttop: 20%;\n\t}\n\t.devFooterEmail{\n\t\tleft: 50%;\n\t\ttop: 40%;\n\t}\n\t.git{\n\t\tright: 80%;\n\t\ttop: 50%;\n\t\twidth: 50px;\n\t\tmargin-right: -25px;\n\t}\n\t.linked{\n\t\tright: 20%;\n\t\ttop: 50%;\n\t\twidth: 50px;\n\t\tmargin-right: -25px;\n\t}*/\n}\n\n@media (min-width: 991px) {\n\t.navShowing h1 {\n\t\tdisplay: block;\n\t}\n    .navHiding h1 {\n        display: block;\n    }\n    .boxesWrapper {\n        top: 10vh;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "\n.projectTitle {\n\tposition: relative;\n\tfont-size: 16px;\n\tleft: 5px;\n\ttop: 20px;\n\tmargin-top: 50px;\n\tcolor: darkorange;\n\ttext-align: left;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.projectSubtitle {\n\tposition: relative;\n\tcolor: darkorange;\n\twidth: 30vw;\n\tleft: 5px;\n\ttop: 12px;\n\ttext-align: left;\n\tfont-family: \"Work Sans\", sans-serif;\n\tmargin-bottom: 50px;\n}\n\n\n.projectSubtitle::before {\n\tcontent: '';\n\tborder-top: 1px solid lightgrey;\n\twidth: 30vw;\n\tposition: absolute;\n\ttop: -6px;\n\tleft: 0px;\n\t-webkit-animation: widenDev .5s ease;\n\t        animation: widenDev .5s ease;\n}\n\n.projectTitle::after {\n\tcontent: '';\n\tborder-top: 1px solid lightgrey;\n\twidth: 30vw;\n\tposition: absolute;\n\ttop: 24px;\n\tleft: 0px;\n\t-webkit-animation: widenDev .5s ease;\n\t        animation: widenDev .5s ease;\n}\n\n@-webkit-keyframes widenDev {\n\tfrom {width: 0px;}\n\tto {width: 30vw}\n}\n\n@keyframes widenDev {\n\tfrom {width: 0px;}\n\tto {width: 30vw}\n}\n\n@-webkit-keyframes widenDevSmaller {\n\tfrom {width: 0px;}\n\tto {width: 100%;}\n}\n\n@keyframes widenDevSmaller {\n\tfrom {width: 0px;}\n\tto {width: 100%;}\n}\n\n.projectBody {\n\tposition: relative;\n\ttop: 30px;\n\tfont-family: \"Playfair Display\", serif;\n\tcolor: darkgrey;\n}\n\n.projectImg {\n\tposition: relative;\n}\n\n.projectImg img {\n\tmax-width: 28vw;\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\topacity: 0.7;\n}\n\n.projectImg img:hover {\n\topacity: 1;\n\tcursor: pointer;\n\tbox-shadow: 0 3px 6px white, 0 5px 16px 0 lightgrey;\n}\n\n\n\n\n\n\n.projectDescription {\n\tposition: relative;\n\tbackground-color: rgba(0, 0, 0, 0.7);\n\tleft: 5px;\n\theight: 300px;\n\tmargin-top: 50px;\n\tcolor: darkorange;\n\ttext-align: left;\n\tfont-family: \"Work Sans\", sans-serif;\n}\n\n.desText {\n\tposition: relative;\n\tleft: 5px;\n\toverflow: scroll;\n}\n\n.desShowProject {\n\tposition: relative;\n\tleft: 5px;\n}\n\n\n#nav-icon {\n    width: 15vw;\n\theight: 15vw;\n\tmax-width: 30px;\n\tmax-height: 50px;\n  \tposition: relative;\n\ttop: 8px;\n  \tleft: 5px;\n\tz-index: 1001 !important;\n}\n\n#nav-icon:hover {\n\ttransition: all 0.1s ease;\n\tcursor: pointer;\n}\n\n#nav-icon:hover span {\n\tbackground-color: #C76D18;\n}\n\n#nav-icon span {\n\tdisplay: block;\n \tposition: absolute;\n \theight: 2px;\n \twidth: 100%;\n  \tbackground-color: rgba(155, 155, 155, 1);\n  \tborder-radius: 9px;\n  \topacity: 1;\n  \tleft: 0;\n  \ttransition: .25s ease-in-out;\n}\n\n#nav-icon #span1 {\n  \ttop: 10px;\n  \t-webkit-transform: rotate(135deg);\n  \t        transform: rotate(135deg);\n\tcolor: red;\n}\n\n#nav-icon #span2 {\n  \topacity: 0;\n  \tleft: 60px;\n\ttop: 15px;\n}\n\n#nav-icon #span3 {\n  \ttop: 10px;\n  \t-webkit-transform: rotate(-135deg);\n  \t        transform: rotate(-135deg);\n}\n\n\n\n\n@media (max-width: 991px) {\n\t.projectImg img {\n\t\tmax-width: 50vw;\n\t}\n\n\t.projectSubtitle::before {\n\t\tcontent: '';\n\t\tborder-top: 1px solid lightgrey;\n\t\twidth: 100%;\n\t\tposition: absolute;\n\t\ttop: -6px;\n\t\tleft: 0px;\n\t\t-webkit-animation: widenDevSmaller .5s ease;\n\t\t        animation: widenDevSmaller .5s ease;\n\t}\n\n\t.projectTitle {\n\t\tleft: 0px;\n\t}\n\n\t.projectTitle::after {\n\t\tcontent: '';\n\t\tborder-top: 1px solid lightgrey;\n\t\twidth: 100%;\n\t\tposition: absolute;\n\t\ttop: 24px;\n\t\tleft: 0px;\n\t\t-webkit-animation: widenDevSmaller .5s ease;\n\t\t        animation: widenDevSmaller .5s ease;\n\t}\n\n\t.projectSubtitle {\n\t\tposition: relative;\n\t\tcolor: darkorange;\n\t\twidth: 100%;\n\t\tleft: 0px;\n\t\ttop: 12px;\n\t\tfont-size: 10px;\n\t\ttext-align: left;\n\t\tfont-family: \"Work Sans\", sans-serif;\n\t\tmargin-bottom: 50px;\n\t}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div class=\"homeHeader\" routerLink=\"/home\">\n    <div class=\"homeName\">\n        Tim Dawson\n    </div>\n    <div class=\"homeSubtitle\">\n        Renaissance Man\n    </div>\n</div>\n\n\n<div class=\"aboutRow row\">\n\t<div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-2 aboutImage\">\n\t\t<img src=\"/assets/img/hs.png\">\n\t</div>\n\t<div class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0 aboutText\">\n\t\tI earned my BA in English from Utah Valley University in December, 2016. I learned how to code full-stack applications at V-School in Salt Lake City, Utah. My professional strengths lie in full-stack web development, UX/UI development, IT, miscellaneous computer/technical tasks, audio production, communications, writing, and research. I spend my free time with my family and my dogs. I keep up to date on all the greatest TV shows, podcasts, technological developments, and other fun stuff. And, I code.\n\t\t<ul>\n\t\t\t<li class=\"aboutLink\" routerLink=\"/contact\">\n\t\t\t\tContact Me Here\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"/assets/dawson-tech-resume.docx\" download class=\"aboutLink\">Download My Resume</a>\n\t\t\t</li>\n\t\t\t<li class=\"aboutLink\" routerLink=\"/home\">\n\t\t\t\tCheckout My Home/Projects Page\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n\n<h1>Keep Scrolling to See My Skills and Resume!</h1>\n<i class=\"fa fa-chevron-down down\" aria-hidden=\"true\"></i>\n<h4 routerLink=\"/about\" routerLink=\"/contact\">[Or Click Here to Get in Touch with Me]</h4>\n<br />\n\n\n<div class=\"logoWrapper container-fluid\">\n\t<h2 class=\"logoDescription\">Front End Technologies</h2>\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/angular.svg\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/html.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/css.svg\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/javascript.png\" />\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/typescript.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/wordpress.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/squarespace.jpg\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/jquery.png\" />\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/bootstrap.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/sass.svg\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/flexbox.jpeg\" />\n\t\t</div>\n\t</div>\n\n\n\n\t<h2 class=\"logoDescription\">Back End Technologies</h2>\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/node.jpeg\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/express.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/mongodb.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/mongoose.png\" />\n\t\t</div>\n\t</div>\n\n\t<h2 class=\"logoDescription\">Visual Content Design/Creation/Editing</h2>\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/adobe.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/photoshop.jpg\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/lightroom.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/powerpoint.png\" />\n\t\t</div>\n\t</div>\n\n\t<h2 class=\"logoDescription\">Collaborative Assets</h2>\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/agilescrum.jpeg\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/githublogo.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/googledrive.png\" />\n\t\t</div>\n\t</div>\n\n\t<h2 class=\"logoDescription\">Text/Data Creation/Editing</h2>\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/excel.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/googledocs.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/googlesheets.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-3\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/indesign.png\" />\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-6\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/microsoftoffice.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-6\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/word.png\" />\n\t\t</div>\n\t</div>\n\n\t<h2 class=\"logoDescription\">Social Media</h2>\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/facebook.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/insta.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/reddit.png\" />\n\t\t</div>\n    </div>\n    <div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-6\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/snap.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-6\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/twitter.png\" />\n\t\t</div>\n\t</div>\n\n\t<h2 class=\"logoDescription\">Audio Content Creation/Editing</h2>\n\t<div class=\"row\">\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/protools.jpg\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/logic.png\" />\n\t\t</div>\n\t\t<div class=\"logoDiv col-xs-12 col-sm-4\">\n\t\t\t<img class=\"center-block\" src=\"/assets/logos/garageband.jpg\" />\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container resumeWrapper\">\n\t<h2 class=\"logoDescription\" id=\"resume\">Expanded Resume</h2>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-xs-4 resumeTitle\">\n\t\t\t<h4>Education</h4>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-xs-8 resumeDes\">\n\t\t\t<h5>Utah Valley University, Orem, UT. BA in English with a concentration in Literary Studies. Graduated 2016.</h5>\n\t\t\t<p>\n\t\t\t\tI include this on a technical portfolio because I find the skills I acquired in this program transferable to any field. I became an adept learner. I learned to take on tasks with a great deal of depth rather than just breadth. I learned about cultural and societal trends, psychology, history, and overall I gained a better understanding of how the world works. Because of this, I'm prepared to enter any field with a greater understanding of how it works, what's driving the people and the market to do what it's doing, and most importantly, I can jump into things, learn the ins and outs to a high degree, and become an invaluable asset in a very short time.\n\t\t\t</p>\n\t\t\t<h5>V School, Salt Lake City, UT. Full Stack Web Development Certificate. Graduated 2017.</h5>\n\t\t\t<p>\n\t\t\t\tWithin just a few short months, and with the help of the program at V School, I've rapidly cultivated a vast array of technological skills, particularly in full-stack web app development. My cohort focused on MEAN stack apps, using the original AngularJS. I went beyond this in my own time to learn Angular 2+, completed extra projects on the side, and even began freelance work on websites. I have quickly become a confident, capable coder with skills in many languages in the front and back end.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-xs-4 resumeTitle\">\n\t\t\t<h4>Projects</h4>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-xs-8 resumeDes\">\n\t\t\t<h5 class=\"projectLink\" routerLink=\"/home\">[Click to navigate to home/projects page]</h5>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-xs-4 resumeTitle\">\n\t\t\t<h4>Skills and Abilities</h4>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-xs-8 resumeDes\">\n\t\t\t<h5>Full Stack Web Development</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>MEAN</b> - I have written multiple apps using MongoDB/Mongoose, ExpressJS, AngularJS, and Node. I am very experienced and confident in all aspects of this stack.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Angular 2+</b> - I took it upon myself to learn Angular 2+ with a couple of other willing souls during a group project. Within one week I went from having zero experience in Angular 2+, and zero experience in component-based coding, to writing multiple apps in this new (to me) framework. Even this website is written in Angular 2+.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>HTML, CSS, JS</b> - It would be remiss of me not to mention these backbone languages of coding. I am very experienced and capable of writing/debugging/fixing all kinds of code within these languages. With the experience I have in these languages, the roots of web app development, and the demonstrably quick manner in which I learned Angular 2+, I can reliably say I would be able to learn any language, framework, or stack quickly and effectively enough to stave off any learning curves that one encounters when switching to new technologies.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>CSS Expanded</b> - I have used Twitter Bootstrap, Sass, Angular Animations, CSS Keyframes, Flex Box, and more, to enhance CSS styling, animation, and positioning.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>JS Expanded</b> - In conjunction with learning Angular 2+, I had to pick up TypeScript. As I have written many apps in Angular 2+, I am as capable with TypeScript as I have with vanilla JS. I have also learned and used jQuery in more vanilla apps. When moving into frameworks like Angular, I moved away from jQuery, but can still write in it when needed.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Website Builders</b> - I have built and maintained various websites over the years using technologies like Squarespace and WordPress.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t<h5>Multiple years of experience in: </h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Microsoft Word</b>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Microsoft Excel</b>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Microsoft Powerpoint</b>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Google Docs</b>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Google Sheets</b>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t<h5>Visual Editing/Design</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Adobe InDesign </b>- During my time working as an author, editor, and eventually Editor-in-Chief for the undergraduate academic journal Essais at Utah Valley University, this is the program we used to typeset and organize our journals each semester. I can take a work from conception, to proof, to print with InDesign.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Adobe Photoshop/Lightroom</b> - I have been working in photoshop, primarily for edits and secondarily for content creation, since high school. I am able to use either of these programs to manipulate/create images, logos, wireframes for websites, and more.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t<h5>Audio</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Logic/Pro Tools/Garage Band</b> - I have been editing and producing musical audio using these tools for around a decade. I have recently started producing podcasts with these technologies as well.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t<h5>Research</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Technical Maintenance</b> - Perhaps the greatest advantage my research background gives me regarding tech is my ability to stay on top of trends, and find quick solutions to my problems. I am adept across the obvious platforms like Stack Overflow and Github. I am a resourceful person when it comes to finding solutions to obscure issues, and an astute observer of the current climate in tech.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Topical Maintenance</b> - Intertwined with that technical maintenance is my experience discovering, accruing, and maintaining specific information on esoteric matters. With these skills I am able to be your most informed and organized resource regarding any needed topic.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Longterm Research</b> -\tI have immense experience carrying out projects over long periods of time, from weeks to months to years. I am organized and careful and thorough in my research, in my upkeep of documents, and in my abilities to get thorough, meaningful information, even when extending beyond expected timeframes.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t<h5>Team Skills</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Leadership</b> - As an Editor-in-Chief, a House Manager, a teaching assistant, a substitute teacher, and a group leader in countless projects throughout my academic career, I have developed strong leadership skills. I have overseen and managed projects that took multiple teams and multiple goals over varying timeframes. I have trained new employees and volunteers. I have mentored and taught. And I have, in my opinion, most importantly learned to be a collaborator in a leading position. I am able to listen to my teams' ideas, delegate certain tasks to the strongest in our group, make executive decisions when it is time to do so and the options have been weighed, and roll up my sleeves and get to work with the team.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Collaboration</b> - I have vast experience in collaborative technologies like Github and Google Drive. I have worked in Agile/Scrum environments.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t<h5>Communication</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Written</b> - I have extensive experience writing clear and articulate papers, memos, statements, reviews, and reports.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Verbal</b> - I have experience training employees and volunteers, working with customers, and collaborating with teams. In each of these, I practice careful listening and clear expression.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Speaking</b> - I have done many public presentations about my work. I have led many class discussions and lectures.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<b>Visual</b> - I have often accompanied my spoken presentations with visual technologies like Powerpoint.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-xs-4 resumeTitle\">\n\t\t\t<h4>Previous Employment</h4>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-xs-8 resumeDes\">\n\t\t\t<h5>Editor-in-Chief. Essais, Utah Valley University, Orem, UT. Fall, 2016.</h5>\n\t\t\t<p>\n\t\t\t\tOversaw the entire process of publishing this student journal from recruiting more staff, leading editors in revision, keeping authors to their deadlines, checking sources, typesetting and designing the journal, and finally printing and launching.\n\t\t\t</p>\n\t\t\t<h5>Teaching Assistant. Dr. Christa Albrecht-Crane, Utah Valley University, Orem, UT. Fall, 2016.</h5>\n\t\t\t<p>\n\n\t\t\t</p>\n\t\t\t<h5>Research Assistant. Utah Valley University, Orem, UT. Spring-Summer, 2016.</h5>\n\t\t\t<p>\n\t\t\t\tAssisted a staff of librarians in heavy research for professors’ projects. Read more than twenty documents a day and extracted important information. Assisted in archival procedures.\n\t\t\t</p>\n\t\t\t<h5>Research Assistant. Dr. Jans Wager, Utah Valley University, Orem, UT. 2015-2016.</h5>\n\t\t\t<p>\n\t\t\t\tAssisted Dr. Wager in her project developing an entry for Ida Lupino for Oxford Bibliographies. Gathered, organized, and determined relevance of hundreds of sources on Lupino.\n\t\t\t</p>\n\t\t\t<h5>Substitute Teacher. Alpine School District, K-12.</h5>\n\t\t\t<p>\n\n\t\t\t</p>\n\t\t\t<h5>House Manager. Covey Center for the Arts, Provo, UT. 2014-2015.</h5>\n\t\t\t<p>\n\t\t\t\tCollaborated with show directors, trained volunteers, oversaw handling of cash and managed a staff of cashiers and security.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-xs-4 resumeTitle\">\n\t\t\t<h4>Presentations</h4>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-xs-8 resumeDes\">\n\t\t\t<h5>Oxford, Ida, and UVU.</h5>\n\t\t\t<p>\n\t\t\t\tPresented the work done with Dr. Jans Wager at the Utah Symposium on Digital Humanities in February 2016.\n\t\t\t</p>\n\t\t\t<h5>Enlightened Irony.</h5>\n\t\t\t<p>\n\t\t\t\tPresented my paper published in the journal for Essais' Launch Night in April 2016.\n\t\t\t</p>\n\t\t\t<h5>Essais: Publishing for Change.</h5>\n\t\t\t<p>\n\t\t\t\tPresented and co-chaired the panel our group's presentation for the Writing for Social Change Conference at Utah Valley University in November 2016.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-xs-4 resumeTitle\">\n\t\t\t<h4>Publications</h4>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-xs-8 resumeDes\">\n\t\t\t<h5>Enlightened Irony: How Swiftian Desire Developed from Lockean Ideas.</h5>\n\t\t\t<p>\n\t\t\t\tEssais, Spring, 2016. Undergraduate student journal. Department of Literature. Utah Valley University.\n\t\t\t</p>\n\t\t\t<h5>They Took Our Jobs: A Call for Studying Humanities During the Development of Artificial Intelligence.</h5>\n\t\t\t<p>\n\t\t\t\tIntersections, Fall 2016. Undergraduate student journal. Utah Valley University.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-6 bottomlinks\" routerLink=\"/home\">\n\t\t\tTo the Home/Projects Page\n\t\t</div>\n\t\t<div class=\"col-xs-6 bottomlinks\" routerLink=\"/contact\">\n\t\t\tTo the Contact Page\n\t\t</div>\n\t</div>\n</div>\n\n\n\n<div class=\"contactLink\" routerLink=\"/contact\">\n    Contact Me\n</div>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div class=\"homeHeader\" routerLink=\"/home\">\n    <div class=\"homeName\">\n        Tim Dawson\n    </div>\n    <div class=\"homeSubtitle\">\n        Renaissance Man\n    </div>\n</div>\n\n\n\n<div class=\"contactWrapper container\">\n    <div class=\"contactNumber\">(385) 207-6658</div>\n    <a href=\"mailto:timltdawson@gmail.com\" class=\"contactEmail\">timltdawson@gmail.com</a>\n    <div class=\"contactIcons row\">\n    \t<a target=\"_blank\" href=\"https://github.com/luckofcanuck/\" class=\"git col-xs-12 col-sm-offset-5 col-sm-1\"><i class=\"fa fa-github fa-lg\" aria-hidden=\"true\" href=\"\"></i></a>\n    \t<a target=\"_blank\" href=\"https://www.linkedin.com/in/luckofcanuck/\" class=\"linked col-xs-12 col-sm-1\"><i class=\"fa fa-linkedin fa-lg\" aria-hidden=\"true\"></i></a>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<div class=\"homeHeader\" routerLink=\"/about\">\n    <div class=\"homeName\">\n        Tim Dawson\n    </div>\n    <div class=\"homeSubtitle\">\n        Renaissance Man\n    </div>\n</div>\n\n<div class=\"homeContent container-fluid\">\n    <h3 class=\"homePlainText col-xs-12\">Welcome to my portfolio! I'm a full-stack web developer with strengths in: </h3>\n<div class=\"row\">\n    <div class=\"col-xs-12 col-md-3 homeCardHeaders\">\n        <i class=\"fa fa-2x fa-laptop\" aria-hidden=\"true\"></i>\n        <h2>UX/UI</h2>\n        <span class=\"cardText\">Whether you need someone to convert your PSDs or wireframes into a working website, or to collaborate with your team and add functionality or design, or someone to take your ideas from sketching all the way to deployment, I have the experience and skills you need.</span>\n    </div>\n    <div class=\"col-xs-12 col-md-3 homeCardHeaders\">\n        <i class=\"fa fa-2x fa-code\" aria-hidden=\"true\"></i>\n        <h2>Coding</h2>\n        <span class=\"cardText\">I also have ample experience working with full-stack applications. I have built my own APIs, I work with HTTP and CRUD, I build everything your full-stack app might need from complex schemas and routes on the back end, to User Authentication, to an interactive front end.</span>\n    </div>\n    <div class=\"col-xs-12 col-md-3 homeCardHeaders\">\n        <i class=\"fa fa-2x fa-pencil\" aria-hidden=\"true\"></i>\n        <h2>Content</h2>\n        <span class=\"cardText\">I have a strong history of creating and editing content, both long and short-form, in writing, presentations, audio, and much, much more.</span>\n    </div>\n    <div class=\"col-xs-12 col-md-3 homeCardHeaders\">\n        <i class=\"fa fa-2x fa-search\" aria-hidden=\"true\"></i>\n        <h2>Research</h2>\n        <span class=\"cardText\">From pouring over hefty tomes to better contribute in academic conversations, to gathering and sorting countless sources on specific topics for various projects, to staying up to date and fully in-the-know regarding any necessary trends-- I have the extensive research experience to be your most informed resource.</span>\n    </div>\n</div>\n\n<h1>Keep Scrolling to See Projects!</h1>\n<i class=\"fa fa-chevron-down down\" aria-hidden=\"true\"></i>\n<h4 routerLink=\"/about\">[Or Click Here to Learn More About Me and Specifics About My Skillset]</h4>\n</div>\n\n<div class=\"projectWrapper\">\n    <app-projects></app-projects>\n</div>\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2>Scroll through this page to compare the original layout of KandJ Diaries to my conversion.</h2>\n            <p>\n                The main differences are in the height of the navbar, and in the responsive nature of the actual blog entries. Both of these, I attempted to make neater in my conversion rather than exactly replicate the original.\n            </p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-xs-6\">\n            <h4>KandJ Jumbotron/Nav</h4>\n            <img src=\"/assets/img/jumboK.png\" />\n        </div>\n        <div class=\"col-xs-12 col-xs-6\">\n            <h4>My Jumbotron/Nav</h4>\n            <img src=\"/assets/img/jumboMine.png\" />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-xs-6\">\n            <h4>KandJ Layout/Entries with Adverts</h4>\n            <img src=\"/assets/img/mainK.png\" />\n        </div>\n        <div class=\"col-xs-12 col-xs-6\">\n            <h4>My Layout/Entries with Adverts</h4>\n            <img src=\"/assets/img/mainMine.png\" />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-xs-6\">\n            <h4>KandJ Entry on Smaller Screen</h4>\n            <img class=\"tall\" src=\"/assets/img/tallK1.png\" />\n            <img class=\"tall\" src=\"/assets/img/tallk2.png\" />\n        </div>\n        <div class=\"col-xs-12 col-xs-6\">\n            <h4>My Entry on Smaller Screen</h4>\n            <img class=\"tall\" src=\"/assets/img/tallMine.png\" />\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div id=\"nav-icon\" (click)=\"showing = !showing\" [ngClass]=\"showing ? 'x': 'normal'\">\n    <span id=\"span1\"></span>\n    <span id=\"span2\"></span>\n    <span id=\"span3\"></span>\n</div>\n\n<div [ngClass]=\"showing ? 'navShowing': 'navHiding'\">\n\t\t<h1>Explore: </h1>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row boxesWrapper\">\n\t\t\t\t<div class=\"col-xs-12 col-md-4 navboxWrap\">\n\t\t\t\t\t<div class=\"navbox\" (click)=\"showing = !showing\" routerLink=\"/home\">\n\t\t\t\t\t\tHome / Projects\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12 col-md-4 navboxWrap\">\n\t\t\t\t\t<div class=\"navbox\" (click)=\"showing = !showing\" routerLink=\"/about\">\n\t\t\t\t\t\tAbout\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12 col-md-4 navboxWrap\">\n\t\t\t\t\t<div class=\"navbox\" (click)=\"showing = !showing\" routerLink=\"/contact\">\n\t\t\t\t\t\tContact\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <footer-directive ng-class=\"showing ? 'footerDirect': 'footerHiding'\"></footer-directive> -->\n\t</div>\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"projectComponentWrapper\">\n    <div class=\"projectRepeated\" *ngFor=\"let project of projects; let i = index\" class=\"col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-0\">\n        \t<div class=\"projectTitle\" *ngIf=\"!project[i]\">\n        \t\t{{project.title}}\n        \t</div>\n        \t<div class=\"projectBody\">\n        \t\t<div class=\"projectImg\" *ngIf=\"!project[i]\">\n        \t\t\t<a href=\"{{project.url}}\" target=\"_blank\"><img [src]=\"project.img\" /></a>\n        \t\t</div>\n            \t<div class=\"projectSubtitle\" *ngIf=\"!project[i]\">\n            \t\t{{project.subtitle}} <span class=\"showDes\" (click)=\"project[i] = !project[i]\">[More]</span>\n            \t</div>\n        \t\t<div class=\"projectDescription\" *ngIf=\"project[i]\">\n                    <div id=\"nav-icon\" (click)=\"project[i] = false\">\n                        <span id=\"span1\"></span>\n                        <span id=\"span2\"></span>\n                        <span id=\"span3\"></span>\n                    </div>\n                    <span class=\"desText\">{{project.description}}</span>\n                    <br />\n                    <a class=\"desShowProject\" href=\"{{project.url}}\" target=\"_blank\">[See the project]</a>\n        \t\t</div>\n        \t</div>\n    </div>\n</div>\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(102);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(164),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(165),
        styles: [__webpack_require__(157)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kandj_kandj_component__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
    { path: 'kandj', component: __WEBPACK_IMPORTED_MODULE_11__kandj_kandj_component__["a" /* KandjComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__kandj_kandj_component__["a" /* KandjComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(166),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(167),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KandjComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KandjComponent = (function () {
    function KandjComponent() {
    }
    KandjComponent.prototype.ngOnInit = function () {
    };
    return KandjComponent;
}());
KandjComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-kandj',
        template: __webpack_require__(168),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], KandjComponent);

//# sourceMappingURL=kandj.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.bundle.js.map