
import { LitElement, html, css } from 'lit-element';
import { BsCardTextCss } from './bs-card-text.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsCardText extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardTextCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-card-text"))
    window.customElements.define('bs-card-text', BsCardText);
