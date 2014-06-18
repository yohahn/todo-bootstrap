/**
 * TodoTextInput.react
 *
 * User: Yohahn Kim
 * Date: 6/16/14
 * Time: 11:50 PM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({

    propTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string
    }
});
