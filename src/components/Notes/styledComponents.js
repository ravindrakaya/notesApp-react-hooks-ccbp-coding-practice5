// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const FormContainer = styled.form`
  box-shadow: 0px px 16px #bfbfbf;
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #d8d8d8;
  width: 70%;
  height: 300px;
`
export const TitleInput = styled.input`
  outline: none;
  border: none;
  padding: 10px;
`

export const DescriptionInput = styled.textarea`
  outline: none;
  border: none;
  padding: 10px;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`

export const AddBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #4c63b6;
  color: #ffffff;
  align-self: flex-end;
  cursor: pointer;
`

export const NoteListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`

export const EmptyViewImg = styled.img`
  height: 100px;
  width: 100px;
`

export const EmptyNotesHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
`

export const EmptyNotesDescription = styled.p`
  font-family: 'Roboto';
  color: #475569;
  margin-top: 0px;
`
