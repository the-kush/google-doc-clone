import { useCallback } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import './doc.css';

export default function Doc() {
  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null ) return

    wrapper.innerHTML = " "
    const editor = document.createElement("div")
    wrapper.append(editor)
    new Quill(editor, { theme: "snoq" })

  }, [])
  return <div id='container' ref={wrapperRef}></div>
}

