import React from 'react'

function Alert(props) {
    return (
        <div>
            <div className="alert alert-primary" role="alert" style={{ marginTop: '70px' }}>
                {props.message}
            </div>
        </div>
    )
}

export default Alert
