const FormControls = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props)=> {
    const { input, meta, child, ...restProps } = props;
    return <FormControls {...props}><textarea {...input} {...restProps} /></FormControls>
}


export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControls  {...props}><input {...input} {...restProps} /></FormControls>
}

