function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-site-home-home-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-site-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/site/home/home.module */
        "./src/app/pages/site/home/home.module.ts")).then(function (m) {
          return m.SiteHomeModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'post/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-site-post-post-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-site-post-post-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/site/post/post.module */
        "./src/app/pages/site/post/post.module.ts")).then(function (m) {
          return m.PostModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-site-profile-profile-module */
        "pages-site-profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/site/profile/profile.module */
        "./src/app/pages/site/profile/profile.module.ts")).then(function (m) {
          return m.ProfileModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        initialNavigation: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            initialNavigation: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_shared_state_app_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/shared/state/app/app.action */
    "./src/shared/state/app/app.action.ts");
    /* harmony import */


    var src_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/state/app/app.state */
    "./src/shared/state/app/app.state.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

    var _c0 = ["content"];

    var _c1 = function _c1(a0) {
      return {
        "dark-theme": a0
      };
    };

    var _c2 = function _c2(a0, a1) {
      return {
        "white": a0,
        "dark": a1
      };
    };

    var _c3 = function _c3() {
      return [""];
    };

    var _c4 = function _c4() {
      return ["profile"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(store, iconRegistry, sanitizer, window, platformId) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.store = store;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.window = window;
        this.platformId = platformId;
        this.white = false;
        this.dark = false;
        this.isDark = false;
        var svgUrl = 'assets/svg/app.svg';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(platformId)) svgUrl = "http://localhost:4200/".concat(svgUrl);
        var x = this.sanitizer.bypassSecurityTrustResourceUrl(svgUrl);
        this.iconRegistry.addSvgIconSetInNamespace('app', x);
        this.store.select(src_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].darkMode).subscribe(function (d) {
          _this.isDark = d;

          _this.updateTheme();
        });
      } // constructor


      _createClass(AppComponent, [{
        key: "onScroll",
        value: function onScroll(event) {
          this.updateTheme();
        }
      }, {
        key: "updateTheme",
        value: function updateTheme() {
          if (this.scroll > 0 || this.window.pageYOffset > 0) {
            if (this.isDark) this.dark = true;else this.white = true;
          } else {
            this.white = false;
            this.dark = false;
          }
        }
      }, {
        key: "onDarkMode",
        value: function onDarkMode(event) {
          this.store.dispatch(new src_shared_state_app_app_action__WEBPACK_IMPORTED_MODULE_2__["DarkMode"](event.checked));
        }
      }]);

      return AppComponent;
    }(); // class


    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('window'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
        }
      },
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 27,
      vars: 12,
      consts: [[3, "ngClass"], ["fxLayoutAlign", "start center", 1, "toolbar", 3, "ngClass"], ["fxShow.gt-xs", "", "fxHide", "", "fxFlex", "15"], ["fxShow.xs", "", "fxHide", "", "mat-icon-button", ""], ["svgIcon", "app:menu"], [3, "routerLink"], ["width", "300", "height", "350", "src", "assets/img/logo.png", 1, "logo"], ["fxFlex", ""], ["fxShow.gt-xs", "", "fxHide", ""], ["mat-button", "", 3, "routerLink"], ["mat-button", "", "target", " _blank", "href", "https://www.facebook.com"], ["mat-button", "", "target", " _blank", "href", "https://github.com/Techsfinity"], ["mat-button", "", "target", " _blank", "href", "https://www.linkedin.com/company/techsfinity/"], ["mat-button", "", "target", " _blank", "href", "#"], [3, "checked", "change"], ["svgIcon", "app:dark", 1, "dark-mode-icon"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-sidenav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Blogger");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-slide-toggle", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_mat_slide_toggle_change_23_listener($event) {
            return ctx.onDarkMode($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx.isDark));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c2, ctx.white, ctx.dark));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDark);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"]],
      styles: [".dark-mode-icon[_ngcontent-%COMP%] {\n  margin-left: 1vw;\n}\n\n.top-margin[_ngcontent-%COMP%] {\n  margin-top: 64px;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: white;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n}\n\n.white[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.dark[_ngcontent-%COMP%] {\n  background-color: #303030;\n  color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\nfooter[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  background-color: #999;\n  height: 20vh;\n}\n\n.fade-in-top[_ngcontent-%COMP%] {\n  -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n\n\n@-webkit-keyframes fade-in-top {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes fade-in-top {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n\n\n@media screen and (min-width: 0px) and (max-width: 599.99px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 30px;\n    display: block;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUdBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0FBQWQ7O0FBR0E7RUFDRSw0RUFBNEU7RUFDNUUsb0VBQW9FO0FBQXRFOztBQUVBOzs7OzttREFLbUQ7O0FBRW5EO0VBQ0U7SUFFRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUFaO0VBRUE7SUFFRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUFaO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7RUFDQTtJQUVFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7QUFDRjs7QUFFQTs7Q0FFQzs7QUFDRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyay1tb2RlLWljb24ge1xuICBtYXJnaW4tbGVmdDogMXZ3O1xufVxuXG4udG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG5cbi50b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG5cbn1cblxuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICBoZWlnaHQ6IDIwdmg7XG59XG5cbi5mYWRlLWluLXRvcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1pbi10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjAtNy0yMiAyMzoxNjo0NFxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4tdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLyoqXG4gIFhTXG4qL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: Window,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['window']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      }, {
        el: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content', {
            "static": true
          }]
        }],
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: windowFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "windowFactory", function () {
      return windowFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngxs/storage-plugin */
    "./node_modules/@ngxs/storage-plugin/__ivy_ngcc__/fesm2015/ngxs-storage-plugin.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/shared/state/app/app.state */
    "./src/shared/state/app/app.state.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    function windowFactory() {
      return window;
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: 'window',
        useFactory: windowFactory
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"].withServerTransition({
        appId: 'serverApp'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], // Ngxs
      _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["NgxsModule"].forRoot([src_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_14__["AppState"]], {
        developmentMode: !src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production,
        executionStrategy: _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["NoopNgxsExecutionStrategy"]
      }), _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsStoragePluginModule"].forRoot(), ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forRoot(), //
      _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["ɵj"], _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsStoragePluginModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"], //
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"].withServerTransition({
            appId: 'serverApp'
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], // Ngxs
          _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["NgxsModule"].forRoot([src_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_14__["AppState"]], {
            developmentMode: !src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production,
            executionStrategy: _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["NoopNgxsExecutionStrategy"]
          }), _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsStoragePluginModule"].forRoot(), ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forRoot(), //
          _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"]],
          providers: [{
            provide: 'window',
            useFactory: windowFactory
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  "./src/shared/services/theme/theme.service.ts":
  /*!****************************************************!*\
    !*** ./src/shared/services/theme/theme.service.ts ***!
    \****************************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcSharedServicesThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService(document) {
        _classCallCheck(this, ThemeService);

        this.document = document;
      }

      _createClass(ThemeService, [{
        key: "loadStyle",
        value: function loadStyle(styleName) {
          var head = this.document.getElementsByTagName('head')[0];
          var themeLink = this.document.getElementById('client-theme');

          if (themeLink) {
            themeLink.href = styleName;
          } else {
            var style = this.document.createElement('link');
            style.id = 'client-theme';
            style.rel = 'stylesheet';
            style.href = "".concat(styleName);
            head.appendChild(style);
          }
        } // loadStyle()

      }]);

      return ThemeService;
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/state/app/app.action.ts":
  /*!********************************************!*\
    !*** ./src/shared/state/app/app.action.ts ***!
    \********************************************/

  /*! exports provided: DarkMode, SetPost */

  /***/
  function srcSharedStateAppAppActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DarkMode", function () {
      return DarkMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetPost", function () {
      return SetPost;
    });

    var DarkMode = function DarkMode(enable) {
      _classCallCheck(this, DarkMode);

      this.enable = enable;
    };

    DarkMode.type = '[App] DarkMode';

    var SetPost = function SetPost(post) {
      _classCallCheck(this, SetPost);

      this.post = post;
    };

    SetPost.type = '[App] SetPost';
    /***/
  },

  /***/
  "./src/shared/state/app/app.state.ts":
  /*!*******************************************!*\
    !*** ./src/shared/state/app/app.state.ts ***!
    \*******************************************/

  /*! exports provided: AppStateModel, AppState */

  /***/
  function srcSharedStateAppAppStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppStateModel", function () {
      return AppStateModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppState", function () {
      return AppState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _app_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.action */
    "./src/shared/state/app/app.action.ts");
    /* harmony import */


    var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/theme/theme.service */
    "./src/shared/services/theme/theme.service.ts");

    var AppStateModel = function AppStateModel() {
      _classCallCheck(this, AppStateModel);
    };

    var AppState = /*#__PURE__*/function () {
      function AppState(theme) {
        _classCallCheck(this, AppState);

        this.theme = theme;
      }

      _createClass(AppState, [{
        key: "ngxsOnInit",
        value: function ngxsOnInit(_ref) {
          var getState = _ref.getState;
          this.applyTheme(getState().darkMode);
        }
      }, {
        key: "darkMode",
        value: function darkMode(_ref2, action) {
          var patchState = _ref2.patchState;
          var darkMode = action.enable;
          this.applyTheme(darkMode);
          return patchState({
            darkMode: darkMode
          });
        } //darkMode()

      }, {
        key: "setPost",
        value: function setPost(_ref3, action) {
          var patchState = _ref3.patchState;
          return patchState({
            post: action.post
          });
        }
      }, {
        key: "applyTheme",
        value: function applyTheme(darkMode) {
          if (darkMode) this.theme.loadStyle('okaidia.css');else this.theme.loadStyle('vs.css');
        }
      }], [{
        key: "darkMode",
        value: function darkMode(state) {
          return state.darkMode;
        }
      }, {
        key: "post",
        value: function post(state) {
          return state.post;
        }
      }]);

      return AppState;
    }(); // class


    AppState.ɵfac = function AppState_Factory(t) {
      return new (t || AppState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]));
    };

    AppState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppState,
      factory: AppState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_3__["DarkMode"])], AppState.prototype, "darkMode", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_3__["SetPost"])], AppState.prototype, "setPost", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], AppState, "darkMode", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], AppState, "post", null);
    AppState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
      name: 'app',
      defaults: {
        darkMode: false
      }
    })], AppState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
        }];
      }, {
        darkMode: [],
        setPost: []
      });
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/osanda/Documents/workspace-techsfinity/techsfinity.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map