import {Paragraph} from './Notification.slyled'
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return (
        <Paragraph>{message}</Paragraph>
    )   
}
Notification.propTypes = {
    message:PropTypes.string.isRequired,
}