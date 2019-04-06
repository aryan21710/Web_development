'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        // props when passed to super and constructor makes the props available to CHILD component using
        // this.props.varname.

        // state is an Object which stores the component state (variables) in form of KEY:VALUE pair.
        // state can be changed are mutable unlike props which are immutable. State should be defined in
        // same COMPONENT which needs to be changed. Props are defined in parent and passed on to child
        // if state is defined in component A then from Component b,c .. you cant access the state by
        // doing this.state.varname. To do that make the var as a props , pass it to child component then
        // from child component you can access that var as shown below in Btns component for arr props 
        // towards arr state.
        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.addOptions = _this.addOptions.bind(_this);
        _this.randomPick = _this.randomPick.bind(_this);
        _this.removeall = _this.removeall.bind(_this);
        _this.removeMe = _this.removeMe.bind(_this);

        _this.state = {
            title: 'INDECISION APP',
            subtitle: "Put Your Life hands on the Computer",
            arr: props.options // THIS IS HOW YOU CAN PASS CUSTOM VALUES TO YOUR MAIN COMPONENT

        };
        return _this;
    }
    // here title and subtitle are key value pairs (variables) which becomes accessible and avialable
    // via object called props. They can be reused across different components.

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            // HERE FOLLOWING VARIABLES ARE PROPS THEY CAN BE ACCESSED via this.props.title/subtitle
            // this.props is a predefined object which will have 2 properties called title and subtitle.   
            // This mechanism establishes One way communication between the Main Component and Other Sub
            // Components.

            // const title="INDECISION APP";
            // const subtitle="Put Your Life hands on the Computer";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Btns, { options: this.randomPick, removeOptions: this.removeall, arr: this.state.arr }),
                React.createElement(Myform, { options: this.addOptions, arr: this.state.arr, removeMe: this.removeMe })
            );
        }
    }, {
        key: 'addOptions',
        value: function addOptions(arrElem) {
            if (arrElem) {
                // THE REASON WE DIDNT PUSH ANYTHING TO PREVSTATE ARRAY IS WE SHOULD NEVER DIRECTLY CHANGE THE
                // PREVSTATE ARRAY. INSTEAD WE SHOULD EXTRACT OUR NEW ARRAY OUT OF PREVSTATE ARRAY AND THATS WHY
                // WE USE CONCAT THAT WILL DERIVE arr OUT OT prevstate and arrElem array.
                this.setState(function (prevState) {
                    return {
                        arr: prevState.arr.concat(arrElem)
                    };
                });
            }
        }
    }, {
        key: 'randomPick',
        value: function randomPick() {
            alert(this.state.arr[Math.floor(Math.random() * this.state.arr.length)]);
        }
    }, {
        key: 'removeall',
        value: function removeall() {
            this.setState(function () {
                return {
                    arr: []
                };
            });
        }
    }, {
        key: 'removeMe',
        value: function removeMe(arrElem) {
            console.log('argument passed:-' + arrElem);
            // arrELEM IS PASSED AS AN ARGUMENT. WE NEED TO MAKE IT UNDEFINED OR FALSE OR REMOVE IT FROM THE
            // ARRAY. USING FILTER WE ARE RETURNING FALSE WHENEVER THAT ELEMENT IS ENCOUNTERED DURIG LOOP ITERATION

            this.setState(function (prevState) {
                return {
                    arr: prevState.arr.filter(function (elem) {
                        return elem !== arrElem;
                    })
                };
            });
            console.log('this.state.arr after removeMe:-' + this.state.arr);
        }
    }]);

    return Main;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title,
                    ' '
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle,
                    ' '
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Btns = function (_React$Component3) {
    _inherits(Btns, _React$Component3);

    function Btns() {
        _classCallCheck(this, Btns);

        return _possibleConstructorReturn(this, (Btns.__proto__ || Object.getPrototypeOf(Btns)).apply(this, arguments));
    }

    _createClass(Btns, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: this.props.arr.length == 0
                        // here options is a props which leaves in a parent. To access it in child component we need
                        // to use this.props.options which accesses the function addOptions. The addOptions in parent
                        // compoennt is accessed via this.addOptions and not this.props.addOptions.
                        , onClick: this.props.options },
                    'What Should i do?'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.removeOptions },
                    'Remove All '
                )
            );
        }
    }]);

    return Btns;
}(React.Component);

var Myform = function (_React$Component4) {
    _inherits(Myform, _React$Component4);

    function Myform(props) {
        _classCallCheck(this, Myform);

        // HERE WE ARE DOING THIS coz subForm being an event handler an object method is not in a 
        // format of (obj.method()) when method is called without () and with some assignemt operators
        // = or === then in that case it loses the this context. Refer React One Notes for more understanding.
        // SO WE NEED TO BIND this IN ALL THE CUSTOM METHODS DEFINED BY US.
        var _this4 = _possibleConstructorReturn(this, (Myform.__proto__ || Object.getPrototypeOf(Myform)).call(this, props));

        _this4.subForm = _this4.subForm.bind(_this4);
        _this4.state = {
            errMsg: undefined
        };
        return _this4;
    }

    _createClass(Myform, [{
        key: 'subForm',
        value: function subForm(e) {
            // THE EVENT OBJECT IS INVOKED AND PASSED WHENEVER AN EVENT HAPPENS. THE FIRST ARGUMENT WILL BE ALWAYS AN EVENT OBJECT 
            // THE BELOW CODE WILL
            // PREVENT DEFAULT BEHAVIOR OF THE EVENT WHICH IS REFRESHING THE WHOLE PAGE AND CHANGING  THE
            // URL OF THE MAIN PAGE WHICH SHOULDNT BE THE CASE IN A SINGLE PAGE APP.
            e.preventDefault();
            // THATS HOW YOU GET THE VALUE OF THE INPUT ELEMENT. TRIM WILL TAKE OF THE BLANK SPACES FROM BOTH
            // THE FRONT AND BACK OF THE STRING.
            var textEntered = e.target.elements.textElm.value.trim();
            e.target.elements.textElm.value = '';

            // console.log('making the arr blank:-'+this.props.dummy);
            // YOU CANT CHANGE THE PROPS LIKE BELOW IN THE CHILD COMPONENT. IT CAN BE DONE ONLY IN PARENT
            // OR USE STATE FOR DUMMY PROP AND THEN CHANGE IT USING SETSTATE HERE. 

            // this.props.dummy=[];


            if (!textEntered) {
                this.setState(function () {
                    return {
                        errMsg: 'PLEASE ENTER A VALID OPTION'
                    };
                });
            } else if (this.props.arr.indexOf(textEntered) != -1) {
                this.setState(function () {
                    return {
                        errMsg: 'OPTION ALREADY EXISTS'
                    };
                });
            } else {
                this.props.options(textEntered);
                this.setState(function () {
                    return {
                        errMsg: undefined
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.state.errMsg);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.props.dummy
                ),
                React.createElement(ListItems, { key: this.props.arr, arr: this.props.arr, removeMe: this.props.removeMe }),
                this.state.errMsg && React.createElement(
                    'p',
                    null,
                    this.state.errMsg
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.subForm },
                    React.createElement('input', { type: 'text', name: 'textElm' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Options'
                    )
                )
            );
        }
    }]);

    return Myform;
}(React.Component);

var ListItems = function (_React$Component5) {
    _inherits(ListItems, _React$Component5);

    function ListItems(props) {
        _classCallCheck(this, ListItems);

        return _possibleConstructorReturn(this, (ListItems.__proto__ || Object.getPrototypeOf(ListItems)).call(this, props));
    }

    _createClass(ListItems, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            console.log('this.props.arr:-' + this.props.arr);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ol',
                    null,
                    this.props.arr.map(function (arrElem) {
                        return React.createElement(
                            'div',
                            { id: arrElem },
                            React.createElement(
                                'li',
                                { style: { width: "200px", float: "left" }, key: arrElem },
                                arrElem
                            ),
                            React.createElement(
                                'button',
                                { onClick: function onClick(e) {
                                        _this6.props.removeMe(arrElem);
                                    }

                                },
                                'Remove Me'
                            )
                        );
                    })
                )
            );
        }
    }]);

    return ListItems;
}(React.Component);

// THIS IS HOW YOU CAN PASS CUSTOM VALUES TO YOUR MAIN COMPONENT. HERE WE ARE GIVING USER THE OPTION OF PASSING
// DEFAULT VALUES FOR OPTIONS ARR TO APPEAR BY DEFAULT.


ReactDOM.render(React.createElement(Main, { options: ['seema', 'aryan', 'ryan'] }), document.getElementById('app'));
