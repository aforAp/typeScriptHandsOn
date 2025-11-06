enum Direction {
    Up,
    Down,
    Left,
    Right
};

function move(direction) {
    console.log(`moving ${Direction[direction].toLowerCase()}`)
}

move(Direction.Left);