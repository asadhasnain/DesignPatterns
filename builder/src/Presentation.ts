import { PDFDocument } from "./PDFDocument";
import { PresentationBuilder } from "./PresentationBuilder";
import { Slide } from "./Slide";

export class Presentation {
  private _slides: Array<Slide> = new Array<Slide>();

  public addSlide(slide: Slide) {
    this._slides.push(slide);
  }

  public export(presentationBuilder: PresentationBuilder) {
    this._slides.forEach(slide => {
      presentationBuilder.addSlide(slide.text);
    });
  }

}