import { PDFDocument } from "./PDFDocument";
import { PresentationBuilder } from "./PresentationBuilder";

export class PDFPresentationBuilder implements PresentationBuilder {
  private _pdfDocument: PDFDocument = new PDFDocument();

  public addSlide(text: string) {
    this._pdfDocument.addPage(text);
  }

  public getPDFDocument(): PDFDocument {
    return this._pdfDocument;
  }
}