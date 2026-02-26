import { useEffect, useRef } from 'react';

export const useAudio = (src: string, isPlaying: boolean, volume: number = 0.5, loop: boolean = true) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = loop;
    // Volume is handled by a separate effect to avoid re-creating audio on volume change

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, loop]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
        } else {
            audioRef.current.pause();
        }
    }
  }, [isPlaying]);

  return audioRef;
};
