import { TranscriptionDisplayProps } from '../types/audio'

const TranscriptionDisplay = ({ transcription }: TranscriptionDisplayProps) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Transcription</h2>
      <div className="bg-gray-900/50 rounded p-4 min-h-[200px] text-gray-300">
        {transcription || 'No transcription available yet...'}
      </div>
    </div>
  )
}

export default TranscriptionDisplay
