import React from 'react'
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch/FileSearch'
import FileList from './components/FileList/FileList'
import defaultFiles from './utils/defaultFiles'
import BottomBtn from './components/BottomBtn/BottomBtn'

function App() {
  return (
    <div className="App container-grid px-0">
      <div className="row no-gutters">
        <div className="col-6 bg-light left-panel">
          <FileSearch
            title="我的云文档"
            onFileSearch={(value) => {
              console.log(value)
            }}
          />
          <FileList
            files={defaultFiles}
            onFileClick={(id) => {
              console.log(id)
            }}
            onFileDelete={(id) => {
              console.log(id)
            }}
            onSaveEdit={(id, newValue) => {
              console.log(id, newValue)
            }}
          />
          <div className="row no-gutters button-group">
            <div className="col">
              <BottomBtn
                text="新建"
                colorClass="btn-primary"
                icon={faPlus}
                onBtnClick={() => console.log('hello')} />
            </div>
            <div className="col">
              <BottomBtn
                text="导入"
                colorClass="btn-success"
                icon={faFileImport}
                onBtnClick={() => console.log('world')} />
            </div>
          </div>
        </div>

        <div className="col-6 right-panel bg-primary">
          <h1>this is the right</h1>
        </div>
      </div>
    </div>
  )
}

export default App
