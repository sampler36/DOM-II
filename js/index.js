// Your code goes here
const eventList = [
  
    'mouseover',
    'mousemove',
    'drag',
    'drop',
    'keydown',
    'keyup',
    'load',
    'resize',
    'scroll',
    'focus',
    'dblclick',
  ];
  
  // getting a callback function ready
  function eventLogger(eventObject) {
    const { type, target, currentTarget, shiftKey } = eventObject;

    shiftKey
        ? document.body.style.backgroundColor = 'blue'
        : document.body.style.backgroundColor = 'Lavender';
    
  
    console.log(`-> ${type} event <-
     currentTarget: ${currentTarget && currentTarget.nodeName} 💥
        (event target: ${target && target.nodeName})
      `);
  }
  
  const allElements = Array.from(document.getElementsByTagName('*'));
  
  allElements.forEach((element) => {
    eventList.forEach((event) => {
      element.addEventListener(event, eventLogger);
    });
  });

  
  