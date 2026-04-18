import top from './top.js'
import nav from './nav.js'
import body from './body.js'
const app = () => {

    return React.createElement('div',{id:'app'},[top(),nav(),body()])
}

export default app