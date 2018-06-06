/**
 *  Simple node.js style script loader for modern browsers
 **/
function loadScript(src, cb) {
  var script = document.createElement('script');
  script.async = true;
  script.src = src;

  script.onerror = function() {
    cb(new Error("Failed to load" + src));
  };

  script.onload = function() {
    cb();
  };

  document.getElementsByTagName("head")[0].appendChild(script);
}

function loadWebAssembly (filename, imports = {}, type = 'wasm') {
	if (typeof WebAssembly !== 'undefined' && type === 'wasm') {
		return fetch(filename)
			.then(response => response.arrayBuffer())
			.then(buffer => WebAssembly.compile(buffer))
			.then(module => {
				imports.env = imports.env || {}

				Object.assign(imports.env, {
					memoryBase: 0,
			        tableBase: 0,
			        memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }), 
			        table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' })
				})

				// 得到函数的实例
				return new WebAssembly.Instance(module, imports)
			})
	} else {
		filename = filename.replace(/\.wasm$/, '.js')

		return new Promise((resolve, reject) => {
			loadScript(filename, () => {
				const instance = {
					exports: () => undefined // window.wasm()
				}
				resolve(instance)
			})
		})
	}
}

export {
	loadWebAssembly
}