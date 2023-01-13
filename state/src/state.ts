import { Canvas } from "./Canvas";
import { LineTool } from "./LineToo";
import { SelectionTool } from "./SelectionTool";
import { StopWatch } from "./stopwatch/StopWatch";

(() => { 
    console.log("\n***** State Design Pattern: Alter an object behavior when its state changes *****\n");
    const canvas = new Canvas();
    canvas.tool = new LineTool();
    canvas.mouseDown();
    canvas.mouseUp();

    /* StopWatch is also implemented using State Pattern but its overly complex and can be achieved using a single boolean inside the 
       stop watch class */
    const stopWatch: StopWatch = new StopWatch();
    stopWatch.click();
    stopWatch.click();
    stopWatch.click();
    stopWatch.click();
})();