import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"


function App() {
 

  return (
    <div style={{
      height: "100vh" , display: "flex", flexDirection: "colum"
    }}>
    <Header/>
    <Main/>
    {/* better to keep the default value of props in App.jsx */}
    <Footer bgcolor="dodgerblue" padding="0.5rem" />
    </div>
  )
}

export default App
