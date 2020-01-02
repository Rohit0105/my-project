(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-reporting-reporting-module"],{

/***/ "./src/app/modules/reporting/reporting-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/reporting/reporting-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ReportingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingRoutingModule", function() { return ReportingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reporting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporting.component */ "./src/app/modules/reporting/reporting.component.ts");




var reportingRoutes = [
    {
        path: '',
        component: _reporting_component__WEBPACK_IMPORTED_MODULE_3__["ReportingComponent"],
        children: [
            {
                path: 'reporting',
                component: _reporting_component__WEBPACK_IMPORTED_MODULE_3__["ReportingComponent"]
            }
        ]
    }
];
var ReportingRoutingModule = /** @class */ (function () {
    function ReportingRoutingModule() {
    }
    ReportingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(reportingRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportingRoutingModule);
    return ReportingRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/reporting/reporting.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/reporting/reporting.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9yZXBvcnRpbmcvcmVwb3J0aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/reporting/reporting.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/reporting/reporting.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reporting works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/reporting/reporting.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/reporting/reporting.component.ts ***!
  \**********************************************************/
/*! exports provided: ReportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingComponent", function() { return ReportingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportingComponent = /** @class */ (function () {
    function ReportingComponent() {
    }
    ReportingComponent.prototype.ngOnInit = function () {
    };
    ReportingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporting',
            template: __webpack_require__(/*! ./reporting.component.html */ "./src/app/modules/reporting/reporting.component.html"),
            styles: [__webpack_require__(/*! ./reporting.component.css */ "./src/app/modules/reporting/reporting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportingComponent);
    return ReportingComponent;
}());



/***/ }),

/***/ "./src/app/modules/reporting/reporting.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/reporting/reporting.module.ts ***!
  \*******************************************************/
/*! exports provided: ReportingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingModule", function() { return ReportingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporting-routing.module */ "./src/app/modules/reporting/reporting-routing.module.ts");
/* harmony import */ var _reporting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reporting.component */ "./src/app/modules/reporting/reporting.component.ts");





var ReportingModule = /** @class */ (function () {
    function ReportingModule() {
        console.log('ReportingModule Loaded');
    }
    ReportingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reporting_component__WEBPACK_IMPORTED_MODULE_4__["ReportingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportingRoutingModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportingModule);
    return ReportingModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-reporting-reporting-module.js.map