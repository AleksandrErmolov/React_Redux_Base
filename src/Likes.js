import { connect } from 'react-redux'
import { decrementLikes, incrementLikes } from './redux/actions'


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
    const { likesReducer } = state;

    return {
        likes: likesReducer.likes
    }
}



function mapDispatchToProps(dispatch) {
    return {
        onIcrementLikes: () =>  dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);

