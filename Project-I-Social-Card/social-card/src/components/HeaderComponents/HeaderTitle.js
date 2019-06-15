import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
    <a className="HeaderTitle">
        <span>
        <strong className="fullname">Lambda School</strong>
        @
        <b>LambdaSchool</b>
        </span>
    </a>
    );
};

export default HeaderTitle;