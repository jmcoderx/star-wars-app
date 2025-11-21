import { LitElement, html, css } from 'lit';
import brandLogoSvg from '../assets/brand-logo.svg?raw';
import searchIconSvg from '../assets/search-icon.svg?raw';
import clearIconSvg from '../assets/clear-icon.svg?raw';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

class AppHeader extends LitElement {
    static properties = {
        searchValue: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            box-sizing: border-box 
        }

        .header {
            box-sizing: border-box;
            max-width: 1268px;
            height: 99px;
            background: #ffffff;
            border: 1px solid #e7e4e4;
            border-radius: 112px;
            padding: 24px 40px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.03);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
        }

        .logo-area {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .logo-area:hover {
            cursor: pointer;
        }

        .brand-logo {
            width: 58px;
            height: 51px;
            flex-shrink: 0;
        }

        .title {
            margin: 0;
            font-size: 42.37px;
            line-height: 38px;
            letter-spacing: -0.03em;
            color: #464343;
            font-weight: 400;
        }

        .tagline {
            font-size: 16px;
            color: #464343;
            padding-left: 16px;
            margin-left: 8px;
            border-left: 1px solid #aaa5a5;
            white-space: nowrap;
            letter-spacing: -0.03em;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            height: auto;
        }

        .search {
            position: relative;
            flex: 1;
        }

        .search input {
            box-sizing: border-box;
            width: 100%;
            height: 48px;
            padding: 0 48px 0 48px;
            border: 1px solid #d4d4d8;
            border-radius: 32px;
            font-size: 14px;
            line-height: 48px;
            outline: none;
            box-shadow: 0 4px 16px rgba(0,0,0,0.02);
            background: #ffffff;
            color: #3f3f46;
        }

        .search input::placeholder {
            color: #3f3f46;
            opacity: 0.6;
        }

        .search-icon,
        .clear-icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .search-icon {
            left: 16px;
            pointer-events: none;
        }

        .clear-icon {
            right: 16px;
            cursor: pointer;
        }

        .clear-icon svg {
            width: 16px;
            height: 16px;
        }
    `;

    constructor() {
        super();
        this.searchValue = '';
    }

    _goHome() {
        this.dispatchEvent(new CustomEvent('go-home', {
            bubbles: true,
            composed: true
        }));
    }

    _emitSearch() {
        this.dispatchEvent(new CustomEvent('search-changed', {
          detail: this.searchValue,
          bubbles: true,
          composed: true
        }));
    }

    _handleInput(e) {
        this.searchValue = e.target.value;
        this._emitSearch();
    }

    _handleClear() {
        this.searchValue = '';
        this._emitSearch();
    }

    render() {
        return html`
            <header class="header">
                <div class="logo-area" @click=${this._goHome}>
                    <div class="brand-logo">${unsafeHTML(brandLogoSvg)}</div>
                    <h1 class="title">Star<span style="font-weight: 600;">Folk</span></h1>
                    <div class="tagline">
                        <span>All the characters.</span>
                        <span>One galaxy.</span>
                    </div>
                </div>
                <div class="search">
                    <div class="search-icon">${unsafeHTML(searchIconSvg)}</div>
                    <input
                        type="text"
                        placeholder="Search characters…"
                        .value=${this.searchValue}
                        @input=${this._handleInput}
                    />
                    ${this.searchValue ? html`
                        <div class="clear-icon" @click=${this._handleClear}>
                            ${unsafeHTML(clearIconSvg)}
                        </div>
                    ` : ''}
                </div>
            </header>
        `;
    }
}
customElements.define('app-header', AppHeader);