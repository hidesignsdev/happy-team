export const validate = values => {
    const errors = {};
    //console.log(values);
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 10) {
        errors.firstName = 'Must be 10 characters or less'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length > 10) {
        errors.lastName = 'Must be 10 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = '* Password must be more than 6 characters'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password mismatched';
    }
    return errors
}