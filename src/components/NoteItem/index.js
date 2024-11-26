// Write your code here
import {
  ListItemContainer,
  ListHeading,
  ListDescription,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails
  console.log(props)

  return (
    <ListItemContainer>
      <ListHeading>{title}</ListHeading>
      <ListDescription>{noteText}</ListDescription>
    </ListItemContainer>
  )
}

export default NoteItem
