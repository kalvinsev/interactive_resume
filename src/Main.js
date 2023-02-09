import Content from "./components/Content";
import SideBar from "./components/SideBar";

export default function Main() {
  return (
    <div className="main">
      <div className="main-body">
        <Content />
        <SideBar />
      </div>
    </div>
  );
}
