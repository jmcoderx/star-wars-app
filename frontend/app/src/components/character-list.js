import { LitElement, html, css } from 'lit';
import jediIcon from '../assets/jedi-icon.svg?raw';
import sithIcon from '../assets/sith-icon.svg?raw';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

class CharacterList extends LitElement {
    static properties = {
        characters: { type: Array }
    };

    static styles = css`
        :host {
            display: block;
            box-sizing: border-box 
        }

        .list {
            box-sizing:border-box;
            width: 620px;
            display: flex;
            flex-direction: column;
        }

        .item {
            display: flex;
            gap: 8px;
            padding: 12px 0;
            border-bottom: 1px solid #d8d4d4;
        }

        .item:last-child {
            border-bottom: none;
        }

        .item:hover {
            cursor: pointer;
        }
        
        .icon-area {
            box-sizing: border-box;
            width: 89.5px;
            height: 81.42px;
            border-radius: 2.31px;
            padding: 9.24px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .icon {
            width: 62.94px;
            height: 62.94px;
            border-radius: 4px;
        }

        .icon svg {
            width: 100% !important;
            height: 100% !important;
        }

        .item:hover {
            background-color: #F1EFEF
        }

        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 12px;
        }

        .name {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.6;
            letter-spacing: 0;
            color: #3f3f46;
        }

        .description {
            margin: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.6;
            letter-spacing: 0;
            color: #464343;
        }
    `;


    _selectCharacter(character) {
        this.dispatchEvent(new CustomEvent('character-selected', {
          detail: character,
          bubbles: true,
          composed: true
        }));
    }

    render() {
        return html`
            <div class="list">
            ${this.characters?.map(item => html`
                <div class="item" @click=${() => this._selectCharacter(item)}>
                    <div class="icon-area">
                    <div class="icon">
                        ${item.isJedi ? unsafeHTML(jediIcon) : unsafeHTML(sithIcon)}
                    </div>
                    </div>
                    <div class="info">
                        <div class="name">${item.name}</div>
                        <div class="description">${item.description}</div>
                    </div>
                </div>
            `) ?? 'No characters'}
            </div>
        `;
    }
}

customElements.define('character-list', CharacterList);