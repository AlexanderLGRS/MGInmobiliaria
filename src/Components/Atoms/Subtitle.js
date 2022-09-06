import './Atoms.css'
export default function Subtitle(props) {
    const { text } = props;
    return (
      <>
        <h5 className="subtitle">{text}</h5>
      </>
    );
  }
  