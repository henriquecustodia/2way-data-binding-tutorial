(function () {
    'use strict';

    function register(hostId, model) {
        defineWatch(model);

        var host = document.getElementById(hostId);

        var inputs = document.querySelectorAll('#' + hostId + ' [my-input]');
        inputs = [].slice.apply(inputs);

        var outputs = document.querySelectorAll('#' + hostId + ' [my-output]');
        outputs = [].slice.apply(outputs);

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

    }

    register('firstScope', {});
    register('secondScope', {});

})();