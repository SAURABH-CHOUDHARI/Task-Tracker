import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='flex items-center justify-between py-5 px-10'>
            <h1 className='text-4xl font-bold text-zinc-800'>{title}</h1>
            <Button/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header