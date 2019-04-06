"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// WHEN NEW TEXT IS ENTERED INSIDE A INPUT TEXT, IT WONT BE DISPLAYED.
// FOR THAT STATE SHOULD BE USED WHICH RE-RENDERS DATA WHEN STATE VARIABLE CHANGES.

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.updateOptionsArr = _this.updateOptionsArr.bind(_this);
        _this.removeAllOptionsArr = _this.removeAllOptionsArr.bind(_this);
        _this.removeOne = _this.removeOne.bind(_this);
        _this.state = {
            title: "New Indecision App",
            subtitle: "Let Computer Take Decisions for you",
            optionsArr: ['zx14r', 'interceptor']
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, { removeAllFunc: this.removeAllOptionsArr, options: this.state.optionsArr }),
                React.createElement(AddOption, { options: this.updateOptionsArr }),
                React.createElement(DisplayOptions, { options: this.state.optionsArr, removeOneFunc: this.removeOne })
            );
        }
    }, {
        key: "updateOptionsArr",
        value: function updateOptionsArr(value) {
            this.setState(function (prevState) {
                return {
                    optionsArr: prevState.optionsArr.concat(value)
                };
            });
        }
    }, {
        key: "removeAllOptionsArr",
        value: function removeAllOptionsArr() {
            this.setState(function () {
                return {
                    optionsArr: []
                };
            });
        }
    }, {
        key: "removeOne",
        value: function removeOne(elemToBeRemoved) {
            // eslint-disable-next-line no-console
            console.log('elemToBeRemoved:-' + elemToBeRemoved);

            this.setState(function (prevState) {
                return {
                    optionsArr: prevState.optionsArr.filter(function (v) {
                        return v != elemToBeRemoved;
                    })
                };
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            if (localStorage.getItem('options')) {
                var obj = JSON.parse(localStorage.getItem('options'));
                console.log('componentWillMount:-' + obj);
                this.setState(function () {
                    return {
                        optionsArr: obj
                    };
                });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.optionsArr.length != this.state.optionsArr.length) {
                console.log('componentDidUpdate in Indecision component');
                localStorage.setItem('options', JSON.stringify(this.state.optionsArr));
                console.log(localStorage.getItem('options'));
            }
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this2 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this2.randomOption = _this2.randomOption.bind(_this2);
        return _this2;
    }

    _createClass(Action, [{
        key: "randomOption",
        value: function randomOption() {
            alert(this.props.options[Math.floor(Math.random() * (this.props.options.length - 0) + 0)]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: this.props.options.length == 0, onClick: this.randomOption },
                    "Select an Option for Me"
                ),
                React.createElement(
                    "button",
                    { onClick: this.props.removeAllFunc },
                    "Remove All Options"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.addInput = _this3.addInput.bind(_this3);
        _this3.state = {
            errMsg: undefined
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: "addInput",
        value: function addInput(e) {
            e.preventDefault();
            var value = e.target.elements.textInput.value;
            e.target.elements.textInput.value = '';
            if (value.length > 0) {
                value = value.trim();
                this.props.options(value);
                this.setState(function () {
                    return {
                        errMsg: undefined
                    };
                });
            } else {
                this.setState(function () {
                    return {
                        errMsg: true
                    };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.addInput },
                    React.createElement(
                        "p",
                        null,
                        this.state.errMsg && 'PLEASE ENTER A VALID OPTION'
                    ),
                    React.createElement("input", { name: "textInput" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var DisplayOptions = function (_React$Component4) {
    _inherits(DisplayOptions, _React$Component4);

    function DisplayOptions(props) {
        _classCallCheck(this, DisplayOptions);

        var _this4 = _possibleConstructorReturn(this, (DisplayOptions.__proto__ || Object.getPrototypeOf(DisplayOptions)).call(this, props));

        _this4.showOptions = _this4.showOptions.bind(_this4);
        return _this4;
    }

    _createClass(DisplayOptions, [{
        key: "showOptions",
        value: function showOptions() {
            var _this5 = this;

            if (this.props.options.length > 0) {
                console.log('NEW OPTIONSARR:-' + this.props.options);

                return this.props.options.map(function (v) {
                    return React.createElement(
                        "div",
                        { style: { display: "flex", flexDirection: "row", justifyContent: "space-between" } },
                        React.createElement(
                            "li",
                            null,
                            v
                        ),
                        React.createElement(
                            "button",
                            { onClick: function onClick(e) {
                                    _this5.props.removeOneFunc(v);
                                } },
                            "RemoveME"
                        )
                    );
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "ol",
                    { style: { listStyleType: 'circle' } },
                    this.showOptions()
                )
            );
        }
    }]);

    return DisplayOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
