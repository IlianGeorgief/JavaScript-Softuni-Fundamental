function houseParty(messages) {
    let guests = [];

    for (let message of messages) {
        let info = message.split(' ');
        let name = info[0];

        if (!info.includes('not')) {

            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }

        } else {
            if (guests.includes(name)) {
                guests = guests.filter(guestName => guestName !== name);

            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'))
}
houseParty(['Tom is going!',
            'Annie is going!',
            'Tom is going!',
            'Garry is going!',
            'Jerry is going!']

)

