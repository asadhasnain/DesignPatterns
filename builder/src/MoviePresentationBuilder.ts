import { Movie } from "./Movie";
import { PresentationBuilder } from "./PresentationBuilder";

export class MoviePresentationBuilder implements PresentationBuilder {

  private _movie: Movie = new Movie();

  public addSlide(text: string) {
    this._movie.addFrame(text);
  }

  public getMovie(): Movie {
    return this._movie;
  }

}