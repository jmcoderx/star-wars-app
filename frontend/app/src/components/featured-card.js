import { LitElement, html, css } from 'lit';
import jediIcon from '../assets/jedi-icon.svg?raw';
import sithIcon from '../assets/sith-icon.svg?raw';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

class FeaturedCard extends LitElement {
    static properties = {
        characters: { type: Array },
        selectedId: { type: Number, attribute: 'selected-id' } 
    };

    static styles = css`
        :host {
            display: block;
            box-sizing: border-box 
        }

        .card {
            box-sizing: border-box;
            width: 294px;
            height: 330px;
            border: 1px solid #e7e4e4;
            background-color: #FFFFFF;
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.03);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #464343; /* optional */
        }

        .top {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .title {
            margin: 0;
            font-size: 20px;
            font-weight: 500;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 8px;
            background: #f9f7f7;
            border-radius: 8px;
            cursor: pointer;
        }

        .item.selected {
            background: #FF6D00 !important;
        }

        .item.selected path {
            fill: #FFFFFF !important;
        }
        
        .item.selected .name {
            color: #FFFFFF !important;
        }
            
        .item:hover {
            background: #f1efef;
        }

        .item:hover path {
            fill: #787474;
        }

        .icon {
            width: 24px;
            height: 24px;
            border-radius: 4px;
        }

        .name {
            font-size: 18px;
            color: #464343;
        }

        .bottom {
            font-size: 16px;
            line-height: 1;
            letter-spacing: -0.03em;
            color: #aaa5a5;
        }

        .bottom span {
            font-weight: 600;
            color: #eb6a00;
            text-decoration: underline;
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
        <div class="card">
            <div class="top">
                <h2 class="title">Featured Characters:</h2>
                <div class="list">
                    ${this.characters.map(character => html`
                        <div class="item ${character.id === this.selectedId ? 'selected' : ''}" @click=${() => this._selectCharacter(character)}>
                            <div class="icon">${character.isJedi ? unsafeHTML(jediIcon) : unsafeHTML(sithIcon)}</div>
                            <div class="name">${character.name}</div>
                        </div>
                    `)}
                </div>
            </div>
            <div class="bottom">
                2025 Star Wardens LTD. | <span>About us</span>
            </div>
        </div>
    `;
  }
}

customElements.define('featured-card', FeaturedCard);