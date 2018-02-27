import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import {debounce} from 'lodash';
import {API_URL} from 'app/constants/api';
import * as arrayUtils from 'src/utils/array';

import ExtendText from 'src/components/ExtendText/ExtendText';

let asyncGetData = async (input, callback) => {
  const response = await axios.get(`${API_URL}/tags?delay=1000`);

  callback({
    options: arrayUtils.arrayToExtendTextOptions(response.data),
  });
};

let debouncedAsyncGetData = debounce(asyncGetData, 500);

class ExtendTextCharacterThresholdExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  onChange = (newValue) => {
    this.setState({
      value: newValue,
    });
  };

  asyncCallbackFunction(input, callback) {
    debouncedAsyncGetData(input, callback);
  }

  render() {
    return (
      <ExtendText
        asyncOptions={this.asyncCallbackFunction}
        characterThreshold={3}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}

ExtendTextCharacterThresholdExample.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ExtendTextCharacterThresholdExample;
