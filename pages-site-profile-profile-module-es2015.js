(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-profile-profile-module"],{

/***/ "./src/app/pages/site/profile/profile-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/site/profile/profile-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/site/profile/profile.component.ts");





const routes = [{ path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] }];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/site/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/site/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");



class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 7, vars: 0, consts: [[1, "tint-image"], ["fxLayoutAlign", "center center", "fxLayout", "column", 2, "width", "100%", "height", "100vh"], ["src", "https://avatars2.githubusercontent.com/u/7107923?s=460&u=2982299046e6e3631ae2f5a967545a4a5f49cb2f&v=4", 1, "profile", "scale-in-center"], [1, "mat-display-4", "white"], [1, "mat-display-2", "white", 2, "background-color", "rgba(0, 0, 0, 0.4)"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Randika Hapugoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " @ hrandika ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"]], styles: [".tint-image[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(\"/assets/img/alessandro-pacilio-x-8qGCHJMGQ-unsplash.jpg\");\n  background-size: 100%;\n  min-height: 100vh;\n}\n\n.profile[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 15%;\n  margin-bottom: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2l0ZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxSUFLb0Y7RUFFcEYscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUxuQjs7QUFRQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0FBTHBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2l0ZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGludC1pbWFnZSB7XG4gIGJhY2tncm91bmQ6IFxuICAgIC8qIHRvcCwgdHJhbnNwYXJlbnQgcmVkLCBmYWtlZCB3aXRoIGdyYWRpZW50ICovIGxpbmVhci1ncmFkaWVudChcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC40NSksXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuNDUpXG4gICAgKSxcbiAgICAvKiBib3R0b20sIGltYWdlICovIHVybCgnL2Fzc2V0cy9pbWcvYWxlc3NhbmRyby1wYWNpbGlvLXgtOHFHQ0hKTUdRLXVuc3BsYXNoLmpwZycpO1xuXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5wcm9maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTUlO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/site/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/site/profile/profile.module.ts ***!
  \******************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/site/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/site/profile/profile.component.ts");






class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-site-profile-profile-module-es2015.js.map