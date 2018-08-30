/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import './spoggy-chat/spoggy-chat.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyChat extends PageViewElement {
  _render(props) {
    return html`
    ${SharedStyles}
  666${props.status}333
    -{{status}}-
    <spoggy-chat id="chat" status="${props.status}">...chat-rgement<spoggy-chat>
    `
  }


  static get properties() { return {
    /* The total number of clicks you've done. */
    clicks: Number,
    /* The current value of the counter. */
    value: Number,
    socket: {
      type: Object

    },
    status: {
      type: String,
      value: "test in my-chat",
      notify: true,
      reflectToAttribute: true,
        observer: '_statusChanged'
    }
  }};

}

window.customElements.define('my-chat', MyChat);
