var ModuleTestForceClick = (function(global) {

global["BENCHMARK"] = false;

var test = new Test("ForceClick", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     false,  // enable worker test.
        node:       false,  // enable node test.
        nw:         false,  // enable nw.js test.
        button:     false,  // show button.
        both:       false,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
        }
    }).add([
    ]);

if (IN_BROWSER || IN_NW) {
    test.add([
        testForceClick,
    ]);
} else if (IN_WORKER) {
    test.add([
        // worker test
    ]);
} else if (IN_NODE) {
    test.add([
        // node.js and io.js test
    ]);
}

// --- test cases ------------------------------------------
function testForceClick(test, pass, miss) {
    test.done(pass());
}

return test.run();

})(GLOBAL);

