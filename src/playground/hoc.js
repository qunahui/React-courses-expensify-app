import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Title</h1>
        <p>Info: {props.info} </p>
    </div>
)

const withAdminWwarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>Please log in.</p>
                )}
        </div>
    );
};

const AdminInfo = withAdminWwarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are details" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are details" />, document.getElementById("app"));