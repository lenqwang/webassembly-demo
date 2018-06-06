function () {
    "use asm";

    function fibonacci (fn, fn1, fn2, i, num) {
        num = num | 0;
        fn2 = fn2 | 0;
        fn = fn | 0;
        fn1 = fn1 | 0;
        i = i | 0;
        if(num < 0) return 0;
        else if(num == 1) return 1;
        else if(num == 2) return 1;
        while(i <= num){
            fn = fn1;
            fn1 = fn2;
            fn2 = fn + fn1;
            i = i + 1;
        }   
        return fn2 | 0;
    }

    return { fibonacci: fibonacci };
}
