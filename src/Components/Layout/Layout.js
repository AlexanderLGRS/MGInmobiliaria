import SideBar from '../SideBar/SideBar';

export default function Layout(props) {
  return (
    <>
      <SideBar />
      {props.children}
    </>
  );
}
