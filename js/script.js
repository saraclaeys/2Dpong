const fieldHeight = 400
const fieldWidth = 500

class Platform {
    constructor(x) {
        this.x = x
        this.y = (fieldHeight - Platform.height) / 2
    }

    draw(ctx) {
        ctx.fillStyle = Platform.color
        ctx.fillRect = (
            this.x, this.y, Platform.width, Platform.height,
        )
    }
}