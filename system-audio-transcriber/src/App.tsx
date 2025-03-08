import AudioRecorder from './components/AudioRecorder'
import TranscriptionDisplay from './components/TranscriptionDisplay'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [transcription, setTranscription] = useState<string>('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <AudioRecorder onTranscriptionUpdate={setTranscription} />
          <TranscriptionDisplay transcription={transcription} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
