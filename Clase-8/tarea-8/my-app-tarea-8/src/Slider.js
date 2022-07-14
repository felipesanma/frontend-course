import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import "./slider.css";

function Slider() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        console.log('usando useEffect solo una vez');
        fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(data => {
                setContacts(data.results);
                console.log(data.results);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <motion.div className='slider-container'>
            <motion.div className='slider' drag='x'
                dragConstraints={{ right: 0, left: -3000 }} >
                {contacts.map(contact => (
                    <motion.div className='item'>
                        <img src={contact.picture.large} alt="" />
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    );
};



export default Slider;