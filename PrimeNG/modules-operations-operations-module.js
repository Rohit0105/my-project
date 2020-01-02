(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-operations-operations-module"],{

/***/ "./src/app/modules/operations/operations-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/operations/operations-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OperationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsRoutingModule", function() { return OperationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _operations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations.component */ "./src/app/modules/operations/operations.component.ts");




var operationsRoutes = [
    {
        path: '',
        component: _operations_component__WEBPACK_IMPORTED_MODULE_3__["OperationsComponent"],
        children: [
            {
                path: '',
                component: _operations_component__WEBPACK_IMPORTED_MODULE_3__["OperationsComponent"]
            }
        ]
    }
];
var OperationsRoutingModule = /** @class */ (function () {
    function OperationsRoutingModule() {
    }
    OperationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(operationsRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OperationsRoutingModule);
    return OperationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/operations/operations.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/operations/operations.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9vcGVyYXRpb25zL29wZXJhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/operations/operations.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/operations/operations.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>operation...!</p>"

/***/ }),

/***/ "./src/app/modules/operations/operations.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/operations/operations.component.ts ***!
  \************************************************************/
/*! exports provided: OperationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsComponent", function() { return OperationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OperationsComponent = /** @class */ (function () {
    function OperationsComponent() {
    }
    OperationsComponent.prototype.ngOnInit = function () {
    };
    OperationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-operations',
            template: __webpack_require__(/*! ./operations.component.html */ "./src/app/modules/operations/operations.component.html"),
            styles: [__webpack_require__(/*! ./operations.component.css */ "./src/app/modules/operations/operations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OperationsComponent);
    return OperationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/operations/operations.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/operations/operations.module.ts ***!
  \*********************************************************/
/*! exports provided: OperationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsModule", function() { return OperationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _operations_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations-routing.module */ "./src/app/modules/operations/operations-routing.module.ts");
/* harmony import */ var _operations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operations.component */ "./src/app/modules/operations/operations.component.ts");





var OperationsModule = /** @class */ (function () {
    function OperationsModule() {
        console.log('OperationsModule Loaded');
    }
    OperationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_operations_component__WEBPACK_IMPORTED_MODULE_4__["OperationsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _operations_routing_module__WEBPACK_IMPORTED_MODULE_3__["OperationsRoutingModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OperationsModule);
    return OperationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-operations-operations-module.js.map