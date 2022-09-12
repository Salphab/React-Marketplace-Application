
import './TopDeals.css';

function TopDeals(props){
    return(
        <div id={props.conid}>
            <header id={props.headerid}>
                <h2>{props.heading}</h2>
                <a href='dfh'>{props.more}</a>
            </header>
        </div>

    )
}
export default TopDeals;
