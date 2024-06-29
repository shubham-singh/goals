document.addEventListener('DOMContentLoaded', () => {
    const people = [
        {
            name: "Saurabh Singh",
            progress: 0,
            goal: 300000,
            img: 'https://pbs.twimg.com/profile_images/1117457128149544960/aXLwSzcB_400x400.jpg'
        },
        {
            name: "Shubham Singh",
            progress: 2200000,
            goal: 2500000,
            img: 'https://pbs.twimg.com/profile_images/1775121802681061376/Vj8Y_QYU_400x400.jpg'
        },
        {
            name: "Sushant Singh",
            progress: 62000,
            goal: 100000,
            img: 'https://pbs.twimg.com/profile_images/1378030520223719424/99nx6gIk_400x400.jpg'
        }
    ];

    let today = Date.now();
    const year = new Date().getFullYear()
    let last = new Date(`${year}-12-31T23:59:59`);
    let difference = last - today;
    let days = parseInt(difference / (1000 * 3600 * 24));

    const heading = document.createElement('h1')
    heading.innerHTML = `31<sup>st</sup> December, ${year}`
    document.body.append(heading)

    const daysLeft = document.createElement('h2');
    daysLeft.innerHTML = days + " days left"
    document.body.appendChild(daysLeft);

    const mainDiv = document.createElement('div');
    mainDiv.className = "row";
    document.body.appendChild(mainDiv);

    for(let i = 0, l = people.length; i < l; i++)
    {
        const card = document.createElement('div');
        card.className = 'card';
        mainDiv.appendChild(card);
        
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
        goal.innerHTML = '₹ ' + people[i].goal.toLocaleString();
        card.appendChild(goal);

        const percentage = document.createElement('h4');
        percentage.className = 'percentage';
        percentage.innerHTML = `₹  ${people[i].progress.toLocaleString()} (${Number((people[i].progress / people[i].goal) * 100).toFixed(2)}%) &#128640;`;
        card.appendChild(percentage);


        const progress = document.createElement('meter');
        progress.className = 'progress';
        progress.setAttribute('min', 0);
        progress.setAttribute('max', people[i].goal);
        progress.setAttribute('value', people[i].progress);
        progress.setAttribute('low', (people[i].goal /100) * 30);
        progress.setAttribute('high', (people[i].goal /100) * 70);
        progress.setAttribute('optimum', (people[i].goal /100) * 80);
        card.appendChild(progress);
    }

    const upOnly = document.createElement('div');
    upOnly.className = 'uponly'
    upOnly.innerHTML = '<h1>up only</h1>'
    document.body.appendChild(upOnly);
    setTimeout(() => {
        document.body.removeChild(upOnly);
    }, 2500)
});
