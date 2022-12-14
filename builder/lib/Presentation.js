"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
var FormatToExport;
(function (FormatToExport) {
    FormatToExport[FormatToExport["PDF"] = 0] = "PDF";
    FormatToExport[FormatToExport["TEXT"] = 1] = "TEXT";
})(FormatToExport || (FormatToExport = {}));
class Presentation {
    constructor() {
        this._slides = new Array();
    }
    addSlide(slide) {
        this._slides.push(slide);
    }
    export(presentationBuilder) {
        this._slides.forEach(slide => {
            presentationBuilder.addSlide(slide.text);
        });
    }
}
exports.Presentation = Presentation;
