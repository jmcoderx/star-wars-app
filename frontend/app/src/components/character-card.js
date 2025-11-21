import { LitElement, html, css } from 'lit';
import jediIcon from '../assets/jedi-icon.svg?raw';
import sithIcon from '../assets/sith-icon.svg?raw';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

class CharacterCard extends LitElement {
    static properties = {
        character: { type: Object }
    };

    static styles = css`
        :host {
            display: block;
            box-sizing: border-box;
        }

        .card {
            box-sizing: border-box;
            width: 293px;
            min-height: 632px; 
            background: #ffffff;
            border: 1px solid #e7e4e4;
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.03);
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .icon-section {
            box-sizing: border-box;
            height: 282px;
            background: #f9f7f7;
            border-radius: 8px;
            padding: 32px 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon {
            width: 218px;
            height: 218px;
            border-radius: 8px;
        }

        .icon svg {
            width: 100% !important;
            height: 100% !important;
        }

        .info-section {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .info-row {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .label {
            font-weight: 600;
            color: #aaa5a5;
            letter-spacing: 0.05em;
            border-bottom: 1px solid #D8D4D4;
        }

        .value {
            font-weight: 400;
            color: #464343;
            line-height: 1;
            letter-spacing: -0.03em;
        }

        .films-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    `;

    render() {
        return html`
            <div class="card">
                <div class="icon-section">
                    <div class="icon">
                        ${this.character.isJedi ? unsafeHTML(jediIcon) : unsafeHTML(sithIcon)}
                    </div>
                </div>
                <div class="info-section">
                    <div class="info-row">
                        <div class="label">Name:</div>
                        <div class="value">${this.character.name}</div>
                    </div>
                    <div class="info-row">
                        <div class="label">Gender:</div>
                        <div class="value">${this.character.gender}</div>
                    </div>
                    <div class="info-row">
                        <div class="label">Homeworld:</div>
                        <div class="value">${this.character.homeworld}</div>
                    </div>
                    <div class="info-row">
                        <div class="label">Films:</div>
                        <div class="value">
                            <div class="films-list">
                                ${this.character.films.map(film => html`
                                    <div>${film}</div>
                                `)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('character-card', CharacterCard);