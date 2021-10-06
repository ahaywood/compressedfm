import { useState, useRef } from 'react';

export const useAudioPlayer = (audioRef, progressBarRef) => {
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const animationRef = useRef(); // reference the animation

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioRef.current.duration);
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  // when the playhead is moved, update the current time (text)
  const updateCurrentTime = () => {
    setCurrentTime(progressBarRef.current.value);
  };

  const pause = () => {
    audioRef.current.pause();
    cancelAnimationFrame(animationRef.current);
  };

  const restart = () => {
    progressBarRef.current.value = 0;
    updateCurrentTime();
    pause();
  };

  const whilePlaying = () => {
    progressBarRef.current.value = Math.floor(audioRef.current.currentTime);
    progressBarRef.current.style.setProperty(
      '--seek-before-width',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    updateCurrentTime();

    // when you reach the end of the song
    if (progressBarRef.current.value === duration) {
      restart();
      return;
    }

    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const play = () => {
    audioRef.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changePlaybackSpeed = () => {
    switch (speed) {
      case 1:
        audioRef.current.playbackRate = 1.2;
        setSpeed(1.2);
        break;
      case 1.2:
        audioRef.current.playbackRate = 1.5;
        setSpeed(1.5);
        break;
      case 1.5:
        audioRef.current.playbackRate = 1.7;
        setSpeed(1.7);
        break;
      case 1.7:
        audioRef.current.playbackRate = 2;
        setSpeed(2);
        break;
      case 2:
      default:
        audioRef.current.playbackRate = 1;
        setSpeed(1);
        break;
    }
  };

  const togglePlaying = () => {
    const prevState = isPlaying;
    setIsPlaying(!prevState);
    if (!prevState) {
      play();
    } else {
      pause();
    }
  };

  // the playhead moves when you click on the progress bar
  // update the audio player to the new point
  const changeAudioToPlayhead = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    setCurrentTime(progressBarRef.current.value);
    progressBarRef.current.style.setProperty(
      '--seek-before-width',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
  };

  const timeTravel = (newTime) => {
    progressBarRef.current.value = newTime;
    updateCurrentTime();
    changeAudioToPlayhead();
  };

  const backThirty = () => {
    console.log('back 30');
    timeTravel(Number(progressBarRef.current.value) - 30);
  };

  const forwardThirty = () => {
    console.log('forward 30');
    timeTravel(Number(progressBarRef.current.value) + 30);
  };

  const skipToTime = (newTime) => {
    timeTravel(newTime);
    play();
  };

  // toggle play / pause when you tap the space bar
  const tapSpaceBar = (e) => {
    if (e.keyCode === 32) {
      togglePlaying();
    }
  };

  return {
    backThirty,
    changeAudioToPlayhead,
    changePlaybackSpeed,
    currentTime,
    duration,
    forwardThirty,
    isPlaying,
    onLoadedMetadata,
    play,
    skipToTime,
    speed,
    tapSpaceBar,
    togglePlaying,
  };
};
