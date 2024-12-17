class Track {
    constructor ( center, radius ) {
        this.center  = center
        this.radius = radius
    }

    get_position(offset) { // unit circle
        return {
            x: this.center.x + Math.cos(offset * 3) * this.radius,
            y: this.center.y - Math.sin(offset) * this.radius
        }
    }

    draw(ctx) {
        ctx.beginPath()
        for( let a = 0; a < Math.PI*2; a = a + 0.01 ) {
            const pos = this.get_position(a)
            ctx.lineTo(pos.x, pos.y)
        }
        ctx.closePath()
        ctx.strokeStyle = "white"
        ctx.stroke()
    }
}