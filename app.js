
let cat = {
    name: "mr snibbly",
    moods: ["happy", "scratchy", "bitey", "ran away"],
    pets: 0,
    moodIndex: 0,
    tolerance: 3,
    images: ['/assets/happycat.jpg', '/assets/sratchcat.jpg', '/assets/biteycat.jpg', '/assets/ranaway.jpeg']
}

function pet() {
    //add one to pets every time pet is clicked
    cat.pets++
    if (cat.pets % cat.tolerance == 0) {
        cat.moodIndex++;
    }
    //draw cat
    drawCat()
}

function drawCat() {
    //updates the pet count
    document.getElementById("pets").innerText = cat.pets
    document.getElementById("cat-image").setAttribute("src", cat.images[cat.moodIndex])
    document.getElementById("mood").innerText = cat.moods[cat.moodIndex]

    if (cat.moodIndex == cat.moods.length - 1) {
        document.getElementById('pet-button').disabled = true;
    }
}

function catNip() {
    cat.moodIndex = 0
    cat.pets = 0
    document.getElementById('pet-button').disabled = false;
    drawCat()
}