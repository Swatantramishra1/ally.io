let options = {
    // root: document.querySelector('body'),
    rootMargin: '0px',
    threshold: [0.00, 0.01, 0.02, 0.99, 1.00]
  }

  let callback = (entries, observer) => {

    debugger;
    entries.forEach(entry => {
      console.log(entry)
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };
  
let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('.container1');
observer.observe(target);