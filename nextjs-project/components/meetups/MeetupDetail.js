import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.tite}/>
            <h1>{props.title}</h1>
            <address>{props.addres}</address>
            <p>{props.description}</p>
        </section>
    )
}

export default MeetupDetail;