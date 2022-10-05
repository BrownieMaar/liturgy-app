export default function FooterNavigator(props) {
  return <div className="footer-div">
    <p>This is the footer.</p>
    <button onClick={props.refreshbutton}>🔄</button>
  </div>
}