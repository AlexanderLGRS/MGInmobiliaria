import './Atoms.css'
export default function Title(props) {
    const { text } = props;
    return (
      <>
        <h1 className="title">{text}</h1>
      </>
    );
  }
  