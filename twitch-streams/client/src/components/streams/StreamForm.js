import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";


const StreamForm = props => {
    const dispatch = useDispatch();

    const onSubmit = formValues => {
       props.onSubmit(formValues);
    };

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
            <Field name="title" component={renderInput} label="Enter title" />
            <Field name="description" component={renderInput} label="Enter description" />
            <button className="ui button primary">Submit</button>
        </form>
    );
};

// const renderInput = (formProps) => {
//     console.log(formProps);

//     return (
//         <input
//             onChange={formProps.input.onChange}
//             value={formProps.input.value}
//         ></input>
//     );
// }


const renderInput = ({ input, label, meta }) => {
    return (
        <div className="field">
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {renderError(meta)}
        </div>
    );
};

const renderError = ({ touched, error }) => {
    if (touched && error) {
        return (<div className="ui error message">
            <div className="header">{error}</div>
        </div>);
    }
};
const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Title field is empty'
    };

    if (!formValues.description) {
        errors.description = 'Description field is empty'
    };

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);