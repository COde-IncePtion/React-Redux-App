import Loader from 'react-loader-spinner';
import React from 'react';

let AppLoader = () => (
        <div className={"spinner"}>
            <Loader
                type="Puff"
                color="#00BFFF"
                height="100"
                width="100"
            />
        </div>
);

export default AppLoader;
