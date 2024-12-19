function returnCallerLine() {
    const error = new Error();
    const stackLines = error.stack.split("\n"); // Split the stack trace into lines
    const callerLine = stackLines[2]; // The third line in the stack is the caller
    return callerLine;
}
function pollForLibrary(libName,WindowName,callback,interval,timeout){
    var startTime = Date.now()
    var interval = interval || 5000;
    var timeout = timeout || 50;
    (function checkLibrary() {
        if (window[WindowName]) {
          callback();
          console.log('Port successfully loaded ${libName}') // Call the callback once the library is available
        } else if (Date.now() - startTime < timeout) {
          setTimeout(checkLibrary, interval); // Retry after the specified interval
        } else {
          console.error(`${libName} did not load within the timeout period.`);
        }
      })();
}
class Port{
    static add(library,callback){
        switch(library){
            case "jquery":
                const script = document.createElement("script");
                script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
                script.type = "text/javascript";
                script.onload = () => {
                    pollForLibrary("Jquery","jQuery",callback)
                    
                    
                };
                script.onerror = () => {
                    console.error("Error loading Jquery. Please inspect your code for errors.");
                };
                document.head.appendChild(script);
                
            break;
            default:
                console.log("Error loading library "+returnCallerLine())
        }
        
            }
}
class Baseplate{
    
}
class grab{}
