import { connect } from 'react-redux'
import { changeValue, saveWeight, getWeight } from '../actions'
import Component from '../components/index.jsx'

const mapStateToProps = state => ({
	weight: state.weight.value,
	formData: state.weight.formData,
})

export default connect(mapStateToProps, { changeValue, saveWeight, getWeight })(Component)
