function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());
    let passengers = 0;
    for (let i = 0; i < input.length; i++) {
        let [command, num] = input[i].split(' ');
        num = Number(num);

        if (command === "Add") {
            wagons.push(num);
        } else {
            passengers = input.slice(i).map(Number);
            break;
        }
    }

    for (let y = 0; y < wagons.length; y++) {
        let wagon = wagons[y];

        for (let z = 0; z < passengers.length; z++) {
            let passenger = passengers[0];

            if (passenger === 0) {
                break;
            }
            if (passenger + wagon <= maxCapacity) {
                wagon += passenger;
                wagons[y] = wagon;
                passengers.shift();
            }
            
        }
    }
    console.log(wagons.join(' '))
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)