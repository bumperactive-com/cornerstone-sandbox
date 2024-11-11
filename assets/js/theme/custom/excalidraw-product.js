import PageManager from '../page-manager.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ExcalidrawDesigner from '../../components/ExcalidrawDesigner.js';


export default class ExcalidrawProduct extends PageManager {
  constructor(context) {
    super(context);
    // the '$' is optional, but is used to indicate that this is a jQuery element
    this.$someJQueryElement = $('[some-element-data-attribute]');
    // standard JS 
    this.someJSElement = document.querySelector('[some-element-data-attribute]');
  }

  onReady() {
      // Example method that will run on page load (see cart.js for example)
      this.bindEvents();

      // you can also target elements after page load...
      const container = document.querySelector('#excalidraw-root');
      // This tells React which element to inject itself in
      const root = createRoot(container);
      // Renders a React component within the 'root' element
      root.render(<ExcalidrawDesigner />);

      // check these out on the frontend console
      console.log(this.context.injectedJSVarName1)
      console.log(this.context.injectedJSVarName2)
      console.log(this.context);

      console.log(this.$someJQueryElement);
      console.log(this.someJSElement);
  }

  bindEvents() {
    // since this is a jQuery element I can use jQuery methods, like 'on()'
    this.$someJQueryElement.on('click', event => {
        // you will have to manually hide the excalidraw-root section to click this element
        console.log('I done did sumting! =O');
    })
  }

}