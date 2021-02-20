document.addEventListener('DOMContentLoaded', () => {
    const people = [
        {
            name: "Saurabh Singh",
            goal: '1,070,000',
            img: 'https://pbs.twimg.com/profile_images/1117457128149544960/aXLwSzcB_400x400.jpg'
        },
        {
            name: "Shubham Singh",
            goal: '250,000',
            img: 'https://pbs.twimg.com/profile_images/1346432398955741186/vghJ7OFG_400x400.jpg'
        },
        {
            name: "Sushant Singh",
            goal: '1,000,000',
            img: 'https://pbs.twimg.com/profile_images/1306644761411899393/jlOj9vP__400x400.jpg'
        }
    ];

    let today = Date.now();
    let last = new Date('2021-12-31T23:59:59');
    let difference = last - today;
    let days = parseInt(difference / (1000 * 3600 * 24));

    const daysLeft = document.createElement('h2');
    daysLeft.innerHTML = days + " days left"
    document.body.appendChild(daysLeft);

    for(let i = 0, l = people.length; i < l; i++)
    {
        const card = document.createElement('div');
        card.className = 'card';
        document.body.appendChild(card);
        
        const img = document.createElement('img');
        img.className = 'image';
        img.setAttribute('src', people[i].img);
        card.appendChild(img);

        const name = document.createElement('h2');
        name.className = 'name';
        name.innerHTML = people[i].name;
        card.appendChild(name);

        const goal = document.createElement('h3');
        goal.className = 'goal';
        goal.innerHTML = "₹ " + people[i].goal;
        card.appendChild(goal);

    }

});