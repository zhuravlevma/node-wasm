function calculateJs() {
    let matrix =
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
    let result = 0;

    for (let i =0; i<matrix.length; i++) {
        for (let j =0; j<matrix.length; j++) {
            for (let m =0; m<matrix.length; m++) {
                for (let n =0; n<matrix.length; n++) {
                    if (m === i && n === j) {
                        continue
                    }
                    let num = matrix[m][n];
                    result += Math.pow(num, 3) + (Math.random() * (Number.MAX_SAFE_INTEGER));
                }
            }
        }
    }

    return result;
}

module.exports = {
    calculateJs
}