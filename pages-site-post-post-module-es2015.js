(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-post-post-module"],{

/***/ "./src/app/pages/site/post/post-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/site/post/post-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRoutingModule", function() { return PostRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.component */ "./src/app/pages/site/post/post.component.ts");





const routes = [{ path: '', component: _post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"] }];
class PostRoutingModule {
}
PostRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostRoutingModule });
PostRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostRoutingModule_Factory(t) { return new (t || PostRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/site/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/site/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/state/app/app.state */ "./src/shared/state/app/app.state.ts");
/* harmony import */ var src_shared_utils_all_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/utils/all-posts */ "./src/shared/utils/all-posts.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













function PostComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background": a0, "background-repeat": "no-repeat", "background-size": "cover" }; };
class PostComponent {
    constructor(store, activatedRoute, meta) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.meta = meta;
        this.store.selectOnce(src_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_1__["AppState"].post).subscribe((post) => {
            this.post = post;
            // if post is null mean user is coming from a direct url
            if (!post) {
                const url = this.activatedRoute.snapshot.params['id'];
                this.post = Object(src_shared_utils_all_posts__WEBPACK_IMPORTED_MODULE_2__["getPostByUrl"])(url);
            }
            this.addSocialMeta(this.post);
        });
    } // constructor
    ngOnInit() { }
    addSocialMeta(post) {
        // Add facebook tags
        this.meta.addTags([
            {
                name: 'og:title',
                content: post.title,
            },
            {
                name: 'og:description',
                content: post.description,
            },
            {
                name: 'og:image',
                content: post.image,
            },
            {
                name: 'og:url',
                content: `https://hrandika.github.io/post/${post.url}`,
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
        ]);
    } // addFacebookMeta()
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 11, vars: 9, consts: [[3, "ngStyle"], ["fxLayoutAlign", "center center", "fxLayout", "column", 2, "width", "100%", "height", "100vh"], [1, "mat-display-3", "white", "center"], [1, "mat-display-1", "white", "center"], ["fxLayoutGap", "2vw"], ["mat-icon-button", "", "class", "large white", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "post"], ["fxFlex", "50", "fxFlex.xs", "95", "lineNumbers", "", 3, "src", "start"], ["mat-icon-button", "", 1, "large", "white"], ["svgIcon", "app:github"], ["svgIcon", "app:youtube"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_button_8_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "markdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.90)),url(" + (ctx.post == null ? null : ctx.post.image) + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post == null ? null : ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.post == null ? null : ctx.post.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.github);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.youtube);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.post == null ? null : ctx.post.markdown)("start", 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultStyleDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_9__["MarkdownComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: [".post[_ngcontent-%COMP%] {\n  margin: 4vh 0 4vh 0;\n}\n\n.white[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.center[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\n\n.mat-icon-button.large[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n}\n\n.mat-icon-button.large[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n}\n\n\n\n@media screen and (min-width: 0px) and (max-width: 599.99px) {\n  .mat-display-3[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .center[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2l0ZS9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBSkE7RUFNSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFFckI7O0FBRUE7O0NBRUM7O0FBQ0Q7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFFQTtJQUNFLFVBQVU7RUFBWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2l0ZS9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCB7XG4gIG1hcmdpbjogNHZoIDAgNHZoIDA7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbi5sYXJnZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgfVxufVxuXG4vKipcbiAgWFNcbiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xuICAubWF0LWRpc3BsYXktMyB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG4gIC5tYXQtZGlzcGxheS0xIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuY2VudGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss'],
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/site/post/post.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/site/post/post.module.ts ***!
  \************************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-routing.module */ "./src/app/pages/site/post/post-routing.module.ts");
/* harmony import */ var _post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.component */ "./src/app/pages/site/post/post.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class PostModule {
}
PostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PostModule });
PostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PostModule_Factory(t) { return new (t || PostModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PostModule, { declarations: [_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _post_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _post_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-site-post-post-module-es2015.js.map