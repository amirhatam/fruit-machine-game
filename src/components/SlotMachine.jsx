import React, { useRef, useState } from 'react'
import '../assets/styles/SlotMachine.css'
import {
    MDBBtn, MDBIcon,
} from 'mdb-react-ui-kit';

export default function SlotMachine() {
    const [score, setScore] = useState([0])

    const [fruit1, setFruit1] = useState("?");
    const [fruit2, setFruit2] = useState("?");
    const [fruit3, setFruit3] = useState("?");
    const [rolling, setRolling] = useState(false);
    let slotRef = [useRef(null), useRef(null), useRef(null)];
    const icons = [
        '🎃',
        '👸',
        '🤴',
        '🍻',
        '🍒',
        '7️⃣',
        '🐚',
        '🔔',
        '⭐️',
        '🍀',
    ];



    // to trigger roolling and maintain state
    const roll = () => {
        setRolling(true);
        setTimeout(() => {
            setRolling(false);
        }, 700);

        let spins = []

        // looping through all 3 slots to start rolling
        slotRef.forEach((slot, i) => {
            // this will trigger rolling effect
            const selected = triggerSlotRotation(slot.current);

            spins.push(selected[1] + 1)

            if (i + 1 == 1)
                setFruit1(selected[0]);
            else if (i + 1 == 2)
                setFruit2(selected[0]);
            else
                setFruit3(selected[0]);


        });

        //Calculate game score
        let [a, b, c] = spins.sort((a, b) => a - b);

        if (a === b && b === c) {
            return setScore(a * 10)
        }

        if (a === b) {
            if (c === 10) {
                return setScore(a * 2)
            } else { return setScore(a) }
        }

        if (b === c) {
            return setScore(b)
        } else { return setScore(0) }

    };

    // this will create a rolling effect and return random selected option
    const triggerSlotRotation = ref => {
        function setTop(top) {
            ref.style.top = `${top}px`;
        }
        let options = ref.children;

        let randomOption = Math.floor(
            // Math.random() * icons.length
            Math.ceil(Math.random() * 10) - 1
        );

        let choosenOption = options[randomOption];

        setTop(-choosenOption.offsetTop + 2);

        return [icons[randomOption], randomOption]
    };

    return (
        <div className="container">
            <div className="SlotMachine row justify-content-center py-4">
                <div className="slot col-3">
                    <section>
                        <div className="container-slot" ref={slotRef[0]}>
                            {icons.map((fruit, i) => (
                                <div key={i}>
                                    <span>{fruit1}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="slot col-3">
                    <section>
                        <div className="container-slot" ref={slotRef[1]}>
                            {icons.map((fruit, i) => (
                                <div key={i}>
                                    <span>{fruit2}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="slot col-3">
                    <section>
                        <div className="container-slot" ref={slotRef[2]}>
                            {icons.map((fruit, i) => (
                                <div key={i}>
                                    <span>{fruit3}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <div className="row justify-content-center score">

                <div className='col-2'>
                    <h1 className='text-center fw-lighter blinkingText' >
                        <MDBIcon fas icon="coins" className={!rolling ? "roll rolling" : "roll"} />  {score}
                    </h1>
                </div>

                <div className='col-3 text-center mt-2'>
                    <MDBBtn
                        //Warning: Expected `onClick` listener to be a function, instead got `false`
                        // onClick={!rolling && roll}
                        onClick={!rolling ? roll : undefined}
                        disabled={rolling}>
                        {rolling ? "Rolling..." : "ROLL"}
                    </MDBBtn>
                </div>
            </div>
        </div>
    );
}
