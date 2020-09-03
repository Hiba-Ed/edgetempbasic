'use strict'

class TestController {
    hello(){
        return "Hello from Controller";
    }
   //Extracting the view class of the HTTP context
    edge({ view }) {
        return view.render("test", {
            content: "Passing from Controller" });
    }
}

module.exports = TestController