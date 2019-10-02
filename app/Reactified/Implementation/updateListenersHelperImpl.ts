import { Observable } from "tns-core-modules/data/observable/observable";
import { ExtraProps } from "../ExtraProps";
import { Extras } from "../Extras";
import { Reactify } from "./Types";

/*
export const observableImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>, attach: boolean | null, nextProps?: P) => {
    
}
*/
export const updateListenersHelperImpl = <T extends Observable>(instance: Reactify<T>, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    observableImpl(instance, attach, nextProps);
}

const observableImpl = <T extends Observable>(instance: Reactify<T>, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    const node: T | null = instance.getCurrentRef();
        if (node === null) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        instance.updateListeners(node, attach, nextProps);
}