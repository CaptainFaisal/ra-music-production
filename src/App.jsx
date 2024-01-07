import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
        <Navbar />
        {/* <div style={{backgroundColor: "#eee", height: "5000px", width: "100px"}}></div> */}
        {/* welcome message */}
        <div className="container">
            <div className="row">
                <div className="col-12" align="center">
                    <h1 className="text-center text-white m-5">Welcome to RA music production</h1>
                    <p className="text-center text-white m-5">At RA music production we offer a wide range of services to help you with your music production needs. We offer services such as mixing, mastering, and beat production. </p>
                    {/* join button */}
                    <br />
                    <a className="custom-btn" href="#">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Join Our Course
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
