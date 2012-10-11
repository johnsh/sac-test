if (phantom.args.length === 0 || phantom.args.length > 2) {
    console.log('Usage: run-qunit.js URL');
    phantom.exit();
}
 
function waitFor(operation) {
    var timeout = operation.timeout || 3000;
    var start = new Date().getTime();
    var completed = false;
    var interval = setInterval(function() {
        var ellapsedTime = new Date().getTime() - start;
        if (operation.isCompleted()) {
            console.log("script executed in " + ellapsedTime + "ms.");
            operation.onCompleted();
            clearInterval(interval);
        }
        else if (ellapsedTime < timeout) {
            console.log("tests did take too long!");
            phantom.exit(1);
        }
    }, 100);
};
 
var page = new WebPage();
 
// Redirect console.log from page to PhantomJS
page.onConsoleMessage = function(msg) {
    console.log(msg);
};
 
page.open(phantom.args[0], function(status){
    if (status !== "success") {
        console.log("Cannot load test page");
        phantom.exit(1);
    }
    else {
        waitFor({
            isCompleted: function() {
                return page.evaluate(function(){
                    var el = document.getElementById('qunit-testresult');
                    return el && el.innerText.match('completed');
                });
            },
            onCompleted: function() {
                var failedNum = page.evaluate(function(){
                    var el = document.getElementById('qunit-testresult');
                    console.log(el.innerText);
 
                    $('#qunit-tests > li').each(function() {
 
                        // This could be written to an xml file to be integrated
                        // with CCNET or other CI servers
 
                        var module = $('.module-name', this).html();
                        var name = $('.test-name', this).html();
                        var failed = $('.failed',this).html();
                        var passed = $('.passed', this).html();
                        var total = parseInt(failed) + parseInt(passed);
                        var result = $(this).attr("class");
 
                        console.log(
                            (module ? module + "::" : "") + name + " => " + result +
                            "(" + failed + ", " + passed + ", " + total + ")");
                    });
 
                    try {
                        return $('.failed').html();
                    } catch (e) { }
                    return 10000;
                });
                phantom.exit((parseInt(failedNum) > 0) ? 1 : 0);
            },
            timeout: 10000,
        });
    }
});