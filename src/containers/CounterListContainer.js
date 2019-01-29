import { connect } from 'react-redux'
import CounterList from '../components/CounterList'
import * as actions from '../actions'
import getRandomColor from '../lib/getRandomColor'

const mapStateToProps = state => ({ counters: state.counters })

const mapDispatchToProps = dispatch => ({
    onIncrement: index => dispatch(actions.increment(index)),
    onDecrement: index => dispatch(actions.decrement(index)),
    onSetColor: index =>
        dispatch(actions.setColor({ index, color: getRandomColor() }))
})

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList)

export default CounterListContainer
