import * as React from "react";
import { EventData } from "tns-core-modules/data/observable/observable";
import { Observable, register, ContentView } from "react-nativescript/dist/client/ElementRegistry";
import { nameOf, firstLetterLowercase } from "./Implementation/Helpers";
import { renderImpl } from "./Implementation/React/renderImpl";
import { getCurrentRefImpl } from "./Implementation/getCurrentRefImpl";
import { ExtraProps } from "./ExtraProps";
import { updateListenersImpl } from "./Implementation/updateListenersImpl";
import { componentDidMountImpl } from "./Implementation/React/componentDidMountImpl";
import { shouldComponentUpdateImpl } from "./Implementation/React/shouldComponentUpdateImpl";
import { componentWillUnmountImpl } from "./Implementation/React/componentWillUnmountImpl";
import { __customHostConfigAppendChildImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl";
import { __customHostConfigRemoveChildImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl";
import { __customHostConfigInsertBeforeImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl";
import { onDataChangeImpl } from "./Implementation/Unique/onDataChangeImpl";
import { CustomNodeHierarchyManager } from "react-nativescript/dist/shared/HostConfigTypes";
import { updateListenersHelperImpl } from "./Implementation/updateListenersHelperImpl";
import { onSelectIndexChangeImpl } from "./Implementation/Unique/onSelectedIndexChangeImpl";
import { onTextChangeImpl } from "./Implementation/Unique/onTextChangeImpl";
import { onValueChangeImpl } from "./Implementation/Unique/onValueChangeImpl";
import { onToggleImpl } from "./Implementation/Unique/onToggleImpl";
import { PropsWithoutForwardedRef } from "react-nativescript/dist/shared/NativeScriptComponentTypings";

type Constructor<T> = new(...args: any[]) => T;
export function Reactified<T extends Observable>(observable: T, name?: string): Constructor<React.Component<Partial<T> & ExtraProps<T>>> { 

    if(!name) {
        name = firstLetterLowercase(nameOf(observable));
    }
    console.log("registering " + name);
    register(name, () => {
       return observable;
    });
    // let self: Reactify = null;
    class Reactify extends React.Component<Partial<T> & ExtraProps<T>> implements CustomNodeHierarchyManager<T> {
        static countOfInstances = 0;
        static defaultProps = {... observable } 
        /*
        constructor(props: T & ExtraProps<T>) {
            super(props);
            Reactify.countOfInstances ++;
            console.log("constructing instance " + Reactify.countOfInstances);
        }
        */
        protected readonly myRef: React.RefObject<T> = React.createRef<T>();
        protected getCurrentRef = (): T | null => {
            return (this.props.forwardedRef || this.myRef).current;
        }
        /**
        * Helper method for updateListeners: simply gets the current ref to pass on to it.
        * @param attach true: attach; false: detach; null: update
        */
        protected updateListenersHelper = (attach: boolean | null, nextProps?: T & ExtraProps<T>): void  => {
            updateListenersHelperImpl(this, attach, nextProps);
        }
        /**
        *
        * @param attach true: attach; false: detach; null: update
        */
    
        protected updateListeners = (node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>): void => {
            updateListenersImpl(this, node, attach, nextProps);        
        }
        componentDidMount = () => {
            componentDidMountImpl(this);
        }
        /**
        * PureComponent's shouldComponentUpdate() method is ignored and replaced with a shallowEqual()
        * comparison of props and state. We'll implement our Component's shouldComponentUpdate() to
        * match the way PureComponent is handled.
        */
        shouldComponentUpdate = (nextProps: T & ExtraProps<T>, nextState: any): boolean => {
            return shouldComponentUpdateImpl(this, nextProps, nextState);
        }
        componentWillUnmount = () => {
            // this.updateListenersHelper(false);
            componentWillUnmountImpl(this);
        }
        
        render = (): React.ReactNode => {
            return renderImpl(name, this, observable);
        }

        __ImplementsCustomNodeHierarchyManager__: true;
        __customHostConfigAppendChild? = (parentInstance: T, child: Observable | import("tns-core-modules/ui/text-base/text-base").TextBase): boolean => {
            return __customHostConfigAppendChildImpl(this, parentInstance, child);
        }
        __customHostConfigRemoveChild? = (parentInstance: T, child: Observable | import("tns-core-modules/ui/text-base/text-base").TextBase): boolean => {
            return __customHostConfigRemoveChildImpl(this, parentInstance, child);
        }
        __customHostConfigInsertBefore?= (parentInstance: T, child: Observable | import("tns-core-modules/ui/text-base/text-base").TextBase, beforeChild: Observable | import("tns-core-modules/ui/text-base/text-base").TextBase): boolean => {
            return __customHostConfigInsertBeforeImpl(this, parentInstance, child, beforeChild);
        }
    
        /* unique/ completely custom stuff... */
        private readonly onDateChange = (args: EventData) => {
            onDataChangeImpl(this, args);
        };
        private readonly onSelectedIndexChange = (args: EventData) => {
            onSelectIndexChangeImpl(this, args)
        };
        private readonly onTextChange = (args: EventData) => {
            onTextChangeImpl(this, args);
        };
        private readonly onValueChange = (args: EventData) => {
            onValueChangeImpl(this, args);
        };
        private readonly onToggle = (args: EventData) => { 
            onToggleImpl(this, args);
        }

    }
    return Reactify;

     // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
}


// React.Component<T & ExtraProps<T>

/* 
// Are not actually needed ?!
function JSX<T extends Observable>(observable: new(...args: any[]) => React.Component<T & ExtraProps<T>>) {
    return React.forwardRef<T, PropsWithoutForwardedRef<T & ExtraProps<T>>>(
        (props: React.PropsWithChildren<PropsWithoutForwardedRef<T & ExtraProps<T>>>, ref: React.RefObject<T>) => {
            const { children, ...rest } = props;
            return React.createElement(
                observable
                ,
                {
                    ...rest,
                    forwardedRef: ref,
                },
                children
            );
        }
    )
}
*/



// export const MyObservable: React.ComponentType<PropsWithoutForwardedRef<Observable> & ExtraProps<Observable>> & React.ClassAttributes<Observable> = JSX(new Observable());
// export const MyButton = JSX(new Button());
// export const MyContentView: React.ComponentType<PropsWithoutForwardedRef<ContentView & ExtraProps<ContentView>>> & React.ClassAttributes<ContentView> = JSX(new ContentView());