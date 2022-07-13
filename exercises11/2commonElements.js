function commonElements(arr1, arr2) {
    let matchesArr1 = "";
    let matchesArr2 = "";

    for (let i = 0; i < arr1.length; i++) {
        matchesArr1 = arr1[i];
        for (let i = 0; i < arr2.length; i++) {
            matchesArr2 = arr2[i];
            if (matchesArr1 === matchesArr2) {
                console.log(matchesArr1)
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
               ['s', 'o', 'c', 'i', 'a', 'l']
);