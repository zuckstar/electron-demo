import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import useKeyPress from '../../hooks/useKeyPress'

interface IFile {
  id: string
  title: string
  body: string
  createdAt: number
}

interface IFileListProps {
  files: IFile[]
  onFileClick: (id: string) => void
  onSaveEdit: (id: string, value: string) => void
  onFileDelete: (id: string) => void
}

const FileList: React.FC<IFileListProps> = (props) => {
  const { files, onFileClick, onFileDelete, onSaveEdit } = props
  const [editStatus, setEditStatus] = useState<string | boolean>(false)
  const [value, setValue] = useState("")
  const enterPressed = useKeyPress('Enter')
  const escPressed = useKeyPress('Escape')

  const closeSearch = () => {
    setEditStatus(false)
    setValue('')
  }

  useEffect(() => {
    if (enterPressed && editStatus) {
      const editItem = files.find(file => file.id === editStatus)
      if (editItem)
        onSaveEdit(editItem.id, value)
      setEditStatus(false)
      setValue('')
    }
    if (escPressed && editStatus) {
      closeSearch()
    }
  }, [enterPressed, editStatus, escPressed, files, onSaveEdit, value])
  return (
    <ul className="list-group list-group-flush file-list">
      {files.map((file) => (
        <li
          className="list-group-item bg-light row d-flex justify-content-between align-items-center file-item"
          key={file.id}
        >
          {(file.id !== editStatus) &&
            <>
              <span className="col-2">
                <FontAwesomeIcon size="lg" icon={faMarkdown} />
              </span>
              <span
                className="col-8 c-link"
                onClick={() => {
                  onFileClick(file.id)
                }}
              >
                {file.title}
              </span>
              <button
                type="button"
                className="icon-button col-1"
                onClick={() => {
                  setEditStatus(file.id)
                  setValue(file.title)
                }}
              >
                <FontAwesomeIcon title="编辑" size="lg" icon={faEdit} />
              </button>
              <button
                type="button"
                className="icon-button col-1"
                onClick={() => {
                  onFileDelete(file.id)
                }}
              >
                <FontAwesomeIcon title="删除" size="lg" icon={faTrash} />
              </button>
            </>
          }
          {
            (file.id === editStatus) &&
            <>
              <input
                className="form-control col-10"
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
              />
              <button
                type="button"
                className="icon-button col-2"
                onClick={closeSearch}
              >
                <FontAwesomeIcon
                  title="关闭"
                  icon={faTimes}
                  size="lg"
                />
              </button>
            </>
          }
        </li>
      ))}
    </ul>
  )
}

export default FileList
