import { Observable } from "tns-core-modules/data/observable/observable";

import { shallowEqual } from "react-nativescript/dist/client/shallowEqual";
import { Reactify, Base, Props } from "../Types";


export const shouldComponentUpdateImpl = <T extends Base>(instance: Reactify<T>, nextProps: Props<T>, nextState: any): boolean => {
    return observableImpl(instance, nextProps, nextState);
}

const observableImpl = <T extends Base>(instance: Reactify<T>, nextProps: Props<T>, nextState: any) => {
    
    // if(!(Reflect.get(instance, "tnsType") instanceof Observable)) return;
    
    // console.log(`Observable's shouldComponentUpdate`);
    const shouldUpdate: boolean = !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
    // console.log(`[shouldComponentUpdate] shouldUpdate: ${shouldUpdate}.`);
    Reflect.get(instance, "updateListenersHelper")(null, nextProps);
    // https://lucybain.com/blog/2018/react-js-pure-component/
    return shouldUpdate;
}