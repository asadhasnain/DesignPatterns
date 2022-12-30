import { IComponent } from "./components/IComponent";
import { Valve } from "./components/Valve";

export class ContextMenu {
    public duplicate (component: IComponent) : IComponent {
        /** Problems: 
         *  1. Violates open/close principle
         *  2. Coupling with Valve and if we introduce new classes
         *  3. Not extensible if we allow user to create the custom components
         */

        // if(component instanceof Valve) {
        //     const source = component as Valve;
        //     const newValve = new Valve(source.flow); 
        //     return newValve;
        // }

        return component.clone();   // Prototype
    }
}