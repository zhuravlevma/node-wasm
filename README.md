<div align="center">

  <h1><code>NodeJS & WASN</code></h1>

  <strong>A template for kick starting a Rust and WebAssembly project using <a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a>.</strong>

</div>

## About

## Test results

### Average time of calculations for Matrix:
#### WASM:  1ms   ⚡
#### JS vanilla:  95.82
### Average time of calculations for Fibonacci:
#### WASM:  92  ⚡
#### JS vanilla:  173.71428571428572


## 🚴 Usage

```
npm start
```

### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
```

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.
