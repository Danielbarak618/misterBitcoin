import React from 'react'

export default function MovesList({moves}) {
    console.log(moves);
    return (
        <>
            
        <ul className="move-list">
            <li><h1>Your last  moves</h1></li>
            <hr/>
            {moves.map(move => (
                <li key={move.toId}>
                    <div className="to">
                    <p>To:{move.to}</p>
                    </div>
                    <p>At:{new Date(move.at).toLocaleString()}</p>
                    <p>Amount:{move.amount}</p>
                    <hr/>
                </li>
                
            ))}
        </ul>
    </>
    )
}
