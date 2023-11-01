import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <a href="#" className='l'>K. Griffith</a>
          <ul>
            <li><a href="#">APPEARANCES</a></li>
            <li><a href="#">BOOKS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
        <hr />
      </header>
      <section>
        <div className="container1">
          <img className='image1' src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_298,h_329,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt="" />
          <div className="container2">
            <h1>Kayla Griffith</h1>
            <p>Award Winning Author</p>
          </div>
        </div>
      </section>

      <section id='homeSection'>
        <div className="containerBig">
          <div className="text">
            <div className='yozuv'>
              New Release
            </div>
            <h2>The Swan Isle <br /> (2035)</h2>
            <p className='hsp'>I'm a paragraph. Click here to add your <br />
              own text and edit me. It’s easy. Just click <br />
              “Edit Text” or double click me to add <br />
              your own content and make changes to <br />
              the font. I’m a great place for you to tell <br />
              a story and let your users know a little <br />
              more about you.</p>
            <p id='hsp2'>Order Now</p>
            <div id='threeh'>
              <div className="hov1"><a href="#">Amazon</a></div>
              <div className="hov"><a href="#">Google</a></div>
              <div className="hov"><a href="#">iBooks</a></div>
            </div>
          </div>
          <div className="img">
            <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_481,h_679,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt="" />
          </div>
        </div>
      </section>
      <section id="middleSection">
        <h3>Price & Reviews</h3>
        <div id='pr'>
          <div className="pr1"><h4>''</h4>
            <p className='prp'>
              I'm a paragraph. Click here to add your <br />
              own text and edit me. It’s easy. Just click <br />
              “Edit Text” or double click me to add <br />
              your own content and make changes to <br />
              the font. I’m a great place for you to tell <br />
              a story and let your users know a little <br />
              more about you.
            </p>
            <p className="prp2">
              ‘Swan Isle’ is Griffith's <br />
              best writing yet” The <br />
              Times Book Review
            </p>
            <hr />
          </div>
          <div className="pr1"><h4>''</h4>
            <p className='prp'>
              I'm a paragraph. Click here to add your <br />
              own text and edit me. It’s easy. Just click <br />
              “Edit Text” or double click me to add <br />
              your own content and make changes to <br />
              the font. I’m a great place for you to tell <br />
              a story and let your users know a little <br />
              more about you.
            </p>
            <p className="prp2">
              ‘Swan Isle’ is Griffith's <br />
              best writing yet” The <br />
              Times Book Review
            </p>
            <hr />
          </div>
          <div className="pr1"><h4>''</h4>
            <p className='prp'>
              I'm a paragraph. Click here to add your <br />
              own text and edit me. It’s easy. Just click <br />
              “Edit Text” or double click me to add <br />
              your own content and make changes to <br />
              the font. I’m a great place for you to tell <br />
              a story and let your users know a little <br />
              more about you.
            </p>
            <p className="prp2">
              ‘Swan Isle’ is Griffith's <br />
              best writing yet” The <br />
              Times Book Review
            </p>
            <hr />
          </div>
        </div>
      </section>
      <section id="lowerSection">
        <h1>See Upcoming Appearances</h1>
        <p>I'm a paragraph. Click here to add your own <br /> text and edit me. It's easy.
        </p>
        <div>
          <h2>
            January 18th 2035, The Breakfast Club, Virtual Book Reading <br />
            of Swan Isle, 7PM - 8PM EST
          </h2>
          <div className='join'>Join</div>
        </div>
        <div>
          <h2>
            January 31st 2035, The Good Read Club, Online <br />
            Conversation with Kayla Griffith, 8PM - 9PM EST
          </h2>
          <div className='join'>Join</div>
        </div>
        <div>
          <h2>
            March 2nd 2035, Otto Cafe, Online Book Reading <br />
            With Kayla Griffith, 3PM - 4PM EST
          </h2>
          <div className='join'>Join</div>
        </div>

        <div className='information'>
          <img src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_221,h_221,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg" alt="" />
          <h3>About Kayla Griffith</h3>
          <p>I'm a paragraph. Click here to add your <br />
            own text and edit me. It’s easy. Just click <br />
            “Edit Text” or double click me to add <br />
            your own content and make changes to <br />
            the font. I’m a great place for you to tell <br />
            a story and let your users know a little <br />
            more about you.
          </p>
          <div className='join rm'>Read More</div>
        </div>
      </section>
      <footer className='footer'>
        <p>© 2035 by K.Griffith. Powered and secured by Wix</p>
      </footer>
    </div>
  );
}

export default App;
