"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFPresentationBuilder = void 0;
const PDFDocument_1 = require("./PDFDocument");
class PDFPresentationBuilder {
    constructor() {
        this._pdfDocument = new PDFDocument_1.PDFDocument();
    }
    addSlide(text) {
        this._pdfDocument.addPage(text);
    }
    getPDFDocument() {
        return this._pdfDocument;
    }
}
exports.PDFPresentationBuilder = PDFPresentationBuilder;
