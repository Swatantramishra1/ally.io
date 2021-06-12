const throttle = (fun, delay) => {
    let inThrottle = false;

    return function() {
        let context = this;
        let args = arguments;

        if(!inThrottle) {
            inThrottle = true;

            setTimeout(() => {
                fun.apply(context, args); 
            }, delay);
        }
    }
}

