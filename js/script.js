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