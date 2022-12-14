"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MoviePresentationBuilder_1 = require("./MoviePresentationBuilder");
const PDFPresentationBuilder_1 = require("./PDFPresentationBuilder");
const Presentation_1 = require("./Presentation");
const QueryBuilder_1 = require("./query/QueryBuilder");
const Slide_1 = require("./Slide");
const main = () => {
    const presentation = new Presentation_1.Presentation();
    presentation.addSlide(new Slide_1.Slide("Slide 1"));
    presentation.addSlide(new Slide_1.Slide("Slide 2"));
    presentation.addSlide(new Slide_1.Slide("Slide 3"));
    const pdfPresentationBuilder = new PDFPresentationBuilder_1.PDFPresentationBuilder();
    presentation.export(pdfPresentationBuilder);
    const pdfDocument = pdfPresentationBuilder.getPDFDocument();
    const moviePresentationBuilder = new MoviePresentationBuilder_1.MoviePresentationBuilder();
    presentation.export(moviePresentationBuilder);
    const movie = moviePresentationBuilder.getMovie();
    /* Reducing the constructor parameters and build query in parts */
    const employeeFilterAndOrdered = new QueryBuilder_1.QueryBuilder("Employee").filter(`EmployeeId = 11`).orderBy(`EmployeeId ASC`).build();
    console.log(employeeFilterAndOrdered.toString());
    const employeeOrdered = new QueryBuilder_1.QueryBuilder("Employee").orderBy(`EmployeeId ASC`).build();
    console.log(employeeOrdered.toString());
};
main();
