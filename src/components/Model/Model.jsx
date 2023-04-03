import React from 'react';

const Model = (props) => {
    // console.log(props.singalData);
    
    const { image_link, description, integrations, features } = props.singalData;
    // console.log(features);
    // {
    //     "0": {},
    //     "0": {},
    //     "0": {}
    // }
    // Object.values
    // [{}, {}, {}];
    // console.log(Object.values(features || {}))
    // console.log(integrations? integrations:'No data.');
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">

                        <div className="card-body border-2 border-error mr-2">
                            <h2 className="card-title">{description ? description : "Data not found"}</h2>

                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-3xl font-bold'>Fetures</h1>
                                    {
                                        Object.values(features || {}).map((value) => (<p>{value.feature_name}</p>))
                                    }
                                </div>
                                <div>
                                    <h1 className='text-3xl font-bold'>Integrations</h1>
                                    {/* {
                                        integrations.map((integration) => (<p>{integration}</p>))
                                    } */}
                                    {
                                        integrations && integrations.map((integration) => (<p>{integration ? integration : "No Data found"}</p>))
                                    }
                                </div>
                            </div>

                        </div>
                        <figure className='w-full'>
                            <img className='w-full h-64' src={image_link && image_link} alt="Album" />
                        </figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Model;