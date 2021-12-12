import { connect } from 'react-redux'


function Likes(props) {
    console.log('props:', props, props.likes)

    return (
        <div className="button-controls">
            <button onClick={props.onIcrementLikes}>🖤 {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}


function mapStateToProps(state) {
    console.log('mapStateToProps>', state)
    return {
        likes: state.likes
    }
}



function mapDispatchToProps(dispatch) {
    return {
        onIcrementLikes: () => {
            console.log('click')
            const action = { type: "INCREMENT" }
            dispatch(action)
        },

 onDecrementLikes: () => {
            console.log('click')
            const action = { type: "DECREMENT" }
            dispatch(action)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);

