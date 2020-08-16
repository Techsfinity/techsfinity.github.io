(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/shared/api/post/post.ts":
/*!*************************************!*\
  !*** ./src/shared/api/post/post.ts ***!
  \*************************************/
/*! exports provided: Frameworks, Icon, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frameworks", function() { return Frameworks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Frameworks;
(function (Frameworks) {
    Frameworks["Angular"] = "Angular";
    Frameworks["Flutter"] = "Flutter";
    Frameworks["SpringBoot"] = "Spring Boot";
    Frameworks["Android"] = "Android";
})(Frameworks || (Frameworks = {}));
var Icon;
(function (Icon) {
    Icon["android"] = "android";
    Icon["flutter"] = "flutter";
    Icon["spring"] = "spring";
    Icon["angular"] = "angular";
})(Icon || (Icon = {}));
class Post {
}


/***/ }),

/***/ "./src/shared/utils/all-posts.ts":
/*!***************************************!*\
  !*** ./src/shared/utils/all-posts.ts ***!
  \***************************************/
/*! exports provided: getPostByUrl, getAllPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostByUrl", function() { return getPostByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony import */ var _api_post_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/post/post */ "./src/shared/api/post/post.ts");

const imageBase = 'assets/img/';
const postBase = 'assets/posts/';
const postsMap = new Map();
function getPostByUrl(url) {
    if (postsMap.size == 0)
        getAllPosts();
    return postsMap.get(url);
}
function getAllPosts() {
    postsMap
        .set('embedded-keycloak', {
        title: 'Embedded Keycloak',
        subTitle: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Frameworks"].SpringBoot,
        icon: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Icon"].spring,
        url: 'embedded-keycloak',
        image: `${imageBase}/bradford-nicolas-gWfmINd9-yY-unsplash.jpg`,
        description: 'You can always run keycloak on separate server. But some projects are small and you do not need to share the instance.Just run keycloak along Spring boot app.',
    })
        .set('androidx-security', {
        title: 'Android app security',
        subTitle: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Frameworks"].Android,
        icon: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Icon"].android,
        image: `${imageBase}/krzysztof-hepner-C1JTOq_uTpY-unsplash.jpg`,
        url: 'androidx-security',
        markdown: 'assets/posts/android/security.md',
        description: 'Most of the applications contains sensitive user details. How can we keep them safe? AndroidX have some tips and ticks that you can use to improve.',
    })
        .set('spring-data-jdbc', {
        title: 'Spring Data JDBC with Postgresql',
        subTitle: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Frameworks"].SpringBoot,
        icon: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Icon"].spring,
        image: `${imageBase}/hari-nandakumar-xG8Js-uvgg4-unsplash.jpg`,
        url: 'spring-data-jdbc',
        markdown: 'assets/posts/spring-boot/spring-data-jdbc.md',
        description: `Access relational database with opinionated ORM.
      Focus on Domain Driven Design with simple and limited features.
      Let's setup PostgreSQL database and Spring HATEAOS.`,
    })
        .set('android-tdd', {
        title: 'Test Driven Development (TDD)',
        subTitle: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Frameworks"].Android,
        icon: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Icon"].android,
        image: 'assets/img/robert-tudor-UZCKUqHzaps-unsplash.jpg',
        url: 'android-tdd',
        markdown: 'assets/posts/android/test-driven-development.md',
        description: `With the release of Hilt dependency inject we will try to implement an architecture for Android applications withc is more testable.`,
    })
        .set('angular-ngxs', {
        title: 'State management with NGXS',
        subTitle: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Frameworks"].Angular,
        icon: _api_post_post__WEBPACK_IMPORTED_MODULE_0__["Icon"].angular,
        image: 'assets/img/max-ostrozhinskiy-18wn7B2y-SU-unsplash.jpg',
        meta: '<span>Photo by <a href="https://unsplash.com/@maxon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Max Ostrozhinskiy</a> on <a href="https://unsplash.com/s/photos/state?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
        url: 'angular-ngxs',
        markdown: `${postBase}angular/ngxs.md`,
        github: 'https://github.com/hrandika/ngxs-smaples',
        description: 'Very simple state management for Angular. Yes there is Ngrx but Ngxs seems easy and simple.There are plugins to help with things like storage,dev tolls and more',
    });
    return postsMap;
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map