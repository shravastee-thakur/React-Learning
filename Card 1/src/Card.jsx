function Card(props) {
    return(
        <div key={props.id} className='card'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;