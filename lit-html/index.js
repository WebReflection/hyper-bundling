import {html, render} from 'lit-html';

render(html`
<p style=${'font-family:sans-serif;'}>
  Hello <strong>World</strong>!
</p>`, document.body);
