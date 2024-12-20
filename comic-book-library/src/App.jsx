import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetail from './components/CharacterDetails';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import NavigationBar from './components/NavigationBar';
import './App.css'

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const handleCharacterSelect = (characterId) => {
    setSelectedCharacter(characterId)
  }

  return (
    <div className='app-container'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse-characters/' element={<BrowseCharacters />} />
        <Route path='/character-details/:id' element={<CharacterDetail />} />
        <Route path='/comics/' element={<Comics />} />
        <Route path='*' element={<NotFound />} /> {/*Assingment 2, Task 3*/}
      </Routes>
    </div>
  )
}

export default App

/*
    <div>
      <h1>Marvel API Calls</h1>
      < CharacterList onCharacterSelect={handleCharacterSelect} />
      {selectedCharacter && (
        <CharacterDetail characterId={selectedCharacter}/>
      )}
    </div>
  )
*/