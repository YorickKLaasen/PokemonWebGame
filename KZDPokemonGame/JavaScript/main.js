const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 576,
    parent: 'game-container',
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.NONE   // laat flex/CSS het centreren doen
    },
    scene: { preload, create, update }
};

const game = new Phaser.Game(config);

function preload() {
}

function create() {
    this.add.text(100, 100, 'Hello World', { fontSize: '32px', fill: '#fff' });
}

function update() {
}