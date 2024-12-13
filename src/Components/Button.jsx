import PropTypes from 'prop-types'

const Button = ({label}) => {
    return (
        <button 
        className='bg-green-700 py-2 px-8 rounded-xl shadow-sm active:scale-95 border-none text-xl text-white font-medium'
        >{label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Add',
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Button