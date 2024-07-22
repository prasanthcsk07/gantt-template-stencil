import type { Components, JSX } from "../types/components";

interface MyGentt extends Components.MyGentt, HTMLElement {}
export const MyGentt: {
    prototype: MyGentt;
    new (): MyGentt;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
