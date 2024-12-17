class Ball {
    constructor ( track, radius, speed ) {
        this.track = track
        this.radius = radius
        this.speed = speed
        this.offset = 0
        this.direction = 1
        this.center = this.track.get_position(this.offset)
    }

    move() {
        this.offset = this.offset + this.speed * this.direction
        this.center = this.track.get_position(this.offset)
        if ( this.center.y > this.track.center.y ) {
            this.direction = this.direction * -1
            play_sound()
        }
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
        ctx.strokeStyle = "white"
        ctx.stroke()
    }
}