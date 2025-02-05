class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('blocks', 'assets/sprites/blocks.png', 'assets/sprites/blocks.json');
    }

    create ()
    {
        const particles = this.add.particles('blocks');

        const emitter = particles.createEmitter({
            frame: 'redmonster',
            x: 100,
            y: 300,
            lifespan: 5000,
            angle: { min: -30, max: 30 },
            speed: 150,
            frequency: 200
        });

        emitter.sortProperty = 'y';
        emitter.sortOrderAsc = true;

        const text = this.add.text(10, 10, 'Click to change. sortOrderAsc: true');

        this.input.on('pointerdown', () => {

            if (emitter.sortOrderAsc)
            {
                emitter.sortOrderAsc = false;
            }
            else
            {
                emitter.sortOrderAsc = true;
            }

            text.setText(`Click to change. sortOrderAsc: ${emitter.sortOrderAsc}`);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
