import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([]);

  function fetchNote(){
     axios.get('http://localhost:3000/api/notes')
  .then((res=>{
    setNotes(res.data.notes)
  }))
  }
  useEffect(() => {
   fetchNote();
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    const {title,description}=e.target.elements
    console.log(title.value,description.value)

    axios.post('http://localhost:3000/api/notes',{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data)
      fetchNote();
    })
  }

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNote()
    })
  }

  function updateNote(note) {
  const newTitle = prompt("Enter new title", note.title);
  const newDescription = prompt("Enter new description", note.description);

  if (!newTitle || !newDescription) return;

  axios.patch(`http://localhost:3000/api/notes/${note._id}`, {
    title: newTitle,
    description: newDescription
  })
  .then(res => {
    console.log(res.data);
    fetchNote(); // refresh notes
  })
}

  
  return (
    <>
    <form className="note-create-form" onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder='Enter title'/>
      <input name="description" type="text" placeholder='Enter description'/>
      <button>Create note</button>

    </form>

    <div className="notes">
      {
        notes.map(note=>{
          return <div className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
      <button onClick={() => updateNote(note)}>Update</button>


      </div>
        })
      }
      
    </div>
    </>
  )
}

export default App

