export default function Footer({ bgcolor , padding }) {
  //destructuring the props handed from app.jsx
  // use variable to have spesific style for footer
    const footerstyles={
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        background: bgcolor,
        padding: padding,
        color: "black",
        marginTop: "auto"
    };
  return (
    <Footer style={footerstyles}>
        <h2 style={{ fontSize: "20px"}}>Clarusway</h2>
        {/*stylesheets are  not limited to the component used in only,
        it is shown in all the components,so we have to take care when we use it , for more specifity, we use modules
         <p className="danger">Copyright@2025</p>*/}
        <p>Copyright@2025</p>
    </Footer>
  );
}
