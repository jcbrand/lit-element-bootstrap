import { BsButtonRebootCss } from "./css/bs-button-reboot.js";
import { BsButtonCommonCss } from "./css/bs-button-common.css.js";

/**
 * ButtonMixin
 *
 * @mixin BsButtonMixin
 *
 * @param {*} superclass the class to mix into
 * @exports BsButtonMixin
 *
 * @attribute toggle - Indicates whether or not the button is in toggle state
 * @attribute active - Indicates whether or not the button is in active state
 * @attribute disabled - Indicates whether or not the button is in disable state
 * @attribute dropdown-toggle - Indicates whether or not the button is in dropdown toggle state
 * @attribute outline - Indicates whether or not the button is in outline mode
 * @attribute {primary|secondary|success|info|warning|danger|light|dark|link}  context -
 * Indicates the styling context to use
 *
 * @property {Boolean} toggle - Indicates whether or not the button is in toggle state - default: false
 * @property {Boolean} active - Indicates whether or not the button is in active state - default: false
 * @property {Boolean} disabled - Indicates whether or not the button is in disabled state - default: false
 * @property {Boolean} dropdownToggle - Indicates whether or not the button is in dropdown toggle state - default: false
 *
 * @fires bs-button-click - Gets fired when button has been clicked on
 * @fires bs-button-focusout - Gets fired when button loses focus
 *
 * @cssproperty --btn-text-color - button text color
 * @cssproperty --btn-bg-color - button background color
 * @cssproperty --btn-bd-width - button border width - default: 1px
 * @cssproperty --btn-bd-style - button border style - default: solid
 * @cssproperty --btn-bd-color - button border color - default: transparent
 * @cssproperty --btn-bd-top-left-radius - button border top left radius - default: 0.25rem
 * @cssproperty --btn-bd-top-right-radius - button border top right radius - default: 0.25rem
 * @cssproperty --btn-bd-bottom-right-radius - button border bottom right radius - defaut: 0.25rem
 * @cssproperty --btn-bd-bottom-left-radius - button border bottom left radius - default 0.25rem
 * @cssproperty --btn-display - button display - default: inline-block
 * @cssproperty --btn-font-weight - button font weight - default: 400
 * @cssproperty --btn-text-align - button text align - default: center
 * @cssproperty --btn-white-space - button white space - default: nowrap
 * @cssproperty --btn-vertical-align - button vertical align - default: middle
 * @cssproperty --btn-width - button width
 * @cssproperty --btn-height - button height
 * @cssproperty --btn-flex - button flex
 * @cssproperty --btn-pd-top - button padding top - default 0.375rem
 * @cssproperty --btn-pd-bottom - button padding bottom - default: 0.375rem
 * @cssproperty --btn-pd-left - button padding left - default: 0.75rem
 * @cssproperty --btn-pd-right - button padding right - default: 0.75rem
 * @cssproperty --btn-font-size - button font size - default: 1rem
 * @cssproperty --btn-line-height- button line height - default: 1.5
 * @cssproperty --btn-position - button position
 * @cssproperty --btn-mg-top - button margin top
 * @cssproperty --btn-mg-right - button margin right
 * @cssproperty --btn-mg-left - button margin left
 * @cssproperty --btn-mg-bottom - button margin bottom
 * @cssproperty --btn-display-after - button ::after display
 * @cssproperty --btn-width-after - button ::after width
 * @cssproperty --btn-height-after - button ::after height
 * @cssproperty --btn-margin-left-after - button ::after margin left
 * @cssproperty --btn-vertical-align-after - button ::after vertical align
 * @cssproperty --btn-content-after - button ::after content
 * @cssproperty --btn-border-top-after - button ::after border top
 * @cssproperty --btn-border-right-after - button ::after border right after
 * @cssproperty --btn-border-bottom-after - button ::after border bottom
 * @cssproperty --btn-border-left-after - button ::after border left
 * @cssproperty --btn-margin-left-empty-after button ::after:empty margin left
 * @cssproperty --btn-display-before - button ::before display
 * @cssproperty --btn-width-before - button ::before width
 * @cssproperty --btn-height-before - button ::before height
 * @cssproperty --btn-margin-left-before - button ::before margin left
 * @cssproperty --btn-vertical-align-before - button ::before vertical align
 * @cssproperty --btn-content-before - button ::before content
 * @cssproperty --btn-border-top-before - button ::before border top
 * @cssproperty --btn-border-right-before - button ::before border right
 * @cssproperty --btn-border-bottom-before - button ::before border bottom
 * @cssproperty --btn-border-left-before - button ::before border left
 * @cssproperty --btn-text-color-hover - button hover text color - default: #212529
 * @cssproperty --btn-text-decoration-hover - button hover text decoration - default: none
 * @cssproperty --btn-z-index-hover - button hover z-index
 * @cssproperty --btn-bd-color-hover - button hover border color
 * @cssproperty --btn-box-shadow-hover - button hover box shadow
 * @cssproperty --btn-bg-color-hover - button hover background color
 * @cssproperty --btn-box-shadow-focus - button focus box-shadow - default: 0 0 0 0.2rem rgba(0, 123, 255, 0.25)
 * @cssproperty --btn-text-color-focus - button focus text color
 * @cssproperty --btn-z-index-focus - button focus z-index
 * @cssproperty --btn-bg-color-focus - button focus background color
 * @cssproperty --btn-bd-color-focus - button focus border color
 * @cssproperty --btn-text-color-disabled - button disabled text color
 * @cssproperty --btn-bg-color-disabled - button disabled background color
 * @cssproperty --btn-bd-color-disabled - button disabled border color
 * @cssproperty --btn-opacity-disabled - button disabled opacity - default: 0.65
 * @cssproperty --btn-pointer-events-disabled - button disabled pointer-events - default: none
 * @cssproperty --btn-text-color-active - button active text color
 * @cssproperty --btn-bg-color-active - button active background color
 * @cssproperty --btn-bd-color-active - button active border color
 * @cssproperty --btn-box-shadow-active-focus - button active focus box-shadow
 * @cssproperty --btn-z-index-active - button active z-index
 */
export const BsButtonMixin = superclass =>
    /**
     * Class mixin for button elements
     *
     * @mixin
     */
    class extends superclass {
        static get properties() {
            return {
                toggle: {
                    type: Boolean,
                    reflect: true
                },
                active: {
                    type: Boolean,
                    reflect: true
                },
                disabled: {
                    type: Boolean,
                    reflect: true
                },
                dropdownToggle: {
                    type: Boolean,
                    reflect: true,
                    attribute: "dropdown-toggle"
                }
            };
        }

        static get styles() {
            return [BsButtonRebootCss, BsButtonCommonCss];
        }

        constructor(...args) {
            super(...args);
            this.active = false;
            this.toggle = false;
            this.disabled = false;
            this.dropdownToggle = false;
            this._addAriaRole();
        }

        /**
         * @param {Map} _updatedProperties
         */
        firstUpdated(_updatedProperties) {
            const buttonElement = this.shadowRoot.querySelector(".btn");

            buttonElement.addEventListener("click", event =>
                this._handleButtonClick(event)
            );
            buttonElement.addEventListener("focusout", _ =>
                this._handleFocusOut()
            );
        }

        /**
         * @param {Map} _changedProperties
         */
        updated(_changedProperties) {
            if (_changedProperties.has("active")) {
                this._toggleAriaPressedState();
            }

            if (_changedProperties.has("disabled")) {
                this._toggleAriaDisabledState();
            }
        }

        async activate() {
            this.active = true;
            await this.updateComplete;
        }

        async deactivate() {
            this.active = false;
            await this.updateComplete;
        }

        async disable() {
            this.disabled = true;
            await this.updateComplete;
        }

        async enable() {
            this.disabled = false;
            await this.updateComplete;
        }

        _addAriaRole() {
            this.setAttribute("role", "button");
        }

        _toggleAriaDisabledState() {
            if (this.disabled) {
                this.setAttribute("tabindex", "-1");
                this.setAttribute("aria-disabled", "true");
            } else {
                this.removeAttribute("tabindex");
                this.removeAttribute("aria-disabled");
            }
        }

        _toggleAriaPressedState() {
            if (this.active) {
                this.setAttribute("aria-pressed", "true");
            } else {
                this.removeAttribute("aria-pressed");
            }
        }

        async _handleFocusOut() {
            if (this.disabled) {
                return;
            }

            if (this.active && this.dropdownToggle) {
                this.active = !this.active;
                await this.updateComplete;
            }

            this._fireFocusOutEvent();
        }

        /**
         * @param {MouseEvent} event
         */
        async _handleButtonClick(event) {
            if (this.disabled) {
                return;
            }

            const buttonElement = this.shadowRoot.querySelector(".btn");
            buttonElement.focus();

            if (this.toggle || this.dropdownToggle) {
                this.active = !this.active;
                await this.updateComplete;
            }

            this._fireButtonClickEvent();
        }

        _fireFocusOutEvent() {
            const btnFocusOutEvent = new CustomEvent("bs-button-focusout", {
                bubbles: true,
                composed: true
            });

            this.dispatchEvent(btnFocusOutEvent);
        }

        _fireButtonClickEvent() {
            const btnClickedEvent = new CustomEvent("bs-button-click", {
                bubbles: true,
                composed: true,
                detail: {
                    active: this.active,
                    toggle: this.toggle,
                    dropdown: this.dropdownToggle
                }
            });

            this.dispatchEvent(btnClickedEvent);
        }
    };
