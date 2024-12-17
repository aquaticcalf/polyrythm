const audio_ctx = new (window.AudioContext || window.webkitAudioContext)()

function play_sound(frequency = 440, duration = 1) {
    const oscillator = audio_ctx.createOscillator()
    const envelope = audio_ctx.createGain()
    oscillator.connect(envelope)
    envelope.connect(audio_ctx.destination)

    envelope.gain.setValueAtTime(0, audio_ctx.currentTime)
    envelope.gain.linearRampToValueAtTime(1, audio_ctx.currentTime + 0.05)
    envelope.gain.linearRampToValueAtTime(0, audio_ctx.currentTime + duration)

    oscillator.frequency.setValueAtTime(frequency, audio_ctx.currentTime)

    oscillator.start()
    oscillator.stop(audio_ctx.currentTime + duration)
}