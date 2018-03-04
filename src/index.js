module.exports = function count(s, pairs) {
    let count = 0;
    let n = 1;
        for (let i = 0; i < pairs.length; i++) {
            n *= Math.pow(Math.abs(pairs[i][0]), Math.abs(pairs[i][1]));
        }
        if (n > 10000007) return 0;
        if (n != Infinity && Number.isSafeInteger(n)) {
            for (let i = 1; i <= n; i++) {
                let flag = true;

                for (let j = 0; j < s.length; j++) {

                    let nod_v = nod(i + j, n);

                    if (s[j] === '1' && nod_v !== 1) {
                        flag = false;
                        break;
                    }
                    else if (s[j] === '0' && nod_v === 1) {
                        flag = false;
                        break;
                    }
                }
                if (flag) count++;
            }
        }
    return count % 1000000007;
}

function nod(n, m) {
   if(m > 0) {
        let k = n % m;
        return nod(m, k);
    }
    else {
        return Math.abs(n);
    }
}
