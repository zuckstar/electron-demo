import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch/FileSearch';

function App () {
  return (
    <div className="App container-grid">
      <div className="row">
        <div className="col-6 left-panel">
          <FileSearch
            title="我的云文档"
            onFileSearch={(value) => {console.log(value);
            }}
          />
        </div>

        <div className="col-6 bg-primary right-panel">
          <h1>this is the right</h1>
        </div>
      </div>

    </div>
  );
}

export default App;