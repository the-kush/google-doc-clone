import React from 'react'

import Header from './components/header/Header';
//import Doc from './container/textEditor/Doc';
import Sidebar from './components/header/Sidebar';

const App = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
            { /*<Doc /> */}
            < Sidebar />
    </div>
  )
}

export default App
