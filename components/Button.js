const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <style>
        button {
            background: #e6e6e6;
            border: 1px solid transparent;
            border-radius: 4px;
            color: black;
            cursor: pointer;
            margin: 0 10px 0 0;
            padding: 10px 20px;
        }
    </style>    

    <button>
        <span></span> 
    </button>
`

class Button extends HTMLElement {
    constructor() {
        super();
        this.icon = this.getAttribute('icon');
        this.title = this.getAttribute('title');

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('button').setAttribute('title', this.title);

        this.icon.split(' ').map(element => 
            this.shadowRoot.querySelector('span').classList.add(element)
        );
    }
}

window.customElements.define('app-button', Button);