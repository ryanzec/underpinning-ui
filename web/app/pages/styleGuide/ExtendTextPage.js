import PropTypes from 'prop-types';
import React from 'react';

import CodeExample from '../../react/components/CodeExample';

import StaticExample from './assets/examples/ExtendText/ExtendTextStaticExample';
import DynamicExample from './assets/examples/ExtendText/ExtendTextDynamicExample';
import DefaultValueExample from './assets/examples/ExtendText/ExtendTextDefaultValueExample';
import CharacterThresholdExample from './assets/examples/ExtendText/ExtendTextCharacterThresholdExample';
import NotSearchableExample from './assets/examples/ExtendText/ExtendTextNotSearchableExample';
import NotSearchableTopExample from './assets/examples/ExtendText/ExtendTextNotSearchableTopExample';
import DisabledExample from './assets/examples/ExtendText/ExtendTextDisabledExample';
import NoFilteringExample from './assets/examples/ExtendText/ExtendTextNotFilteringExample';
import CustomFilterExample from './assets/examples/ExtendText/ExtendTextCustomFilterExample';
import CustomOptionRendererExample from './assets/examples/ExtendText/ExtendTextCustomRendererExample';
import StaticAllowCreateExample from './assets/examples/ExtendText/ExtendTextStaticAllowCreateExample';
import DynamicAllowCreateExample from './assets/examples/ExtendText/ExtendTextDynamicAllowCreateExample';
import TaggingExample from './assets/examples/ExtendText/ExtendTextTaggingExample';
import CustomTagRenderer from './assets/examples/ExtendText/ExtendTextCustomTagRendererExample';
import EmptyExample from './assets/examples/ExtendText/ExtendTextEmptyExample';

class ExtendTextPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-extend-text">
        <h1>Extend Text</h1>
        <h2>Auto Complete</h2>
        <h4>Empty</h4>
        <p>Example with not option and allows new creation.</p>
        <CodeExample
          codeContent=""
          exampleComponent={EmptyExample}
        />
        <h4>Statically loaded</h4>
        <p>
          This is a standard extended text with auto complete using a static options list. This functions pretty much
          like a select input with the option of searching and more styling ability (which we will see a little below).
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={StaticExample}
        />
        <h4>Dynamically loaded</h4>
        <p>You can also use an external API call to load the data dynamically.</p>
        <CodeExample
          codeContent=""
          exampleComponent={DynamicExample}
        />
        <h4>Default Value</h4>
        <p>You can set the default value.</p>
        <CodeExample
          codeContent=""
          exampleComponent={DefaultValueExample}
        />
        <h4>Character threshold</h4>
        <p>
          By default options will start to load once you focus the input however you can control this with the
          characterThreshold property.
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={CharacterThresholdExample}
        />
        <h4>Not searchable</h4>
        <p>
          If you want the extend text component to not allow searching (make it more like a standard select drop down),
          then just set the isSearchable property to false
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={NotSearchableExample}
        />
        <h4>Not searchable (top)</h4>
        <p>
          If you want the extend text component to not allow searching (make it more like a standard select drop down),
          then just set the isSearchable property to false
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={NotSearchableTopExample}
        />
        <h4>Disabled</h4>
        <p>You can disable the component by passing true to the disabled property</p>
        <CodeExample
          codeContent=""
          exampleComponent={DisabledExample}
        />
        <h4>Disabled Filter</h4>
        <p>
          By default the auto complete list will filter however you can turn this off by setting the useFiltering
          property to false (
          <strong>NOTE: Filtering is not done on async options as it is needed to be performed on the API side</strong>
          ).
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={NoFilteringExample}
        />
        <h4>Custom filter function</h4>
        <p>
          By default, filtering will filter out value that don't contain the current value in the input (with the
          exception of the create option if enabled) but you can pass a custom filter function as the optionsFilter
          property.
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={CustomFilterExample}
        />
        <h4>Custom option renderer</h4>
        <p>
          You can customize the render to provide different styling to each option (<strong>
            NOTE: While the extend text option only cases about the display and value properties, you can pass any ohter
            property along with each option that will be available if functions like these
          </strong>).
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={CustomOptionRendererExample}
        />
        <h4>Allow create</h4>
        <p>
          By default the auto complete will force the user to select an item from the auto complete list however you can
          allow the user to enter in any value by setting the allowCreate to true.
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={StaticAllowCreateExample}
        />
        <br />
        <CodeExample
          codeContent=""
          exampleComponent={DynamicAllowCreateExample}
        />
        <h4>Tagging</h4>
        <p>If you want the user to be able to select multiple values, then just set the multiple property to true.</p>
        <CodeExample
          codeContent=""
          exampleComponent={TaggingExample}
        />
        <h4>Custom Tag Renderer</h4>
        <p>You can define a custom tag renderer</p>
        <CodeExample
          codeContent=""
          exampleComponent={CustomTagRenderer}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

ExtendTextPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ExtendTextPage;
