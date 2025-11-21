import { LitElement, html, css } from 'lit';

class ContentDetail extends LitElement {
    static properties = {
        content: { type: Object }
    };

    static styles = css`
        :host {
            display: block;
            box-sizing: border-box;
        }

        .content {
            max-width: 620px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            border-radius: 12px;
            margin-right: 2px;
        }

        .main-title {
            margin-bottom: 4px;
            font-size: 32px;
            line-height: 38px;
            letter-spacing: -0.03em;
            color: #464343;
        }

        .intro, .outro {
            display: flex;
            flex-direction:
            column;
            gap: 16px;
        }

        .paragraph {
            margin: 0;
            font-size: 14px;
            line-height: 1.6;
            letter-spacing: 0;
            color: #464343;
        }

        .section {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .section-title {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.6;
            color: #3f3f46;
        }

        .bullets {
            margin: 0;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            font-size: 14px;
            line-height: 1.6;
            color: #464343;
        }
    `;

    render() {
        return html`
            <div class="content">
                <div class="main-title">${this.content.title}</div>
                <div class="intro">
                    ${this.content.intro.map(p => html`<p class="paragraph">${p}</p>`)}
                </div>
                ${this.content.sections.map(section => html`
                    <div class="section">
                        ${section.title ? html`<h3 class="section-title">${section.title}</h3>` : ''}
                        <ul class="bullets">
                            ${section.bullets.map(bullet => html`<li>${bullet}</li>`)}
                        </ul>
                    </div>
                `)}
                <div class="outro">
                    ${this.content.outro.map(p => html`<p class="paragraph">${p}</p>`)}
                </div>
            </div>
        `;
    }
}

customElements.define('content-detail', ContentDetail);