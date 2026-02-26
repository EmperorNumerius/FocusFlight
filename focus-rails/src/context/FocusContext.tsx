import { createContext, useContext, useState, type ReactNode, useEffect, useRef } from 'react';

interface FocusState {
  isActive: boolean;
  mode: 'focus' | 'work' | 'reading' | 'relax';
  duration: number; // in minutes
  timeLeft: number; // in seconds
  isPaused: boolean;
  volume: number;
  ambience: string;
}

interface FocusContextType extends FocusState {
  startSession: (mode: FocusState['mode'], duration: number) => void;
  pauseSession: () => void;
  resumeSession: () => void;
  stopSession: () => void;
  setVolume: (volume: number) => void;
  setAmbience: (ambience: string) => void;
}

const FocusContext = createContext<FocusContextType | undefined>(undefined);

export const FocusProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<FocusState>({
    isActive: false,
    mode: 'focus',
    duration: 25,
    timeLeft: 25 * 60,
    isPaused: false,
    volume: 0.5,
    ambience: 'train-rain',
  });

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSession = (mode: FocusState['mode'], duration: number) => {
    setState(prev => ({
      ...prev,
      isActive: true,
      mode,
      duration,
      timeLeft: duration * 60,
      isPaused: false,
    }));
  };

  const pauseSession = () => {
    setState(prev => ({ ...prev, isPaused: true }));
  };

  const resumeSession = () => {
    setState(prev => ({ ...prev, isPaused: false }));
  };

  const stopSession = () => {
    setState(prev => ({
      ...prev,
      isActive: false,
      timeLeft: prev.duration * 60,
      isPaused: false,
    }));
  };

  const setVolume = (volume: number) => {
    setState(prev => ({ ...prev, volume }));
  };

  const setAmbience = (ambience: string) => {
    setState(prev => ({ ...prev, ambience }));
  };

  useEffect(() => {
    if (state.isActive && !state.isPaused && state.timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setState(prev => {
          if (prev.timeLeft <= 1) {
             // Timer finished
             if (timerRef.current) clearInterval(timerRef.current);
             return { ...prev, timeLeft: 0, isActive: false, isPaused: false };
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isActive, state.isPaused]);

  return (
    <FocusContext.Provider
      value={{
        ...state,
        startSession,
        pauseSession,
        resumeSession,
        stopSession,
        setVolume,
        setAmbience,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFocus = () => {
  const context = useContext(FocusContext);
  if (context === undefined) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
};
