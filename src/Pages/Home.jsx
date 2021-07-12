import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-3 col-md-1"></div>
                <div className="col-6 col-md-10 mt-md-5 mt-3">
                    <div className="card" >
                        <img src="https://www.jotform.com/blog/wp-content/uploads/2017/01/react-js.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Welcome to react demo app</h5>
                            <p className="card-text">This app is built for STEM research project</p>

                        </div>
                    </div>
                </div>
                <div className="col-3 col-md-1"></div>
            </div>
        </div>

    );
}

export default Home
