const audio_ctx = new (window.AudioContext || window.webkitAudioContext)()

function play_sound(frequency = 440, duration = 1) {
    const oscillator = audio_ctx.createOscillator()
    oscillator.connect(audio_ctx.destination)

    oscillator.frequency.setValueAtTime(frequency, audio_ctx.currentTime)

    oscillator.start()
    oscillator.stop(audio_ctx.currentTime + duration)
}