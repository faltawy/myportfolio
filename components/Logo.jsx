import React from 'react'
import { GenIcon } from 'react-icons';
import File from '../assets/logo.svg';

export default function Logo(props) {
    console.log(File);
    return (
    <img src={File.src} alt="" />
        )
};