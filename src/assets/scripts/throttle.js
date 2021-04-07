export default {
  throttle (func, interval = 100) {
    let timer = null
    return function () {
      if (timer) {
        return
      }
      timer = setTimeout(() => {
        func.apply(this, arguments)
      }, interval)
    }
  }
}
