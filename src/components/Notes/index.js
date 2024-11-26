// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesHeading,
  FormContainer,
  TitleInput,
  DescriptionInput,
  AddBtn,
  NoteListContainer,
  EmptyViewContainer,
  EmptyViewImg,
  EmptyNotesHeading,
  EmptyNotesDescription,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')

  const [noteText, setNoteText] = useState('')

  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeNoteText = event => setNoteText(event.target.value)

  const onSubmitNotes = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      title,
      noteText,
    }
    setNotesList(prevNotesList => [...prevNotesList, newComment])
    setTitle('')
    setNoteText('')
  }

  const renderEmptyNotesView = () => (
    <EmptyViewContainer>
      <EmptyViewImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <EmptyNotesDescription>
        Notes you add will appear here
      </EmptyNotesDescription>
    </EmptyViewContainer>
  )

  const renderNotesView = () =>
    notesList.map(eachNote => (
      <NoteItem key={eachNote.id} noteDetails={eachNote} />
    ))

  // <NoteItem />

  return (
    <MainContainer>
      <NotesHeading>Notes</NotesHeading>
      <FormContainer onSubmit={onSubmitNotes}>
        <TitleInput
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <DescriptionInput
          placeholder="Take a Note..."
          onChange={onChangeNoteText}
          value={noteText}
        />
        <AddBtn type="submit">Add</AddBtn>
      </FormContainer>
      <NoteListContainer>
        {notesList.length === 0 ? renderEmptyNotesView() : renderNotesView()}
      </NoteListContainer>
    </MainContainer>
  )
}
export default Notes
