import './Atoms.css';
export default function Paragraph(props) {
  const { text } = props;
  return (
    <>
      <p className='paragraph'>{text}</p>
    </>
  );
}
