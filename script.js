(function () {
    'use strict';

    var host = document.getElementById('host');

    var inputs = document.querySelectorAll('#host [my-input]');
    inputs = [].slice.apply(inputs);
    
    var outputs = document.querySelectorAll('#host [my-output]');
    outputs = [].slice.apply(outputs);

    var model = {};

    defineWatch(model);

    
    inputs.forEach(function (input) {
        var modelProp = input.getAttribute('my-input');

        input.addEventListener('keyup', function (e) {
            model[modelProp] = e.target.value;
        });
    });

    outputs.forEach(function (output) {
        var modelProp = output.getAttribute('my-output');

        model.watch(modelProp, function (prop, oldValue, value) {
            output.innerHTML = value;
        });
    });

})();