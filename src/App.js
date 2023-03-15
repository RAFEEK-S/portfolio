import './App.css';
import './img.jpg';


function App() {
  return (
    <div className="App">
      <div className="container">
        <section id='aboutus'>
        <div className= "row align-items-centre mt-5">
          
        <div className= "col-md-6 ">
        <h1 className='title-centre pt-5 px-3'>About us </h1>
          <h2 className=' title-centre px-3' >I am Rafeek</h2>
          <p className='text-centre px-3' >It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with 
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <button id ="buttons" type="button" class="btn btn-outline-success mx-3">Resume</button>
          </div>
          <div className= "col-md-6  py-5 px-5">
          <img src="https://www.thedesigngrouponline.com/wp-content/uploads/2012/04/shutterstock_1122339353.jpg" class="img-fluid" alt="..."/>
        </div>
          
        </div>
        </section>iiii
      </div>
    </div>
  );
}

export default App;
