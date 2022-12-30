import { Movie } from "./Movie";
import { MoviePresentationBuilder } from "./MoviePresentationBuilder";
import { PDFDocument } from "./PDFDocument";
import { PDFPresentationBuilder } from "./PDFPresentationBuilder";
import { Presentation } from "./Presentation";
import { Query } from "./query/Query";
import { QueryBuilder } from "./query/QueryBuilder";
import { Slide } from "./Slide";



const main = () => {

  console.log("\n***** Builder Design Pattern: To separate the construction of object from its representation *****\n");

  const presentation: Presentation = new Presentation();

  presentation.addSlide(new Slide("Slide 1"));
  presentation.addSlide(new Slide("Slide 2"));
  presentation.addSlide(new Slide("Slide 3"));

  const pdfPresentationBuilder: PDFPresentationBuilder = new PDFPresentationBuilder();

  presentation.export(pdfPresentationBuilder);

  const pdfDocument = pdfPresentationBuilder.getPDFDocument();


  const moviePresentationBuilder: MoviePresentationBuilder = new MoviePresentationBuilder();

  presentation.export(moviePresentationBuilder);

  const movie: Movie = moviePresentationBuilder.getMovie();


  /* Reducing the constructor parameters and build query in parts */

  console.log("\n***** Builder Design Pattern: Construct complex objects step by step *****\n");

  const employeeFilterAndOrdered: Query = new QueryBuilder("Employee").filter(`EmployeeId = 11`).orderBy(`EmployeeId ASC`).build();

  console.log(employeeFilterAndOrdered.toString());

  const employeeOrdered = new QueryBuilder("Employee").orderBy(`EmployeeId ASC`).build();

  console.log(employeeOrdered.toString());


};

main();