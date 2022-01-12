export default interface TextScreenProps {
  title: string,
  text: string,
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>,
  html: boolean
}