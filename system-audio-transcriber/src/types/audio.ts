export interface AudioRecorderProps {
  onTranscriptionUpdate: (transcription: string) => void;
}

export interface TranscriptionDisplayProps {
  transcription: string;
}
