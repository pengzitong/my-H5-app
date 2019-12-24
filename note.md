#ES6模块化开发知识
1.匿名      export default {}, import  xxx from './xxx'
2.暴露a:    export let a = {},export let b = {}, 这种方式在导入的时候需要import { a,b } from './xxx' 
            或者import * as c from './xxx',相当于解构赋值,return的是一个对象{a:'',b:''}
3.module.exports = { a:a,b:b },  import { a,b } from './xxx'
