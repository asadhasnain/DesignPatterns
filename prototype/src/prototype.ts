import { Valve } from "./components/Valve";
import { ContextMenu } from "./ContextMenu";

(() => { 
    console.log("\n***** Prototype Design Pattern: Create new objects by copying an existing object *****\n");
    const valve = new Valve(10);
    valve.render();
    const contextMenu = new ContextMenu();
    const newValve = contextMenu.duplicate(valve);
    console.log(valve);
    console.log(newValve);
})();