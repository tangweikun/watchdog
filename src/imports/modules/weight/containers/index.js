import { connect } from 'react-redux'
import { changeValue, saveWeight } from '../actions'
import Component from '../components/index.jsx'

const mapStateToProps = state => ({
	weight: state.weight.value,
})

export default connect(mapStateToProps, { changeValue, saveWeight })(Component)
