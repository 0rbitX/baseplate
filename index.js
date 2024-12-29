function returnCallerLine() {
    const error = new Error();
    const stackLines = error.stack.split("\n"); // Split the stack trace into lines
    const callerLine = stackLines[2]; // The third line in the stack is the caller
    return callerLine;
}

function addLibrary(link,name,Wname){
    const script = document.createElement("script");
    script.src = link;
    script.type = "text/javascript";
    script.onload = () => {
    console.log("Loaded library "+name+"succesfully.")
    callback()
        
        
    };
    script.onerror = () => {
        console.error("Error loading "+name+returnCallerLine());
    };
    document.head.appendChild(script);
}
class Port{
    static add(library,customLink,name,wName){
        switch(library){
            case "jquery":    
            addLibrary("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js","jQuery","$",callback)   
            break;
            case "lodash":    
            addLibrary("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js","Loadash","_")   
            break;
            case "moment.js":    
            addLibrary("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js","Moment.js","moment")
            break;
            case "axios":    
            addLibrary("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js","Axios","axios")   
            break;
            case "chart":    
            addLibrary("https://cdn.jsdelivr.net/npm/chart.js","Chart.js","Chart")   
            break;
            case "three":    
            addLibrary("https://cdnjs.cloudflare.com/ajax/libs/three.js/r152/three.min.js","Three.js","THREE")   
            break;
            case "D3":    
            addLibrary("https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js","D3.js","d3")   
            break;
            case "Anime":    
            addLibrary("https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js","Anime","anime")   
            break;
            case "bootstrap":    
            addLibrary("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js","Bootstrap","bootstrap")   
            break;
            case "vue":    
            addLibrary("https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.js","Vue","vue")   
            break;
            case "react":    
            addLibrary("https://unpkg.com/react@17/umd/react.development.js","React","React")   
            break;
            case "reactDOM":    
            addLibrary("https://unpkg.com/react-dom@17/umd/react-dom.development.js","ReactDOM","ReactDOM")   
            break;
            case "popper":    
            addLibrary("https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js","Popper","Popper")   
            break;
            case "backbone":    
            addLibrary("https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.1/backbone-min.js","Backbone","Backbone")   
            break;
            case "swiper":    
            addLibrary("https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js","Swiper.js","swiper")   
            break;
            case "modernizr":    
            addLibrary("https://cdnjs.cloudflare.com/ajax/libs/modernizr/3.12.0/modernizr.min.js","Modernizr","Modernizr")   
            break;
            case "toastify":    
            addLibrary("https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.js","Toastify","Toastify")   
            break;
            case "babel":    
            addLibrary("https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js","Babel","Babel")   
            break;
            case "custom":
            addLibrary(customLink,name,wName)
                break;
            
            default:
                console.error("Error loading "+library+" "+returnCallerLine())
        }
        
            }
    static addMultiple(libraries){
        for(var i =0;i<libraries.length;i++){
            switch(libraries[i]){
                case "jquery":    
                addLibrary("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js","jQuery","$",callback)   
                break;
                case "lodash":    
                addLibrary("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js","Loadash","_")   
                break;
                case "moment.js":    
                addLibrary("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js","Moment.js","moment")
                break;
                case "axios":    
                addLibrary("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js","Axios","axios")   
                break;
                case "chart":    
                addLibrary("https://cdn.jsdelivr.net/npm/chart.js","Chart.js","Chart")   
                break;
                case "three":    
                addLibrary("https://cdnjs.cloudflare.com/ajax/libs/three.js/r152/three.min.js","Three.js","THREE")   
                break;
                case "D3":    
                addLibrary("https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js","D3.js","d3")   
                break;
                case "Anime":    
                addLibrary("https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js","Anime","anime")   
                break;
                case "bootstrap":    
                addLibrary("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js","Bootstrap","bootstrap")   
                break;
                case "vue":    
                addLibrary("https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.js","Vue","vue")   
                break;
                case "react":    
                addLibrary("https://unpkg.com/react@17/umd/react.development.js","React","React")   
                break;
                case "reactDOM":    
                addLibrary("https://unpkg.com/react-dom@17/umd/react-dom.development.js","ReactDOM","ReactDOM")   
                break;
                case "popper":    
                addLibrary("https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js","Popper","Popper")   
                break;
                case "backbone":    
                addLibrary("https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.1/backbone-min.js","Backbone","Backbone")   
                break;
                case "swiper":    
                addLibrary("https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js","Swiper.js","swiper")   
                break;
                case "modernizr":    
                addLibrary("https://cdnjs.cloudflare.com/ajax/libs/modernizr/3.12.0/modernizr.min.js","Modernizr","Modernizr")   
                break;
                case "toastify":    
                addLibrary("https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.js","Toastify","Toastify")   
                break;
                case "babel":    
                addLibrary("https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js","Babel","Babel")   
                break;
                default:
                    console.error("Error loading "+library+" "+returnCallerLine())
            }
        }
    }
}
class Baseplate{
 static setCookie(name,value,days){
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    exdate = "expires="+date.toUTCString();
    document.cookie = name + "=" + value + "; " + exdate+";path=/";
 }
 static getCookie(cname){
    let cookiename = cname+"=";
    let dc = decodeURIComponent(document.cookie)
    var ca = dc.split(";")
    for (var i =0; i<ca.length;i++){
        var c = ca[i]
        while(c.charAt(0)==" "){
            c = c.substring(1)
        }
        if(c.indexOf(cname)){
            return c.substring(cname.length,c.length)   
        }
 } 
 return "error getting cookie: cookie not found";  
}}

