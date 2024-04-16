import { type ReactNode, createContext, useContext, useReducer } from 'react';

type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext)

    if (timersCtx === null) {
        throw new Error('TimersContext is null - that should not be the case!');
    }

    return timersCtx;
}

type TimersContextProvidersProps = {
    children: ReactNode;
};

export default function TimersContextProvider({children}: TimersContextProvidersProps) {
    useReducer(reducer, initialState)
    
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: true,
        addTimer(timerData) {
            // ...
        },
        startTimers() {
            // ...
        },
        stopTimers() {
            // ...
        },
    };
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
};