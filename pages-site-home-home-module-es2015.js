(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-home-home-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
  \*******************************************************************/
/*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let LayoutModule = /** @class */ (() => {
    class LayoutModule {
    }
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();
    return LayoutModule;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
let MediaMatcher = /** @class */ (() => {
    class MediaMatcher {
        constructor(_platform) {
            this._platform = _platform;
            this._matchMedia = this._platform.isBrowser && window.matchMedia ?
                // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
                // call it from a different scope.
                window.matchMedia.bind(window) :
                noopMatchMedia;
        }
        /**
         * Evaluates the given media query and returns the native MediaQueryList from which results
         * can be retrieved.
         * Confirms the layout engine will trigger for the selector query provided and returns the
         * MediaQueryList for the query provided.
         */
        matchMedia(query) {
            if (this._platform.WEBKIT) {
                createEmptyStyleRule(query);
            }
            return this._matchMedia(query);
        }
    }
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
    MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
    MediaMatcher.ctorParameters = () => [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }]; }, null); })();
    return MediaMatcher;
})();
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return {
        matches: query === 'all' || query === '',
        media: query,
        addListener: () => { },
        removeListener: () => { }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility for checking the matching state of @media queries. */
let BreakpointObserver = /** @class */ (() => {
    class BreakpointObserver {
        constructor(_mediaMatcher, _zone) {
            this._mediaMatcher = _mediaMatcher;
            this._zone = _zone;
            /**  A map of all media queries currently being listened for. */
            this._queries = new Map();
            /** A subject for all other observables to takeUntil based on. */
            this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        /** Completes the active subject, signalling to all other observables to complete. */
        ngOnDestroy() {
            this._destroySubject.next();
            this._destroySubject.complete();
        }
        /**
         * Whether one or more media queries match the current viewport size.
         * @param value One or more media queries to check.
         * @returns Whether any of the media queries match.
         */
        isMatched(value) {
            const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
            return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
        }
        /**
         * Gets an observable of results for the given queries that will emit new results for any changes
         * in matching of the given queries.
         * @param value One or more media queries to check.
         * @returns A stream of matches for the given queries.
         */
        observe(value) {
            const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
            const observables = queries.map(query => this._registerQuery(query).observable);
            let stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables);
            // Emit the first state immediately, and then debounce the subsequent emissions.
            stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
            return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((breakpointStates) => {
                const response = {
                    matches: false,
                    breakpoints: {},
                };
                breakpointStates.forEach((state) => {
                    response.matches = response.matches || state.matches;
                    response.breakpoints[state.query] = state.matches;
                });
                return response;
            }));
        }
        /** Registers a specific query to be listened for. */
        _registerQuery(query) {
            // Only set up a new MediaQueryList if it is not already being listened for.
            if (this._queries.has(query)) {
                return this._queries.get(query);
            }
            const mql = this._mediaMatcher.matchMedia(query);
            // Create callback for match changes and add it is as a listener.
            const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
                // back into the zone because matchMedia is only included in Zone.js by loading the
                // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
                // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
                // patches it.
                const handler = (e) => this._zone.run(() => observer.next(e));
                mql.addListener(handler);
                return () => {
                    mql.removeListener(handler);
                };
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((nextMql) => ({ query, matches: nextMql.matches })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
            // Add the MediaQueryList to the set of queries.
            const output = { observable: queryObservable, mql };
            this._queries.set(query, output);
            return output;
        }
    }
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
    BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
    BreakpointObserver.ctorParameters = () => [
        { type: MediaMatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
    return BreakpointObserver;
})();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
    return queries.map((query) => query.split(','))
        .reduce((a1, a2) => a1.concat(a2))
        .map(query => query.trim());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
const Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js ***!
  \********************************************************************/
/*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d, ɵangular_material_src_cdk_overlay_overlay_e, ɵangular_material_src_cdk_overlay_overlay_f, ɵangular_material_src_cdk_overlay_overlay_g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function() { return BlockScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function() { return CloseScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function() { return ConnectedOverlayPositionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function() { return ConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function() { return ConnectionPositionPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function() { return FlexibleConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function() { return FullscreenOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function() { return GlobalPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function() { return NoopScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function() { return OverlayConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function() { return OverlayKeyboardDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function() { return OverlayPositionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function() { return RepositionScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function() { return ScrollStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function() { return ScrollingVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function() { return validateHorizontalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function() { return validateVerticalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function() { return OVERLAY_CONTAINER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function() { return OVERLAY_CONTAINER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_e", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_f", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_g", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]; });

/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");

















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
class BlockScrollStrategy {
    constructor(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    attach() { }
    /** Blocks page-level scroll while the attached overlay is open. */
    enable() {
        if (this._canBeEnabled()) {
            const root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    }
    /** Unblocks page-level scroll while the attached overlay is open. */
    disable() {
        if (this._isEnabled) {
            const html = this._document.documentElement;
            const body = this._document.body;
            const htmlStyle = html.style;
            const bodyStyle = body.style;
            const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            const previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
        }
    }
    _canBeEnabled() {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        const html = this._document.documentElement;
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        const body = this._document.body;
        const viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error(`Scroll strategy has already been attached.`);
}

/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
class CloseScrollStrategy {
    constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /** Detaches the overlay ref and disables the scroll strategy. */
        this._detach = () => {
            this.disable();
            if (this._overlayRef.hasAttached()) {
                this._ngZone.run(() => this._overlayRef.detach());
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /** Enables the closing of the attached overlay on scroll. */
    enable() {
        if (this._scrollSubscription) {
            return;
        }
        const stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(() => {
                const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
                    this._detach();
                }
                else {
                    this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    }
    /** Disables the closing the attached overlay on scroll. */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    detach() {
        this.disable();
        this._overlayRef = null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Scroll strategy that doesn't do anything. */
class NoopScrollStrategy {
    /** Does nothing, as this scroll strategy is a no-op. */
    enable() { }
    /** Does nothing, as this scroll strategy is a no-op. */
    disable() { }
    /** Does nothing, as this scroll strategy is a no-op. */
    attach() { }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 * @docs-private
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(containerBounds => {
        const outsideAbove = element.bottom < containerBounds.top;
        const outsideBelow = element.top > containerBounds.bottom;
        const outsideLeft = element.right < containerBounds.left;
        const outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @returns Whether the element is clipped
 * @docs-private
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(scrollContainerRect => {
        const clippedAbove = element.top < scrollContainerRect.top;
        const clippedBelow = element.bottom > scrollContainerRect.bottom;
        const clippedLeft = element.left < scrollContainerRect.left;
        const clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
class RepositionScrollStrategy {
    constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /** Enables repositioning of the attached overlay on scroll. */
    enable() {
        if (!this._scrollSubscription) {
            const throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
                this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (this._config && this._config.autoClose) {
                    const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
                    const { width, height } = this._viewportRuler.getViewportSize();
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    const parentRects = [{ width, height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        this.disable();
                        this._ngZone.run(() => this._overlayRef.detach());
                    }
                }
            });
        }
    }
    /** Disables repositioning of the attached overlay on scroll. */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    detach() {
        this.disable();
        this._overlayRef = null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
let ScrollStrategyOptions = /** @class */ (() => {
    class ScrollStrategyOptions {
        constructor(_scrollDispatcher, _viewportRuler, _ngZone, document) {
            this._scrollDispatcher = _scrollDispatcher;
            this._viewportRuler = _viewportRuler;
            this._ngZone = _ngZone;
            /** Do nothing on scroll. */
            this.noop = () => new NoopScrollStrategy();
            /**
             * Close the overlay as soon as the user scrolls.
             * @param config Configuration to be used inside the scroll strategy.
             */
            this.close = (config) => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config);
            /** Block scrolling. */
            this.block = () => new BlockScrollStrategy(this._viewportRuler, this._document);
            /**
             * Update the overlay's position on scroll.
             * @param config Configuration to be used inside the scroll strategy.
             * Allows debouncing the reposition calls.
             */
            this.reposition = (config) => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config);
            this._document = document;
        }
    }
ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) { return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
    ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: ScrollStrategyOptions, providedIn: "root" });
    ScrollStrategyOptions.ctorParameters = () => [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();
    return ScrollStrategyOptions;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Initial configuration used when creating an overlay. */
class OverlayConfig {
    constructor(config) {
        /** Strategy to be used when handling scroll events while the overlay is open. */
        this.scrollStrategy = new NoopScrollStrategy();
        /** Custom class to add to the overlay pane. */
        this.panelClass = '';
        /** Whether the overlay has a backdrop. */
        this.hasBackdrop = false;
        /** Custom class to add to the backdrop */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.disposeOnNavigation = false;
        if (config) {
            // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
            const configKeys = Object.keys(config);
            for (const key of configKeys) {
                if (config[key] !== undefined) {
                    // TypeScript, as of version 3.5, sees the left-hand-side of this expression
                    // as "I don't know *which* key this is, so the only valid value is the intersection
                    // of all the posible values." In this case, that happens to be `undefined`. TypeScript
                    // is not smart enough to see that the right-hand-side is actually an access of the same
                    // exact type with the same exact key, meaning that the value type must be identical.
                    // So we use `any` to work around this.
                    this[key] = config[key];
                }
            }
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The points of the origin element and the overlay element to connect. */
class ConnectionPositionPair {
    constructor(origin, overlay, 
    /** Offset along the X axis. */
    offsetX, 
    /** Offset along the Y axis. */
    offsetY, 
    /** Class(es) to be applied to the panel while this position is active. */
    panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
}
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  @docs-private
 */
class ScrollingVisibility {
}
/** The change event emitted by the strategy when a fallback position is used. */
let ConnectedOverlayPositionChange = /** @class */ (() => {
    class ConnectedOverlayPositionChange {
        constructor(
        /** The position used as a result of this change. */
        connectionPair, 
        /** @docs-private */
        scrollableViewProperties) {
            this.connectionPair = connectionPair;
            this.scrollableViewProperties = scrollableViewProperties;
        }
    }
    ConnectedOverlayPositionChange.ctorParameters = () => [
        { type: ConnectionPositionPair },
        { type: ScrollingVisibility, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ];
    return ConnectedOverlayPositionChange;
})();
/**
 * Validates whether a vertical position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` +
            `Expected "top", "bottom" or "center".`);
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` +
            `Expected "start", "end" or "center".`);
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
let OverlayKeyboardDispatcher = /** @class */ (() => {
    class OverlayKeyboardDispatcher {
        constructor(document) {
            /** Currently attached overlays in the order they were attached. */
            this._attachedOverlays = [];
            /** Keyboard event listener that will be attached to the body. */
            this._keydownListener = (event) => {
                const overlays = this._attachedOverlays;
                for (let i = overlays.length - 1; i > -1; i--) {
                    // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                    // We want to target the most recent overlay, rather than trying to match where the event came
                    // from, because some components might open an overlay, but keep focus on a trigger element
                    // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                    // because we don't want overlays that don't handle keyboard events to block the ones below
                    // them that do.
                    if (overlays[i]._keydownEvents.observers.length > 0) {
                        overlays[i]._keydownEvents.next(event);
                        break;
                    }
                }
            };
            this._document = document;
        }
        ngOnDestroy() {
            this._detach();
        }
        /** Add a new overlay to the list of attached overlay refs. */
        add(overlayRef) {
            // Ensure that we don't get the same overlay multiple times.
            this.remove(overlayRef);
            // Lazily start dispatcher once first overlay is added
            if (!this._isAttached) {
                this._document.body.addEventListener('keydown', this._keydownListener);
                this._isAttached = true;
            }
            this._attachedOverlays.push(overlayRef);
        }
        /** Remove an overlay from the list of attached overlay refs. */
        remove(overlayRef) {
            const index = this._attachedOverlays.indexOf(overlayRef);
            if (index > -1) {
                this._attachedOverlays.splice(index, 1);
            }
            // Remove the global listener once there are no more overlays.
            if (this._attachedOverlays.length === 0) {
                this._detach();
            }
        }
        /** Detaches the global keyboard event listener. */
        _detach() {
            if (this._isAttached) {
                this._document.body.removeEventListener('keydown', this._keydownListener);
                this._isAttached = false;
            }
        }
    }
OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) { return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
    OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
    OverlayKeyboardDispatcher.ctorParameters = () => [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();
    return OverlayKeyboardDispatcher;
})();
/** @docs-private @deprecated @breaking-change 8.0.0 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
const OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayKeyboardDispatcher],
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Whether we're in a testing environment.
 * TODO(crisbeto): remove this once we have an overlay testing module.
 */
const isTestEnvironment = typeof window !== 'undefined' && !!window &&
    !!(window.__karma__ || window.jasmine);
/** Container inside which all overlays will render. */
let OverlayContainer = /** @class */ (() => {
    class OverlayContainer {
        constructor(document, 
        /**
         * @deprecated `platform` parameter to become required.
         * @breaking-change 10.0.0
         */
        _platform) {
            this._platform = _platform;
            this._document = document;
        }
        ngOnDestroy() {
            const container = this._containerElement;
            if (container && container.parentNode) {
                container.parentNode.removeChild(container);
            }
        }
        /**
         * This method returns the overlay container element. It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @returns the container element
         */
        getContainerElement() {
            if (!this._containerElement) {
                this._createContainer();
            }
            return this._containerElement;
        }
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         */
        _createContainer() {
            // @breaking-change 10.0.0 Remove null check for `_platform`.
            const isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
            const containerClass = 'cdk-overlay-container';
            if (isBrowser || isTestEnvironment) {
                const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], ` +
                    `.${containerClass}[platform="test"]`);
                // Remove any old containers from the opposite platform.
                // This can happen when transitioning from the server to the client.
                for (let i = 0; i < oppositePlatformContainers.length; i++) {
                    oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
                }
            }
            const container = this._document.createElement('div');
            container.classList.add(containerClass);
            // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
            // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
            // The new logic was a little too aggressive since it was breaking some legitimate use cases.
            // To mitigate the problem we made it so that only containers from a different platform are
            // cleared, but the side-effect was that people started depending on the overly-aggressive
            // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
            // module which does the cleanup, we try to detect that we're in a test environment and we
            // always clear the container. See #17006.
            // TODO(crisbeto): remove the test environment check once we have an overlay testing module.
            if (isTestEnvironment) {
                container.setAttribute('platform', 'test');
            }
            else if (!isBrowser) {
                container.setAttribute('platform', 'server');
            }
            this._document.body.appendChild(container);
            this._containerElement = container;
        }
    }
OverlayContainer.ɵfac = function OverlayContainer_Factory(t) { return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); };
    OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); }, token: OverlayContainer, providedIn: "root" });
    OverlayContainer.ctorParameters = () => [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }]; }, null); })();
    return OverlayContainer;
})();
/** @docs-private @deprecated @breaking-change 8.0.0 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
const OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayContainer],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
class OverlayRef {
    constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, 
    // @breaking-change 8.0.0 `_location` parameter to be made required.
    _location) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._backdropClickHandler = (event) => this._backdropClick.next(event);
        /** Stream of keydown events dispatched to this overlay. */
        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;
            this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
    }
    /** The overlay's HTML element */
    get overlayElement() {
        return this._pane;
    }
    /** The overlay's backdrop HTML element. */
    get backdropElement() {
        return this._backdropElement;
    }
    /**
     * Wrapper around the panel element. Can be used for advanced
     * positioning where a wrapper with specific styling is
     * required around the overlay pane.
     */
    get hostElement() {
        return this._host;
    }
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    attach(portal) {
        let attachResult = this._portalOutlet.attach(portal);
        // Update the pane element with the given configuration.
        if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
        }
        if (this._positionStrategy) {
            this._positionStrategy.attach(this);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._scrollStrategy) {
            this._scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(() => {
            // The overlay could've been detached before the zone has stabilized.
            if (this.hasAttached()) {
                this.updatePosition();
            }
        });
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        // @breaking-change 8.0.0 remove the null check for `_location`
        // once the constructor parameter is made required.
        if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(() => this.dispose());
        }
        return attachResult;
    }
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    detach() {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
        }
        if (this._scrollStrategy) {
            this._scrollStrategy.disable();
        }
        const detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking.
        this._keyboardDispatcher.remove(this);
        // Keeping the host element in the DOM can cause scroll jank, because it still gets
        // rendered, even though it's transparent and unclickable which is why we remove it.
        this._detachContentWhenStable();
        // Stop listening for location changes.
        this._locationChanges.unsubscribe();
        return detachmentResult;
    }
    /** Cleans up the overlay from the DOM. */
    dispose() {
        const isAttached = this.hasAttached();
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._disposeScrollStrategy();
        this.detachBackdrop();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);
            this._host = null;
        }
        this._previousHostParent = this._pane = null;
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    }
    /** Whether the overlay has attached content. */
    hasAttached() {
        return this._portalOutlet.hasAttached();
    }
    /** Gets an observable that emits when the backdrop has been clicked. */
    backdropClick() {
        return this._backdropClick.asObservable();
    }
    /** Gets an observable that emits when the overlay has been attached. */
    attachments() {
        return this._attachments.asObservable();
    }
    /** Gets an observable that emits when the overlay has been detached. */
    detachments() {
        return this._detachments.asObservable();
    }
    /** Gets an observable of keydown events targeted to this overlay. */
    keydownEvents() {
        return this._keydownEvents.asObservable();
    }
    /** Gets the current overlay configuration, which is immutable. */
    getConfig() {
        return this._config;
    }
    /** Updates the position of the overlay based on the position strategy. */
    updatePosition() {
        if (this._positionStrategy) {
            this._positionStrategy.apply();
        }
    }
    /** Switches to a new position strategy and updates the overlay position. */
    updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
            return;
        }
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
        }
    }
    /** Update the size properties of the overlay. */
    updateSize(sizeConfig) {
        this._config = Object.assign(Object.assign({}, this._config), sizeConfig);
        this._updateElementSize();
    }
    /** Sets the LTR/RTL direction for the overlay. */
    setDirection(dir) {
        this._config = Object.assign(Object.assign({}, this._config), { direction: dir });
        this._updateElementDirection();
    }
    /** Add a CSS class or an array of classes to the overlay pane. */
    addPanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
        }
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */
    removePanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
        }
    }
    /**
     * Returns the layout direction of the overlay panel.
     */
    getDirection() {
        const direction = this._config.direction;
        if (!direction) {
            return 'ltr';
        }
        return typeof direction === 'string' ? direction : direction.value;
    }
    /** Switches to a new scroll strategy. */
    updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
            return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
        }
    }
    /** Updates the text direction of the overlay panel. */
    _updateElementDirection() {
        this._host.setAttribute('dir', this.getDirection());
    }
    /** Updates the size of the overlay element based on the overlay config. */
    _updateElementSize() {
        if (!this._pane) {
            return;
        }
        const style = this._pane.style;
        style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
        style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
        style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
        style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
        style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
        style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
    }
    /** Toggles the pointer events for the overlay pane element. */
    _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    }
    /** Attaches a backdrop for this overlay. */
    _attachBackdrop() {
        const showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        }
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._host.parentElement.insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', this._backdropClickHandler);
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => {
                    if (this._backdropElement) {
                        this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    }
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     */
    _updateStackingOrder() {
        if (this._host.nextSibling) {
            this._host.parentNode.appendChild(this._host);
        }
    }
    /** Detaches the backdrop (if any) associated with the overlay. */
    detachBackdrop() {
        let backdropToDetach = this._backdropElement;
        if (!backdropToDetach) {
            return;
        }
        let timeoutId;
        let finishDetach = () => {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', this._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);
                if (backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
            }
            // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.
            if (this._backdropElement == backdropToDetach) {
                this._backdropElement = null;
            }
            if (this._config.backdropClass) {
                this._toggleClasses(backdropToDetach, this._config.backdropClass, false);
            }
            clearTimeout(timeoutId);
        };
        backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
        this._ngZone.runOutsideAngular(() => {
            backdropToDetach.addEventListener('transitionend', finishDetach);
        });
        // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
        // In this case we make it unclickable and we try to remove it after a delay.
        backdropToDetach.style.pointerEvents = 'none';
        // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used Overlay would have to be
        // either async or fakeAsync.
        timeoutId = this._ngZone.runOutsideAngular(() => setTimeout(finishDetach, 500));
    }
    /** Toggles a single CSS class or an array of classes on an element. */
    _toggleClasses(element, cssClasses, isAdd) {
        const classList = element.classList;
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(cssClass => {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
        });
    }
    /** Detaches the overlay content next time the zone stabilizes. */
    _detachContentWhenStable() {
        // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
        // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
        // be patched to run inside the zone, which will throw us into an infinite loop.
        this._ngZone.runOutsideAngular(() => {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.
            const subscription = this._ngZone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._attachments, this._detachments)))
                .subscribe(() => {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!this._pane || !this._host || this._pane.children.length === 0) {
                    if (this._pane && this._config.panelClass) {
                        this._toggleClasses(this._pane, this._config.panelClass, false);
                    }
                    if (this._host && this._host.parentElement) {
                        this._previousHostParent = this._host.parentElement;
                        this._previousHostParent.removeChild(this._host);
                    }
                    subscription.unsubscribe();
                }
            });
        });
    }
    /** Disposes of a scroll strategy. */
    _disposeScrollStrategy() {
        const scrollStrategy = this._scrollStrategy;
        if (scrollStrategy) {
            scrollStrategy.disable();
            if (scrollStrategy.detach) {
                scrollStrategy.detach();
            }
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO: refactor clipping detection into a separate thing (part of scrolling module)
// TODO: doesn't handle both flexible width and height when it has to scroll along both axis.
/** Class to be added to the overlay bounding box. */
const boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
/** Regex used to split a string on its CSS units. */
const cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
class FlexibleConnectedPositionStrategy {
    constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
        this._lastBoundingBoxSize = { width: 0, height: 0 };
        /** Whether the overlay was pushed in a previous positioning. */
        this._isPushed = false;
        /** Whether the overlay can be pushed on-screen on the initial open. */
        this._canPush = true;
        /** Whether the overlay can grow via flexible width/height after the initial open. */
        this._growAfterOpen = false;
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        this._hasFlexibleDimensions = true;
        /** Whether the overlay position is locked. */
        this._positionLocked = false;
        /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
        this._viewportMargin = 0;
        /** The Scrollable containers used to check scrollable view properties on position change. */
        this._scrollables = [];
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        /** Subject that emits whenever the position changes. */
        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Subscription to viewport size changes. */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Default offset for the overlay along the x axis. */
        this._offsetX = 0;
        /** Default offset for the overlay along the y axis. */
        this._offsetY = 0;
        /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
        this._appliedPanelClasses = [];
        /** Observable sequence of position changes. */
        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
    }
    /** Ordered list of preferred positions, from most to least desirable. */
    get positions() {
        return this._preferredPositions;
    }
    /** Attaches this position strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            this._isInitialRender = true;
            this.apply();
        });
    }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    apply() {
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        if (this._isDisposed || !this._platform.isBrowser) {
            return;
        }
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        const originRect = this._originRect;
        const overlayRect = this._overlayRect;
        const viewportRect = this._viewportRect;
        // Positions where the overlay will fit with flexible dimensions.
        const flexibleFits = [];
        // Fallback if none of the preferred positions fit within the viewport.
        let fallback;
        // Go through each of the preferred positions looking for a good fit.
        // If a good fit is found, it will be applied immediately.
        for (let pos of this._preferredPositions) {
            // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
            let originPoint = this._getOriginPoint(originRect, pos);
            // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
            // overlay in this position. We use the top-left corner for calculations and later translate
            // this into an appropriate (top, left, bottom, right) style.
            let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            // Calculate how well the overlay would fit into the viewport with this point.
            let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
            // If the overlay, without any further work, fits into the viewport, use this position.
            if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;
                this._applyPosition(pos, originPoint);
                return;
            }
            // If the overlay has flexible dimensions, we can use this position
            // so long as there's enough space for the minimum dimensions.
            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
            }
            // If the current preferred position does not fit on the screen, remember the position
            // if it has more visible area on-screen than we've seen and move onto the next preferred
            // position.
            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = { overlayFit, overlayPoint, originPoint, position: pos, overlayRect };
            }
        }
        // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight
        if (flexibleFits.length) {
            let bestFit = null;
            let bestScore = -1;
            for (const fit of flexibleFits) {
                const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                }
            }
            this._isPushed = false;
            this._applyPosition(bestFit.position, bestFit.origin);
            return;
        }
        // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.
        if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;
            this._applyPosition(fallback.position, fallback.originPoint);
            return;
        }
        // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.
        this._applyPosition(fallback.position, fallback.originPoint);
    }
    detach() {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
    }
    /** Cleanup after the element gets destroyed. */
    dispose() {
        if (this._isDisposed) {
            return;
        }
        // We can't use `_resetBoundingBoxStyles` here, because it resets
        // some properties to zero, rather than removing them.
        if (this._boundingBox) {
            extendStyles(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
            });
        }
        if (this._pane) {
            this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = null;
        this._isDisposed = true;
    }
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    reapplyLastPosition() {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            const lastPosition = this._lastPosition || this._preferredPositions[0];
            const originPoint = this._getOriginPoint(this._originRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    withScrollableContainers(scrollables) {
        this._scrollables = scrollables;
        return this;
    }
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    withPositions(positions) {
        this._preferredPositions = positions;
        // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.
        if (positions.indexOf(this._lastPosition) === -1) {
            this._lastPosition = null;
        }
        this._validatePositions();
        return this;
    }
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    withViewportMargin(margin) {
        this._viewportMargin = margin;
        return this;
    }
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    withFlexibleDimensions(flexibleDimensions = true) {
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
    }
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    withGrowAfterOpen(growAfterOpen = true) {
        this._growAfterOpen = growAfterOpen;
        return this;
    }
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    withPush(canPush = true) {
        this._canPush = canPush;
        return this;
    }
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    withLockedPosition(isLocked = true) {
        this._positionLocked = isLocked;
        return this;
    }
    /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @param origin Reference to the new origin.
     */
    setOrigin(origin) {
        this._origin = origin;
        return this;
    }
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    withDefaultOffsetX(offset) {
        this._offsetX = offset;
        return this;
    }
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    withDefaultOffsetY(offset) {
        this._offsetY = offset;
        return this;
    }
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    withTransformOriginOn(selector) {
        this._transformOriginSelector = selector;
        return this;
    }
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     */
    _getOriginPoint(originRect, pos) {
        let x;
        if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + (originRect.width / 2);
        }
        else {
            const startX = this._isRtl() ? originRect.right : originRect.left;
            const endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
        }
        let y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x, y };
    }
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     */
    _getOverlayPoint(originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the
        // potential overlay position relative to the origin point.
        let overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        let overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY,
        };
    }
    /** Gets how well an overlay at the given point will fit within the viewport. */
    _getOverlayFit(point, overlay, viewport, position) {
        let { x, y } = point;
        let offsetX = this._getOffset(position, 'x');
        let offsetY = this._getOffset(position, 'y');
        // Account for the offsets since they could push the overlay out of the viewport.
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        // How much the overlay would overflow at this position, on each side.
        let leftOverflow = 0 - x;
        let rightOverflow = (x + overlay.width) - viewport.width;
        let topOverflow = 0 - y;
        let bottomOverflow = (y + overlay.height) - viewport.height;
        // Visible parts of the element on each axis.
        let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        let visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea,
            isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
        };
    }
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param fit How well the overlay fits in the viewport at some position.
     * @param point The (x, y) coordinates of the overlat at some position.
     * @param viewport The geometry of the viewport.
     */
    _canFitWithFlexibleDimensions(fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            const availableHeight = viewport.bottom - point.y;
            const availableWidth = viewport.right - point.x;
            const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            const verticalFit = fit.fitsInViewportVertically ||
                (minHeight != null && minHeight <= availableHeight);
            const horizontalFit = fit.fitsInViewportHorizontally ||
                (minWidth != null && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
        }
        return false;
    }
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param start Starting point from which the overlay is pushed.
     * @param overlay Dimensions of the overlay.
     * @param scrollPosition Current viewport scroll position.
     * @returns The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    _pushOverlayOnScreen(start, overlay, scrollPosition) {
        // If the position is locked and we've pushed the overlay already, reuse the previous push
        // amount, rather than pushing it again. If we were to continue pushing, the element would
        // remain in the viewport, which goes against the expectations when position locking is enabled.
        if (this._previousPushAmount && this._positionLocked) {
            return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
            };
        }
        const viewport = this._viewportRect;
        // Determine how much the overlay goes outside the viewport on each
        // side, which we'll use to decide which direction to push it.
        const overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
        const overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
        const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        // Amount by which to push the overlay in each axis such that it remains on-screen.
        let pushX = 0;
        let pushY = 0;
        // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.
        if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = start.x < this._viewportMargin ? (viewport.left - scrollPosition.left) - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = start.y < this._viewportMargin ? (viewport.top - scrollPosition.top) - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
            x: start.x + pushX,
            y: start.y + pushY,
        };
    }
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param position The position preference
     * @param originPoint The point on the origin element where the overlay is connected.
     */
    _applyPosition(position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
        }
        // Save the last connected position in case the position needs to be re-calculated.
        this._lastPosition = position;
        // Notify that the position has been changed along with its change properties.
        // We only emit if we've got any subscriptions, because the scroll visibility
        // calculcations can be somewhat expensive.
        if (this._positionChanges.observers.length) {
            const scrollableViewProperties = this._getScrollVisibility();
            const changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
            this._positionChanges.next(changeEvent);
        }
        this._isInitialRender = false;
    }
    /** Sets the transform origin based on the configured selector and the passed-in position.  */
    _setTransformOrigin(position) {
        if (!this._transformOriginSelector) {
            return;
        }
        const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
        let xOrigin;
        let yOrigin = position.overlayY;
        if (position.overlayX === 'center') {
            xOrigin = 'center';
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        }
        else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
        }
    }
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     */
    _calculateBoundingBoxRect(origin, position) {
        const viewport = this._viewportRect;
        const isRtl = this._isRtl();
        let height, top, bottom;
        if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
        }
        else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.
            const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            const previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - (previousHeight / 2);
            }
        }
        // The overlay is opening 'right-ward' (the content flows to the right).
        const isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
            (position.overlayX === 'end' && isRtl);
        // The overlay is opening 'left-ward' (the content flows to the left).
        const isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
            (position.overlayX === 'start' && isRtl);
        let width, left, right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.
            const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            const previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - (previousWidth / 2);
            }
        }
        return { top: top, left: left, bottom: bottom, right: right, width, height };
    }
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param origin The point on the origin element where the overlay is connected.
     * @param position The position preference
     */
    _setBoundingBoxStyles(origin, position) {
        const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        const styles = {};
        if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
            styles.width = styles.height = '100%';
        }
        else {
            const maxHeight = this._overlayRef.getConfig().maxHeight;
            const maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right);
            // Push the pane content towards the proper direction.
            if (position.overlayX === 'center') {
                styles.alignItems = 'center';
            }
            else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }
            if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
            }
            else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }
            if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(this._boundingBox.style, styles);
    }
    /** Resets the styles for the bounding box so that a new positioning can be computed. */
    _resetBoundingBoxStyles() {
        extendStyles(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
        });
    }
    /** Resets the styles for the overlay pane so that a new positioning can be computed. */
    _resetOverlayElementStyles() {
        extendStyles(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: '',
        });
    }
    /** Sets positioning styles to the overlay element. */
    _setOverlayElementStyles(originPoint, position) {
        const styles = {};
        const hasExactPosition = this._hasExactPosition();
        const hasFlexibleDimensions = this._hasFlexibleDimensions;
        const config = this._overlayRef.getConfig();
        if (hasExactPosition) {
            const scrollPosition = this._viewportRuler.getViewportScrollPosition();
            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        }
        else {
            styles.position = 'static';
        }
        // Use a transform to apply the offsets. We do this because the `center` positions rely on
        // being in the normal flex flow and setting a `top` / `left` at all will completely throw
        // off the position. We also can't use margins, because they won't have an effect in some
        // cases where the element doesn't have anything to "push off of". Finally, this works
        // better both with flexible and non-flexible positioning.
        let transformString = '';
        let offsetX = this._getOffset(position, 'x');
        let offsetY = this._getOffset(position, 'y');
        if (offsetX) {
            transformString += `translateX(${offsetX}px) `;
        }
        if (offsetY) {
            transformString += `translateY(${offsetY}px)`;
        }
        styles.transform = transformString.trim();
        // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
        // Note that this doesn't apply when we have an exact position, in which case we do want to
        // apply them because they'll be cleared from the bounding box.
        if (config.maxHeight) {
            if (hasExactPosition) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
            }
            else if (hasFlexibleDimensions) {
                styles.maxHeight = '';
            }
        }
        if (config.maxWidth) {
            if (hasExactPosition) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
            }
            else if (hasFlexibleDimensions) {
                styles.maxWidth = '';
            }
        }
        extendStyles(this._pane.style, styles);
    }
    /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
    _getExactOverlayY(position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the
        // preferred position has changed since the last `apply`.
        let styles = { top: '', bottom: '' };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        let virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top;
        // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
        // autocomplete), mobile browsers will shift everything in order to put the input in the middle
        // of the screen and to make space for the virtual keyboard. We need to account for this offset,
        // otherwise our positioning will be thrown off.
        overlayPoint.y -= virtualKeyboardOffset;
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.
        if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            const documentHeight = this._document.documentElement.clientHeight;
            styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
        }
        else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
        }
        return styles;
    }
    /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
    _getExactOverlayX(position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        let styles = { left: '', right: '' };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        let horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        if (horizontalStyleProperty === 'right') {
            const documentWidth = this._document.documentElement.clientWidth;
            styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
        }
        else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
        }
        return styles;
    }
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     */
    _getScrollVisibility() {
        // Note: needs fresh rects since the position could've changed.
        const originBounds = this._getOriginRect();
        const overlayBounds = this._pane.getBoundingClientRect();
        // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
        // every time, we should be able to use the scrollTop of the containers if the size of those
        // containers hasn't changed.
        const scrollContainerBounds = this._scrollables.map(scrollable => {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    }
    /** Subtracts the amount that an element is overflowing on an axis from its length. */
    _subtractOverflows(length, ...overflows) {
        return overflows.reduce((currentValue, currentOverflow) => {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    }
    /** Narrows the given viewport rect by the current _viewportMargin. */
    _getNarrowedViewportRect() {
        // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
        // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
        // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
        // and `innerHeight` that do. This is necessary, because the overlay container uses
        // 100% `width` and `height` which don't include the scrollbar either.
        const width = this._document.documentElement.clientWidth;
        const height = this._document.documentElement.clientHeight;
        const scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - (2 * this._viewportMargin),
            height: height - (2 * this._viewportMargin),
        };
    }
    /** Whether the we're dealing with an RTL context */
    _isRtl() {
        return this._overlayRef.getDirection() === 'rtl';
    }
    /** Determines whether the overlay uses exact or flexible positioning. */
    _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed;
    }
    /** Retrieves the offset of a position along the x or y axis. */
    _getOffset(position, axis) {
        if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    }
    /** Validates that the current position match the expected values. */
    _validatePositions() {
        if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
        }
        // TODO(crisbeto): remove these once Angular's template type
        // checking is advanced enough to catch these cases.
        this._preferredPositions.forEach(pair => {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
        });
    }
    /** Adds a single CSS class or an array of classes on the overlay panel. */
    _addPanelClasses(cssClasses) {
        if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(cssClass => {
                if (cssClass !== '' && this._appliedPanelClasses.indexOf(cssClass) === -1) {
                    this._appliedPanelClasses.push(cssClass);
                    this._pane.classList.add(cssClass);
                }
            });
        }
    }
    /** Clears the classes that the position strategy has applied from the overlay panel. */
    _clearPanelClasses() {
        if (this._pane) {
            this._appliedPanelClasses.forEach(cssClass => {
                this._pane.classList.remove(cssClass);
            });
            this._appliedPanelClasses = [];
        }
    }
    /** Returns the ClientRect of the current origin. */
    _getOriginRect() {
        const origin = this._origin;
        if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
        }
        // Check for Element so SVG elements are also supported.
        if (origin instanceof Element) {
            return origin.getBoundingClientRect();
        }
        const width = origin.width || 0;
        const height = origin.height || 0;
        // If the origin is a point, return a client rect as if it was a 0x0 element at the point.
        return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height,
            width
        };
    }
}
/** Shallow-extends a stylesheet object with another stylesheet object. */
function extendStyles(destination, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
        }
    }
    return destination;
}
/**
 * Extracts the pixel value as a number from a value, if it's a number
 * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
 */
function getPixelValue(input) {
    if (typeof input !== 'number' && input != null) {
        const [value, units] = input.split(cssUnitPattern);
        return (!units || units === 'px') ? parseFloat(value) : null;
    }
    return input || null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * @breaking-change 8.0.0
 */
class ConnectedPositionStrategy {
    constructor(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer)
            .withFlexibleDimensions(false)
            .withPush(false)
            .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
    }
    /** Whether the we're dealing with an RTL context */
    get _isRtl() {
        return this._overlayRef.getDirection() === 'rtl';
    }
    /** Emits an event when the connection point changes. */
    get onPositionChange() {
        return this._positionStrategy.positionChanges;
    }
    /** Ordered list of preferred positions, from most to least desirable. */
    get positions() {
        return this._preferredPositions;
    }
    /** Attach this position strategy to an overlay. */
    attach(overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    }
    /** Disposes all resources used by the position strategy. */
    dispose() {
        this._positionStrategy.dispose();
    }
    /** @docs-private */
    detach() {
        this._positionStrategy.detach();
    }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    apply() {
        this._positionStrategy.apply();
    }
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    recalculateLastPosition() {
        this._positionStrategy.reapplyLastPosition();
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    withScrollableContainers(scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    }
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
        const position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    }
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    withDirection(dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
        }
        else {
            this._direction = dir;
        }
        return this;
    }
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    withOffsetX(offset) {
        this._positionStrategy.withDefaultOffsetX(offset);
        return this;
    }
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    withOffsetY(offset) {
        this._positionStrategy.withDefaultOffsetY(offset);
        return this;
    }
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    withLockedPosition(isLocked) {
        this._positionStrategy.withLockedPosition(isLocked);
        return this;
    }
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    withPositions(positions) {
        this._preferredPositions = positions.slice();
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    }
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    setOrigin(origin) {
        this._positionStrategy.setOrigin(origin);
        return this;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Class to be added to the overlay pane wrapper. */
const wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
class GlobalPositionStrategy {
    constructor() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    attach(overlayRef) {
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    }
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    top(value = '') {
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    }
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    left(value = '') {
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    }
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    bottom(value = '') {
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    }
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    right(value = '') {
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    }
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    width(value = '') {
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    }
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    height(value = '') {
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    }
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    centerHorizontally(offset = '') {
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    }
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    centerVertically(offset = '') {
        this.top(offset);
        this._alignItems = 'center';
        return this;
    }
    /**
     * Apply the position to the element.
     * @docs-private
     */
    apply() {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parentStyles = this._overlayRef.hostElement.style;
        const config = this._overlayRef.getConfig();
        const { width, height, maxWidth, maxHeight } = config;
        const shouldBeFlushHorizontally = (width === '100%' || width === '100vw') &&
            (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
        const shouldBeFlushVertically = (height === '100%' || height === '100vh') &&
            (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
        styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
    }
    /**
     * Cleans up the DOM changes from the position strategy.
     * @docs-private
     */
    dispose() {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parent = this._overlayRef.hostElement;
        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
            styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef = null;
        this._isDisposed = true;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Builder for overlay position strategy. */
let OverlayPositionBuilder = /** @class */ (() => {
    class OverlayPositionBuilder {
        constructor(_viewportRuler, _document, _platform, _overlayContainer) {
            this._viewportRuler = _viewportRuler;
            this._document = _document;
            this._platform = _platform;
            this._overlayContainer = _overlayContainer;
        }
        /**
         * Creates a global position strategy.
         */
        global() {
            return new GlobalPositionStrategy();
        }
        /**
         * Creates a relative position strategy.
         * @param elementRef
         * @param originPos
         * @param overlayPos
         * @deprecated Use `flexibleConnectedTo` instead.
         * @breaking-change 8.0.0
         */
        connectedTo(elementRef, originPos, overlayPos) {
            return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
        /**
         * Creates a flexible position strategy.
         * @param origin Origin relative to which to position the overlay.
         */
        flexibleConnectedTo(origin) {
            return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
    }
OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) { return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer)); };
    OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer)); }, token: OverlayPositionBuilder, providedIn: "root" });
    OverlayPositionBuilder.ctorParameters = () => [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: OverlayContainer }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: OverlayContainer }]; }, null); })();
    return OverlayPositionBuilder;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Next overlay unique ID. */
let nextUniqueId = 0;
// Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
// which needs to be different depending on where OverlayModule is imported.
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
let Overlay = /** @class */ (() => {
    class Overlay {
        constructor(
        /** Scrolling strategies that can be used when creating an overlay. */
        scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, 
        // @breaking-change 8.0.0 `_location` parameter to be made required.
        _location) {
            this.scrollStrategies = scrollStrategies;
            this._overlayContainer = _overlayContainer;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._positionBuilder = _positionBuilder;
            this._keyboardDispatcher = _keyboardDispatcher;
            this._injector = _injector;
            this._ngZone = _ngZone;
            this._document = _document;
            this._directionality = _directionality;
            this._location = _location;
        }
        /**
         * Creates an overlay.
         * @param config Configuration applied to the overlay.
         * @returns Reference to the created overlay.
         */
        create(config) {
            const host = this._createHostElement();
            const pane = this._createPaneElement(host);
            const portalOutlet = this._createPortalOutlet(pane);
            const overlayConfig = new OverlayConfig(config);
            overlayConfig.direction = overlayConfig.direction || this._directionality.value;
            return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
        }
        /**
         * Gets a position builder that can be used, via fluent API,
         * to construct and configure a position strategy.
         * @returns An overlay position builder.
         */
        position() {
            return this._positionBuilder;
        }
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @returns Newly-created pane element
         */
        _createPaneElement(host) {
            const pane = this._document.createElement('div');
            pane.id = `cdk-overlay-${nextUniqueId++}`;
            pane.classList.add('cdk-overlay-pane');
            host.appendChild(pane);
            return pane;
        }
        /**
         * Creates the host element that wraps around an overlay
         * and can be used for advanced positioning.
         * @returns Newly-create host element.
         */
        _createHostElement() {
            const host = this._document.createElement('div');
            this._overlayContainer.getContainerElement().appendChild(host);
            return host;
        }
        /**
         * Create a DomPortalOutlet into which the overlay content can be loaded.
         * @param pane The DOM element to turn into a portal outlet.
         * @returns A portal outlet for the given DOM element.
         */
        _createPortalOutlet(pane) {
            // We have to resolve the ApplicationRef later in order to allow people
            // to use overlay-based providers during app initialization.
            if (!this._appRef) {
                this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
            }
            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
        }
    }
Overlay.ɵfac = function Overlay_Factory(t) { return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], 8)); };
Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Overlay, factory: function (t) { return Overlay.ɵfac(t); } });
    Overlay.ctorParameters = () => [
        { type: ScrollStrategyOptions },
        { type: OverlayContainer },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: OverlayPositionBuilder },
        { type: OverlayKeyboardDispatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: ScrollStrategyOptions }, { type: OverlayContainer }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: OverlayPositionBuilder }, { type: OverlayKeyboardDispatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();
    return Overlay;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
const defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/** Injection token that determines the scroll handling while the connected overlay is open. */
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
/** @docs-private @deprecated @breaking-change 8.0.0 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
    return (config) => overlay.scrollStrategies.reposition(config);
}
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
let CdkOverlayOrigin = /** @class */ (() => {
    class CdkOverlayOrigin {
        constructor(
        /** Reference to the element on which the directive is applied. */
        elementRef) {
            this.elementRef = elementRef;
        }
    }
CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) { return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkOverlayOrigin, selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]], exportAs: ["cdkOverlayOrigin"] });
    CdkOverlayOrigin.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                exportAs: 'cdkOverlayOrigin'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();
    return CdkOverlayOrigin;
})();
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
let CdkConnectedOverlay = /** @class */ (() => {
    class CdkConnectedOverlay {
        // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
        constructor(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
            this._overlay = _overlay;
            this._dir = _dir;
            this._hasBackdrop = false;
            this._lockPosition = false;
            this._growAfterOpen = false;
            this._flexibleDimensions = false;
            this._push = false;
            this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
            /** Margin between the overlay and the viewport edges. */
            this.viewportMargin = 0;
            /** Whether the overlay is open. */
            this.open = false;
            /** Event emitted when the backdrop is clicked. */
            this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Event emitted when the position has changed. */
            this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Event emitted when the overlay has been attached. */
            this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Event emitted when the overlay has been detached. */
            this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Emits when there are keyboard events that are targeted at the overlay. */
            this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
            this._scrollStrategyFactory = scrollStrategyFactory;
            this.scrollStrategy = this._scrollStrategyFactory();
        }
        /** The offset in pixels for the overlay connection point on the x-axis */
        get offsetX() { return this._offsetX; }
        set offsetX(offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        }
        /** The offset in pixels for the overlay connection point on the y-axis */
        get offsetY() { return this._offsetY; }
        set offsetY(offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        }
        /** Whether or not the overlay should attach a backdrop. */
        get hasBackdrop() { return this._hasBackdrop; }
        set hasBackdrop(value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** Whether or not the overlay should be locked when scrolling. */
        get lockPosition() { return this._lockPosition; }
        set lockPosition(value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        get flexibleDimensions() { return this._flexibleDimensions; }
        set flexibleDimensions(value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
        get growAfterOpen() { return this._growAfterOpen; }
        set growAfterOpen(value) { this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
        get push() { return this._push; }
        set push(value) { this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** The associated overlay reference. */
        get overlayRef() {
            return this._overlayRef;
        }
        /** The element's layout direction. */
        get dir() {
            return this._dir ? this._dir.value : 'ltr';
        }
        ngOnDestroy() {
            if (this._overlayRef) {
                this._overlayRef.dispose();
            }
            this._backdropSubscription.unsubscribe();
        }
        ngOnChanges(changes) {
            if (this._position) {
                this._updatePositionStrategy(this._position);
                this._overlayRef.updateSize({
                    width: this.width,
                    minWidth: this.minWidth,
                    height: this.height,
                    minHeight: this.minHeight,
                });
                if (changes['origin'] && this.open) {
                    this._position.apply();
                }
            }
            if (changes['open']) {
                this.open ? this._attachOverlay() : this._detachOverlay();
            }
        }
        /** Creates an overlay */
        _createOverlay() {
            if (!this.positions || !this.positions.length) {
                this.positions = defaultPositionList;
            }
            this._overlayRef = this._overlay.create(this._buildConfig());
            this._overlayRef.keydownEvents().subscribe((event) => {
                this.overlayKeydown.next(event);
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this._detachOverlay();
                }
            });
        }
        /** Builds the overlay config based on the directive's inputs */
        _buildConfig() {
            const positionStrategy = this._position =
                this.positionStrategy || this._createPositionStrategy();
            const overlayConfig = new OverlayConfig({
                direction: this._dir,
                positionStrategy,
                scrollStrategy: this.scrollStrategy,
                hasBackdrop: this.hasBackdrop
            });
            if (this.width || this.width === 0) {
                overlayConfig.width = this.width;
            }
            if (this.height || this.height === 0) {
                overlayConfig.height = this.height;
            }
            if (this.minWidth || this.minWidth === 0) {
                overlayConfig.minWidth = this.minWidth;
            }
            if (this.minHeight || this.minHeight === 0) {
                overlayConfig.minHeight = this.minHeight;
            }
            if (this.backdropClass) {
                overlayConfig.backdropClass = this.backdropClass;
            }
            if (this.panelClass) {
                overlayConfig.panelClass = this.panelClass;
            }
            return overlayConfig;
        }
        /** Updates the state of a position strategy, based on the values of the directive inputs. */
        _updatePositionStrategy(positionStrategy) {
            const positions = this.positions.map(currentPosition => ({
                originX: currentPosition.originX,
                originY: currentPosition.originY,
                overlayX: currentPosition.overlayX,
                overlayY: currentPosition.overlayY,
                offsetX: currentPosition.offsetX || this.offsetX,
                offsetY: currentPosition.offsetY || this.offsetY,
                panelClass: currentPosition.panelClass || undefined,
            }));
            return positionStrategy
                .setOrigin(this.origin.elementRef)
                .withPositions(positions)
                .withFlexibleDimensions(this.flexibleDimensions)
                .withPush(this.push)
                .withGrowAfterOpen(this.growAfterOpen)
                .withViewportMargin(this.viewportMargin)
                .withLockedPosition(this.lockPosition)
                .withTransformOriginOn(this.transformOriginSelector);
        }
        /** Returns the position strategy of the overlay to be set on the overlay config */
        _createPositionStrategy() {
            const strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
            this._updatePositionStrategy(strategy);
            strategy.positionChanges.subscribe(p => this.positionChange.emit(p));
            return strategy;
        }
        /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
        _attachOverlay() {
            if (!this._overlayRef) {
                this._createOverlay();
            }
            else {
                // Update the overlay size, in case the directive's inputs have changed
                this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
            }
            if (!this._overlayRef.hasAttached()) {
                this._overlayRef.attach(this._templatePortal);
                this.attach.emit();
            }
            if (this.hasBackdrop) {
                this._backdropSubscription = this._overlayRef.backdropClick().subscribe(event => {
                    this.backdropClick.emit(event);
                });
            }
            else {
                this._backdropSubscription.unsubscribe();
            }
        }
        /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
        _detachOverlay() {
            if (this._overlayRef) {
                this._overlayRef.detach();
                this.detach.emit();
            }
            this._backdropSubscription.unsubscribe();
        }
    }
CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) { return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkConnectedOverlay, selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]], inputs: { viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"], open: ["cdkConnectedOverlayOpen", "open"], scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"], offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"], offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"], hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"], lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"], flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"], growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"], push: ["cdkConnectedOverlayPush", "push"], positions: ["cdkConnectedOverlayPositions", "positions"], origin: ["cdkConnectedOverlayOrigin", "origin"], positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"], width: ["cdkConnectedOverlayWidth", "width"], height: ["cdkConnectedOverlayHeight", "height"], minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"], minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"], transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown" }, exportAs: ["cdkConnectedOverlay"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
    CdkConnectedOverlay.ctorParameters = () => [
        { type: Overlay },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ];
    CdkConnectedOverlay.propDecorators = {
        origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayOrigin',] }],
        positions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayPositions',] }],
        positionStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayPositionStrategy',] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayOffsetX',] }],
        offsetY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayOffsetY',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayWidth',] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayHeight',] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayMinWidth',] }],
        minHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayMinHeight',] }],
        backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayBackdropClass',] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayPanelClass',] }],
        viewportMargin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayViewportMargin',] }],
        scrollStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayOpen',] }],
        transformOriginSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayTransformOriginOn',] }],
        hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] }],
        lockPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayLockPosition',] }],
        flexibleDimensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayFlexibleDimensions',] }],
        growAfterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayGrowAfterOpen',] }],
        push: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkConnectedOverlayPush',] }],
        backdropClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        positionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        attach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        detach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        overlayKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                exportAs: 'cdkConnectedOverlay'
            }]
    }], function () { return [{ type: Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { viewportMargin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayViewportMargin']
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOpen']
        }], backdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], attach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], detach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], overlayKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayScrollStrategy']
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetX']
        }], offsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetY']
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHasBackdrop']
        }], lockPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayLockPosition']
        }], flexibleDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayFlexibleDimensions']
        }], growAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayGrowAfterOpen']
        }], push: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPush']
        }], positions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositions']
        }], origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOrigin']
        }], positionStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositionStrategy']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayWidth']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHeight']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinWidth']
        }], minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinHeight']
        }], backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayBackdropClass']
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPanelClass']
        }], transformOriginSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayTransformOriginOn']
        }] }); })();
    return CdkConnectedOverlay;
})();
/** @docs-private */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let OverlayModule = /** @class */ (() => {
    class OverlayModule {
    }
OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OverlayModule });
OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OverlayModule_Factory(t) { return new (t || OverlayModule)(); }, providers: [
        Overlay,
        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, { declarations: function () { return [CdkConnectedOverlay, CdkOverlayOrigin]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]; }, exports: function () { return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
                exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
                declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                providers: [
                    Overlay,
                    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                ]
            }]
    }], null, null); })();
    return OverlayModule;
})();
/**
 * @deprecated Use `OverlayModule` instead.
 * @breaking-change 8.0.0
 * @docs-private
 */
const OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
let FullscreenOverlayContainer = /** @class */ (() => {
    class FullscreenOverlayContainer extends OverlayContainer {
        constructor(_document, 
        /**
         * @deprecated `platform` parameter to become required.
         * @breaking-change 10.0.0
         */
        platform) {
            super(_document, platform);
        }
        ngOnDestroy() {
            super.ngOnDestroy();
            if (this._fullScreenEventName && this._fullScreenListener) {
                this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
            }
        }
        _createContainer() {
            super._createContainer();
            this._adjustParentForFullscreenChange();
            this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange());
        }
        _adjustParentForFullscreenChange() {
            if (!this._containerElement) {
                return;
            }
            const fullscreenElement = this.getFullscreenElement();
            const parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
        }
        _addFullscreenChangeListener(fn) {
            const eventName = this._getEventName();
            if (eventName) {
                if (this._fullScreenListener) {
                    this._document.removeEventListener(eventName, this._fullScreenListener);
                }
                this._document.addEventListener(eventName, fn);
                this._fullScreenListener = fn;
            }
        }
        _getEventName() {
            if (!this._fullScreenEventName) {
                const _document = this._document;
                if (_document.fullscreenEnabled) {
                    this._fullScreenEventName = 'fullscreenchange';
                }
                else if (_document.webkitFullscreenEnabled) {
                    this._fullScreenEventName = 'webkitfullscreenchange';
                }
                else if (_document.mozFullScreenEnabled) {
                    this._fullScreenEventName = 'mozfullscreenchange';
                }
                else if (_document.msFullscreenEnabled) {
                    this._fullScreenEventName = 'MSFullscreenChange';
                }
            }
            return this._fullScreenEventName;
        }
        /**
         * When the page is put into fullscreen mode, a specific element is specified.
         * Only that element and its children are visible when in fullscreen mode.
         */
        getFullscreenElement() {
            const _document = this._document;
            return _document.fullscreenElement ||
                _document.webkitFullscreenElement ||
                _document.mozFullScreenElement ||
                _document.msFullscreenElement ||
                null;
        }
    }
FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) { return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); };
    FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FullscreenOverlayContainer_Factory() { return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); }, token: FullscreenOverlayContainer, providedIn: "root" });
    FullscreenOverlayContainer.ctorParameters = () => [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }]; }, null); })();
    return FullscreenOverlayContainer;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=overlay.js.map

/***/ }),

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
  \*******************************************************************/
/*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortal", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortal", function() { return DomPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalHost", function() { return DomPortalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function() { return PortalHostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalInjector", function() { return PortalInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortal", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function() { return TemplatePortalDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception when attempting to attach a null portal to a host.
 * @docs-private
 */

function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * @docs-private
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * @docs-private
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * @docs-private
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * @docs-private
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * @docs-private
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 */
class Portal {
    /** Attach this portal to a host. */
    attach(host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return host.attach(this);
    }
    /** Detach this portal from its host */
    detach() {
        let host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    }
    /** Whether this portal is attached to a host. */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    setAttachedHost(host) {
        this._attachedHost = host;
    }
}
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
class ComponentPortal extends Portal {
    constructor(component, viewContainerRef, injector, componentFactoryResolver) {
        super();
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
}
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
class TemplatePortal extends Portal {
    constructor(template, viewContainerRef, context) {
        super();
        this.templateRef = template;
        this.viewContainerRef = viewContainerRef;
        this.context = context;
    }
    get origin() {
        return this.templateRef.elementRef;
    }
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    attach(host, context = this.context) {
        this.context = context;
        return super.attach(host);
    }
    detach() {
        this.context = undefined;
        return super.detach();
    }
}
/**
 * A `DomPortal` is a portal whose DOM element will be taken from its current position
 * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
 * will be restored to its original position.
 */
class DomPortal extends Portal {
    constructor(element) {
        super();
        this.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
    }
}
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 */
class BasePortalOutlet {
    constructor() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
        // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
        this.attachDomPortal = null;
    }
    /** Whether this host has an attached portal. */
    hasAttached() {
        return !!this._attachedPortal;
    }
    /** Attaches a portal. */
    attach(portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
            // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
        }
        else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
        }
        throwUnknownPortalTypeError();
    }
    /** Detaches a previously attached portal. */
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    }
    /** Permanently dispose of this portal host. */
    dispose() {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    }
    /** @docs-private */
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
    _invokeDisposeFn() {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    }
}
/**
 * @deprecated Use `BasePortalOutlet` instead.
 * @breaking-change 9.0.0
 */
class BasePortalHost extends BasePortalOutlet {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
class DomPortalOutlet extends BasePortalOutlet {
    constructor(
    /** Element into which the content is projected. */
    outletElement, _componentFactoryResolver, _appRef, _defaultInjector, 
    /**
     * @deprecated `_document` Parameter to be made required.
     * @breaking-change 10.0.0
     */
    _document) {
        super();
        this.outletElement = outletElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
        /**
         * Attaches a DOM portal by transferring its content into the outlet.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        this.attachDomPortal = (portal) => {
            // @breaking-change 10.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!this._document) {
                throw Error('Cannot attach DOM portal without _document constructor parameter');
            }
            const element = portal.element;
            if (!element.parentNode) {
                throw Error('DOM portal content must be attached to a parent node.');
            }
            // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.
            const anchorNode = this._document.createComment('dom-portal');
            element.parentNode.insertBefore(anchorNode, element);
            this.outletElement.appendChild(element);
            super.setDisposeFn(() => {
                // We can't use `replaceWith` here because IE doesn't support it.
                if (anchorNode.parentNode) {
                    anchorNode.parentNode.replaceChild(element, anchorNode);
                }
            });
        };
        this._document = _document;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    attachComponentPortal(portal) {
        const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        const componentFactory = resolver.resolveComponentFactory(portal.component);
        let componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(() => componentRef.destroy());
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(() => {
                this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    }
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    attachTemplatePortal(portal) {
        let viewContainer = portal.viewContainerRef;
        let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(rootNode => this.outletElement.appendChild(rootNode));
        this.setDisposeFn((() => {
            let index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    }
    /**
     * Clears out a portal from the DOM.
     */
    dispose() {
        super.dispose();
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    }
    /** Gets the root HTMLElement for an instantiated component. */
    _getComponentRootNode(componentRef) {
        return componentRef.hostView.rootNodes[0];
    }
}
/**
 * @deprecated Use `DomPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
class DomPortalHost extends DomPortalOutlet {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
let CdkPortal = /** @class */ (() => {
    class CdkPortal extends TemplatePortal {
        constructor(templateRef, viewContainerRef) {
            super(templateRef, viewContainerRef);
        }
    }
CdkPortal.ɵfac = function CdkPortal_Factory(t) { return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkPortal, selectors: [["", "cdkPortal", ""]], exportAs: ["cdkPortal"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    CdkPortal.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkPortal]',
                exportAs: 'cdkPortal'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();
    return CdkPortal;
})();
/**
 * @deprecated Use `CdkPortal` instead.
 * @breaking-change 9.0.0
 */
let TemplatePortalDirective = /** @class */ (() => {
    class TemplatePortalDirective extends CdkPortal {
    }
TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) { return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective); };
TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TemplatePortalDirective, selectors: [["", "cdk-portal", ""], ["", "portal", ""]], exportAs: ["cdkPortal"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: CdkPortal,
                useExisting: TemplatePortalDirective
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵTemplatePortalDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdk-portal], [portal]',
                exportAs: 'cdkPortal',
                providers: [{
                        provide: CdkPortal,
                        useExisting: TemplatePortalDirective
                    }]
            }]
    }], null, null); })();
    return TemplatePortalDirective;
})();
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
let CdkPortalOutlet = /** @class */ (() => {
    class CdkPortalOutlet extends BasePortalOutlet {
        constructor(_componentFactoryResolver, _viewContainerRef, 
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
            super();
            this._componentFactoryResolver = _componentFactoryResolver;
            this._viewContainerRef = _viewContainerRef;
            /** Whether the portal component is initialized. */
            this._isInitialized = false;
            /** Emits when a portal is attached to the outlet. */
            this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            /**
             * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
             * @param portal Portal to be attached.
             * @deprecated To be turned into a method.
             * @breaking-change 10.0.0
             */
            this.attachDomPortal = (portal) => {
                // @breaking-change 9.0.0 Remove check and error once the
                // `_document` constructor parameter is required.
                if (!this._document) {
                    throw Error('Cannot attach DOM portal without _document constructor parameter');
                }
                const element = portal.element;
                if (!element.parentNode) {
                    throw Error('DOM portal content must be attached to a parent node.');
                }
                // Anchor used to save the element's previous position so
                // that we can restore it when the portal is detached.
                const anchorNode = this._document.createComment('dom-portal');
                portal.setAttachedHost(this);
                element.parentNode.insertBefore(anchorNode, element);
                this._getRootNode().appendChild(element);
                super.setDisposeFn(() => {
                    if (anchorNode.parentNode) {
                        anchorNode.parentNode.replaceChild(element, anchorNode);
                    }
                });
            };
            this._document = _document;
        }
        /** Portal associated with the Portal outlet. */
        get portal() {
            return this._attachedPortal;
        }
        set portal(portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                super.detach();
            }
            if (portal) {
                super.attach(portal);
            }
            this._attachedPortal = portal;
        }
        /** Component or view reference that is attached to the portal. */
        get attachedRef() {
            return this._attachedRef;
        }
        ngOnInit() {
            this._isInitialized = true;
        }
        ngOnDestroy() {
            super.dispose();
            this._attachedPortal = null;
            this._attachedRef = null;
        }
        /**
         * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
         *
         * @param portal Portal to be attached to the portal outlet.
         * @returns Reference to the created component.
         */
        attachComponentPortal(portal) {
            portal.setAttachedHost(this);
            // If the portal specifies an origin, use that as the logical location of the component
            // in the application tree. Otherwise use the location of this PortalOutlet.
            const viewContainerRef = portal.viewContainerRef != null ?
                portal.viewContainerRef :
                this._viewContainerRef;
            const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            const componentFactory = resolver.resolveComponentFactory(portal.component);
            const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
            // If we're using a view container that's different from the injected one (e.g. when the portal
            // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
            // inside of the alternate view container.
            if (viewContainerRef !== this._viewContainerRef) {
                this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
            }
            super.setDisposeFn(() => ref.destroy());
            this._attachedPortal = portal;
            this._attachedRef = ref;
            this.attached.emit(ref);
            return ref;
        }
        /**
         * Attach the given TemplatePortal to this PortalHost as an embedded View.
         * @param portal Portal to be attached.
         * @returns Reference to the created embedded view.
         */
        attachTemplatePortal(portal) {
            portal.setAttachedHost(this);
            const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
            super.setDisposeFn(() => this._viewContainerRef.clear());
            this._attachedPortal = portal;
            this._attachedRef = viewRef;
            this.attached.emit(viewRef);
            return viewRef;
        }
        /** Gets the root node of the portal outlet. */
        _getRootNode() {
            const nativeElement = this._viewContainerRef.element.nativeElement;
            // The directive could be set on a template which will result in a comment
            // node being the root. Use the comment's parent node if that is the case.
            return (nativeElement.nodeType === nativeElement.ELEMENT_NODE ?
                nativeElement : nativeElement.parentNode);
        }
    }
CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) { return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkPortalOutlet, selectors: [["", "cdkPortalOutlet", ""]], inputs: { portal: ["cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    CdkPortalOutlet.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ];
    CdkPortalOutlet.propDecorators = {
        attached: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkPortalOutlet]',
                exportAs: 'cdkPortalOutlet',
                inputs: ['portal: cdkPortalOutlet']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { attached: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
    return CdkPortalOutlet;
})();
/**
 * @deprecated Use `CdkPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
let PortalHostDirective = /** @class */ (() => {
    class PortalHostDirective extends CdkPortalOutlet {
    }
PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) { return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective); };
PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PortalHostDirective, selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]], inputs: { portal: ["cdkPortalHost", "portal"] }, exportAs: ["cdkPortalHost"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: CdkPortalOutlet,
                useExisting: PortalHostDirective
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵPortalHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkPortalHost], [portalHost]',
                exportAs: 'cdkPortalHost',
                inputs: ['portal: cdkPortalHost'],
                providers: [{
                        provide: CdkPortalOutlet,
                        useExisting: PortalHostDirective
                    }]
            }]
    }], null, null); })();
    return PortalHostDirective;
})();
let PortalModule = /** @class */ (() => {
    class PortalModule {
    }
PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalModule });
PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortalModule_Factory(t) { return new (t || PortalModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, { declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective], exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
                declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
            }]
    }], null, null); })();
    return PortalModule;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * @docs-private
 */
class PortalInjector {
    constructor(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    get(token, notFoundValue) {
        const value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=portal.js.map

/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
  \**********************************************************************/
/*! exports provided: MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCard", function() { return MatCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardActions", function() { return MatCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function() { return MatCardAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardContent", function() { return MatCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardFooter", function() { return MatCardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardHeader", function() { return MatCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardImage", function() { return MatCardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function() { return MatCardLgImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function() { return MatCardMdImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardModule", function() { return MatCardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function() { return MatCardSmImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function() { return MatCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitle", function() { return MatCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function() { return MatCardTitleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function() { return MatCardXlImage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


const _c0 = ["*", [["mat-card-footer"]]];
const _c1 = ["*", "mat-card-footer"];
const _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
const _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];
let MatCardContent = /** @class */ (() => {
    class MatCardContent {
    }
MatCardContent.ɵfac = function MatCardContent_Factory(t) { return new (t || MatCardContent)(); };
MatCardContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardContent, selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]], hostAttrs: [1, "mat-card-content"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-card-content, [mat-card-content], [matCardContent]',
                host: { 'class': 'mat-card-content' }
            }]
    }], null, null); })();
    return MatCardContent;
})();
/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MatCardTitle = /** @class */ (() => {
    class MatCardTitle {
    }
MatCardTitle.ɵfac = function MatCardTitle_Factory(t) { return new (t || MatCardTitle)(); };
MatCardTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardTitle, selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]], hostAttrs: [1, "mat-card-title"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
                host: {
                    'class': 'mat-card-title'
                }
            }]
    }], null, null); })();
    return MatCardTitle;
})();
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MatCardSubtitle = /** @class */ (() => {
    class MatCardSubtitle {
    }
MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) { return new (t || MatCardSubtitle)(); };
MatCardSubtitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardSubtitle, selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]], hostAttrs: [1, "mat-card-subtitle"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
                host: {
                    'class': 'mat-card-subtitle'
                }
            }]
    }], null, null); })();
    return MatCardSubtitle;
})();
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MatCardActions = /** @class */ (() => {
    class MatCardActions {
        constructor() {
            /** Position of the actions inside the card. */
            this.align = 'start';
        }
    }
MatCardActions.ɵfac = function MatCardActions_Factory(t) { return new (t || MatCardActions)(); };
MatCardActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardActions, selectors: [["mat-card-actions"]], hostAttrs: [1, "mat-card-actions"], hostVars: 2, hostBindings: function MatCardActions_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
    } }, inputs: { align: "align" }, exportAs: ["matCardActions"] });
    MatCardActions.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-card-actions',
                exportAs: 'matCardActions',
                host: {
                    'class': 'mat-card-actions',
                    '[class.mat-card-actions-align-end]': 'align === "end"'
                }
            }]
    }], function () { return []; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return MatCardActions;
})();
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
let MatCardFooter = /** @class */ (() => {
    class MatCardFooter {
    }
MatCardFooter.ɵfac = function MatCardFooter_Factory(t) { return new (t || MatCardFooter)(); };
MatCardFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardFooter, selectors: [["mat-card-footer"]], hostAttrs: [1, "mat-card-footer"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-card-footer',
                host: { 'class': 'mat-card-footer' }
            }]
    }], null, null); })();
    return MatCardFooter;
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MatCardImage = /** @class */ (() => {
    class MatCardImage {
    }
MatCardImage.ɵfac = function MatCardImage_Factory(t) { return new (t || MatCardImage)(); };
MatCardImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardImage, selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]], hostAttrs: [1, "mat-card-image"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-card-image], [matCardImage]',
                host: { 'class': 'mat-card-image' }
            }]
    }], null, null); })();
    return MatCardImage;
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MatCardSmImage = /** @class */ (() => {
    class MatCardSmImage {
    }
MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) { return new (t || MatCardSmImage)(); };
MatCardSmImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardSmImage, selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]], hostAttrs: [1, "mat-card-sm-image"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-card-sm-image], [matCardImageSmall]',
                host: { 'class': 'mat-card-sm-image' }
            }]
    }], null, null); })();
    return MatCardSmImage;
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MatCardMdImage = /** @class */ (() => {
    class MatCardMdImage {
    }
MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) { return new (t || MatCardMdImage)(); };
MatCardMdImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardMdImage, selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]], hostAttrs: [1, "mat-card-md-image"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-card-md-image], [matCardImageMedium]',
                host: { 'class': 'mat-card-md-image' }
            }]
    }], null, null); })();
    return MatCardMdImage;
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MatCardLgImage = /** @class */ (() => {
    class MatCardLgImage {
    }
MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) { return new (t || MatCardLgImage)(); };
MatCardLgImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardLgImage, selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]], hostAttrs: [1, "mat-card-lg-image"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-card-lg-image], [matCardImageLarge]',
                host: { 'class': 'mat-card-lg-image' }
            }]
    }], null, null); })();
    return MatCardLgImage;
})();
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MatCardXlImage = /** @class */ (() => {
    class MatCardXlImage {
    }
MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) { return new (t || MatCardXlImage)(); };
MatCardXlImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardXlImage, selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], hostAttrs: [1, "mat-card-xl-image"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-card-xl-image], [matCardImageXLarge]',
                host: { 'class': 'mat-card-xl-image' }
            }]
    }], null, null); })();
    return MatCardXlImage;
})();
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
let MatCardAvatar = /** @class */ (() => {
    class MatCardAvatar {
    }
MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) { return new (t || MatCardAvatar)(); };
MatCardAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardAvatar, selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], hostAttrs: [1, "mat-card-avatar"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-card-avatar], [matCardAvatar]',
                host: { 'class': 'mat-card-avatar' }
            }]
    }], null, null); })();
    return MatCardAvatar;
})();
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */
let MatCard = /** @class */ (() => {
    class MatCard {
        // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
        constructor(_animationMode) {
            this._animationMode = _animationMode;
        }
    }
MatCard.ɵfac = function MatCard_Factory(t) { return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8)); };
MatCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCard, selectors: [["mat-card"]], hostAttrs: [1, "mat-card", "mat-focus-indicator"], hostVars: 2, hostBindings: function MatCard_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, exportAs: ["matCard"], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatCard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    } }, styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"], encapsulation: 2, changeDetection: 0 });
    MatCard.ctorParameters = () => [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-card',
                exportAs: 'matCard',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'class': 'mat-card mat-focus-indicator',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, null); })();
    return MatCard;
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */
let MatCardHeader = /** @class */ (() => {
    class MatCardHeader {
    }
MatCardHeader.ɵfac = function MatCardHeader_Factory(t) { return new (t || MatCardHeader)(); };
MatCardHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCardHeader, selectors: [["mat-card-header"]], hostAttrs: [1, "mat-card-header"], ngContentSelectors: _c3, decls: 4, vars: 0, consts: [[1, "mat-card-header-text"]], template: function MatCardHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-card-header',
                template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: { 'class': 'mat-card-header' }
            }]
    }], null, null); })();
    return MatCardHeader;
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */
let MatCardTitleGroup = /** @class */ (() => {
    class MatCardTitleGroup {
    }
MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) { return new (t || MatCardTitleGroup)(); };
MatCardTitleGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCardTitleGroup, selectors: [["mat-card-title-group"]], hostAttrs: [1, "mat-card-title-group"], ngContentSelectors: _c5, decls: 4, vars: 0, template: function MatCardTitleGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-card-title-group',
                template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: { 'class': 'mat-card-title-group' }
            }]
    }], null, null); })();
    return MatCardTitleGroup;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let MatCardModule = /** @class */ (() => {
    class MatCardModule {
    }
MatCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatCardModule });
MatCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatCardModule_Factory(t) { return new (t || MatCardModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCardModule, { declarations: function () { return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: [
                    MatCard,
                    MatCardHeader,
                    MatCardTitleGroup,
                    MatCardContent,
                    MatCardTitle,
                    MatCardSubtitle,
                    MatCardActions,
                    MatCardFooter,
                    MatCardSmImage,
                    MatCardMdImage,
                    MatCardLgImage,
                    MatCardImage,
                    MatCardXlImage,
                    MatCardAvatar,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                ],
                declarations: [
                    MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle,
                    MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage,
                    MatCardXlImage, MatCardAvatar,
                ]
            }]
    }], null, null); })();
    return MatCardModule;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=card.js.map

/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
  \*************************************************************************/
/*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return MatTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return MatTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return SCROLL_THROTTLE_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return TOOLTIP_PANEL_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return getMatTooltipInvalidPositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return matTooltipAnimations; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by MatTooltip.
 * @docs-private
 */








const matTooltipAnimations = {
    /** Animation that transitions a tooltip in and out. */
    tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0, transform: 'scale(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ transform: 'scale(1)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0, transform: 'scale(0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0.5, transform: 'scale(0.99)', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1 })
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 }))),
    ])
};

/** Time in ms to throttle repositioning after scroll events. */
const SCROLL_THROTTLE_MS = 20;
/** CSS class that will be attached to the overlay panel. */
const TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
/** Options used to bind passive event listeners. */
const passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Time between the user putting the pointer on a tooltip
 * trigger and the long press event being fired.
 */
const LONGPRESS_DELAY = 500;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */
function getMatTooltipInvalidPositionError(position) {
    return Error(`Tooltip position "${position}" is invalid.`);
}
/** Injection token that determines the scroll handling while a tooltip is visible. */
const MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-scroll-strategy');
/** @docs-private */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition({ scrollThrottle: SCROLL_THROTTLE_MS });
}
/** @docs-private */
const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_TOOLTIP_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
};
/** Injection token to be used to override the default options for `matTooltip`. */
const MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-default-options', {
    providedIn: 'root',
    factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
    return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500,
    };
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
let MatTooltip = /** @class */ (() => {
    class MatTooltip {
        constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions) {
            this._overlay = _overlay;
            this._elementRef = _elementRef;
            this._scrollDispatcher = _scrollDispatcher;
            this._viewContainerRef = _viewContainerRef;
            this._ngZone = _ngZone;
            this._platform = _platform;
            this._ariaDescriber = _ariaDescriber;
            this._focusMonitor = _focusMonitor;
            this._dir = _dir;
            this._defaultOptions = _defaultOptions;
            this._position = 'below';
            this._disabled = false;
            /** The default delay in ms before showing the tooltip after show is called */
            this.showDelay = this._defaultOptions.showDelay;
            /** The default delay in ms before hiding the tooltip after hide is called */
            this.hideDelay = this._defaultOptions.hideDelay;
            /**
             * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
             * uses a long press gesture to show and hide, however it can conflict with the native browser
             * gestures. To work around the conflict, Angular Material disables native gestures on the
             * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
             * elements). The different values for this option configure the touch event handling as follows:
             * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
             *   browser gestures on particular elements. In particular, it allows text selection on inputs
             *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
             * - `on` - Enables touch gestures for all elements and disables native
             *   browser gestures with no exceptions.
             * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
             *   showing on touch devices.
             */
            this.touchGestures = 'auto';
            this._message = '';
            /** Manually-bound passive event listeners. */
            this._passiveListeners = new Map();
            /** Emits when the component is destroyed. */
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
            /**
             * Handles the keydown events on the host element.
             * Needs to be an arrow function so that we can use it in addEventListener.
             */
            this._handleKeydown = (event) => {
                if (this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    event.stopPropagation();
                    this._ngZone.run(() => this.hide(0));
                }
            };
            this._scrollStrategy = scrollStrategy;
            if (_defaultOptions) {
                if (_defaultOptions.position) {
                    this.position = _defaultOptions.position;
                }
                if (_defaultOptions.touchGestures) {
                    this.touchGestures = _defaultOptions.touchGestures;
                }
            }
            _ngZone.runOutsideAngular(() => {
                _elementRef.nativeElement.addEventListener('keydown', this._handleKeydown);
            });
        }
        /** Allows the user to define the position of the tooltip relative to the parent element */
        get position() { return this._position; }
        set position(value) {
            if (value !== this._position) {
                this._position = value;
                if (this._overlayRef) {
                    this._updatePosition();
                    if (this._tooltipInstance) {
                        this._tooltipInstance.show(0);
                    }
                    this._overlayRef.updatePosition();
                }
            }
        }
        /** Disables the display of the tooltip. */
        get disabled() { return this._disabled; }
        set disabled(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
            // If tooltip is disabled, hide immediately.
            if (this._disabled) {
                this.hide(0);
            }
        }
        /** The message to be displayed in the tooltip */
        get message() { return this._message; }
        set message(value) {
            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message);
            // If the message is not a string (e.g. number), convert it to a string and trim it.
            this._message = value != null ? `${value}`.trim() : '';
            if (!this._message && this._isTooltipVisible()) {
                this.hide(0);
            }
            else {
                this._updateTooltipMessage();
                this._ngZone.runOutsideAngular(() => {
                    // The `AriaDescriber` has some functionality that avoids adding a description if it's the
                    // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
                    // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
                    // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
                    Promise.resolve().then(() => {
                        this._ariaDescriber.describe(this._elementRef.nativeElement, this.message);
                    });
                });
            }
        }
        /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
        get tooltipClass() { return this._tooltipClass; }
        set tooltipClass(value) {
            this._tooltipClass = value;
            if (this._tooltipInstance) {
                this._setTooltipClass(this._tooltipClass);
            }
        }
        ngAfterViewInit() {
            // This needs to happen after view init so the initial values for all inputs have been set.
            this._setupPointerEvents();
            this._focusMonitor.monitor(this._elementRef)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed))
                .subscribe(origin => {
                // Note that the focus monitor runs outside the Angular zone.
                if (!origin) {
                    this._ngZone.run(() => this.hide(0));
                }
                else if (origin === 'keyboard') {
                    this._ngZone.run(() => this.show());
                }
            });
        }
        /**
         * Dispose the tooltip when destroyed.
         */
        ngOnDestroy() {
            const nativeElement = this._elementRef.nativeElement;
            clearTimeout(this._touchstartTimeout);
            if (this._overlayRef) {
                this._overlayRef.dispose();
                this._tooltipInstance = null;
            }
            // Clean up the event listeners set in the constructor
            nativeElement.removeEventListener('keydown', this._handleKeydown);
            this._passiveListeners.forEach((listener, event) => {
                nativeElement.removeEventListener(event, listener, passiveListenerOptions);
            });
            this._passiveListeners.clear();
            this._destroyed.next();
            this._destroyed.complete();
            this._ariaDescriber.removeDescription(nativeElement, this.message);
            this._focusMonitor.stopMonitoring(nativeElement);
        }
        /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
        show(delay = this.showDelay) {
            if (this.disabled || !this.message || (this._isTooltipVisible() &&
                !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId)) {
                return;
            }
            const overlayRef = this._createOverlay();
            this._detach();
            this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
            this._tooltipInstance = overlayRef.attach(this._portal).instance;
            this._tooltipInstance.afterHidden()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed))
                .subscribe(() => this._detach());
            this._setTooltipClass(this._tooltipClass);
            this._updateTooltipMessage();
            this._tooltipInstance.show(delay);
        }
        /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
        hide(delay = this.hideDelay) {
            if (this._tooltipInstance) {
                this._tooltipInstance.hide(delay);
            }
        }
        /** Shows/hides the tooltip */
        toggle() {
            this._isTooltipVisible() ? this.hide() : this.show();
        }
        /** Returns true if the tooltip is currently visible to the user */
        _isTooltipVisible() {
            return !!this._tooltipInstance && this._tooltipInstance.isVisible();
        }
        /** Create the overlay config and position strategy */
        _createOverlay() {
            if (this._overlayRef) {
                return this._overlayRef;
            }
            const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
            // Create connected position strategy that listens for scroll events to reposition.
            const strategy = this._overlay.position()
                .flexibleConnectedTo(this._elementRef)
                .withTransformOriginOn('.mat-tooltip')
                .withFlexibleDimensions(false)
                .withViewportMargin(8)
                .withScrollableContainers(scrollableAncestors);
            strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(change => {
                if (this._tooltipInstance) {
                    if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
                        // After position changes occur and the overlay is clipped by
                        // a parent scrollable then close the tooltip.
                        this._ngZone.run(() => this.hide(0));
                    }
                }
            });
            this._overlayRef = this._overlay.create({
                direction: this._dir,
                positionStrategy: strategy,
                panelClass: TOOLTIP_PANEL_CLASS,
                scrollStrategy: this._scrollStrategy()
            });
            this._updatePosition();
            this._overlayRef.detachments()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed))
                .subscribe(() => this._detach());
            return this._overlayRef;
        }
        /** Detaches the currently-attached tooltip. */
        _detach() {
            if (this._overlayRef && this._overlayRef.hasAttached()) {
                this._overlayRef.detach();
            }
            this._tooltipInstance = null;
        }
        /** Updates the position of the current tooltip. */
        _updatePosition() {
            const position = this._overlayRef.getConfig().positionStrategy;
            const origin = this._getOrigin();
            const overlay = this._getOverlayPosition();
            position.withPositions([
                Object.assign(Object.assign({}, origin.main), overlay.main),
                Object.assign(Object.assign({}, origin.fallback), overlay.fallback)
            ]);
        }
        /**
         * Returns the origin position and a fallback position based on the user's position preference.
         * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
         */
        _getOrigin() {
            const isLtr = !this._dir || this._dir.value == 'ltr';
            const position = this.position;
            let originPosition;
            if (position == 'above' || position == 'below') {
                originPosition = { originX: 'center', originY: position == 'above' ? 'top' : 'bottom' };
            }
            else if (position == 'before' ||
                (position == 'left' && isLtr) ||
                (position == 'right' && !isLtr)) {
                originPosition = { originX: 'start', originY: 'center' };
            }
            else if (position == 'after' ||
                (position == 'right' && isLtr) ||
                (position == 'left' && !isLtr)) {
                originPosition = { originX: 'end', originY: 'center' };
            }
            else {
                throw getMatTooltipInvalidPositionError(position);
            }
            const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
            return {
                main: originPosition,
                fallback: { originX: x, originY: y }
            };
        }
        /** Returns the overlay position and a fallback position based on the user's preference */
        _getOverlayPosition() {
            const isLtr = !this._dir || this._dir.value == 'ltr';
            const position = this.position;
            let overlayPosition;
            if (position == 'above') {
                overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
            }
            else if (position == 'below') {
                overlayPosition = { overlayX: 'center', overlayY: 'top' };
            }
            else if (position == 'before' ||
                (position == 'left' && isLtr) ||
                (position == 'right' && !isLtr)) {
                overlayPosition = { overlayX: 'end', overlayY: 'center' };
            }
            else if (position == 'after' ||
                (position == 'right' && isLtr) ||
                (position == 'left' && !isLtr)) {
                overlayPosition = { overlayX: 'start', overlayY: 'center' };
            }
            else {
                throw getMatTooltipInvalidPositionError(position);
            }
            const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
            return {
                main: overlayPosition,
                fallback: { overlayX: x, overlayY: y }
            };
        }
        /** Updates the tooltip message and repositions the overlay according to the new message length */
        _updateTooltipMessage() {
            // Must wait for the message to be painted to the tooltip so that the overlay can properly
            // calculate the correct positioning based on the size of the text.
            if (this._tooltipInstance) {
                this._tooltipInstance.message = this.message;
                this._tooltipInstance._markForCheck();
                this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(() => {
                    if (this._tooltipInstance) {
                        this._overlayRef.updatePosition();
                    }
                });
            }
        }
        /** Updates the tooltip class */
        _setTooltipClass(tooltipClass) {
            if (this._tooltipInstance) {
                this._tooltipInstance.tooltipClass = tooltipClass;
                this._tooltipInstance._markForCheck();
            }
        }
        /** Inverts an overlay position. */
        _invertPosition(x, y) {
            if (this.position === 'above' || this.position === 'below') {
                if (y === 'top') {
                    y = 'bottom';
                }
                else if (y === 'bottom') {
                    y = 'top';
                }
            }
            else {
                if (x === 'end') {
                    x = 'start';
                }
                else if (x === 'start') {
                    x = 'end';
                }
            }
            return { x, y };
        }
        /** Binds the pointer events to the tooltip trigger. */
        _setupPointerEvents() {
            // The mouse events shouldn't be bound on mobile devices, because they can prevent the
            // first tap from firing its click event or can cause the tooltip to open for clicks.
            if (!this._platform.IOS && !this._platform.ANDROID) {
                this._passiveListeners
                    .set('mouseenter', () => this.show())
                    .set('mouseleave', () => this.hide());
            }
            else if (this.touchGestures !== 'off') {
                this._disableNativeGesturesIfNecessary();
                const touchendListener = () => {
                    clearTimeout(this._touchstartTimeout);
                    this.hide(this._defaultOptions.touchendHideDelay);
                };
                this._passiveListeners
                    .set('touchend', touchendListener)
                    .set('touchcancel', touchendListener)
                    .set('touchstart', () => {
                    // Note that it's important that we don't `preventDefault` here,
                    // because it can prevent click events from firing on the element.
                    clearTimeout(this._touchstartTimeout);
                    this._touchstartTimeout = setTimeout(() => this.show(), LONGPRESS_DELAY);
                });
            }
            this._passiveListeners.forEach((listener, event) => {
                this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
            });
        }
        /** Disables the native browser gestures, based on how the tooltip has been configured. */
        _disableNativeGesturesIfNecessary() {
            const element = this._elementRef.nativeElement;
            const style = element.style;
            const gestures = this.touchGestures;
            if (gestures !== 'off') {
                // If gestures are set to `auto`, we don't disable text selection on inputs and
                // textareas, because it prevents the user from typing into them on iOS Safari.
                if (gestures === 'on' || (element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA')) {
                    style.userSelect = style.msUserSelect = style.webkitUserSelect =
                        style.MozUserSelect = 'none';
                }
                // If we have `auto` gestures and the element uses native HTML dragging,
                // we don't set `-webkit-user-drag` because it prevents the native behavior.
                if (gestures === 'on' || !element.draggable) {
                    style.webkitUserDrag = 'none';
                }
                style.touchAction = 'none';
                style.webkitTapHighlightColor = 'transparent';
            }
        }
    }
MatTooltip.ɵfac = function MatTooltip_Factory(t) { return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8)); };
MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatTooltip, selectors: [["", "matTooltip", ""]], hostAttrs: [1, "mat-tooltip-trigger"], inputs: { showDelay: ["matTooltipShowDelay", "showDelay"], hideDelay: ["matTooltipHideDelay", "hideDelay"], touchGestures: ["matTooltipTouchGestures", "touchGestures"], position: ["matTooltipPosition", "position"], disabled: ["matTooltipDisabled", "disabled"], message: ["matTooltip", "message"], tooltipClass: ["matTooltipClass", "tooltipClass"] }, exportAs: ["matTooltip"] });
    MatTooltip.ctorParameters = () => [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_TOOLTIP_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_TOOLTIP_DEFAULT_OPTIONS,] }] }
    ];
    MatTooltip.propDecorators = {
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipPosition',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipDisabled',] }],
        showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipShowDelay',] }],
        hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipHideDelay',] }],
        touchGestures: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipTouchGestures',] }],
        message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltip',] }],
        tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipClass',] }]
    };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[matTooltip]',
                exportAs: 'matTooltip',
                host: {
                    'class': 'mat-tooltip-trigger'
                }
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_TOOLTIP_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
            }] }]; }, { showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipShowDelay']
        }], hideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipHideDelay']
        }], touchGestures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipTouchGestures']
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipPosition']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipDisabled']
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltip']
        }], tooltipClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipClass']
        }] }); })();
    return MatTooltip;
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
let TooltipComponent = /** @class */ (() => {
    class TooltipComponent {
        constructor(_changeDetectorRef, _breakpointObserver) {
            this._changeDetectorRef = _changeDetectorRef;
            this._breakpointObserver = _breakpointObserver;
            /** Property watched by the animation framework to show or hide the tooltip */
            this._visibility = 'initial';
            /** Whether interactions on the page should close the tooltip */
            this._closeOnInteraction = false;
            /** Subject for notifying that the tooltip has been hidden from the view */
            this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
            /** Stream that emits whether the user has a handset-sized display.  */
            this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Handset);
        }
        /**
         * Shows the tooltip with an animation originating from the provided origin
         * @param delay Amount of milliseconds to the delay showing the tooltip.
         */
        show(delay) {
            // Cancel the delayed hide if it is scheduled
            if (this._hideTimeoutId) {
                clearTimeout(this._hideTimeoutId);
                this._hideTimeoutId = null;
            }
            // Body interactions should cancel the tooltip if there is a delay in showing.
            this._closeOnInteraction = true;
            this._showTimeoutId = setTimeout(() => {
                this._visibility = 'visible';
                this._showTimeoutId = null;
                // Mark for check so if any parent component has set the
                // ChangeDetectionStrategy to OnPush it will be checked anyways
                this._markForCheck();
            }, delay);
        }
        /**
         * Begins the animation to hide the tooltip after the provided delay in ms.
         * @param delay Amount of milliseconds to delay showing the tooltip.
         */
        hide(delay) {
            // Cancel the delayed show if it is scheduled
            if (this._showTimeoutId) {
                clearTimeout(this._showTimeoutId);
                this._showTimeoutId = null;
            }
            this._hideTimeoutId = setTimeout(() => {
                this._visibility = 'hidden';
                this._hideTimeoutId = null;
                // Mark for check so if any parent component has set the
                // ChangeDetectionStrategy to OnPush it will be checked anyways
                this._markForCheck();
            }, delay);
        }
        /** Returns an observable that notifies when the tooltip has been hidden from view. */
        afterHidden() {
            return this._onHide.asObservable();
        }
        /** Whether the tooltip is being displayed. */
        isVisible() {
            return this._visibility === 'visible';
        }
        ngOnDestroy() {
            this._onHide.complete();
        }
        _animationStart() {
            this._closeOnInteraction = false;
        }
        _animationDone(event) {
            const toState = event.toState;
            if (toState === 'hidden' && !this.isVisible()) {
                this._onHide.next();
            }
            if (toState === 'visible' || toState === 'hidden') {
                this._closeOnInteraction = true;
            }
        }
        /**
         * Interactions on the HTML body should close the tooltip immediately as defined in the
         * material design spec.
         * https://material.io/design/components/tooltips.html#behavior
         */
        _handleBodyInteraction() {
            if (this._closeOnInteraction) {
                this.hide(0);
            }
        }
        /**
         * Marks that the tooltip needs to be checked in the next change detection run.
         * Mainly used for rendering the initial text before positioning a tooltip, which
         * can be problematic in components with OnPush change detection.
         */
        _markForCheck() {
            this._changeDetectorRef.markForCheck();
        }
    }
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"])); };
TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["mat-tooltip-component"]], hostAttrs: ["aria-hidden", "true"], hostVars: 2, hostBindings: function TooltipComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() { return ctx._handleBodyInteraction(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveBody"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
    } }, decls: 3, vars: 7, consts: [[1, "mat-tooltip", 3, "ngClass"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() { return ctx._animationStart(); })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) { return ctx._animationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-tooltip-handset", currVal_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"], encapsulation: 2, data: { animation: [matTooltipAnimations.tooltipState] }, changeDetection: 0 });
    TooltipComponent.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-tooltip-component',
                template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                animations: [matTooltipAnimations.tooltipState],
                host: {
                    // Forces the element to have a layout in IE and Edge. This fixes issues where the element
                    // won't be rendered if the animations are disabled or there is no web animations polyfill.
                    '[style.zoom]': '_visibility === "visible" ? 1 : null',
                    '(body:click)': 'this._handleBodyInteraction()',
                    'aria-hidden': 'true'
                },
                styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"] }]; }, null); })();
    return TooltipComponent;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let MatTooltipModule = /** @class */ (() => {
    class MatTooltipModule {
    }
MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatTooltipModule });
MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MatTooltipModule_Factory(t) { return new (t || MatTooltipModule)(); }, providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatTooltipModule, { declarations: function () { return [MatTooltip, TooltipComponent]; }, imports: function () { return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]; }, exports: function () { return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
                ],
                exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]],
                declarations: [MatTooltip, TooltipComponent],
                entryComponents: [TooltipComponent],
                providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
    return MatTooltipModule;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js ***!
  \*************************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.previous(); })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r0.getCurrent());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
} }
function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.setCurrent(page_r10.value); })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.setCurrent(page_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.screenReaderPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
} }
function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.screenReaderCurrentLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
} }
function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() !== page_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() === page_r10.value);
} }
function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.next(); })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r20.nextLabel + " " + ctx_r20.screenReaderPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
} }
function PaginationControlsComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r1.responsive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.screenReaderPaginationLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
} }
var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    /**
     * Register a PaginationInstance with this service. Returns a
     * boolean value signifying whether the instance is new or
     * updated (true = new or updated, false = unchanged).
     */
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            return true;
        }
        else {
            return this.updateInstance(instance);
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(); };
PaginationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaginationService, factory: function (t) { return PaginationService.ɵfac(t); } });

    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        else {
            if (emitChange) {
                this.service.change.emit(id);
            }
            // save the state for server-side collection to avoid null
            // flash as new data loads.
            this.saveState(id, collection, collection, start, end);
            return collection;
        }
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([ __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService)); };
PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paginate", type: PaginatePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'paginate',
                pure: false
            }]
    }], function () { return [{ type: PaginationService }]; }, null); })();
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) { return new (t || PaginationControlsComponent)(); };
PaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationControlsComponent, selectors: [["pagination-controls"]], inputs: { maxSize: "maxSize", previousLabel: "previousLabel", nextLabel: "nextLabel", screenReaderPaginationLabel: "screenReaderPaginationLabel", screenReaderPageLabel: "screenReaderPageLabel", screenReaderCurrentLabel: "screenReaderCurrentLabel", directionLinks: "directionLinks", autoHide: "autoHide", responsive: "responsive", id: "id" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, decls: 3, vars: 3, consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]], template: function PaginationControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) { return ctx.pageChange.emit($event); })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) { return ctx.pageBoundsCorrection.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_Template, 6, 8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    } }, directives: function () { return [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]; }, styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination-controls',
                template: DEFAULT_TEMPLATE,
                styles: [DEFAULT_STYLES],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderPaginationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.pageBoundsCorrection.emit(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsDirective = __decorate$3([ __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) { return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PaginationControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PaginationControlsDirective, selectors: [["pagination-template"], ["", "pagination-template", ""]], inputs: { maxSize: "maxSize", id: "id" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, exportAs: ["paginationApi"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'pagination-template,[pagination-template]',
                exportAs: 'paginationApi'
            }]
    }], function () { return [{ type: PaginationService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
NgxPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPaginationModule });
NgxPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxPaginationModule_Factory(t) { return new (t || NgxPaginationModule)(); }, providers: [PaginationService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPaginationModule, { declarations: function () { return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [
                    PaginatePipe,
                    PaginationControlsComponent,
                    PaginationControlsDirective
                ],
                providers: [PaginationService],
                exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            }]
    }], function () { return []; }, null); })();
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2luYXRpb24uanMiLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FLTztBQUNQOzs7Ozs7Ozs7MkVBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFLTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBWTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT3V0cHV0LCBQaXBlLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxudmFyIFBhZ2luYXRpb25TZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvblNlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSB7fTtcclxuICAgICAgICB0aGlzLkRFRkFVTFRfSUQgPSAnREVGQVVMVF9QQUdJTkFUSU9OX0lEJztcclxuICAgIH1cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5kZWZhdWx0SWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLkRFRkFVTFRfSUQ7IH07XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgUGFnaW5hdGlvbkluc3RhbmNlIHdpdGggdGhpcyBzZXJ2aWNlLiBSZXR1cm5zIGFcclxuICAgICAqIGJvb2xlYW4gdmFsdWUgc2lnbmlmeWluZyB3aGV0aGVyIHRoZSBpbnN0YW5jZSBpcyBuZXcgb3JcclxuICAgICAqIHVwZGF0ZWQgKHRydWUgPSBuZXcgb3IgdXBkYXRlZCwgZmFsc2UgPSB1bmNoYW5nZWQpLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5pZCA9IHRoaXMuREVGQVVMVF9JRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSW5zdGFuY2UoaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGVhY2ggcHJvcGVydHkgb2YgdGhlIGluc3RhbmNlIGFuZCB1cGRhdGUgYW55IHRoYXQgaGF2ZSBjaGFuZ2VkLiBSZXR1cm5cclxuICAgICAqIHRydWUgaWYgYW55IGNoYW5nZXMgd2VyZSBtYWRlLCBlbHNlIHJldHVybiBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXSkge1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJvcF0gIT09IHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXVtwcm9wXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdW3Byb3BdID0gaW5zdGFuY2VbcHJvcF07XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW2lkXS5jdXJyZW50UGFnZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoaWQsIHBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2lkXTtcclxuICAgICAgICAgICAgdmFyIG1heFBhZ2UgPSBNYXRoLmNlaWwoaW5zdGFuY2UudG90YWxJdGVtcyAvIGluc3RhbmNlLml0ZW1zUGVyUGFnZSk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlIDw9IG1heFBhZ2UgJiYgMSA8PSBwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpZF0uY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBpbnN0YW5jZS50b3RhbEl0ZW1zXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5zZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKGlkLCB0b3RhbEl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSAmJiAwIDw9IHRvdGFsSXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLnRvdGFsSXRlbXMgPSB0b3RhbEl0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBpbnN0YW5jZS5pdGVtc1BlclBhZ2UuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5zZXRJdGVtc1BlclBhZ2UgPSBmdW5jdGlvbiAoaWQsIGl0ZW1zUGVyUGFnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLml0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoZSBwYWdpbmF0aW9uIGluc3RhbmNlIG9iamVjdCBtYXRjaGluZyB0aGUgaWQuIElmIG5vXHJcbiAgICAgKiBpZCBzcGVjaWZpZWQsIHJldHVybnMgdGhlIGluc3RhbmNlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRlZmF1bHQgaWQuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gdGhpcy5ERUZBVUxUX0lEOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSh0aGlzLmluc3RhbmNlc1tpZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgc2hhbGxvdyBjbG9uZSBvZiBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBhZ2luYXRpb25TZXJ2aWNlO1xyXG59KCkpO1xuXG52YXIgX19kZWNvcmF0ZSQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBMQVJHRV9OVU1CRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxudmFyIFBhZ2luYXRlUGlwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRlUGlwZShzZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICAvLyBzdG9yZSB0aGUgdmFsdWVzIGZyb20gdGhlIGxhc3QgdGltZSB0aGUgcGlwZSB3YXMgaW52b2tlZFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGFyZ3MpIHtcclxuICAgICAgICAvLyBXaGVuIGFuIG9ic2VydmFibGUgaXMgcGFzc2VkIHRocm91Z2ggdGhlIEFzeW5jUGlwZSwgaXQgd2lsbCBvdXRwdXRcclxuICAgICAgICAvLyBgbnVsbGAgdW50aWwgdGhlIHN1YnNjcmlwdGlvbiByZXNvbHZlcy4gSW4gdGhpcyBjYXNlLCB3ZSB3YW50IHRvXHJcbiAgICAgICAgLy8gdXNlIHRoZSBjYWNoZWQgZGF0YSBmcm9tIHRoZSBgc3RhdGVgIG9iamVjdCB0byBwcmV2ZW50IHRoZSBOZ0ZvclxyXG4gICAgICAgIC8vIGZyb20gZmxhc2hpbmcgZW1wdHkgdW50aWwgdGhlIHJlYWwgdmFsdWVzIGFycml2ZS5cclxuICAgICAgICBpZiAoIShjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHZhciBfaWQgPSBhcmdzLmlkIHx8IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbX2lkXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbX2lkXS5zbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXJ2ZXJTaWRlTW9kZSA9IGFyZ3MudG90YWxJdGVtcyAmJiBhcmdzLnRvdGFsSXRlbXMgIT09IGNvbGxlY3Rpb24ubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UoY29sbGVjdGlvbiwgYXJncyk7XHJcbiAgICAgICAgdmFyIGlkID0gaW5zdGFuY2UuaWQ7XHJcbiAgICAgICAgdmFyIHN0YXJ0LCBlbmQ7XHJcbiAgICAgICAgdmFyIHBlclBhZ2UgPSBpbnN0YW5jZS5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgdmFyIGVtaXRDaGFuZ2UgPSB0aGlzLnNlcnZpY2UucmVnaXN0ZXIoaW5zdGFuY2UpO1xyXG4gICAgICAgIGlmICghc2VydmVyU2lkZU1vZGUgJiYgY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHBlclBhZ2UgPSArcGVyUGFnZSB8fCBMQVJHRV9OVU1CRVI7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gKGluc3RhbmNlLmN1cnJlbnRQYWdlIC0gMSkgKiBwZXJQYWdlO1xyXG4gICAgICAgICAgICBlbmQgPSBzdGFydCArIHBlclBhZ2U7XHJcbiAgICAgICAgICAgIHZhciBpc0lkZW50aWNhbCA9IHRoaXMuc3RhdGVJc0lkZW50aWNhbChpZCwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIGlmIChpc0lkZW50aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbaWRdLnNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWNlID0gY29sbGVjdGlvbi5zbGljZShzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKGlkLCBjb2xsZWN0aW9uLCBzbGljZSwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZW1pdENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSBzdGF0ZSBmb3Igc2VydmVyLXNpZGUgY29sbGVjdGlvbiB0byBhdm9pZCBudWxsXHJcbiAgICAgICAgICAgIC8vIGZsYXNoIGFzIG5ldyBkYXRhIGxvYWRzLlxyXG4gICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZShpZCwgY29sbGVjdGlvbiwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBQYWdpbmF0aW9uSW5zdGFuY2Ugb2JqZWN0LCB1c2luZyBkZWZhdWx0cyBmb3IgYW55IG9wdGlvbmFsIHByb3BlcnRpZXMgbm90IHN1cHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLmNyZWF0ZUluc3RhbmNlID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb25maWcoY29uZmlnKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogY29uZmlnLmlkICE9IG51bGwgPyBjb25maWcuaWQgOiB0aGlzLnNlcnZpY2UuZGVmYXVsdElkKCksXHJcbiAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogK2NvbmZpZy5pdGVtc1BlclBhZ2UgfHwgMCxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICtjb25maWcuY3VycmVudFBhZ2UgfHwgMSxcclxuICAgICAgICAgICAgdG90YWxJdGVtczogK2NvbmZpZy50b3RhbEl0ZW1zIHx8IGNvbGxlY3Rpb24ubGVuZ3RoXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBmaWx0ZXIgY29udGFpbnMgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuY2hlY2tDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHJlcXVpcmVkID0gWydpdGVtc1BlclBhZ2UnLCAnY3VycmVudFBhZ2UnXTtcclxuICAgICAgICB2YXIgbWlzc2luZyA9IHJlcXVpcmVkLmZpbHRlcihmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gIShwcm9wIGluIGNvbmZpZyk7IH0pO1xyXG4gICAgICAgIGlmICgwIDwgbWlzc2luZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFnaW5hdGVQaXBlOiBBcmd1bWVudCBpcyBtaXNzaW5nIHRoZSBmb2xsb3dpbmcgcmVxdWlyZWQgcHJvcGVydGllczogXCIgKyBtaXNzaW5nLmpvaW4oJywgJykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRvIGF2b2lkIHJldHVybmluZyBhIGJyYW5kIG5ldyBhcnJheSBlYWNoIHRpbWUgdGhlIHBpcGUgaXMgcnVuLCB3ZSBzdG9yZSB0aGUgc3RhdGUgb2YgdGhlIHNsaWNlZFxyXG4gICAgICogYXJyYXkgZm9yIGEgZ2l2ZW4gaWQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgbmV4dCB0aW1lIHRoZSBwaXBlIGlzIHJ1biBvbiB0aGlzIGNvbGxlY3Rpb24gJiBpZCwgd2UganVzdFxyXG4gICAgICogbmVlZCB0byBjaGVjayB0aGF0IHRoZSBjb2xsZWN0aW9uLCBzdGFydCBhbmQgZW5kIHBvaW50cyBhcmUgYWxsIGlkZW50aWNhbCwgYW5kIGlmIHNvLCByZXR1cm4gdGhlXHJcbiAgICAgKiBsYXN0IHNsaWNlZCBhcnJheS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5zYXZlU3RhdGUgPSBmdW5jdGlvbiAoaWQsIGNvbGxlY3Rpb24sIHNsaWNlLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVtpZF0gPSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXHJcbiAgICAgICAgICAgIHNpemU6IGNvbGxlY3Rpb24ubGVuZ3RoLFxyXG4gICAgICAgICAgICBzbGljZTogc2xpY2UsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgZW5kOiBlbmRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGEgZ2l2ZW4gaWQsIHJldHVybnMgdHJ1ZSBpZiB0aGUgY29sbGVjdGlvbiwgc2l6ZSwgc3RhcnQgYW5kIGVuZCB2YWx1ZXMgYXJlIGlkZW50aWNhbC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5zdGF0ZUlzSWRlbnRpY2FsID0gZnVuY3Rpb24gKGlkLCBjb2xsZWN0aW9uLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZVtpZF07XHJcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpc01ldGFEYXRhSWRlbnRpY2FsID0gc3RhdGUuc2l6ZSA9PT0gY29sbGVjdGlvbi5sZW5ndGggJiZcclxuICAgICAgICAgICAgc3RhdGUuc3RhcnQgPT09IHN0YXJ0ICYmXHJcbiAgICAgICAgICAgIHN0YXRlLmVuZCA9PT0gZW5kO1xyXG4gICAgICAgIGlmICghaXNNZXRhRGF0YUlkZW50aWNhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zbGljZS5ldmVyeShmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHsgcmV0dXJuIGVsZW1lbnQgPT09IGNvbGxlY3Rpb25bc3RhcnQgKyBpbmRleF07IH0pO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRlUGlwZSA9IF9fZGVjb3JhdGUkMShbXHJcbiAgICAgICAgUGlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0ZScsXHJcbiAgICAgICAgICAgIHB1cmU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtQYWdpbmF0aW9uU2VydmljZV0pXHJcbiAgICBdLCBQYWdpbmF0ZVBpcGUpO1xyXG4gICAgcmV0dXJuIFBhZ2luYXRlUGlwZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IHRlbXBsYXRlIGFuZCBzdHlsZXMgZm9yIHRoZSBwYWdpbmF0aW9uIGxpbmtzIGFyZSBib3Jyb3dlZCBkaXJlY3RseVxyXG4gKiBmcm9tIFp1cmIgRm91bmRhdGlvbiA2OiBodHRwOi8vZm91bmRhdGlvbi56dXJiLmNvbS9zaXRlcy9kb2NzL3BhZ2luYXRpb24uaHRtbFxyXG4gKi9cclxudmFyIERFRkFVTFRfVEVNUExBVEUgPSBcIlxcbiAgICA8cGFnaW5hdGlvbi10ZW1wbGF0ZSAgI3A9XFxcInBhZ2luYXRpb25BcGlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XFxcImlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4U2l6ZV09XFxcIm1heFNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlQ2hhbmdlKT1cXFwicGFnZUNoYW5nZS5lbWl0KCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlQm91bmRzQ29ycmVjdGlvbik9XFxcInBhZ2VCb3VuZHNDb3JyZWN0aW9uLmVtaXQoJGV2ZW50KVxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmd4LXBhZ2luYXRpb25cXFwiIFxcbiAgICAgICAgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgXFxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cXFwic2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsXFxcIiBcXG4gICAgICAgIFtjbGFzcy5yZXNwb25zaXZlXT1cXFwicmVzcG9uc2l2ZVxcXCJcXG4gICAgICAgICpuZ0lmPVxcXCIhKGF1dG9IaWRlICYmIHAucGFnZXMubGVuZ3RoIDw9IDEpXFxcIj5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2aW91c1xcXCIgW2NsYXNzLmRpc2FibGVkXT1cXFwicC5pc0ZpcnN0UGFnZSgpXFxcIiAqbmdJZj1cXFwiZGlyZWN0aW9uTGlua3NcXFwiPiBcXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKm5nSWY9XFxcIjEgPCBwLmdldEN1cnJlbnQoKVxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5wcmV2aW91cygpXFxcIiAoY2xpY2spPVxcXCJwLnByZXZpb3VzKClcXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJwcmV2aW91c0xhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgcHJldmlvdXNMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNGaXJzdFBhZ2UoKVxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHByZXZpb3VzTGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9saT4gXFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInNtYWxsLXNjcmVlblxcXCI+XFxuICAgICAgICAgICAge3sgcC5nZXRDdXJyZW50KCkgfX0gLyB7eyBwLmdldExhc3RQYWdlKCkgfX1cXG4gICAgICAgIDwvbGk+XFxuXFxuICAgICAgICA8bGkgW2NsYXNzLmN1cnJlbnRdPVxcXCJwLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVxcXCIgXFxuICAgICAgICAgICAgW2NsYXNzLmVsbGlwc2lzXT1cXFwicGFnZS5sYWJlbCA9PT0gJy4uLidcXFwiXFxuICAgICAgICAgICAgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwLnBhZ2VzXFxcIj5cXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5zZXRDdXJyZW50KHBhZ2UudmFsdWUpXFxcIiAoY2xpY2spPVxcXCJwLnNldEN1cnJlbnQocGFnZS52YWx1ZSlcXFwiICpuZ0lmPVxcXCJwLmdldEN1cnJlbnQoKSAhPT0gcGFnZS52YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgKHBhZ2UubGFiZWwgPT09ICcuLi4nKSA/IHBhZ2UubGFiZWwgOiAocGFnZS5sYWJlbCB8IG51bWJlcjonJykgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XFxcInAuZ2V0Q3VycmVudCgpID09PSBwYWdlLnZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJDdXJyZW50TGFiZWwgfX0gPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyAocGFnZS5sYWJlbCA9PT0gJy4uLicpID8gcGFnZS5sYWJlbCA6IChwYWdlLmxhYmVsIHwgbnVtYmVyOicnKSB9fTwvc3Bhbj4gXFxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XFxuICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW5leHRcXFwiIFtjbGFzcy5kaXNhYmxlZF09XFxcInAuaXNMYXN0UGFnZSgpXFxcIiAqbmdJZj1cXFwiZGlyZWN0aW9uTGlua3NcXFwiPlxcbiAgICAgICAgICAgIDxhIHRhYmluZGV4PVxcXCIwXFxcIiAqbmdJZj1cXFwiIXAuaXNMYXN0UGFnZSgpXFxcIiAoa2V5dXAuZW50ZXIpPVxcXCJwLm5leHQoKVxcXCIgKGNsaWNrKT1cXFwicC5uZXh0KClcXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJuZXh0TGFiZWwgKyAnICcgKyBzY3JlZW5SZWFkZXJQYWdlTGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAge3sgbmV4dExhYmVsIH19IDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwicC5pc0xhc3RQYWdlKClcXFwiPlxcbiAgICAgICAgICAgICAgICAge3sgbmV4dExhYmVsIH19IDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvbGk+XFxuXFxuICAgIDwvdWw+XFxuICAgIDwvcGFnaW5hdGlvbi10ZW1wbGF0ZT5cXG4gICAgXCI7XHJcbnZhciBERUZBVUxUX1NUWUxFUyA9IFwiXFxuLm5neC1wYWdpbmF0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcbiAgLm5neC1wYWdpbmF0aW9uOjpiZWZvcmUsIC5uZ3gtcGFnaW5hdGlvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIGRpc3BsYXk6IHRhYmxlOyB9XFxuICAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjA2MjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIGEsXFxuICAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcXG4gICAgY29sb3I6ICMwYTBhMGE7IFxcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgIC5uZ3gtcGFnaW5hdGlvbiBhOmhvdmVyLFxcbiAgICAubmd4LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2OyB9XFxuICAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICMyMTk5ZTg7XFxuICAgIGNvbG9yOiAjZmVmZWZlO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQge1xcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XFxuICAgIGNvbG9yOiAjY2FjYWNhO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH0gXFxuICAgIC5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQ6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUsXFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUgeyBcXG4gIGNvbnRlbnQ6ICdcXHUwMEFCJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtOyB9XFxuXFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgYTo6YWZ0ZXIsXFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXHUwMEJCJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07IH1cXG5cXG4ubmd4LXBhZ2luYXRpb24gLnNob3ctZm9yLXNyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7IH1cXG4ubmd4LXBhZ2luYXRpb24gLnNtYWxsLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAxcHgpIHtcXG4gIC5uZ3gtcGFnaW5hdGlvbi5yZXNwb25zaXZlIC5zbWFsbC1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH0gXFxuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSBsaTpub3QoLnNtYWxsLXNjcmVlbik6bm90KC5wYWdpbmF0aW9uLXByZXZpb3VzKTpub3QoLnBhZ2luYXRpb24tbmV4dCkge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxufVxcbiAgXCI7XG5cbnZhciBfX2RlY29yYXRlJDIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhJDEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5mdW5jdGlvbiBjb2VyY2VUb0Jvb2xlYW4oaW5wdXQpIHtcclxuICAgIHJldHVybiAhIWlucHV0ICYmIGlucHV0ICE9PSAnZmFsc2UnO1xyXG59XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBwYWdpbmF0aW9uIGNvbnRyb2xzIGNvbXBvbmVudC4gQWN0dWFsbHkganVzdCBhIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgYSBjdXN0b20gdGVtcGxhdGUuXHJcbiAqL1xyXG52YXIgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50KCkge1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IDc7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0xhYmVsID0gJ1ByZXZpb3VzJztcclxuICAgICAgICB0aGlzLm5leHRMYWJlbCA9ICdOZXh0JztcclxuICAgICAgICB0aGlzLnNjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbCA9ICdQYWdpbmF0aW9uJztcclxuICAgICAgICB0aGlzLnNjcmVlblJlYWRlclBhZ2VMYWJlbCA9ICdwYWdlJztcclxuICAgICAgICB0aGlzLnNjcmVlblJlYWRlckN1cnJlbnRMYWJlbCA9IFwiWW91J3JlIG9uIHBhZ2VcIjtcclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlQm91bmRzQ29ycmVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25MaW5rcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYXV0b0hpZGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yZXNwb25zaXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXJlY3Rpb25MaW5rc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb25MaW5rcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbkxpbmtzID0gY29lcmNlVG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImF1dG9IaWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9IaWRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXV0b0hpZGUgPSBjb2VyY2VUb0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicmVzcG9uc2l2ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zaXZlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzcG9uc2l2ZSA9IGNvZXJjZVRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwibWF4U2l6ZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGlyZWN0aW9uTGlua3NcIiwgbnVsbCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhdXRvSGlkZVwiLCBudWxsKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInJlc3BvbnNpdmVcIiwgbnVsbCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwcmV2aW91c0xhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJuZXh0TGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInNjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2NyZWVuUmVhZGVyUGFnZUxhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzY3JlZW5SZWFkZXJDdXJyZW50TGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgT3V0cHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgRXZlbnRFbWl0dGVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwYWdlQ2hhbmdlXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicGFnZUJvdW5kc0NvcnJlY3Rpb25cIiwgdm9pZCAwKTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCA9IF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdwYWdpbmF0aW9uLWNvbnRyb2xzJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IERFRkFVTFRfVEVNUExBVEUsXHJcbiAgICAgICAgICAgIHN0eWxlczogW0RFRkFVTFRfU1RZTEVTXSxcclxuICAgICAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICAgICAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxuICAgICAgICB9KVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQ7XHJcbn0oKSk7XG5cbnZhciBfX2RlY29yYXRlJDMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhJDIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgaXMgd2hhdCBwb3dlcnMgYWxsIHBhZ2luYXRpb24gY29udHJvbHMgY29tcG9uZW50cywgaW5jbHVkaW5nIHRoZSBkZWZhdWx0IG9uZS5cclxuICogSXQgZXhwb3NlcyBhbiBBUEkgd2hpY2ggaXMgaG9va2VkIHVwIHRvIHRoZSBQYWdpbmF0aW9uU2VydmljZSB0byBrZWVwIHRoZSBQYWdpbmF0ZVBpcGUgaW4gc3luY1xyXG4gKiB3aXRoIHRoZSBwYWdpbmF0aW9uIGNvbnRyb2xzLlxyXG4gKi9cclxudmFyIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZShzZXJ2aWNlLCBjaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmID0gY2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICAgICAgdGhpcy5tYXhTaXplID0gNztcclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlQm91bmRzQ29ycmVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLnBhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdWIgPSB0aGlzLnNlcnZpY2UuY2hhbmdlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5zZXJ2aWNlLmRlZmF1bHRJZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZUxpbmtzKCk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrVmFsaWRJZCgpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh0aGlzLmdldEN1cnJlbnQoKSAtIDEpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR28gdG8gdGhlIG5leHQgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkSWQoKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5nZXRDdXJyZW50KCkgKyAxKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBjdXJyZW50IHBhZ2UgaXMgZmlyc3QgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmlzRmlyc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnQoKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBjdXJyZW50IHBhZ2UgaXMgbGFzdCBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuaXNMYXN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYXN0UGFnZSgpID09PSB0aGlzLmdldEN1cnJlbnQoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5zZXRDdXJyZW50ID0gZnVuY3Rpb24gKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0Q3VycmVudFBhZ2UodGhpcy5pZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXN0IHBhZ2UgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0TGFzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCk7XHJcbiAgICAgICAgaWYgKGluc3QudG90YWxJdGVtcyA8IDEpIHtcclxuICAgICAgICAgICAgLy8gd2hlbiB0aGVyZSBhcmUgMCBvciBmZXdlciAoYW4gZXJyb3IgY2FzZSkgaXRlbXMsIHRoZXJlIGFyZSBubyBcInBhZ2VzXCIgYXMgc3VjaCxcclxuICAgICAgICAgICAgLy8gYnV0IGl0IG1ha2VzIHNlbnNlIHRvIGNvbnNpZGVyIGEgc2luZ2xlLCBlbXB0eSBwYWdlIGFzIHRoZSBsYXN0IHBhZ2UuXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKGluc3QudG90YWxJdGVtcyAvIGluc3QuaXRlbXNQZXJQYWdlKTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmdldFRvdGFsSXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRJbnN0YW5jZSh0aGlzLmlkKS50b3RhbEl0ZW1zO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuY2hlY2tWYWxpZElkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCkuaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmU6IHRoZSBzcGVjaWZpZWQgaWQgXFxcIlwiICsgdGhpcy5pZCArIFwiXFxcIiBkb2VzIG5vdCBtYXRjaCBhbnkgcmVnaXN0ZXJlZCBQYWdpbmF0aW9uSW5zdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgcGFnZSBsaW5rcyBhbmQgY2hlY2tzIHRoYXQgdGhlIGN1cnJlbnQgcGFnZSBpcyB2YWxpZC4gU2hvdWxkIHJ1biB3aGVuZXZlciB0aGVcclxuICAgICAqIFBhZ2luYXRpb25TZXJ2aWNlLmNoYW5nZSBzdHJlYW0gZW1pdHMgYSB2YWx1ZSBtYXRjaGluZyB0aGUgY3VycmVudCBJRCwgb3Igd2hlbiBhbnkgb2YgdGhlXHJcbiAgICAgKiBpbnB1dCB2YWx1ZXMgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS51cGRhdGVQYWdlTGlua3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgaW5zdCA9IHRoaXMuc2VydmljZS5nZXRJbnN0YW5jZSh0aGlzLmlkKTtcclxuICAgICAgICB2YXIgY29ycmVjdGVkQ3VycmVudFBhZ2UgPSB0aGlzLm91dE9mQm91bmRDb3JyZWN0aW9uKGluc3QpO1xyXG4gICAgICAgIGlmIChjb3JyZWN0ZWRDdXJyZW50UGFnZSAhPT0gaW5zdC5jdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VCb3VuZHNDb3JyZWN0aW9uLmVtaXQoY29ycmVjdGVkQ3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZXMgPSBfdGhpcy5jcmVhdGVQYWdlQXJyYXkoaW5zdC5jdXJyZW50UGFnZSwgaW5zdC5pdGVtc1BlclBhZ2UsIGluc3QudG90YWxJdGVtcywgX3RoaXMubWF4U2l6ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcyA9IHRoaXMuY3JlYXRlUGFnZUFycmF5KGluc3QuY3VycmVudFBhZ2UsIGluc3QuaXRlbXNQZXJQYWdlLCBpbnN0LnRvdGFsSXRlbXMsIHRoaXMubWF4U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHRoYXQgdGhlIGluc3RhbmNlLmN1cnJlbnRQYWdlIHByb3BlcnR5IGlzIHdpdGhpbiBib3VuZHMgZm9yIHRoZSBjdXJyZW50IHBhZ2UgcmFuZ2UuXHJcbiAgICAgKiBJZiBub3QsIHJldHVybiBhIGNvcnJlY3QgdmFsdWUgZm9yIGN1cnJlbnRQYWdlLCBvciB0aGUgY3VycmVudCB2YWx1ZSBpZiBPSy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5vdXRPZkJvdW5kQ29ycmVjdGlvbiA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGluc3RhbmNlLnRvdGFsSXRlbXMgLyBpbnN0YW5jZS5pdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDwgaW5zdGFuY2UuY3VycmVudFBhZ2UgJiYgMCA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGluc3RhbmNlLmN1cnJlbnRQYWdlIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmN1cnJlbnRQYWdlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBQYWdlIG9iamVjdHMgdG8gdXNlIGluIHRoZSBwYWdpbmF0aW9uIGNvbnRyb2xzLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNyZWF0ZVBhZ2VBcnJheSA9IGZ1bmN0aW9uIChjdXJyZW50UGFnZSwgaXRlbXNQZXJQYWdlLCB0b3RhbEl0ZW1zLCBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAvLyBwYWdpbmF0aW9uUmFuZ2UgY291bGQgYmUgYSBzdHJpbmcgaWYgcGFzc2VkIGZyb20gYXR0cmlidXRlLCBzbyBjYXN0IHRvIG51bWJlci5cclxuICAgICAgICBwYWdpbmF0aW9uUmFuZ2UgPSArcGFnaW5hdGlvblJhbmdlO1xyXG4gICAgICAgIHZhciBwYWdlcyA9IFtdO1xyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIHZhciBpc1N0YXJ0ID0gY3VycmVudFBhZ2UgPD0gaGFsZldheTtcclxuICAgICAgICB2YXIgaXNFbmQgPSB0b3RhbFBhZ2VzIC0gaGFsZldheSA8IGN1cnJlbnRQYWdlO1xyXG4gICAgICAgIHZhciBpc01pZGRsZSA9ICFpc1N0YXJ0ICYmICFpc0VuZDtcclxuICAgICAgICB2YXIgZWxsaXBzZXNOZWVkZWQgPSBwYWdpbmF0aW9uUmFuZ2UgPCB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIHZhciBpID0gMTtcclxuICAgICAgICB3aGlsZSAoaSA8PSB0b3RhbFBhZ2VzICYmIGkgPD0gcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHZvaWQgMDtcclxuICAgICAgICAgICAgdmFyIHBhZ2VOdW1iZXIgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VOdW1iZXIoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcyk7XHJcbiAgICAgICAgICAgIHZhciBvcGVuaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gMiAmJiAoaXNNaWRkbGUgfHwgaXNFbmQpKTtcclxuICAgICAgICAgICAgdmFyIGNsb3NpbmdFbGxpcHNlc05lZWRlZCA9IChpID09PSBwYWdpbmF0aW9uUmFuZ2UgLSAxICYmIChpc01pZGRsZSB8fCBpc1N0YXJ0KSk7XHJcbiAgICAgICAgICAgIGlmIChlbGxpcHNlc05lZWRlZCAmJiAob3BlbmluZ0VsbGlwc2VzTmVlZGVkIHx8IGNsb3NpbmdFbGxpcHNlc05lZWRlZCkpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gJy4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHBhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFnZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFnZU51bWJlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFnZXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiB0aGUgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlIG9mIHBhZ2luYXRpb24gbGlua3MgW2ldLFxyXG4gICAgICogZmlndXJlIG91dCB3aGF0IHBhZ2UgbnVtYmVyIGNvcnJlc3BvbmRzIHRvIHRoYXQgcG9zaXRpb24uXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuY2FsY3VsYXRlUGFnZU51bWJlciA9IGZ1bmN0aW9uIChpLCBjdXJyZW50UGFnZSwgcGFnaW5hdGlvblJhbmdlLCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgdmFyIGhhbGZXYXkgPSBNYXRoLmNlaWwocGFnaW5hdGlvblJhbmdlIC8gMik7XHJcbiAgICAgICAgaWYgKGkgPT09IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG90YWxQYWdlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXMgLSBwYWdpbmF0aW9uUmFuZ2UgKyBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGhhbGZXYXkgPCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYWdlIC0gaGFsZldheSArIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJtYXhTaXplXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGFnZUNoYW5nZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhZ2VCb3VuZHNDb3JyZWN0aW9uXCIsIHZvaWQgMCk7XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUgPSBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIERpcmVjdGl2ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFnaW5hdGlvbi10ZW1wbGF0ZSxbcGFnaW5hdGlvbi10ZW1wbGF0ZV0nLFxyXG4gICAgICAgICAgICBleHBvcnRBczogJ3BhZ2luYXRpb25BcGknXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1BhZ2luYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICBDaGFuZ2VEZXRlY3RvclJlZl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUpO1xyXG4gICAgcmV0dXJuIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZTtcclxufSgpKTtcblxudmFyIF9fZGVjb3JhdGUgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBOZ3hQYWdpbmF0aW9uTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmd4UGFnaW5hdGlvbk1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIE5neFBhZ2luYXRpb25Nb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBOZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRlUGlwZSxcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtQYWdpbmF0aW9uU2VydmljZV0sXHJcbiAgICAgICAgICAgIGV4cG9ydHM6IFtQYWdpbmF0ZVBpcGUsIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlXVxyXG4gICAgICAgIH0pXHJcbiAgICBdLCBOZ3hQYWdpbmF0aW9uTW9kdWxlKTtcclxuICAgIHJldHVybiBOZ3hQYWdpbmF0aW9uTW9kdWxlO1xyXG59KCkpO1xuXG4vKipcclxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXHJcbiAqL1xuXG5leHBvcnQgeyBERUZBVUxUX1NUWUxFUyBhcyDJtWIsIERFRkFVTFRfVEVNUExBVEUgYXMgybVhLCBOZ3hQYWdpbmF0aW9uTW9kdWxlLCBQYWdpbmF0aW9uU2VydmljZSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUsIFBhZ2luYXRlUGlwZSB9O1xuIl19

/***/ }),

/***/ "./src/app/pages/site/home/home-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/site/home/home-routing.module.ts ***!
  \********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/site/home/home.component.ts");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/site/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/site/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_shared_state_app_app_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/state/app/app.action */ "./src/shared/state/app/app.action.ts");
/* harmony import */ var _shared_utils_all_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/utils/all-posts */ "./src/shared/utils/all-posts.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");













const _c0 = ["top2"];
const _c1 = ["old"];
const _c2 = function (a0) { return { post: a0 }; };
function HomeComponent_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, post_r6));
} }
function HomeComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, post_r7));
} }
function HomeComponent_ng_template_16_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().post;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", post_r8.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_ng_template_16_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_16_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const post_r8 = ctx.post; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onPost(post_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Continue reading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ng_template_16_a_14_Template, 2, 1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_ng_template_16_button_15_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r8 = ctx.post;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("svgIcon", "app:", post_r8.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r8.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r8.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r8.github);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r8.youtube);
} }
const _c3 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
class HomeComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.p = 1;
    }
    ngOnInit() {
        let postsMap = Object(_shared_utils_all_posts__WEBPACK_IMPORTED_MODULE_2__["getAllPosts"])();
        let values = [...postsMap.values()];
        this.featured = values.slice(0, 2);
        this.all = values.slice(2);
    }
    onPost(post) {
        this.store.dispatch(new src_shared_state_app_app_action__WEBPACK_IMPORTED_MODULE_1__["SetPost"](post));
        this.router.navigate([`post/${post.url}`]);
    }
    onPageChange(event) {
        this.p = event;
        this.old.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    onScroll(event) {
        // if (this.isScrooling == false)
        //   setTimeout(() => {
        //     this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
        //     this.isScrooling = true;
        //   }, 100);
        // console.log(event);
        // this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.old = _t.first);
    } }, decls: 18, vars: 7, consts: [[1, "tint-image"], ["fxLayoutAlign", "center center", "fxLayout", "column", 2, "width", "100%", "height", "80vh"], [1, "mat-display-4", "white"], [1, "mat-display-2", "white"], ["fxLayout", "column", "fxLayoutGap", "2vh", 1, "posts", "page"], ["top2", ""], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "1vw"], ["class", "scale-in-center", "fxFlex.xs", "100", "fxFlex", "49", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center"], ["old", ""], ["fxFlex.xs", "100", "fxFlex", "32", "fxLayout.xs", "column", "class", "slide-in-top", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "center center"], [3, "pageChange"], ["cardContent", ""], ["fxFlex.xs", "100", "fxFlex", "49", 1, "scale-in-center"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["fxFlex.xs", "100", "fxFlex", "32", "fxLayout.xs", "column", 1, "slide-in-top"], [1, "small-cards"], ["mat-card-image", "", "alt", "Photo of somewhere", 1, "first-post-img", 3, "src"], ["mat-card-avatar", "", 3, "svgIcon"], ["mat-button", "", 3, "click"], ["fxFlex", ""], ["mat-icon-button", "", "target", "_blank", "matTooltip", "Source code in Githuub", 3, "href", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Youtube video", 4, "ngIf"], ["mat-icon-button", "", "target", "_blank", "matTooltip", "Source code in Githuub", 3, "href"], ["svgIcon", "app:github"], ["mat-icon-button", "", "matTooltip", "Youtube video"], ["svgIcon", "app:youtube"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Technology as a service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sharing our knowledge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_mat_card_9_Template, 2, 4, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_span_12_Template, 3, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pagination-controls", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function HomeComponent_Template_pagination_controls_pageChange_15_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_ng_template_16_Template, 16, 7, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featured);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 2, ctx.all, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx.p)));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]], styles: [".posts[_ngcontent-%COMP%] {\n  padding-top: 72px;\n}\n\n.profile[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 15%;\n  margin-bottom: 2vh;\n}\n\n.small-cards[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n}\n\n.tint-image[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(\"/assets/img/alessandro-pacilio-x-8qGCHJMGQ-unsplash.jpg\");\n  background-size: cover;\n  min-height: 80vh;\n  background-repeat: no-repeat;\n}\n\n.first-post-img[_ngcontent-%COMP%] {\n  height: 40vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.scale-in-center[_ngcontent-%COMP%] {\n  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n          animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@-webkit-keyframes scale-in-center {\n  0% {\n    transform: scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes scale-in-center {\n  0% {\n    transform: scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.slide-in-top[_ngcontent-%COMP%] {\n  -webkit-animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n          animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@-webkit-keyframes slide-in-top {\n  0% {\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n\n\n@media screen and (min-width: 0px) and (max-width: 599.99px) {\n  .mat-display-4[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .mat-display-2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .posts[_ngcontent-%COMP%] {\n    padding-top: 2vh;\n  }\n  .small-cards[_ngcontent-%COMP%] {\n    margin-top: 1vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxSUFLb0Y7RUFDcEYsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFKOUI7O0FBT0E7RUFDRSxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUpuQjs7QUFPQTtFQUNFLGlGQUF5RTtVQUF6RSx5RUFBeUU7QUFKM0U7O0FBT0E7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBSlo7RUFNQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBSlo7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFKWjtFQU1BO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFKWjtBQUNGOztBQU9BO0VBQ0UsOEVBQXNFO1VBQXRFLHNFQUFzRTtBQUp4RTs7QUFPQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFKWjtFQU1BO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFKWjtBQUNGOztBQUpBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsVUFBVTtFQUpaO0VBTUE7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUpaO0FBQ0Y7O0FBT0E7O0NBSEM7O0FBTUQ7RUFDRTtJQUNFLGVBQWU7RUFKakI7RUFNQTtJQUNFLGVBQWU7RUFKakI7RUFNQTtJQUNFLGdCQUFnQjtFQUpsQjtFQU9BO0lBQ0UsZUFBZTtFQUxqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdHMge1xuICBwYWRkaW5nLXRvcDogNzJweDtcbn1cblxuLnByb2ZpbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLnNtYWxsLWNhcmRzIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4udGludC1pbWFnZSB7XG4gIGJhY2tncm91bmQ6IFxuICAvKiB0b3AsIHRyYW5zcGFyZW50IHJlZCwgZmFrZWQgd2l0aCBncmFkaWVudCAqLyBsaW5lYXItZ3JhZGllbnQoXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuNDUpLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjQ1KVxuICAgICksXG4gICAgLyogYm90dG9tLCBpbWFnZSAqLyB1cmwoJy9hc3NldHMvaW1nL2FsZXNzYW5kcm8tcGFjaWxpby14LThxR0NISk1HUS11bnNwbGFzaC5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmZpcnN0LXBvc3QtaW1nIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNjYWxlLWluLWNlbnRlciB7XG4gIGFuaW1hdGlvbjogc2NhbGUtaW4tY2VudGVyIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtaW4tY2VudGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlLWluLXRvcCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdG9wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8qKlxuICBYU1xuKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XG4gIC5tYXQtZGlzcGxheS00IHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbiAgLm1hdC1kaXNwbGF5LTIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAucG9zdHMge1xuICAgIHBhZGRpbmctdG9wOiAydmg7XG4gIH1cblxuICAuc21hbGwtY2FyZHMge1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['top2', { static: true }]
        }], old: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['old', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/site/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/site/home/home.module.ts ***!
  \************************************************/
/*! exports provided: SiteHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHomeModule", function() { return SiteHomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/site/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/site/home/home.component.ts");











class SiteHomeModule {
}
SiteHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SiteHomeModule });
SiteHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SiteHomeModule_Factory(t) { return new (t || SiteHomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomeRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SiteHomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomeRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SiteHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomeRoutingModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-site-home-home-module-es2015.js.map