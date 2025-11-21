import { LitElement, html, css } from 'lit';
import './components/app-header.js';
import './components/featured-card.js';
import './components/character-list.js';
import './components/character-card.js';
import './components/content-detail.js';
import { WELCOME_MESSAGE } from './data/content/welcome-message.js';
const API_URL = "http://127.0.0.1:8000";

class App extends LitElement {
  static properties = {
    characters: { type: Array },
    selected: { type: Object },
    searchValue: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    .app-wrapper {
      min-height: 100vh;
      background: #F9F7F7;  
      padding: 50px 122px 0 122px;
      box-sizing: border-box;
    }
      
    .main-layout {
      max-width: 1268px;
      margin-top: 41px;
      display: flex;
      gap: 32px;
    }
    
    .content-area {
      flex: 1;
      display: flex;
    }

    .selected-layout {
      display: flex;
      gap: 30px;
      width: 100%;
      justify-content: space-between;
    }

    .centered-layout {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `;

  constructor() {
    super();
    this.characters = [];
    this.selected = null;
    this.searchValue = '';
  }

  async firstUpdated() {
    const data = await this.fetchCharacters();
    this.characters = data || [];
  }

  get characterList() {
    if (!this.searchValue) {
      return this.characters;
    }
    return this.characters.filter(item => 
      item.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  async fetchCharacters() {
    try {
      const response = await fetch(`${API_URL}/characters`);
      return await response.json();
    } catch (err) {
      console.error("Error fetching characters:", err);
    }
  }

  async _selectCharacter(e) {
    const id = e.detail.id;
    try {
      const response = await fetch(`${API_URL}/characters/${id}`);
      if (!response.ok) {
        throw new Error(`Character ${id} not found (HTTP ${response.status})`);
      }
      const data = await response.json();
      this.selected = data;
    } catch (err) {
      console.error("Failed to load character:", err);
      this.selected = null;
    }
  }

  _goHome() {
    this.selected = null;
  }

  _handleSearch(e) {
    this.searchValue = e.detail;
  }

  render() {
    const featured = this.characters.filter(item => item.isFeatured);
    return html`
      <div class="app-wrapper">
        <app-header @go-home=${this._goHome} @search-changed=${this._handleSearch}></app-header>
        <div class="main-layout">
        <featured-card
          .characters=${featured}
          selected-id=${this.selected?.id}   
          @character-selected=${this._selectCharacter}>
        </featured-card>
        ${this.selected ? html`
          <div class="selected-layout">
            <content-detail .content=${this.selected.content}></content-detail>
            <character-card .character=${this.selected}></character-card>
          </div>
        ` : html`
          <div class="centered-layout">
            ${this.searchValue ? html`
              <character-list
                .characters=${this.characterList}
                @character-selected=${this._selectCharacter}>
              </character-list>
            ` : html`
              <content-detail .content=${WELCOME_MESSAGE}></content-detail>
            `}
          </div>
        `}
        </div>
      </div>
    `;
  }
}

customElements.define('characters-app', App);