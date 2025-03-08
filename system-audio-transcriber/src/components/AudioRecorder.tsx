import { useState } from 'react'
import { AudioRecorderProps } from '../types/audio'

const AudioRecorder = ({ onTranscriptionUpdate }: AudioRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)

      recorder.ondataavailable = async (event) => {
        const audioBlob = event.data
        // Here you would typically send the audio to a speech-to-text API
        // For demo purposes, we'll just update with a placeholder
        onTranscriptionUpdate("This is a sample transcription. In a real application, you would integrate with a speech-to-text API.")
      }

      recorder.start()
      setMediaRecorder(recorder)
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop()
      mediaRecorder.stream.getTracks().forEach(track => track.stop())
      setIsRecording(false)
    }
  }

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-gray-700 ${isRecording ? 'animate-pulse bg-red-500/50' : ''}`}>
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
            >
              {isRecording ? (
                <span className="material-icons text-3xl">stop</span>
              ) : (
                <span className="material-icons text-3xl">mic</span>
              )}
            </button>
          </div>
        </div>
        <p className="text-gray-300">
          {isRecording ? 'Recording in progress...' : 'Click to start recording'}
        </p>
      </div>
    </div>
  )
}

export default AudioRecorder
