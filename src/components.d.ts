/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconName } from "./components/icon/types/icon-name";
import { Size } from "./components/icon/types/size";
export namespace Components {
    interface TarsCounter {
        "initialValue": number;
    }
    interface TarsIcon {
        "ariaHidden": string;
        "icon": IconName;
        "size": Size;
    }
    interface TarsInput {
    }
    interface TarsInputPassword {
        "getValue": () => Promise<string>;
        "inputName": string;
        /**
          * Set placeholder.
         */
        "inputPlaceholder"?: string;
        "isPasswordVisible": boolean;
        "value"?: string;
    }
}
declare global {
    interface HTMLTarsCounterElement extends Components.TarsCounter, HTMLStencilElement {
    }
    var HTMLTarsCounterElement: {
        prototype: HTMLTarsCounterElement;
        new (): HTMLTarsCounterElement;
    };
    interface HTMLTarsIconElement extends Components.TarsIcon, HTMLStencilElement {
    }
    var HTMLTarsIconElement: {
        prototype: HTMLTarsIconElement;
        new (): HTMLTarsIconElement;
    };
    interface HTMLTarsInputElement extends Components.TarsInput, HTMLStencilElement {
    }
    var HTMLTarsInputElement: {
        prototype: HTMLTarsInputElement;
        new (): HTMLTarsInputElement;
    };
    interface HTMLTarsInputPasswordElement extends Components.TarsInputPassword, HTMLStencilElement {
    }
    var HTMLTarsInputPasswordElement: {
        prototype: HTMLTarsInputPasswordElement;
        new (): HTMLTarsInputPasswordElement;
    };
    interface HTMLElementTagNameMap {
        "tars-counter": HTMLTarsCounterElement;
        "tars-icon": HTMLTarsIconElement;
        "tars-input": HTMLTarsInputElement;
        "tars-input-password": HTMLTarsInputPasswordElement;
    }
}
declare namespace LocalJSX {
    interface TarsCounter {
        "initialValue"?: number;
    }
    interface TarsIcon {
        "ariaHidden"?: string;
        "icon": IconName;
        "onClicked"?: (event: CustomEvent<boolean>) => void;
        "size"?: Size;
    }
    interface TarsInput {
    }
    interface TarsInputPassword {
        "inputName"?: string;
        /**
          * Set placeholder.
         */
        "inputPlaceholder"?: string;
        "isPasswordVisible"?: boolean;
        "onShowPassword"?: (event: CustomEvent<boolean>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "tars-counter": TarsCounter;
        "tars-icon": TarsIcon;
        "tars-input": TarsInput;
        "tars-input-password": TarsInputPassword;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tars-counter": LocalJSX.TarsCounter & JSXBase.HTMLAttributes<HTMLTarsCounterElement>;
            "tars-icon": LocalJSX.TarsIcon & JSXBase.HTMLAttributes<HTMLTarsIconElement>;
            "tars-input": LocalJSX.TarsInput & JSXBase.HTMLAttributes<HTMLTarsInputElement>;
            "tars-input-password": LocalJSX.TarsInputPassword & JSXBase.HTMLAttributes<HTMLTarsInputPasswordElement>;
        }
    }
}
