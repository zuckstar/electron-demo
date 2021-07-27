import React, { useState, useEffect, useRef } from 'react'
// font 根组件
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// font 图标
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

interface IFileSearchProps {
  title: string;
  onFileSearch: (value: string) => void;
}

const FileSearch: React.FC<IFileSearchProps> = (props) => {
  const { title, onFileSearch } = props
  
  const [inputActive, setInputActive] = useState(false)
  const [value, setValue] = useState('')
  let node = useRef<HTMLInputElement>(null)

  const closeSearch = (e: any) => {
    e.preventDefault()
    setInputActive(false)
    setValue('')
  }

  useEffect(() => {
    const handleInputEvent = (event: KeyboardEvent) => {
      const keyCode = event.key
      if (keyCode === "Enter" && inputActive) {
        onFileSearch(value)
      } else if (keyCode === "Escape" && inputActive) {
        closeSearch(event)
      }
    }
    document.addEventListener('keyup', handleInputEvent)

    return () => {
      document.removeEventListener('keyup', handleInputEvent)
    }
  })

  useEffect(() => {
    if (inputActive && node && node.current) {
      node.current.focus()
    }
  }, [inputActive])

  return (
    <div className="alert alert-primary FileSearch">
      <div className="d-flex justify-content-between align-items-center">
        {!inputActive &&
          <>
            <span>{title}</span>
            <button
              type="button"
              className="icon-button"
              onClick={() => { setInputActive(true) }}
            >
              <FontAwesomeIcon
                title="搜索"
                icon={faSearch}
                size="lg"
              />
            </button>
          </>
        }
        {
          inputActive &&
          <>
            <input
              className="form-control"
              value={value}
              ref={node}
              onChange={(e) => { setValue(e.target.value) }}
            />
            <button
              type="button"
              className="icon-button"
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
      </div>
    </div>
  )
}


export default FileSearch