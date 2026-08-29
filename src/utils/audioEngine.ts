/**
 * Tactile Web Audio Synthesizer Engine
 * Generates analog-modeled polyphonic synthwave & ambient chord progressions
 * with interactive filter sweeps, sub-bass arpeggios, and real-time audio analysis.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private currentTrackKey: string = 'synthwave1';
  private step: number = 0;
  private volume: number = 0.8;

  // Chord scale progressions [root, 3rd, 5th, 7th, bass] in Hz
  private scales: Record<string, number[][]> = {
    synthwave1: [
      [220, 261.63, 329.63, 392.00, 110.00], // Am7
      [174.61, 220.00, 261.63, 329.63, 87.31], // Fmaj7
      [261.63, 329.63, 392.00, 493.88, 130.81], // Cmaj7
      [196.00, 246.94, 293.66, 349.23, 98.00]  // G7
    ],
    electronic: [
      [146.83, 174.61, 220.00, 261.63, 73.42], // Dm7
      [116.54, 146.83, 174.61, 220.00, 58.27], // Bbmaj7
      [130.81, 164.81, 196.00, 246.94, 65.41], // C
      [164.81, 196.00, 246.94, 293.66, 82.41]  // Em
    ],
    kinetic: [
      [130.81, 196.00, 261.63, 392.00, 65.41], // C Power
      [110.00, 164.81, 220.00, 329.63, 55.00], // A Power
      [146.83, 220.00, 293.66, 440.00, 73.42], // D Power
      [98.00, 146.83, 196.00, 293.66, 49.00]   // G Power
    ],
    chill: [
      [261.63, 329.63, 392.00, 493.88, 65.41], // Cmaj9
      [220.00, 261.63, 329.63, 392.00, 55.00], // Am9
      [174.61, 220.00, 261.63, 329.63, 43.65], // Fmaj9
      [196.00, 246.94, 293.66, 392.00, 49.00]  // Gsus4
    ],
    ambient: [
      [174.61, 261.63, 329.63, 392.00, 87.31], // F Lydian
      [196.00, 293.66, 369.99, 440.00, 98.00], // G
      [220.00, 329.63, 392.00, 523.25, 110.00],// Am
      [164.81, 246.94, 329.63, 392.00, 82.41]  // Em
    ]
  };

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.smoothingTimeConstant = 0.8;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTrack(audioKey: string = 'synthwave1', bpm: number = 110) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    this.currentTrackKey = this.scales[audioKey] ? audioKey : 'synthwave1';
    this.isPlaying = true;
    this.stopLoop();

    const intervalMs = (60 / bpm) * 1000 * 0.5; // Eighth notes
    this.step = 0;

    this.timerId = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      this.triggerStep();
      this.step = (this.step + 1) % 32;
    }, intervalMs);
  }

  private triggerStep() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const chordProg = this.scales[this.currentTrackKey] || this.scales.synthwave1;
    const chordIdx = Math.floor(this.step / 8) % chordProg.length;
    const chord = chordProg[chordIdx];

    // Play Bass note on beat 0, 2, 4, 6
    if (this.step % 2 === 0) {
      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      const bassFilter = this.ctx.createBiquadFilter();

      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(chord[4], now);

      bassFilter.type = 'lowpass';
      bassFilter.frequency.setValueAtTime(450, now);
      bassFilter.frequency.exponentialRampToValueAtTime(120, now + 0.35);

      bassGain.gain.setValueAtTime(0.35, now);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      bassOsc.connect(bassFilter);
      bassFilter.connect(bassGain);
      bassGain.connect(this.masterGain);

      bassOsc.start(now);
      bassOsc.stop(now + 0.4);
    }

    // Play Pad / Chords on every bar start (step 0, 8, 16, 24)
    if (this.step % 8 === 0) {
      chord.slice(0, 3).forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const padOsc = this.ctx.createOscillator();
        const padGain = this.ctx.createGain();
        const padFilter = this.ctx.createBiquadFilter();

        padOsc.type = i === 1 ? 'triangle' : 'sawtooth';
        padOsc.frequency.setValueAtTime(freq * (i === 2 ? 1.002 : 0.998), now);

        padFilter.type = 'lowpass';
        padFilter.frequency.setValueAtTime(1200, now);
        padFilter.frequency.linearRampToValueAtTime(2200, now + 1.2);
        padFilter.frequency.linearRampToValueAtTime(800, now + 2.4);

        padGain.gain.setValueAtTime(0.001, now);
        padGain.gain.linearRampToValueAtTime(0.12, now + 0.3);
        padGain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

        padOsc.connect(padFilter);
        padFilter.connect(padGain);
        padGain.connect(this.masterGain);

        padOsc.start(now);
        padOsc.stop(now + 2.6);
      });
    }

    // Arpeggiator sparkle on sixteenth/eighth rhythm
    const arpNotes = [chord[0] * 2, chord[1] * 2, chord[2] * 2, chord[3] * 2];
    const arpFreq = arpNotes[this.step % 4];
    
    if (this.step % 2 === 1 || this.step % 4 === 2) {
      const arpOsc = this.ctx.createOscillator();
      const arpGain = this.ctx.createGain();
      
      arpOsc.type = 'sine';
      arpOsc.frequency.setValueAtTime(arpFreq, now);

      arpGain.gain.setValueAtTime(0.08, now);
      arpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      arpOsc.connect(arpGain);
      arpGain.connect(this.masterGain);

      arpOsc.start(now);
      arpOsc.stop(now + 0.25);
    }
  }

  public pause() {
    this.isPlaying = false;
    this.stopLoop();
  }

  public resume(audioKey?: string, bpm?: number) {
    if (audioKey) {
      this.currentTrackKey = audioKey;
    }
    this.playTrack(this.currentTrackKey, bpm || 110);
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getFrequencyData(): Uint8Array {
    if (!this.analyser) {
      return new Uint8Array([30, 60, 90, 45, 80, 50, 70, 35]);
    }
    const array = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(array);
    return array;
  }

  private stopLoop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

export const audioEngine = new AudioEngine();
