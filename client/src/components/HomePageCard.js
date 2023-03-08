import React, {useState} from "react";
import "./styles/HomePageCard.css";
import { Button, Message, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'



function HomePageCard({quote, quoteIndex, setQuoteIndex}) {
    console.log(quoteIndex)
    console.log(quote)
    const [read, setRead] = useState(null);

    return (
        <div className="hpc-wrapper">
            <div className="ui floating message">
                <h2>Daily Inspiration</h2>
                <Message>
                    {read ? null : <h1><u>{quote.author}</u> : <em>{quote.text}</em></h1>}
                </Message>
            </div>
        </div>
    );
}

export default HomePageCard;