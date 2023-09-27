import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(emojiData) {
    return (
        <Card
            key={emojiData.id}
            emoji={emojiData.emoji}
            name={emojiData.name}
            meaning={emojiData.meaning}
        />
    )
};


function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(createCard)}
            </dl>
        </div>
    );
}

export default App;
