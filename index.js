import { loadWebAssembly } from './loadWebAssembly.js'

console.log('Hello Webassembly!')

loadWebAssembly("fibonacci.wasm")
	.then(instance => {
	    const fibonacci = instance.exports.fibonacci

	    let i = 4
	    let fn = 1
	    let fn1 = 1
	    let fn2 = 2
	    
	    console.log(i, fn, fn1, fn2, "f(5) = " + fibonacci(5));
	});


// loadWebAssembly('add.wasm')
// 	.then(instance => {
// 		const add = instance.exports.add
// 		console.log(add, add(5, 6))
// 	})

// fetch('add.wasm')
// 	.then(response => response.arrayBuffer())
// 	.then(buffer => WebAssembly.compile(buffer))
// 	.then(module => {
// 		const imports = { env: {} }

// 		Object.assign(imports.env, {
// 			memoryBase: 0,
// 	        tableBase: 0,
// 	        memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }), 
// 	        table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' })
// 		})

// 		// 得到函数的实例
// 		const instance = new WebAssembly.Instance(module, imports)
// 		const add = instance.exports.add
// 		console.log(add, add(5, 6))
// 	})
// 	
// 	