import React from 'react';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import Card from './components/Card';

function App() {

  return (
    // <div className='bg-info bgs' style={{ height: `${window.innerHeight}px` }}>
    <div className='bg-info bgs' >
      <div className='container-fluid'>
        <MDBRow className='justify-content-center'>
          <MDBCol size='5' className='mt-5 px-0'>
            <Card />
          </MDBCol>
        </MDBRow>
      </div>
    </ div>
  );
}

export default App;
