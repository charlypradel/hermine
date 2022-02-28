import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Landingpage extends Component {

    render() {
        return (
            <div className='welcome_page'>
                <div className='start_text'>
                    <b>Hello my dear!<br />So nice of you to pay us a visit.<br />
                        Granny will take good care of you and your friends.<br /><br />
                        In which mood are you today?</b>
                </div>
                <div className='select_category'>
                    <Link to={{ pathname: "/mixItUp" }} className='category_item'> Mix it up </Link>
                    <Link to={{ pathname: "/neverever" }} className='category_item'> Granny never did ... &#128124; </Link>
                    <Link to={{ pathname: "/todos" }} className='category_item'> Get your hands dirty &#128521;</Link>
                    <Link to={{ pathname: "/sexy" }} className='category_item'> Don't be a softie &#128520; </Link>
                    <Link to={{ pathname: "/ringOfFire" }} className='category_item'> Ring of Fire &#128293; </Link>
                    <Link to={{ pathname: "/contribute" }} className='category_item' style={{ backgroundColor: '#FE6A16' }}> Contribute a task/question </Link>
                </div>
            </div>

        )
    }
}
export default Landingpage;