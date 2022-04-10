use wasm_bindgen::prelude::*;
use quad_rand as qrand;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn matrix_rs() -> i64 {
    let matrix: [[i64; 13]; 39] =
        [
            [4, 6, 7, 8, 32, 5345, 66, 12, 545, 67, 654, 232, 654],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [5, 32, 47, 568, 75432, 5345, 66, 3212, 4545, 5467, 43654, 2232, 6554],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 2452323, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 4, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5, 754232, 53345, 66, 33212, 6, 55467, 43654, 22632, 7],
            [53, 332, 447, 5638, 754232, 53345, 66, 7, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 6, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 5],
            [53, 332, 7, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 3, 447, 5638, 754232, 53345, 66, 33212, 7, 55467, 5, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [4, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 24, 43654, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [53, 3, 447, 5638, 43, 53345, 66, 3, 7, 55467, 5, 22632, 54],
            [53, 332, 447, 5638, 754232, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
            [4, 332, 447, 5638, 43, 53345, 66, 33212, 4545, 55467, 43654, 22632, 54],
        ];
    let mut result: i64 = 0;

    for i in 0..matrix.len() {
        for j in 0..matrix[i].len() {
            for m in 0..matrix.len() {
                for n in 0..matrix[m].len() {
                    if m == i && n == j {
                        continue
                    }
                    let x = qrand::rand() as i64;

                    let num: i64 = matrix[m][n];
                    result += num.pow(3) + x;
                }
            }
        }
    }

    result
}

#[wasm_bindgen]
pub fn fibonacci_rs(x: i32) -> f64 {
    if x == 0 {
        return 0_f64
    }

    if x == 1 {
        return 1_f64
    }

    return fibonacci_rs(x - 1) + fibonacci_rs(x - 2)
}