import PropTypes from 'prop-types'

const Logout = ({color, text, onClick}) => {

  return(
    <button onClick = {onClick} style = {{ backgroundColor: color }} 
    className='btn'>
    {text}
    </button>
  ) 
}

Logout.defaultProps = {
    color: 'green',
    text: "Monkey"
}

Logout.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Logout