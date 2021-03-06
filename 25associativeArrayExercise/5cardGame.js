function cardGame(input) {

    let players = generateHands(input);
    //(S -> 4, H-> 3, D -> 2, C -> 1) 
    let cardMapper = {
        p: {
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        },
        t: {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }
    };

    Object.keys(players).forEach((player) => {
        console.log(`${player}: ${totalPower(players[player])}`);
    });

    function totalPower(cardSet) {
        let totalPow = 0;

        cardSet.forEach((card) => {
            let tokens = card.split('');
            let value = tokens.slice(0, tokens.length - 1).join('');
            let suit = tokens.slice(-1).join('');
            let pe = 0;

            if (!cardMapper.p[value]) {
                pe = Number(value);
            } else {
                pe = cardMapper.p[value];
            }

            totalPow += (pe * cardMapper.t[suit]);
        });

        return totalPow;
    }

    function generateHands(arr) {
        let obj = {};

        arr.forEach(playerInfo => {
            let [player, cards] = playerInfo.split(': ');

            if (!obj[player]) {
                obj[player] = new Set(cards.split(', '));
            } else {
                cards.split(', ').forEach((card) => {
                    obj[player].add(card);
                });
            }
        });
        return obj;
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
) //output:
             //Peter: 167
             //Tomas: 175
             //Andrea: 197
