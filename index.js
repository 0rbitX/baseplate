function returnCallerLine() {
    const error = new Error();
    const stackLines = error.stack.split("\n"); // Split the stack trace into lines
    const callerLine = stackLines[2]; // The third line in the stack is the caller
    return callerLine;
}

function addLibrary(link,name,Wname,callback){
    const script = document.createElement("script");
    script.src = link;
    script.type = "text/javascript";
    script.onload = () => {
    console.log("Loaded library "+name+"succesfully.")
    callback()
        
        
    };
    script.onerror = () => {
        console.error("Error loading "+name+". Please inspect your code for errors.");
    };
    document.head.appendChild(script);
}
class Port{
    static add(library,callback){
        switch(library){
            case "jquery":    
            addLibrary("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js","jQuery","$",callback)   
            break;
            default:
                console.error("Error loading "+library+" "+returnCallerLine())
        }
        
            }
}
class Baseplate{
    
}
class grab{}
