import { Track, Artist, Album, Playlist, GenreItem } from '../types';

export const UMUSIC_LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAohyXiL93z592m5M8tIRhFf2n5XIyl6PWSrwpPJJpNJY3xyiyRSRMNl0wb21kxNLZClALSpwSOUG9iME1K-cMkV2hAnhsVtsOeSIHwKwoqCwqqfvDPsJO6k9V1txj5qFWc-G8mXWnvyLzvqvigF0W4cq-pV8BLR1L3pVPIfra_HRm_N0qk98-uuR8hxP8uHZ8sSwEvJ7WfXO1CZjIRvERgoeWI9xfTSwLyhmJuUVtAhi9kxujEy1g';
export const USER_AVATAR = 'https://lh3.googleusercontent.com/aida/AEtjO1X7fCLR7iV_hubm3fjOhvFGVubE6B48peVVrlxrWsEouxbh_5WAgdT5aUGNiRBhkrus30xVKGZs7C1Hux7xiLR-VTC0_5lh06iDpi-8zDWkekKW6pajE1vg8SaHoHo_tDGeaBE8NU6k2sSbos_tsW2172b0KcHA98JUBv-WoLbMhH9f-ApOqp1kqiixN794BBf4bsf6pKsNHC2tTmMKzXcOvOA9ru7tDQAE6xPv5TBn1g75nFbXp9tK';
export const ALEX_RIVERA_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7NWBOqzyV-5RqlyTIEXZGD0cFrYJDgb8a_NYSPYhx5awmKJUrsN2HeEeToTwzcPWWdnnMenGMuaqTfqE7Ene9t8cDRjKv9j9khll4FYfRv7USvNg8awpdkTcTrBq78T2QO74x4AoaDNcY5LFwc6bUxSi9JmyhNbj__zCWWx37dFnWOp04voxBSIR2lhtW7Eu7nlXZdpWmfevZEy1yhS_nGKxZo52Lsf_jVsnzscVvPcstlX8Ywx0';

export const TRACKS: Track[] = [
  {
    id: 'track-neon-overture',
    title: 'Neon Overture',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 240, // 4:00
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Jw3jXdNYG7ktqozO9hiEBJg6zkfBjOe8oOQ1RQ80y6hD0-DAS0z7UYRkBvMJPH-S4sykKXuGCFpoeLPrO1U1lWK4pzGlQXo_LsOTDtVaGo4MIBa1PDLPC04mwCR7YTwIOqFvuSu1fJ27TOa19IcYxoIoFc9tRNjjYsS8j5ycrl-q5m6g2mUtxqueGZO10AblijfGMQqtK9M5whAdaKex4SU9C2jRi4NDcnWI-RSY61SmIrBqGsM',
    playsCount: 52400000,
    audioKey: 'synthwave1',
    bpm: 110,
    lyrics: [
      { time: 10, text: 'Neon city lights are fading out' },
      { time: 24, text: 'The echoes of the night grow loud' },
      { time: 42, text: "We're driving on an empty street" },
      { time: 64, text: 'Just following the synthwave beat' },
      { time: 86, text: 'No destination in our sight' },
      { time: 102, text: 'Lost within the glowing night' },
      { time: 125, text: 'Hold on to the memory' },
      { time: 148, text: 'Digital horizons burning bright' },
      { time: 172, text: 'Never fade into the night' },
      { time: 198, text: 'Neon overture will guide us home' }
    ]
  },
  {
    id: 'track-crimson-horizon',
    title: 'Crimson Horizon',
    artist: 'The Architects',
    artistId: 'artist-the-architects',
    album: 'Structure & Void',
    albumId: 'album-structure',
    duration: 252, // 4:12
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmcZOT4z3hgWw4xAlq3hShc9tsfwEhEi41iwc77FEMJBnrphAiIC34qpuSLmD8oQj2tvHuj_5MqTq2OrZQW0NOh_CKwjHAflAkF2XgB6Q55oc-zmPZFoX9xFGcHSXJi3YzldjfhqXJLaOz-m3nFvrOGTcy6VZoOvnGLTMZAE0Le5cNkv-j2ifx4ZtxgDsB0NvXuZGbYm0ePpmxBYnPvIsoXox2252Ueaw7_mqLJL7PTUh8Pm1yBgQ',
    playsCount: 64100000,
    audioKey: 'electronic',
    bpm: 124,
    lyrics: [
      { time: 8, text: 'Red sky falling on iron towers' },
      { time: 22, text: 'Counting down the final hours' },
      { time: 38, text: 'Through the crimson horizon we break free' },
      { time: 58, text: 'No shadows left for you and me' }
    ]
  },
  {
    id: 'track-velocity',
    title: 'Velocity',
    artist: 'KINETIC',
    artistId: 'artist-kinetic',
    album: 'Overdrive',
    albumId: 'album-overdrive',
    duration: 218, // 3:38
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIJpQsZfduO4ej6YdiSchnrJ4u2HFY5oj8MQRnBhrtn2daFQahjlWHY5XJB7MCAFF2gp8RFX0O8jPTggm44e9BlFfBvFy3zpc3t6XHIPxK9YEgpOOJXkImveQac9ur5p67GN_HjNlu5U172SwiJZduEyN9It5j9RadA-raLUCbPivzWdQ0g-UZR4lpjvWxxoSRt193je4lNpvmX1rPws8bxq4dVDRnpw7SkBb7jymNH46DrHOKKtE',
    playsCount: 41200000,
    audioKey: 'kinetic',
    bpm: 128,
    lyrics: [
      { time: 12, text: 'Accelerating through the dark' },
      { time: 28, text: 'Sparks ignite a sudden fire' },
      { time: 45, text: 'Feel the velocity taking over' },
      { time: 66, text: 'Reaching higher and higher' }
    ]
  },
  {
    id: 'track-lost-in-the-wash',
    title: 'Lost in the Wash',
    artist: 'Luna Ray',
    artistId: 'artist-luna-ray',
    album: 'Tides of Neon',
    albumId: 'album-tides',
    duration: 225, // 3:45
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYrHqpwZTLwFDm_eTTLFCUlraxZ-JZvgNFthtuqa5ABDnYofnV-3ADGz838s1bAUQ_aZQmNCQ-GSvuRp6anvuYyK8Io79noLYczwzQq_xP7UYJlm5mto-ruBjoZKFTf91eLMHnG3ZxT3wxFgd79XDNO3LFQTpVqZ_uV4ZrZHOYG-uWn7h9sfuWYHzXDZzpFfI0DoIaZHbIoL2eiNJyU0b_v6SV6kqCdpTjNQome-HBQ2aVjTD9yGk',
    playsCount: 38900000,
    audioKey: 'chill',
    bpm: 98,
    lyrics: [
      { time: 14, text: 'Pale blue waters washing over me' },
      { time: 30, text: 'Drifting away into the open sea' },
      { time: 52, text: 'Whispers echoing in the tide' },
      { time: 74, text: 'Lost in the wash with nowhere to hide' }
    ]
  },
  {
    id: 'track-midnight-city',
    title: 'Midnight City',
    artist: 'Synthwave Mix',
    artistId: 'artist-midnight-echoes',
    album: 'Night Drive Mix',
    albumId: 'album-night-drive',
    duration: 236,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4sbAGQ6WnPJv2_eMODevrOwGd5voISTTpXQwx6f96OOBlD05IvYUkue1Nb5uBzGu3W4_1_tjp2BeKgZikEqwRXnt76P_GGA-ALQQoY8gukVkuT8LP6fh4u0LHg3wKRzaclcp0_scSdUMk_-g_nD3poC_vGTbhmKXKFIy7uLAFxdknXqwwH9ymsH0m7ktbRS16XWaeQAgFEt5FuWgeNrrtPPovUX8Yh9sJBQ9DjCJX6pqvTREyHRA',
    audioKey: 'synthwave1',
    bpm: 116
  },
  {
    id: 'track-focus-flow',
    title: 'Focus Flow',
    artist: 'Ambient Beats',
    artistId: 'artist-e-vance',
    album: 'Deep Calm',
    albumId: 'album-deep-calm',
    duration: 280,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTTuI0WqDgHQf9IviPUcKRkuURWCyDzRk9oDASPWsTXzKQFrV59KvDrD9NDZHYImW-dcha0pP8L7pP0H_ndGJppmc_AgFU978ixjUEIgFoRNRyFCOh0Ms1lbUwaC34SdAk7HeGvjkiIwVFub3eWRS32yucD1w67mFTsiz0ijeD1RuZtlclFer47_BwRzeDtw3SlkiweJZWsQ3evQCGXJ6ZLrDViwRTNoCMeO0jPNUZyo-iF5ULR78',
    audioKey: 'ambient',
    bpm: 85
  },
  // Monolith Album Tracks
  {
    id: 'track-neon-genesis',
    title: 'Neon Genesis',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 252, // 4:12
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'synthwave1'
  },
  {
    id: 'track-cybernetic-dawn',
    title: 'Cybernetic Dawn',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 225, // 3:45
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'synthwave1'
  },
  {
    id: 'track-monolith-title',
    title: 'Monolith (Title Track)',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 301, // 5:01
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'synthwave1'
  },
  {
    id: 'track-hyperdrive',
    title: 'Hyperdrive',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 202, // 3:22
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'kinetic'
  },
  {
    id: 'track-digital-rain',
    title: 'Digital Rain',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 270, // 4:30
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'ambient'
  },
  {
    id: 'track-sector-7',
    title: 'Sector 7',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 235, // 3:55
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'electronic'
  },
  {
    id: 'track-nightcall-interlude',
    title: 'Nightcall Interlude',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 105, // 1:45
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'chill'
  },
  {
    id: 'track-vapor-trails',
    title: 'Vapor Trails',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 260, // 4:20
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'synthwave1'
  },
  {
    id: 'track-end-of-line',
    title: 'End of the Line',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 315, // 5:15
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'kinetic'
  },
  {
    id: 'track-fade-to-static',
    title: 'Fade to Static',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    album: 'Monolith',
    albumId: 'album-monolith',
    duration: 370, // 6:10
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    audioKey: 'ambient'
  },
  // Synthwave Night Drive Playlist Tracks
  {
    id: 'track-neon-grid-runner',
    title: 'Neon Grid Runner',
    artist: 'Kavinsky',
    artistId: 'artist-kavinsky',
    album: 'Outrun Evolution',
    albumId: 'album-outrun',
    duration: 250,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1dtneAopz1rGUH5c-NOfwvHbMZPY8i-n0Kb6kVEFmzCeOPQSHXEQSilMlNc41GnRrbwXNfa1KbexhNSmQR3UhhRFFAdYDpu3_y9qTTIFl--k8-bdXq21ucJBTt4Iy5nRFxHlfjOyWkOyQOR2Vzk9RVswDSiw5kYcrdJa0vGJEtu1AijVNbk2yJKoUs7aDBkUWpWKeYNYOqz3gsv3o51L_V5fzA2nDnYbhWjDDesayjj3FI_zVLDk',
    audioKey: 'synthwave1'
  },
  {
    id: 'track-night-drive',
    title: 'Night Drive',
    artist: 'Timecop1983',
    artistId: 'artist-timecop',
    album: 'Night Drive',
    albumId: 'album-night-drive-tc',
    duration: 228,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGF9qmUxWAJplpEsSv6ZvmJD6OjhTEbimPsN8FmTCrad16M57RPOckyz1TTlPvZHpom3jGzBNbDGvo02YsBlggt7Z3C3lkUhLLWShBXAqRNfDgqQxaoUaUS4GCzKF0botKmdbsQA7YSifKUabb-3JKWy-ZDCSUFS_XkrqCBdY1E4EXjs-rHdyv668plDXBd-5wn8nAvBim8LucXSvOs0MvK3IfuS3qrC8hMoCJLabRKFZxgaxp5C0',
    audioKey: 'chill'
  },
  {
    id: 'track-pixel-sunset',
    title: 'Pixel Sunset',
    artist: 'FM-84',
    artistId: 'artist-fm84',
    album: 'Atlas',
    albumId: 'album-atlas',
    duration: 242,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM9L2gNlzLpLyclZpsIOSFdk3s56aTPcCLzTmu0O1EugYVwFOxCNt6WDj3RE0205V0yKAIaL6e9S3NSb3jeymi4I3kqWEtn6kQE9Uoeh-jFPHiEoeZ2tjQ8v0LMK5588GBjvUsxBgM8oDqxxr7obLDmOiohfIpzzUpYfVB6UDEo4g7xqwQjUOzjwexxOU6cm7n2oza3fkkeKlrD4pFh_nDez6lR0ZtpIqwmUgfflYjzs4pjRu4ng8',
    audioKey: 'synthwave1'
  },
  {
    id: 'track-cyberpunk-blues',
    title: 'Cyberpunk Blues',
    artist: 'Gunship',
    artistId: 'artist-gunship',
    album: 'Dark All Day',
    albumId: 'album-gunship',
    duration: 260,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDECpwuigDr3PENF-ro3VoU0h6eDsQN4gKvwfKJvavi0Ip4qn56V_I4uOB1WVMs4Vf7dNx-lmGzG3iK3yVZN2iY-LGA9G4Y5puQfXwUuY9Hm6fT_YUFiEm1AJJfilMdEwdvR7ahwrpV_SR4DV-6WU7YRDMt115jG-jfxdImv_Rqyf2dmbdoOYvaexZcZj1RQeAJddgWqmj-HNtOBQfR2TUDb7Ga8akiNrfiBW_C7S97JfGNz1mUpxw',
    audioKey: 'electronic'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'artist-midnight-echoes',
    name: 'The Midnight Echoes',
    monthlyListeners: '2.4M Monthly Listeners',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPtQ3BxPVdQHchgU43y6-xiWXdFLOI8fkim6_fSL66gSODZ1ls7PAIhBGmKxeyoHp224VvbkJs00AbGqCgvMtjyCi81TeYMySevtYJfmx0mlWRuEIOrQ6becrI6lr1SFZ_EooxFI7xxP1-Z78IzUnxZiZ9FitixnsW7UUY7d76KQo5SWvFy87gcI4owl-k3VLIoef3Ou46p9i7wsAqmXa3ZNlfCSqObgBpJ7YKRxB4_CMyaDH-chk',
    heroUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPtQ3BxPVdQHchgU43y6-xiWXdFLOI8fkim6_fSL66gSODZ1ls7PAIhBGmKxeyoHp224VvbkJs00AbGqCgvMtjyCi81TeYMySevtYJfmx0mlWRuEIOrQ6becrI6lr1SFZ_EooxFI7xxP1-Z78IzUnxZiZ9FitixnsW7UUY7d76KQo5SWvFy87gcI4owl-k3VLIoef3Ou46p9i7wsAqmXa3ZNlfCSqObgBpJ7YKRxB4_CMyaDH-chk',
    aboutText: 'Emerging from the neon-soaked underground of modern synthwave, The Midnight Echoes blend vintage analog warmth with razor-sharp cinematic production. Their sound is defined by heavy basslines, ethereal vocal chops, and an inescapable sense of nighttime nostalgia.',
    aboutImgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoD3pMe95VyL9TzsxwQzAXHzDsAm9GM5HddFEJUrcV_yw3OBbSRavqhcOFQZ4rm5aGxLsjG5Dp1xynsL1jYUnZP4lr3SCiBmMyvavAiBO-R_A4B8d2A6pcizZWPRUjL_UAfBflc3QqeKkwou6RkwRZCabBhRJTjJEo5w2nofEQMvQu09fWdx4ZE9inSw4pm8n87HY4gm1Znk2rUKkGLTErQMaL9FgH0Ld1vR7ZyZu2-a_PogPYvGU',
    isFollowing: true
  },
  {
    id: 'artist-the-architects',
    name: 'The Architects',
    monthlyListeners: '3.1M Monthly Listeners',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU28E5tXN3EK9E2w3abuoRKabfQ7HQydC7gkZ8kdngpdY-gDqn5NF5OS9jnyassB9ETbr5884GvbW2_W5bv-s_d-gRmI27k_lCXbG7bba8dnjtTtusi_18l8OmVPe-H_HvRXOw-DAFdOV-6B09itzu-ZBm-Ua18F-Tp_CKdDsAgMG6AZNFMzB37aVbUTvAfQs_JUTzU9UnqjHsxCjw4-Y5oObSLTar40VdTakx7Cqk1yyTBB8t9nw',
    heroUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU28E5tXN3EK9E2w3abuoRKabfQ7HQydC7gkZ8kdngpdY-gDqn5NF5OS9jnyassB9ETbr5884GvbW2_W5bv-s_d-gRmI27k_lCXbG7bba8dnjtTtusi_18l8OmVPe-H_HvRXOw-DAFdOV-6B09itzu-ZBm-Ua18F-Tp_CKdDsAgMG6AZNFMzB37aVbUTvAfQs_JUTzU9UnqjHsxCjw4-Y5oObSLTar40VdTakx7Cqk1yyTBB8t9nw',
    aboutText: 'Pioneers of industrial minimalism and cinematic electronic rock.',
    aboutImgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU28E5tXN3EK9E2w3abuoRKabfQ7HQydC7gkZ8kdngpdY-gDqn5NF5OS9jnyassB9ETbr5884GvbW2_W5bv-s_d-gRmI27k_lCXbG7bba8dnjtTtusi_18l8OmVPe-H_HvRXOw-DAFdOV-6B09itzu-ZBm-Ua18F-Tp_CKdDsAgMG6AZNFMzB37aVbUTvAfQs_JUTzU9UnqjHsxCjw4-Y5oObSLTar40VdTakx7Cqk1yyTBB8t9nw',
    isFollowing: false
  },
  {
    id: 'artist-luna-ray',
    name: 'Luna Ray',
    monthlyListeners: '4.8M Monthly Listeners',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiW_7YZH_85SH3J1zYQjKIcdLXV1sVEqezgkVqjqMB92iAy1QPaB7eJbRTtAkpPfzeymbjeMNyU2HE0HhAai2ZZsHghowQNVoDjD4-PmHk6ANoHWcoK_1_8txh-KTdz4yd8EHMFa_2GPuqw_eRicyunX4Fyr7ZfllYkPglpzeycnpOlBmthFAPcNZNIkQRKFXaPpWUdgZFw7aYBXs6dQWw0qu7TiYuh6_ypo9M39febrtF2uboKg8',
    heroUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiW_7YZH_85SH3J1zYQjKIcdLXV1sVEqezgkVqjqMB92iAy1QPaB7eJbRTtAkpPfzeymbjeMNyU2HE0HhAai2ZZsHghowQNVoDjD4-PmHk6ANoHWcoK_1_8txh-KTdz4yd8EHMFa_2GPuqw_eRicyunX4Fyr7ZfllYkPglpzeycnpOlBmthFAPcNZNIkQRKFXaPpWUdgZFw7aYBXs6dQWw0qu7TiYuh6_ypo9M39febrtF2uboKg8',
    aboutText: 'Hyper-vibrant pop and electronic singer-songwriter known for ethereal vocal textures.',
    aboutImgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiW_7YZH_85SH3J1zYQjKIcdLXV1sVEqezgkVqjqMB92iAy1QPaB7eJbRTtAkpPfzeymbjeMNyU2HE0HhAai2ZZsHghowQNVoDjD4-PmHk6ANoHWcoK_1_8txh-KTdz4yd8EHMFa_2GPuqw_eRicyunX4Fyr7ZfllYkPglpzeycnpOlBmthFAPcNZNIkQRKFXaPpWUdgZFw7aYBXs6dQWw0qu7TiYuh6_ypo9M39febrtF2uboKg8',
    isFollowing: true
  },
  {
    id: 'artist-kinetic',
    name: 'KINETIC',
    monthlyListeners: '1.9M Monthly Listeners',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5Y3aitA7rSb2XJO0yOZcpy9EJm9wOJvRBXtE_nBLNWQpdlVDYW7UDDqSc7UTbBoRqKv5-n6bkTug09_UsvnN_5bTK7jgaogc-T50tY0UdsX9KkTNKqFAEWPuNPFjBgdCrTN1bFbXoSanKI566stXicrWH8_QockAx_nyeInf7-5HF-oQ9fmG8gzwuUDWI9X8zpVVRrfDcokCL7Ke8g0ATwv4T63yLM2UzFpZ1ntth3uHa40AjQxk',
    heroUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5Y3aitA7rSb2XJO0yOZcpy9EJm9wOJvRBXtE_nBLNWQpdlVDYW7UDDqSc7UTbBoRqKv5-n6bkTug09_UsvnN_5bTK7jgaogc-T50tY0UdsX9KkTNKqFAEWPuNPFjBgdCrTN1bFbXoSanKI566stXicrWH8_QockAx_nyeInf7-5HF-oQ9fmG8gzwuUDWI9X8zpVVRrfDcokCL7Ke8g0ATwv4T63yLM2UzFpZ1ntth3uHa40AjQxk',
    aboutText: 'Live modular synthesizer wizardry creating high-energy underground techno beats.',
    aboutImgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5Y3aitA7rSb2XJO0yOZcpy9EJm9wOJvRBXtE_nBLNWQpdlVDYW7UDDqSc7UTbBoRqKv5-n6bkTug09_UsvnN_5bTK7jgaogc-T50tY0UdsX9KkTNKqFAEWPuNPFjBgdCrTN1bFbXoSanKI566stXicrWH8_QockAx_nyeInf7-5HF-oQ9fmG8gzwuUDWI9X8zpVVRrfDcokCL7Ke8g0ATwv4T63yLM2UzFpZ1ntth3uHa40AjQxk',
    isFollowing: false
  },
  {
    id: 'artist-e-vance',
    name: 'E. Vance',
    monthlyListeners: '950K Monthly Listeners',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaoqzi2l6wKc08GKMyy6QGtvxD5RrRwLGVKjJN6i8r5R8nfAeGupVOU-6j5q0ljOhcaO4yRlvfmRjE9lnr0fibTgr-03N47UYcSPrpVIBfA9Qlw8tNDBUbqUpvKKU6XyJe2aS555JjLRymjS8z1xIBif3Ev6Lkvcl1FZFoXU1fJjrLiL-akspS1FKptZ-MRriRDQwIcrlsbUbh3b9cwshmGmizlgTk30-BMwSC5rPte7-00H-bec0',
    heroUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaoqzi2l6wKc08GKMyy6QGtvxD5RrRwLGVKjJN6i8r5R8nfAeGupVOU-6j5q0ljOhcaO4yRlvfmRjE9lnr0fibTgr-03N47UYcSPrpVIBfA9Qlw8tNDBUbqUpvKKU6XyJe2aS555JjLRymjS8z1xIBif3Ev6Lkvcl1FZFoXU1fJjrLiL-akspS1FKptZ-MRriRDQwIcrlsbUbh3b9cwshmGmizlgTk30-BMwSC5rPte7-00H-bec0',
    aboutText: 'Neo-classical and ambient piano arrangements layered with vintage tape loops.',
    aboutImgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaoqzi2l6wKc08GKMyy6QGtvxD5RrRwLGVKjJN6i8r5R8nfAeGupVOU-6j5q0ljOhcaO4yRlvfmRjE9lnr0fibTgr-03N47UYcSPrpVIBfA9Qlw8tNDBUbqUpvKKU6XyJe2aS555JjLRymjS8z1xIBif3Ev6Lkvcl1FZFoXU1fJjrLiL-akspS1FKptZ-MRriRDQwIcrlsbUbh3b9cwshmGmizlgTk30-BMwSC5rPte7-00H-bec0',
    isFollowing: false
  }
];

export const ALBUMS: Album[] = [
  {
    id: 'album-monolith',
    title: 'Monolith',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    year: 2023,
    genre: 'Synthwave',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY2G8a1rNXvlmnf2M7B6Sb0dRHLSX-C501oGneqmbB2KNdhh-dHYk4ck3eHBRwm9XSaJrKv9-VP8ckzaxGc7sU4F2f9Y1AJUtq2gH4UwqkbYO52VMOmg5bNJqJuatIJJ_i9dSi8tY3pxL9RoxNiFhKMypluKLCgaJ3naiAaD8NwvNVOey5_hOT7_Z7POC5wINMZfpuZ-cejrtv1vv-GsZFGK7Xp789Ez-mglyyzSbrDiqPvFwmOY',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5oHTR_iciezS8oYDlBhtjQrIxLSUAe5uBxL5sdkcIm9P0rpjFWtBekJ33ECa0GVEnX_bVMd8fM-txwEof3wt8HUvK11oIzEWFZLbCmlmuBs8oKP6z1OqAny7ewfr-lJa5WsGtqJDUtAxXIgpLUpRndvg9vRmCvGIEx2RggackM3o5S1ghBzAgon3Mtk5iNYWtkKCZ0bEUvP4UVu5DXyPVJQes3HfPYnHX_fwraYfZnoZgZ_rtHe8',
    trackIds: [
      'track-neon-genesis',
      'track-cybernetic-dawn',
      'track-monolith-title',
      'track-hyperdrive',
      'track-digital-rain',
      'track-sector-7',
      'track-nightcall-interlude',
      'track-vapor-trails',
      'track-end-of-line',
      'track-fade-to-static'
    ]
  },
  {
    id: 'album-fractured-light',
    title: 'Fractured Light',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    year: 2021,
    genre: 'Synthwave',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB4YF6JNFd20a3E7Joowr88MDl3BTOxZcC4NEQ3a7FAws5DEWo5OIhUQIwgLJrv9cv-NxcemytbM_0h0M0PVmmrjpQ4yY2X5gwE8sBhoe-42ee54QQjCQh-gOrGkB78aVx0nxcEBAyOfVvT7waVWo-ydoUWBltgdwLZlEkA15jEJK0Ig3vKpa7pSMDY-n8xgMTSeZRJbF3njVS-XMkY6EGEreMs_jmHSu2txI7ZjRZi0QXiUc8qIE',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5oHTR_iciezS8oYDlBhtjQrIxLSUAe5uBxL5sdkcIm9P0rpjFWtBekJ33ECa0GVEnX_bVMd8fM-txwEof3wt8HUvK11oIzEWFZLbCmlmuBs8oKP6z1OqAny7ewfr-lJa5WsGtqJDUtAxXIgpLUpRndvg9vRmCvGIEx2RggackM3o5S1ghBzAgon3Mtk5iNYWtkKCZ0bEUvP4UVu5DXyPVJQes3HfPYnHX_fwraYfZnoZgZ_rtHe8',
    trackIds: ['track-neon-overture', 'track-midnight-city']
  },
  {
    id: 'album-currents',
    title: 'Currents',
    artist: 'The Midnight Echoes',
    artistId: 'artist-midnight-echoes',
    year: 2019,
    genre: 'Synthwave',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJHNgqY4R8HWwuYGm8zxTkhLIqoIUYacfpNWF2HMBWdFhvFNoXAVP4hioASODrOUnsGpDi64X63MPLLgwB3Abf3xC-0yuwlaBe6YZZUPDj7R1k4ict6lCJ7sX8M-euSaq_-zv3PnR0ebNeMZMnXXRFJ7v_VU5vCLL0yXWuVNthPRyOn0FGi9P3SxQ9RkYR9003adwhxvZKoGJ0FHQDuo2ycja8-NH0rdg_RELrt7MQfmpLm5ry1_A',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5oHTR_iciezS8oYDlBhtjQrIxLSUAe5uBxL5sdkcIm9P0rpjFWtBekJ33ECa0GVEnX_bVMd8fM-txwEof3wt8HUvK11oIzEWFZLbCmlmuBs8oKP6z1OqAny7ewfr-lJa5WsGtqJDUtAxXIgpLUpRndvg9vRmCvGIEx2RggackM3o5S1ghBzAgon3Mtk5iNYWtkKCZ0bEUvP4UVu5DXyPVJQes3HfPYnHX_fwraYfZnoZgZ_rtHe8',
    trackIds: ['track-vapor-trails', 'track-sector-7']
  }
];

export const PLAYLISTS: Playlist[] = [
  {
    id: 'playlist-synthwave-night-drive',
    title: 'Synthwave Night Drive',
    subtitle: 'Playlist • 1.2M Saves',
    description: 'Midnight drives through neon-soaked streets.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDECpwuigDr3PENF-ro3VoU0h6eDsQN4gKvwfKJvavi0Ip4qn56V_I4uOB1WVMs4Vf7dNx-lmGzG3iK3yVZN2iY-LGA9G4Y5puQfXwUuY9Hm6fT_YUFiEm1AJJfilMdEwdvR7ahwrpV_SR4DV-6WU7YRDMt115jG-jfxdImv_Rqyf2dmbdoOYvaexZcZj1RQeAJddgWqmj-HNtOBQfR2TUDb7Ga8akiNrfiBW_C7S97JfGNz1mUpxw',
    trackCount: 42,
    totalDurationText: '2h 15m',
    trackIds: [
      'track-neon-grid-runner',
      'track-night-drive',
      'track-pixel-sunset',
      'track-cyberpunk-blues',
      'track-neon-overture',
      'track-crimson-horizon',
      'track-velocity'
    ]
  },
  {
    id: 'playlist-cinematic-electronica',
    title: 'Cinematic Electronica',
    subtitle: 'Playlist • 840K Saves',
    description: 'Expansive soundscapes and atmospheric rhythms for late night focus.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR1BuAX8u9ac1-rd9uaDuTUrg82beIkrDUztp17yjrw7JpmC65L8nIMwibS9p-24HZ_8a5yMnEs0k2wBjZO3EeTK4fzQiaFu4pmncBsERXnl1_4rfgGB75FsYCMGcSm5VwIuVhYQXGSWFwMIc0GdZUx8eH1TiOu7vS14u6CxJP-a2h3JC28kgAqnicgfkF8dhudWZiI9esdaDwba9rRDD-hAoaSjBO1j9aqA9WrhjSftKY-MG2Zvk',
    trackCount: 36,
    totalDurationText: '1h 58m',
    trackIds: ['track-velocity', 'track-lost-in-the-wash', 'track-sector-7']
  },
  {
    id: 'playlist-analog-memories',
    title: 'Analog Memories',
    subtitle: 'Playlist • 42 Tracks',
    description: 'Warm tape saturation, dusty synthesizers, and vintage dreams.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPVh1MQu3K03y2LIelBeWbrggQfxIWhYjCjZ0jKRxjkmITPkDm7L2s-1S3JdWPNPovtPNj9zLDA0A0KgygAImLw8zL-GvKJz2bSYRgI3DHf9SeS_5i1EFrtVO5HW9m86WG-VcJKnhOgz3BQsxMmIq0JvC4cOYwG7BZ3WYkDOkahT82-uDqKpvxabcUT0xkFA7tYdDMKJea6HwsK3rd-FPgW_YRoBL8e1zkIWPbTO2Pd2M7hmj4v-0',
    trackCount: 42,
    trackIds: ['track-neon-overture', 'track-focus-flow']
  },
  {
    id: 'playlist-night-drive-user',
    title: 'Night Drive',
    subtitle: 'Playlist • 18 Tracks',
    description: 'Cruise playlist curated for empty highways and skyline views.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzjvDHo_L9pvS-fBKTWQC0J-UZB6Ly2oZWn6zM_58bnCbonQiROt5D-gWTi21rP4eR9b6vaQlGGjXMjmpuR1Po81FVog-xJizFQNyyUuTGSIOZeZmTGxCSfuxeWqrNQGKOCrWuCffM4ta74COJpkNmdvW55NuuApu3zokGvXvwTtzy3AXY4JFjIFyD4DwKgDzXOloT50pOPXStPYDex8zSCBDbqo7mqOq1eG5G1bGLCH60G-k1mW0',
    trackCount: 18,
    trackIds: ['track-night-drive', 'track-pixel-sunset']
  },
  {
    id: 'playlist-deep-ambient',
    title: 'Deep Ambient',
    subtitle: 'Playlist • 55 Tracks',
    description: 'Hypnotic drone, organic texture, and pure tranquility.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC22eNIzyVPXPiT2VsFRQAZCNO0a1-6-jywUnGSXCfnE-yiygd-B0uTi-sxN4fy0TtI3cFCukBbzHr1lvIR-G3JOJL3J93vJHHME4BE8qxjsnX_VmUSH9FJqiJWqrgxADNXBA_3DdAORTdFZt4Z7Op7F2BotMG7xH06OTw-oxO32N4a2VjdAE60e12PUjff6keX_vpz1MZRMm6E4s53S85vAPjZ5RDVbYVsH8B_530Huk8eGHD48Xg',
    trackCount: 55,
    trackIds: ['track-focus-flow', 'track-digital-rain']
  }
];

export const GENRES: GenreItem[] = [
  {
    id: 'genre-electronic',
    title: 'Electronic',
    bgGradient: 'from-[#ff5a3c]/20 to-[#121317]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYlOtJmfgC0CZfim1lpUtsN5GvQhf-ip2jtkZUP6xhk-5QQaEwCkcaG6vhOXeNyyCXY-vNvOxQul6V4lV0lB_Hh7cli4f5qBJo8wycAerBRjq6G7SbjjdhqbmqhmjKnKFq5gUwYBw8joHe9mHjUfb422pK_VTwoeNpzoSPdDYKoKLfLo8lAqJ1ebY4VjdTU5tNNvNodqU-kKvK7BtYsYSVYszPEV-thLpZ-87rPaVXYgWFauHYHQ0',
    accentColor: '#ff5a3c'
  },
  {
    id: 'genre-indie',
    title: 'Indie',
    bgGradient: 'from-[#00a1b3]/20 to-[#121317]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaBh-sqHg5EBzev7RX9eFaP7klv1c0eCZS2CQc6jVapujRPsfdZQck5u_IgEt2Tag2FTbA5OWLFxuu5b9qTovrp82uESlHIBocDUMOfUWx7z6KuZ4-iuwuTjFv0Buuf3MoJlKBBu_qFTLL39hH0Trx9tu_Dg-SgyNEDoLCpudoMG2fLfjwG9Ios_4bng5TZHV7ybYKu0xZ9d89AKZ6oIOlv2EPIXU71gIz8eogP1ZKTCU7TH-kjFM',
    accentColor: '#5fd7e9'
  },
  {
    id: 'genre-hiphop',
    title: 'Hip-Hop',
    bgGradient: 'from-[#ffb4a5]/20 to-[#121317]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6GS94FE2NBRsZhP3t0GD4B40E0crMTJUVJIlzFWt4dX2lP_SVo28jvBG_8lRNqwy7uyZkkqo3SPd8wYoIQpERu6Oz9iHNBL8yAiqgDc3wUYECNzlQvI03wiJ7UGz1-fE4rSO1pqLDO1iBXUAbO43iEZY8UMfQf1ZPPYGTZvDNh27lohmsfkaN09MLoWVWZ4oaJHT0AKFLmq0cwHXXV1fC7q102KBJ8hLHVCyI3ir8aVEm6yJX3Gc',
    accentColor: '#ffb4a5'
  },
  {
    id: 'genre-pop',
    title: 'Pop',
    bgGradient: 'from-[#5fd7e9]/20 to-[#121317]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNWUnE-0ZpHOxk_s1crjVaKHUYE6V9WcrLlZ_D0rSzytUPOnMCppl0TQdt-x-XGCTRYwC-CIzqm8JNMYRNdPi9la3gMoq4BGWrG_YV2LebEMA9PZEVcl_J1u3mY3xPtRl7UFgW2UDuETGgSS447viH0JOQIV9q6gYemI4xEzDZUm-ccqbugcoG_H1N3aZVqyiIQlElsOjzWPXFX3HLSv_rr_EjuUjJyGkZ3356w_jfV76Xl0tjnaw',
    accentColor: '#5fd7e9'
  },
  {
    id: 'genre-ambient',
    title: 'Ambient',
    bgGradient: 'from-[#9af0ff]/20 to-[#121317]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUzfoDYiX74xlVYlQ_Y4JYBLqF5tK5S4u3x8avK9NS0p9aZ1M8wGKp6vo_8JPBrCQ4WA05ccuVxEVcUo71RwF821dnLX5d_pVaprxXxn55tydpw7jHSJMVbVOEih35Z5W0Dlk9cuLulA2NeP87xnbEgJzDzTecT0r4TWvpU6_Jh1tSTS3YaYLQkGMxAzzcTe76YKlzcaB4X-4IDEGx2yu51eA66yO3U6RZUdLLmjail4hwBHDEpuo',
    accentColor: '#9af0ff'
  },
  {
    id: 'genre-rock',
    title: 'Rock',
    bgGradient: 'from-[#7d2c1d]/20 to-[#121317]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFfjGwxm4P52uYLFSV20YOBJwvP7JVNUSJVbBHyilpixM9h1_H_6pmPTnr5ylJ0k8oQLVLKDDgs993djm-gGIPx4NBBZH3B75MTFjCGzzE3LOddzFLs8vhLdgNNyLOk9Fw7ofyRbJSrAADz_C9HKFna_mBFb9Op0jU8b3SOjlIAy-xsDjPCfYPPgf11R-tjFCHn8OJD5P9yQzLAU7Ta-ED6VSsuuEHPdT8ajIgpitCEWAxFWjYLc0',
    accentColor: '#ff9a86'
  }
];

export const RECENT_SEARCHES = [
  'Fred again..',
  'Boiler Room Sets',
  'Radiohead',
  'Jazz Vocals',
  'Synthwave 80s',
  'Daft Punk'
];

export const TRENDING_SEARCHES = [
  'Daft Punk Discography',
  'Late Night Lofi',
  'Top 50 Global',
  'The Weeknd'
];
