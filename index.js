'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var React = require('react');
var PropTypes = require('prop-types');

function createElement(name, type) {
    function CreateElement(props) {
        return React.createElement(type, props, props.children);
    }

    CreateElement.displayName = name;

    CreateElement.propTypes = {
        children: PropTypes.node
    };

    CreateElement.defaultProps = {
        children: undefined
    };

    return CreateElement;
}

var Select = createElement("Select", "select");
var Option = createElement("Option", "option");

exports.Select = Select;
exports.Option = Option;