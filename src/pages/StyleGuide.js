import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import ContactForm from '../components/CombinedElements';

import TextLink, {FormRadioInput, FormTextInput, ImageLink, NavLink, ResetButton} from '../components/InteractiveElements';
import ColorPallet from '../components/StyleGuideElements';

function StyleGuide() {
    return (
      <div>
        <Helmet>
          <title>Style Guide | Freeman Liu</title>
        </Helmet>
        {/* INTERACTIVE ELEMENTS SECTION // */}
        <section id="interactive-elements">
          <h2>Interactive Elements</h2>
          <section className="element">
            <h3>In-text Link</h3>
            <p>A link component to be used when within text</p>
            <h4>Props:</h4>
            <ul>
              <li>link - URL for external websites</li>
              <li>siteLink - route for a page within site</li>
            </ul>
            <h4>Sample code:</h4>
            <code>
              &lt;TextLink link="https://www.sfu.ca/~fla54/iat339/p1/"&gt;This is a link&lt;/a&gt;<br/>
              &lt;TextLink siteLink="/style-guide"&gt;This is another link&lt;/a&gt;
            </code>
            <h4>Rendered element:</h4>
            <TextLink link="https://www.sfu.ca/~fla54/iat339/p1/">This is a link</TextLink>{' '}
            <TextLink siteLink="/style-guide">This is another link</TextLink>
          </section>
          {/* Default Button styling section */}
          <section className="element">
            <h3>Navigation Link</h3>
            <p>A Navigation Link is a button that when clicked will navigate to another page within the site</p>
            <p>The size of the button can be adjusted by including a keyword as a prop. There are 3 possible sizes:</p>
            <ul>
              <li>sm - small</li>
              <li>md - medium</li>
              <li>lg - large</li>
            </ul>
            <h4>Props:</h4>
            <ul>
              <li>Utilizes same props as Link component from react-router-dom</li>
            </ul>
            <h4>Sample code:</h4>
            <code>
              &lt;NavLink sm to="/style-guide"&gt;Default Button&lt;/a&gt;<br/>
              &lt;NavLink md to="/style-guide"&gt;Default Button&lt;/a&gt;<br/>
              &lt;NavLink lg to="/style-guide"&gt;Default Button&lt;/a&gt;<br/>
            </code>
            <h4>Rendered element:</h4>
            <NavLink sm to="/style-guide">Default Button</NavLink>
            <NavLink md to="/style-guide">Default Button</NavLink>
            <NavLink lg to="/style-guide">Default Button</NavLink>
          </section>
          <section className="element">
            <h3>Submit/Reset Buttons</h3>
            <p>A Submit/Reset Button is a button for forms that when clicked will perform an action.</p>
            <p>The same sizings used for Navigation Links can be used for Submit/Reset buttons as well</p>
            <p>For the rendered element, NavLink is used as it is not within a form. For the proper component, substitute your form submit element with SubmitButton</p>
            <h4>Sample code:</h4>
            <code>
              &lt;ResetButton md to="/style-guide"&gt;Submit Button&lt;/a&gt;<br />
              &lt;SubmitButton type="submit" value="Submit"&gt;
            </code>
            <h4>Rendered element:</h4>
            <ResetButton md to="/style-guide">Reset Button</ResetButton>
            <NavLink md to="/style-guide">Submit Button</NavLink>
          </section>
          <section className="element">
            <h3>Text Input Field with Label</h3>
            <p>A component for forms to insert a label and input of type text</p>
            <h4>Props:</h4>
            <ul>
              <li>formId - For the id to link label and input</li>
              <li>label - Displays the label text given for the following input element</li>
              <li>placeholder - Displays the placeholder text given for the following input element</li>
            </ul>
            <h4>Sample code:</h4>
            <code>
              &lt;FormTextInput formId="form-input" label="This is a label" placeholder="Placeholder"&gt;
            </code>
            <h4>Rendered element:</h4>
            <FormTextInput formId="form-input" label="This is a label" placeholder="Placeholder"/>
          </section>
          <section className="element">
            <h3>Radio Button with Label</h3>
            <p>A component for forms to insert a label and input of type radio button</p>
            <h4>Props:</h4>
            <ul>
              <li>formId - For the id to link label and input</li>
              <li>label - Displays the label text given for the following input element</li>
              <li>name - For the name of the input to be associated with a value</li>
              <li>value - For the value of the input to be associated with a name</li>
            </ul>
            <h4>Sample code:</h4>
            <code>
              &lt;FormRadioInput formId="form-radio-one" label="This is a radio button" name="form-radio" value="form-radio-one"&gt;<br />
              &lt;FormRadioInput formId="form-radio-two" label="This is also a radio button" name="form-radio" value="form-radio-two"&gt;
            </code>
            <h4>Rendered element:</h4>
            <FormRadioInput formId="form-radio-one" label="This is a radio button" name="form-radio" value="form-radio-one"/>
            <FormRadioInput formId="form-radio-two" label="This is also a radio button" name="form-radio" value="form-radio-two"/>
          </section>
          <section className="element">
            <h3>Image as a Link</h3>
            <p>An image that when clicked navigates to a different page on the website. Mainly used as a navigation link to our portfolio projects</p>
            <h4>Props:</h4>
            <ul>
              <li>imageName - name of image (without file extension .png) found within public folder</li>
              <li>imageAlt - the alt tag for the image</li>
              <li>text - the title to be overlayed on top of image</li>
              <li>link - the route for a page within the site</li>
            </ul>
            <h4>Sample code:</h4>
            <code>&lt;ImageLink imageName="grandis-library" imageAlt="Grandis Library" text="Sample Text" link="/style-guide"&gt;</code>
            {/* Image used is made by me */}
            <h4>Rendered element:</h4>
            <ImageLink imageName="grandis-library" imageAlt="Grandis Library" text="Sample Text" link="/style-guide"/>
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
            <h4>Sample code:</h4>
            <code>
              &lt;MainNavbar/&gt; Code below is what is found inside component<br/>
              <br/>&lt;Navbar collapseOnSelect expand="lg"&gt;<br/>
              &lt;Navbar.Brand&gt;<br/>
              &lt;Link className="site-title nav-props" to="/style-guide"&gt;<br/>
              FREEMAN LIU<br/>
              &lt;/Link&gt;<br/>
              &lt;Navbar.Toggle aria-controls="responsive-navbar-nav"&gt;<br/>
              &lt;Navbar.Collapse id="responsive-navbar-nav"&gt;<br/>
              &lt;div className="mr-auto"&gt;<br/>
              &lt;Nav&gt;<br/>
              &lt;NavLink className="nav-link-button nav-props" activeClassName="underline" to="/style-guide"&gt;Style Guide&lt;/NavLink&gt;<br/>
              &lt;NavLink className="nav-link-button nav-props" to="/style-guide"&gt;Contact&lt;/NavLink&gt;<br/>
              &lt;NavLink className="nav-link-button nav-props" to="/style-guide"&gt;About&lt;/NavLink&gt;<br/>
              &lt;NavLink className="nav-link-button nav-props" to="/style-guide"&gt;Portfolio&lt;/NavLink&gt;<br/>
              &lt;/Nav&gt;<br/>
              &lt;Navbar.Collapse&gt;<br/>
              &lt;/Navbar&gt;
            </code>

            <h4>Rendered element:</h4>
            <div style={{backgroundColor: '#ffffff', border: '0.01rem #ffffff solid'}}>
              <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                  <Link className="site-title nav-props" to="/style-guide">
                    FREEMAN LIU
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <div className="mr-auto"/>
                  <Nav>
                  <RouterNavLink className="nav-link-button nav-props" activeClassName="underline" to="/style-guide">Style Guide</RouterNavLink>
                  <RouterNavLink className="nav-link-button nav-props" to="/style-guide">Contact</RouterNavLink>
                  <RouterNavLink className="nav-link-button nav-props" to="/style-guide">About</RouterNavLink>
                  <RouterNavLink className="nav-link-button nav-props" to="/style-guide">Portfolio</RouterNavLink>
                  </Nav>
                  </Navbar.Collapse>
              </Navbar>
            </div>
          </section>

          <section className="element">
            <h3>Contact Form</h3>
            <h4>Sample code:</h4>
            <code>
              &lt;ContactForm/&gt; Code below is what is found inside component<br/>
              <br/>&lt;form&gt;<br/>
              &lt;FormContainer&gt;<br/>
              &lt;FormWrapper&gt;<br/>
              &lt;FormTextInput formId="contact-first-name" label="First name*"&gt;<br/>
              &lt;/FormWrapper&gt;<br/>
              &lt;FormWrapper&gt;<br/>
              &lt;FormTextInput formId="contact-last-name" label="Last name*"&gt;<br/>
              &lt;/FormWrapper&gt;<br/>
              &lt;FormTextInput formId="contact-subject" label="Subject"&gt;<br/>
              &lt;FormTextAreaInput formId="contact-message" label="Message"&gt;<br/>
              &lt;/FormContainer&gt;<br/>
              &lt;SubmitButton type="submit" value="Submit"/&gt;<br/>
              &lt;/form&gt;
            </code>
            <h4>Rendered element:</h4>
            <ContactForm/>
          </section>
        </section>
        <section id="brand-components">
          <h2>Brand Components</h2>

          <section class="element">
            <h3>Fonts</h3>
            <p class="site-title">SITE TITLE, Archivo Black</p>
            <h1>Header 1, Trick Asunder</h1>
            <h2>Header 2, Trick Asunder</h2>
            <h3>Header 3, Trick Asunder</h3>
            <h4>Header 4, Trick Asunder</h4>
            <p>Body, Trick Asunder</p>
          </section>

          <section class="element">
            <h3>Color Pallettes</h3>
            <ColorPallet color="#f82cbb" name="Shocking Pink"/>
            <ColorPallet color="#40e0d0" name="Static Turqoise"/>
            <ColorPallet color="#3a7a73" name="Myrtle Green"/>
            <ColorPallet color="#b8232f" name="Upsdell Red"/>
            <ColorPallet color="#ffffff" name="Pure Black"/>
            <ColorPallet color="#000000" name="Pure White"/>
          </section>
        </section>
        <section id="citations" className="element">
          <h2>Citations</h2>
          <ul>
            <li>Pinhorn, Johnny. Designer. Kale, Ninad. Designer. 2014. <strong>Poppins [Font]</strong>. Retrieved from <a href="https://fonts.adobe.com/fonts/poppins">https://fonts.adobe.com/fonts/poppins</a></li>
            <li>Adams, Vernon. Designer. 2017. <strong>Nunito [Font]</strong>. Retrieved from <a href="https://fonts.adobe.com/fonts/nunito">https://fonts.adobe.com/fonts/nunito</a></li>
            <li>Liu, Freeman. Designer. 2021. <strong>matcha-cookies [Image]</strong>. Created by me</li>
            <li>Liu, Freeman. Designer. 2021. <strong>red-velvet-cookies [Image]</strong>. Created by me</li>
            <li>Liu, Freeman. Designer. 2021. <strong>moogi-logo [Image]</strong>. Created by me</li>
            <li>Liu, Freeman. Designer. 2021. <strong>footprint [Image]</strong>. Created by me</li>
            <li>Material Design. Designer. 2021. <strong>menu-white-18dp [Image]</strong>. Retrieved from <a href="https://material.io/resources/icons/">https://material.io/resources/icons/</a></li>
            <li>Material Design. Designer. 2021. <strong>shopping_cart-white-18dp [Image]</strong>. Retrieved from <a href="https://material.io/resources/icons/">https://material.io/resources/icons/</a></li>
            <li>Gault, Matthew. Writer. 2020. <strong>art-direction-AC [Image]</strong>. Retrieved from <a href="https://time.com/5804599/animal-crossing-new-horizons-review/">https://time.com/5804599/animal-crossing-new-horizons-review/</a></li>
            <li>Greenwald, Will. Writer. 2020. <strong>art-direction-AC-2 [Image]</strong>. Retrieved from <a href="https://www.pcmag.com/reviews/animal-crossing-new-horizons-for-nintendo-switch">https://www.pcmag.com/reviews/animal-crossing-new-horizons-for-nintendo-switch</a></li>
            <li>Parkin, Simon. Writer. 2020. <strong>art-direction-AC-3 [Image]</strong>. Retrieved from <a href="https://www.newyorker.com/culture/culture-desk/finding-connection-during-quarantine-with-animal-crossing-new-horizons">https://www.newyorker.com/culture/culture-desk/finding-connection-during-quarantine-with-animal-crossing-new-horizons</a></li>
            <li>Luu, Daniel. Designer. 2020. <strong>art-direction-nookazon [Image]</strong>. Retrieved from <a href="https://nookazon.com/">https://nookazon.com/</a></li>
            <li>Luu, Daniel. Designer. 2020. <strong>art-drection-nookazon-2 [Image]</strong>. Retrieved from <a href="https://nookazon.com/">https://nookazon.com/</a></li>
            <li>Alemon. Designer. 2021. <strong>uniform-art-direction [Image]</strong>. Retrieved from <a href="https://www.vectorstock.com/royalty-free-vector/simple-blue-seamless-wavy-line-pattern-vector-22500202">https://www.vectorstock.com/royalty-free-vector/simple-blue-seamless-wavy-line-pattern-vector-22500202</a></li>
            <li>Meereewee, Anuwat. Designer. 2021. <strong>uniform-art-direction-2 [Image]</strong>. Retrieved from <a href="https://www.vecteezy.com/vector-art/600288-ocean-waves-in-a-simple-cartoon-style">https://www.vecteezy.com/vector-art/600288-ocean-waves-in-a-simple-cartoon-style</a></li>
          </ul>
        </section>
      </div>
    )};

export default StyleGuide;
