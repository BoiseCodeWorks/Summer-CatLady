
let cat = {
    name: "mr snibbly",
    moods: ["happy", "scratchy", "bitey", "ran away"],
    pets: 0,
    images: ['/assets/happycat.jpg', '/assets/sratchcat.jpg', '/assets/biteycat.jpg', '/assets/ranaway.jpeg']
}

function pet() {
    //add one to pets every time pet is clicked
    cat.pets++
    //draw cat
    drawCat()
}