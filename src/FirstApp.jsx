import PropTypes from 'prop-types'; // Para definir el tipo a la properties

export const FirstApp = ({title, subtitle, name}) => {


    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{ subtitle}</p>
            <p>{ subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subtitle: "No hay subtitle",
    name: "Daniela"
}
