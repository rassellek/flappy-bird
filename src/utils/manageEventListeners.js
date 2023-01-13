const manageEventListeners = (node, eventNames = [], eventFn, isAdd = true) => {
  eventNames.forEach((eventName) => {
    if (isAdd) {
      node.addEventListener(eventName, eventFn)
    } else {
      node.removeEventListener(eventName, eventFn)
    }
  })
}

export default manageEventListeners