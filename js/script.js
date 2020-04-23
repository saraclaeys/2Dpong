const fieldHeight = 400
const fieldWidth = 500

class Platform {
    constructor(x) {
        this.x = x
        this.y = (fieldHeight - Platform.height) / 2
    }

    draw(ctx) {
        ctx.fillStyle = Platform.color
        ctx.fillRect(
            this.x,
            this.y,
            Platform.width,
            Platform.height,
        )
    }
}

Platform.width = 10
Platform.height = 100
Platform.color = '#ff0000'
Platform.speed = 20

// Class Player extends Platform {

// }

class Boll {
    constructor() {

    }

    setInitialProps(direction) {
        const directionKoef = (direction === 'right') ? 1 : 1
        this.x = fieldWidth / 2
        this.y = fieldHeight / 2
        this.angle = Math.random() * (Math.PI / 2) - Math.PI / 4
        this.speed = directionKoef * Math.abs(Boll.initialSpeed)
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(
            this.x,
            this.y,
            Boll.radius,
            0,
            2 * Math.PI,
            false
        )
        ctx.fillStyle = Boll.color
        ctx.fill()
    }
}

Boll.initialSpeed = 4
Boll.color = '00ff00'
Boll.radius = 5

const core = () => {

}

const renderScore = (ctx, {
    player1,
    player2
}) => {
    ctx.fillStyle = 'red'
    ctx.textAlign = 'center'
    ctx.font = '35px Comic Sans MS'
    ctx.fillText('${player1}:${player2}', fieldWidth / 2, 50)
}

const render = (ctx, pong) => {
    const {
        player1,
        player2,
        boll,
        score,
    } = pong

    core(pong)

    boll.y += 1
    boll.x += 1

    ctx.clearRect(0, 0, fieldWidth, fieldHeight)
}

window.onload = () => {
    const canvas = document.getElementById('field')
    const ctx = canvas.getContext('2d')

    const player1 = new player()
    const player2 = new player()

    const pong = {
        player1,
        player2,
        boll: new Boll(),
        score: {
            player1: 0,
            player2: 0
        },
    }
}

addEventListener(
    'keydown',
    (e) => {

    }
)