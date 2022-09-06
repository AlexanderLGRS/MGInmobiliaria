import SideBar from '../SideBar/SideBar';

export default function Layout(props) {
  const onSelectFilterHandler =(filter)=>{
    props.onSelectFilter(filter);
  }
  return (
    <>
      <SideBar onSelectFilter={onSelectFilterHandler} />
      {props.children}
    </>
  );
}
