import { 
    elementMap,
    AbsoluteLayout,
    ActionBar,
    ActionItem,
    ActivityIndicator,
    Animation,
    Observable
}from "react-nativescript/dist/client/ElementRegistry";


export function nameOf(object: Object): string {
    return object.constructor.name;
}
export function firstLetterLowercase(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
}

const implMethodRegistry: string[] = []; 
console.log("all elements in element registry")
for(let elementName in elementMap) {
    implMethodRegistry.push(elementName + "Impl");
}

type ImplMethod = (...args: any) => any
export const executeInOrder = (implMethods: ImplMethod[], ...args: any) => { 
    let returnValue : any = undefined;
    let run = undefined;

    run = implMethods.find((method) => method.name === "genericImpl");
    if(run) {
        returnValue = run(...args);
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "observableImpl");
    if(run) { 
        returnValue = run(...args);
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "viewBaseImpl"); // extends Observable...
    
    if(run) {
        returnValue = run(...args);
        run = undefined
    }

    run = implMethods.find((method) => method.name === "viewImpl"); // extends ViewBase...
    if(run) {
        returnValue = run(...args);
        run = undefined
    }

    run = implMethods.find((method) => method.name === "actionItemImpl");
    if(run) {
        returnValue = run(...args);
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "pageImpl") // extends View...
    if(run) {
        returnValue = run(...args);
        run = undefined;
    }

    run = implMethods.find((method) => method.name == "textBaseImpl");
    if(run) {
        returnValue = run(...args);
        run = undefined;
    }

    run = implMethods.find((method) => method.name == "buttonImpl"); // extends TextBase...
    if(run) {
        returnValue = run(...args);
        run = undefined;
    }

    return returnValue;
}

const hierarchyMap: Record<string, string> = {
    "AbsoluteLayout" : "LayoutBase",
    "ActionBar" : "View",
    "ActionItem" : "ViewBase",
    "ActivityIndicator" : "ViewBase",
};