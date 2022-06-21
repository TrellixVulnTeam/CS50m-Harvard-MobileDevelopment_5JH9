// @flow 
import React, {useState, useEffect, MouseEvent} from 'react';
import axios from 'axios';

type Props = {};

interface RoomModel{
    name: string;
}

let countRender = 0;

export const Room = (props: Props) => {
    const [rooms, setRooms] = useState<RoomModel[]>([]);

    console.log(++countRender);

    useEffect(() => {
//        (async () => {
//            const response = await axios.get('http://localhost:3000/rooms');
//            setRooms(response.data);
//        })();
        axios.get("http://localhost:3000/rooms").then((response) => {
            setRooms(response.data);
        });
        return () => {
            // destruir coisas aqui
        }
    }, []); //representa a primeira renderização

    const clicou = function clicou(event: MouseEvent<HTMLLIElement>) {
        console.log(event);
    }

    return (
        <div>
            <h1>Salas</h1>
            <ul>
                {rooms.map((room) => (
                    <li onClick={clicou}>{room.name}</li>
                ))}
            </ul>
        </div>
    ); 
};