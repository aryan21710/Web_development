'use strict';

var info = {
    title: 'COMPONENT LESS INDECISION APP',
    subtitle: 'FIRST REACT APP',
    options: []
};

var checkOptions = function checkOptions() {
    return info.options.map(function (o) {
        return React.createElement(
            'li',
            null,
            o
        );
    });
};

var populateOptions = function populateOptions(e) {
    e.preventDefault();
    var value = e.target.elements.options.value;
    info.options.push(value);
    console.log(info.options);
    e.target.value = '';
    renderMe();
};

var renderMe = function renderMe() {
    var template = React.createElement(
        'div',
        null,
        info.title && React.createElement(
            'h1',
            null,
            info.title
        ),
        info.subtitle ? React.createElement(
            'p',
            null,
            info.subtitle
        ) : 'undefined',
        React.createElement(
            'ol',
            null,
            info.options.length > 0 && checkOptions()
        ),
        React.createElement(
            'form',
            { onSubmit: populateOptions },
            React.createElement('input', { name: 'options' }),
            React.createElement(
                'button',
                null,
                'Submit'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderMe();
