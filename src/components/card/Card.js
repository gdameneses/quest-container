import './card.scss'
import { CardImage } from './CardImage.js'
import { CardTitle } from './CardTitle.js'
import { CardText } from './CardText.js'
import { CardAction } from './CardAction.js'
import { CardControl } from './CardControl.js'

const Card = ({props}) => {
    return (
        <div className="card card--h-100 card--shadow-purple">
            <div className="card__content">
                {props.logo && <CardImage src={props.logo} />}
                <div className="card__body">
                    {props.title && <CardTitle content={props.title}/>}
                    {props.text && <CardText textProps={props.text}/>}
                </div>
                {props.control && <CardControl controlProps={props.control}/>}
                {props.action && <CardAction actionProps={props.action}/>}
            </div>
        </div>
    )
}

export { Card };