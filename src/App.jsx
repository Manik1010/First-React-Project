import React from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Heder from './components/Header/Heder';

const App = () => {
  return (
    // <div>
    //   <button className="btn">Button</button>
    //   <button className="btn btn-primary">Button</button>
    //   <button className="btn btn-secondary">Button</button>
      
    // </div>
    <>
      <Heder></Heder>
      {/* <Button>Sort By Date</Button> */}
      {/* <Button>See More</Button> */}
      <Card></Card>
      
    </>
      //   <div className='bg-white'>
      //   <Heder></Heder>
      //   <Button>Sort By Date</Button>
      //   {/* <Button>See More</Button> */}
      //   <Card></Card>
      // </div>
  );
};

export default App;