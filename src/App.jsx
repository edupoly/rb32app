import Header from './components/Header';
import Footer from './components/Footer'
import MainArea from './components/MainArea';
import DetailsContext from './PersonalDetails';
function App() {
  var myDetails ={firstname:'praveen',imgurl:"https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/1787281-large.jpg"}
  return (
    <DetailsContext.Provider value={myDetails}>
      <div>
        <Header></Header>
        <MainArea></MainArea>
        <Footer></Footer>
      </div>
    </DetailsContext.Provider>
  );
}

export default App;
