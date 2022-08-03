import React, { useState } from 'react';
import {
    MDBAccordion,
    MDBAccordionItem,
    MDBCard,
    MDBCardImage,
    MDBCollapse,
    MDBRipple,
} from 'mdb-react-ui-kit';

import SlotMachine from './SlotMachine';
import ScoreChart from './ScoreChart';

export default function Card() {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow)


    return (
        <MDBCard className='my-5'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/fruit.jpg' fluid alt='...' />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>

            <h1 className='title text-center mt-3'>CASINO SLOT</h1>

            <SlotMachine />

            <MDBAccordion >
                <MDBCollapse show={showShow}>
                    <ScoreChart />
                </MDBCollapse>

                <MDBAccordionItem onClick={toggleShow} headerTitle='SCORE  CHART' className=''>
                </MDBAccordionItem>

            </MDBAccordion>

        </MDBCard >
    );
}
