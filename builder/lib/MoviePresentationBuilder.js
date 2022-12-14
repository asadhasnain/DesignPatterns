"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviePresentationBuilder = void 0;
const Movie_1 = require("./Movie");
class MoviePresentationBuilder {
    constructor() {
        this._movie = new Movie_1.Movie();
    }
    addSlide(text) {
        this._movie.addFrame(text);
    }
    getMovie() {
        return this._movie;
    }
}
exports.MoviePresentationBuilder = MoviePresentationBuilder;
