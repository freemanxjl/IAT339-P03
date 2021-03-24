import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function StyleGuide() {
    return (
      <div>
        {/* INTERACTIVE ELEMENTS SECTION // */}
        <section id="interactive-elements">
          <h2>Interactive Elements</h2>
          <section className="element">
            <h3>In-text Link</h3>
            <h4>Sample code:</h4>
            <code>&lt;a href="#"&gt;This is a link&lt;/a&gt;</code>
            <h4>Rendered element:</h4>
            <Button variant="link" className="link">This is a link</Button>
          </section>
          {/* Default Button styling section */}
          <section className="element">
            <h3>Navigation Link</h3>
            <p>A Navigation Link is a button that when clicked will navigate to another page</p>
            <p>By default, each button element will be a small button if no size is assigned. Button sizes are split into small, medium, and large and can be assigned by using the following CSS selectors:</p>
            <ul>
              <li>.button-sm -&gt; Small Button</li>
              <li>.button-md -&gt; Medium Button</li>
              <li>.button-lg -&gt; Large Button</li>
            </ul>
            <h4>CSS selector:</h4>
            <p>.button-nav</p>
            <h4>Sample code:</h4>
            <code>
              &lt;a class="button-nav button-sm" href="#"&gt;Default Button&lt;/a&gt;<br />
              &lt;a class="button-nav button-md" href="#"&gt;Default Button&lt;/a&gt;<br />
              &lt;a class="button-nav button-lg" href="#"&gt;Default Button&lt;/a&gt;
            </code>
            <h4>Rendered element:</h4>
            <button className="button-nav button-sm" href="#">Default Button</button>
            <button className="button-nav button-md" href="#">Default Button</button>
            <button className="button-nav button-lg" href="#">Default Button</button>
          </section>
          <section className="element">
            <h3>Submit/Reset Buttons</h3>
            <p>A Submit/Reset Button is a button that when clicked will perform an action. They are a special type of Navigation Button thus they also use the same sizing stylings</p>
            <h4>CSS selector:</h4>
            <p>.submit-button .reset-button</p>
            <h4>CSS combined element selector:</h4>
            <p>.button-nav</p>
            <h4>Sample code:</h4>
            <code>
              &lt;a class="button-nav button-md submit-button" href="#"&gt;Submit Button&lt;/a&gt;<br />
              &lt;a class="button-nav button-md reset-button" href="#"&gt;Reset Button&lt;/a&gt;
            </code>
            <h4>Rendered element:</h4>
            <button className="button-nav button-md reset-button" href="#">Reset Button</button>
            <button className="button-nav button-md submit-button" href="#">Submit Button</button>
          </section>
          <section className="element">
            <h3>Text Input Field with Label</h3>
            <h4>CSS selector:</h4>
            <p>.form-label .form-input</p>
            <h4>Sample code:</h4>
            <code>
              &lt;label class="form-label" for="form-input"&gt;This is a label&lt;/label&gt;<br />
              &lt;input class="form-input" type="text" id="form-input"/&gt;
            </code>
            <h4>Rendered element:</h4>
            <label className="form-label" htmlFor="form-input">This is a label</label>
            <input className="form-input" type="text" id="form-input" placeholder="Placeholder" />
          </section>
          <section className="element">
            <h3>Radio Button with Label</h3>
            <h4>CSS selector:</h4>
            <p>.form-radio-label</p>
            <h4>Sample code:</h4>
            <code>
              &lt;input type="radio" id="form-radio-one" name="form-radio" value="form-radio-one"/&gt;<br />
              &lt;label class="form-radio-label" for="form-radio-one"&gt;This is a radio button&lt;/label&gt;<br />
              &lt;type="radio" id="form-radio-two" name="form-radio" value="form-radio-two"/&gt;<br />
              &lt;label class="form-radio-label" for="form-radio-two"&gt;This is also a radio button&lt;/label&gt;
            </code>
            <h4>Rendered element:</h4>
            {/* Referenced from https://www.w3schools.com/tags/att_input_type_radio.asp */}
            <input type="radio" id="form-radio-one" name="form-radio" defaultValue="form-radio-one" />
            <label className="form-radio-label" htmlFor="form-radio-one">This is a radio button</label>
            <input type="radio" id="form-radio-two" name="form-radio" defaultValue="form-radio-two" />
            <label className="form-radio-label" htmlFor="form-radio-two">This is also a radio button</label>
          </section>
          <section className="element">
            <h3>Image as a Link</h3>
            <p>An Image as a Link is a &lt;img&gt; element nested within an &lt;a&gt; element</p>
            <p>Images have four different sizes and must have a size associated with them. Images can be assigned by using the following CSS selectors:</p>
            <ul>
              <li>.image-xs -&gt; Extra Small Image</li>
              <li>.image-sm -&gt; Small Image</li>
              <li>.image-md -&gt; Medium Image</li>
              <li>.image-lg -&gt; Large Image</li>
            </ul>
            <h4>Sample code:</h4>
            <code>&lt;a href="#"&gt;&lt;img class="image-xs" src="images/matcha-cookies.png" alt="Illustration of a cat head"/&gt;&lt;/a&gt;</code>
            {/* Image used is made by me */}
            <h4>Rendered element:</h4>
            <div className="grid-wrapper">
              <Link to="/style-guide">
                  <Image className="grid-image" src={`${process.env.PUBLIC_URL}/snackingcat.png`} alt="Snacking Cat"/>
                  <div className="grid-overlay"/>
                  <div className="grid-text">
                      <h3 className="grid-title">Sample Text</h3>
                  </div>
              </Link>
            </div>
          </section>
        </section>
        {/* // INTERACTIVE ELEMENTS SECTION */}
        {/* TEXT ELEMENTS SECTION // */}
        <section id="text_elements">
          <h2>Text Elements</h2>
          <section className="element">
            <h3>Headings</h3>
            <h4>Sample code:</h4>
            <code>
              &lt;h1&gt;This is an h1&lt;/h1&gt;<br />
              &lt;h2&gt;This is an h2&lt;/h2&gt;<br />
              &lt;h3&gt;This is an h3&lt;/h3&gt;<br />
              &lt;h4&gt;This is an h4&lt;/h4&gt;<br />
            </code>
            <h4>Rendered element:</h4>
            <h1>This is an h1</h1>
            <h2>This is an h2</h2>
            <h3>This is an h3</h3>
            <h4>This is an h4</h4>
          </section>
          <section className="element">
            <h3>Paragraphs</h3>
            {/* Lorem ipsum generated from https://loremipsum.io/generator/ */}
            <h4>Sample code:</h4>
            <code>
              &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Dignissim suspendisse in est ante in nibh. Vitae aliquet nec ullamcorper sit amet risus. Ut diam quam nulla porttitor massa id neque aliquam. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Diam quam nulla porttitor massa id neque aliquam vestibulum. Duis at tellus at urna condimentum. Nisi quis eleifend quam adipiscing vitae proin. Enim nec dui nunc mattis. Blandit turpis cursus in hac habitasse platea. Eleifend donec pretium vulputate sapien nec.&lt;/p&gt;<br />
            </code>
            <h4>Rendered element:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Dignissim suspendisse in est ante in nibh. Vitae aliquet nec ullamcorper sit amet risus. Ut diam quam nulla porttitor massa id neque aliquam. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Diam quam nulla porttitor massa id neque aliquam vestibulum. Duis at tellus at urna condimentum. Nisi quis eleifend quam adipiscing vitae proin. Enim nec dui nunc mattis. Blandit turpis cursus in hac habitasse platea. Eleifend donec pretium vulputate sapien nec.</p>
          </section>
          <section className="element">
            <h3>Numbered Lists</h3>
            <h4>Sample code:</h4>
            <code>
              &lt;ol&gt;<br />
              &lt;li&gt;Element 1&lt;li/&gt;<br />
              &lt;li&gt;Element 2&lt;li/&gt;<br />
              &lt;li&gt;Element 3&lt;li/&gt;<br />
              &lt;li&gt;Element 4&lt;li/&gt;<br />
              &lt;/ol&gt;
            </code>
            <h4>Rendered element:</h4>
            <ol>
              <li>Element 1</li>
              <li>Element 2</li>
              <li>Element 3</li>
              <li>Element 4</li>
            </ol>
          </section>
        </section>

        {/* COMBINED ELEMENTS SECTION // */}
        <section id="combined-elements">
          <h2>Combined Elements</h2>
          <section className="element">
            <h3>Main Navigation</h3>
            <h4>CSS selector:</h4>
            <p>.main-header, .header-icon, .header-title, .header-item-wrapper, .header-link</p>
            <h4>Sample code:</h4>
            <code>
              &lt;div class="main-header"&gt;<br />
              &lt;img class="header-icon" src="images/tamooki.svg" alt="Site Logo"&gt;<br />
              &lt;p class="header-title"&gt;Tamooki&lt;/p&gt;<br />
              &lt;nav class="header-item-wrapper&gt;<br />
              &lt;a class="header-link"&gt;Link 1&lt;a/&gt;<br />
              &lt;a class="header-link"&gt;Link 2&lt;a/&gt;<br />
              &lt;a class="header-link"&gt;Link 3&lt;a/&gt;<br />
              &lt;a class="header-link"&gt;Link 4&lt;a/&gt;<br />
              &lt;/nav&gt;
              &lt;div class="mobile-navbar"&gt;<br />
              &lt;span class="dropdown-button"&gt;&lt;/span&gt;<br />
              &lt;nav class="dropdown-menu"&gt;<br />
              &lt;div class="dropdown-wrapper"&gt;<br />
              &lt;a class="header-link" href="#"&gt;Link 1&lt;/a&gt;<br />
              &lt;a class="header-link" href="#"&gt;Link 2&lt;/a&gt;<br />
              &lt;a class="header-link" href="#"&gt;Link 3&lt;/a&gt;<br />
              &lt;a class="header-link" href="#"&gt;Link 4&lt;/a&gt;<br />
              &lt;/div&gt;<br />
              &lt;/nav&gt;<br />
              &lt;/div&gt;<br />
              &lt;/div&gt;
            </code>
            {/* Code at the moment is not efficient as header-link items need to appear twice */}
            {/* NOTE: <div class="main-header"> is used instead of <header> as current header is
            styled with position: fixed, on real site it should use <header> instead */}
            <h4>Rendered element:</h4>
          </section>

          <section className="element">
            <h3>Contact Form</h3>
            <h4>CSS selector:</h4>
            <h4>Sample code:</h4>
            <code>
            </code>
            <h4>Rendered element:</h4>
          </section>
        </section>
      </div>
    )};

export default StyleGuide;
