import "./Btn.css";

export default function Btn({onClick, children}) {
  return (
    <button className="shop" onClick={onClick}>{children}</button>
  )
}
