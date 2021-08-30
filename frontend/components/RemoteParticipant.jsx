import React, { useState, useEffect, useRef } from "react";

const RemoteParticipant = ({ participant }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  const [isVideoEnable, setIsVideoEnable] = useState(true);

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    const trackSubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
        track.on('disabled', () => {
          setIsVideoEnable(false);
        });
        track.on('enabled', () => {
          setIsVideoEnable(true);
        });
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  return (
    <div className="participant relative ml-2 w-60 h-36 bg-black border">
      <audio ref={audioRef} autoPlay={true} muted={false} />
      <div className="">
        <video className={isVideoEnable ? "object-cover" : "object-cover hidden"} ref={videoRef} autoPlay={true}/>
      </div>
      <div className="absolute inset-x-0 top-2 text-white">
          <span className="text-sm font-base bg-black opacity-50 px-3 pt-3 pb-2">
            {participant.identity}
          </span>
      </div>
    </div>
  );
};

export default RemoteParticipant;
