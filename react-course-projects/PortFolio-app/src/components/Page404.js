
import React from 'react';
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <span> PAGE NOT FOUND. 404 ERROR.</span>
            <Link to='/'>GO BACK TO HOME PAGE</Link>
        </div>

    )
}

export default Page404;