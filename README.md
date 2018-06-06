## How to use this project

- `brew installcmake`
- [git clone binaryen --depth=1](https://github.com/WebAssembly/binaryen)
- `cd binaryen && cmake . && make`
- Done!

## Running

```sh
./binaryen/bin/asm2wasm -o add.wasm # 编译成wasm并导出到add.wasm
serve . # please install serve if your locale is not found the command
```