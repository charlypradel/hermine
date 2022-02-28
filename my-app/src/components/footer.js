import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <div className='foot'>
                <Link className="Link" to="/">Granny Hermine</Link>
                <Link className="Link" to="/imprint">Imprint</Link>
                <Link className="Link" to="/contact">Contact</Link>
            </div>
        )
    }
}

export default Footer;
