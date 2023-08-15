import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button({onClick, children}){
    const navigate = useNavigate();
    return(
        <button class="btn menu-btn" onClick={() => navigate("create")}>{children}</button>
    )
}

export default function HomePage(){
    return(
        <>
            <div class="main-cntr">
                <h1 class="main-title">Flashcards</h1>
                <Button>Study</Button>
                <Button>Create</Button>
            </div>
        </>
    );
}