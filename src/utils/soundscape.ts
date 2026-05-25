// Web Audio API Cinematic Ambient Soundscape Engine (Refined for luxury design agency UI)
// This file serves as a local, fully client-side synthesizer generating cinematic drones with zero network overhead.

class CinematicSoundscape {
  private ctx: AudioContext | null = null;
  private mainGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private oscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  private isPlaying = false;
  private modulationInterval: any = null;

  constructor() {}

  private init() {
    if (this.ctx) return;

    // Use standard window audio context
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();
    
    // Main filter for deep studio sound (cinematic warm low-pass)
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = "lowpass";
    this.filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    // Main gain for smooth global fade-in/out
    this.mainGain = this.ctx.createGain();
    this.mainGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // Connect nodes: Oscillators -> Filter -> MainGain -> Destination
    this.filter.connect(this.mainGain);
    this.mainGain.connect(this.ctx.destination);

    // Define cinematic, deep minor/suspended chord for luxurious ambiance
    // Fmaj9 / Cmaj9 feel: F2, C3, G3, A3, C4, E4, G4
    const voices = [
      { freq: 65.41, type: "sine" as const, volume: 0.35 },    // Low C2 Drone
      { freq: 97.99, type: "sine" as const, volume: 0.25 },    // G2 Sub fifth
      { freq: 130.81, type: "triangle" as const, volume: 0.18 }, // C3 Chord root
      { freq: 174.61, type: "sine" as const, volume: 0.15 },     // F3 Sweet ninth
      { freq: 220.00, type: "triangle" as const, volume: 0.12 }, // A3 Ambient third
      { freq: 261.63, type: "triangle" as const, volume: 0.10 }, // C4 Accent
      { freq: 329.63, type: "sine" as const, volume: 0.08 }      // E4 High color
    ];

    voices.forEach((voice) => {
      if (!this.ctx || !this.filter) return;

      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = voice.type;
      osc.frequency.setValueAtTime(voice.freq, this.ctx.currentTime);
      oscGain.gain.setValueAtTime(voice.volume, this.ctx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.filter);

      this.oscillators.push({ osc, gain: oscGain });
    });

    // Slow cinematic modulation (synthesizer filter "breathing" sweep)
    let direction = 1;
    this.modulationInterval = setInterval(() => {
      if (!this.ctx || !this.filter || !this.isPlaying) return;

      const time = this.ctx.currentTime;
      // Gently sweep filter cutoff over 8 seconds between 320Hz and 580Hz
      const targetFreq = direction > 0 ? 580 : 320;
      this.filter.frequency.exponentialRampToValueAtTime(targetFreq, time + 7.5);

      // Subtle atmospheric microtone vibrato/detune to make it sound live
      this.oscillators.forEach((item, index) => {
        if (!this.ctx) return;
        const detuneValue = Math.sin(this.ctx.currentTime + index) * 12; // fine detuning cents
        item.osc.detune.setValueAtTime(detuneValue, this.ctx.currentTime);
      });

      direction *= -1;
    }, 8000);
  }

  public async enable(): Promise<boolean> {
    try {
      this.init();

      if (!this.ctx || !this.mainGain) return false;

      if (this.ctx.state === "suspended") {
        await this.ctx.resume();
      }

      if (!this.isPlaying) {
        this.oscillators.forEach((item) => {
          try {
            item.osc.start();
          } catch (e) {
            // Already started oscillator, safe to ignore
          }
        });
        this.isPlaying = true;
      }

      // Premium linear fading in over 2.5 seconds to prevent crackle
      const now = this.ctx.currentTime;
      this.mainGain.gain.cancelScheduledValues(now);
      this.mainGain.gain.setValueAtTime(this.mainGain.gain.value, now);
      this.mainGain.gain.linearRampToValueAtTime(0.7, now + 2.5);

      return true;
    } catch (error) {
      console.warn("Autoplay / Audio integration blocked by security browser policy", error);
      return false;
    }
  }

  public disable() {
    if (!this.ctx || !this.mainGain) return;

    const now = this.ctx.currentTime;
    this.mainGain.gain.cancelScheduledValues(now);
    this.mainGain.gain.setValueAtTime(this.mainGain.gain.value, now);
    // Luxury decay transition over 1.8 seconds representing "theatre curtains closing"
    this.mainGain.gain.linearRampToValueAtTime(0, now + 1.8);
  }

  public destroy() {
    if (this.modulationInterval) {
      clearInterval(this.modulationInterval);
    }
    this.oscillators.forEach((item) => {
      try {
        item.osc.stop();
      } catch (e) {}
    });
    if (this.ctx) {
      this.ctx.close();
    }
  }
}

export const soundscape = new CinematicSoundscape();
