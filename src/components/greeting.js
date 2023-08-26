import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchMessage } from '../redux/reducers/greetingSlice';

 export default function Greeting() {
    const dispatch = useDispatch();
    const { greeting } = useSelector(store => store.greeting);

    useEffect(() => {
        dispatch(fetchMessage())
    }, [dispatch]);

    return (
        <>
            <h2>{greeting}</h2>
        </>
    )
}
