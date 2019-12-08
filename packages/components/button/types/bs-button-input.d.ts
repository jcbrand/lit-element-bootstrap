export class BsButtonInput extends LitElement {
    static get properties(): {
        label: {
            type: StringConstructor;
        };
        toggle: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        active: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        dropdownToggle: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    label: string;
    active: any;
    toggle: boolean;
    disabled: boolean;
    dropdownToggle: boolean;
    firstUpdated(_updatedProperties: any): void;
    _handleFocusOut(): void;
    _handleButtonClick(): void;
    _fireFocusOutEvent(): void;
    _fireButtonClickEvent(): void;
}
import { LitElement } from "lit-element";