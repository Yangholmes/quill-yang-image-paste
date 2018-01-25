/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Quill editor 插件, 用于剪贴板图片粘贴
 *
 * @file
 * @author Yangholmes 2018-01-24
 */
class ImagePaste {
    constructor(quill, options = {}) {
        this.quill = quill;
        this.eventRegister();
    }

    // 事件注册
    eventRegister() {
        this.handlePaste = this.handlePaste.bind(this);
        this.quill.root.addEventListener('paste', this.handlePaste);
    }

    // paste事件处理
    handlePaste(evt) {
        this.insert = this.insert.bind(this);
        let clipboardData = evt.clipboardData || evt.originalEvent.clipboardData;
        if (clipboardData && clipboardData.items) {
            let items = clipboardData.items;
            this.readFiles(items, this.insert);
        }
    }

    // 从clipboardData中读取图片base64数据
    readFiles(items, callback) {
        [].forEach.call(items, item => {
            if (item.kind === 'file'
                && item.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)) {
                let blob = item.getAsFile();
                let reader = new FileReader();
                reader.onload = function (evt) {
                    callback && callback(evt.target.result);
                }; // data url!
                reader.readAsDataURL(blob);
            }
        });
    }

    // 将base64数据装饰成<img>标签插入quill中
    insert(base64 = '') {
        let selection = this.quill.getSelection(); // null may be returned if editor does not have focus
        let index = (this.quill.getSelection() || {}).index || this.quill.getLength();
        if (selection) {
            // we must be in a browser that supports pasting (like Firefox)
            // so it has already been placed into the editor
        }
        else {
            // otherwise we wait until after the paste when this.quill.getSelection()
            // will return a valid index
            setTimeout(function () {
                this.quill.insertEmbed(index, 'image', base64, 'user');
            }.bind(this), 0);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = ImagePaste;


// if (window.Quill) {
//     window.Quill.register('modules/imagePaste', ImagePaste);
// }


/***/ })
/******/ ]);