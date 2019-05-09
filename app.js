let activeCat = 0;

let cats = [{
    name: "mr snibbly",
    moods: ["happy", "scratchy", "bitey", "ran away"],
    pets: 0,
    moodIndex: 0,
    tolerance: 3,
    images: ['/assets/happycat.jpg', '/assets/sratchcat.jpg', '/assets/biteycat.jpg', '/assets/ranaway.jpeg']
}, {
    name: "mrs snibbly",
    moods: ["happy", "scratchy", "bitey", "ran away"],
    pets: 0,
    moodIndex: 0,
    tolerance: 1,
    images: ['/assets/mrsfancy.jpg', '/assets/sratchcat.jpg', '/assets/biteycat.jpg', '/assets/ranaway.jpeg']
}, {
    name: "mr snibbly jr.",
    moods: ["happy", "scratchy", "bitey", "ran away"],
    pets: 0,
    moodIndex: 0,
    tolerance: 5,
    images: ['/assets/littlefancy.jpg', '/assets/sratchcat.jpg', '/assets/biteycat.jpg', '/assets/ranaway.jpeg']
}, {
    name: "mrs snibbly jr.",
    moods: ["happy", "scratchy", "bitey", "ran away"],
    pets: 0,
    moodIndex: 0,
    tolerance: 5,
    images: ['/assets/littlefancy.jpg', '/assets/sratchcat.jpg', '/assets/biteycat.jpg', '/assets/ranaway.jpeg']
}]

function pet() {
    cats[activeCat].pets++
    if (cats[activeCat].pets % cats[activeCat].tolerance == 0) {
        cats[activeCat].moodIndex++;
    }
    drawCat()
}

function drawCat() {
    document.getElementById("pets").innerText = cats[activeCat].pets
    document.getElementById("cat-image").setAttribute("src", cats[activeCat].images[cats[activeCat].moodIndex])
    document.getElementById("mood").innerText = cats[activeCat].moods[cats[activeCat].moodIndex]
    if (cats[activeCat].moodIndex == cats[activeCat].moods.length - 1) {
        document.getElementById('pet-button').disabled = true;
    }
    else {
        document.getElementById('pet-button').disabled = false;
    }
}

function catNip() {
    cats[activeCat].moodIndex = 0
    cats[activeCat].pets = 0
    drawCat()
}

function setActiveCat(index) {
    activeCat = index
    drawCat()
}

function drawButtons() {
    debugger
    let template = ''
    for (let i = 0; i < cats.length; i++) {
        let cat = cats[i];
        template += `
        <button class="btn btn-info" onclick="setActiveCat(${i})">${cat.name}</button>
           `
    }
    document.getElementById('cat-buttons').innerHTML = template
}

drawButtons()