import React, { useEffect, useState } from 'react';
import SingalCard from '../SingalCard/SingalCard';
import Button from '../Button/Button';
import Model from '../Model/Model';

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);
    // console.log(uniqueId);
    const [singalData, setSingalData] = useState({});
    // console.log(singalData);

    const handelShow = () => {
        setShowAll(true);
    }

    const handelSort = () =>{
        console.log("Manik")
        const sortedData = data.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in);
        });
        // setData(sortedData);
        setData([...sortedData]);
        // This is baching .... 
        // setData([...data, sortedData]);

    };

    useEffect(() => {
        // console.log("Allha")
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            // .then((data) => console.log(data));
            .then((data) => setSingalData(data.data));
    }, [uniqueId]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
            const datas = await res.json();
            // console.log(data.data.tools);
            setData(datas.data.tools);
        }
        loadData();
    }, []);



    return (
        <>
            {/* <Button>Sort By Date</Button> */}
            <span onClick={handelSort}>
                <Button>Sort By Date</Button>
            </span>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
                {
                    // data.map((singalData) => {
                    //     // console.log(singalData);
                    //     // return <SingalCard />
                    //     return <SingalCard singalData={singalData} key={singalData.id}/>
                    // })


                    // data.slice(0,6).map((singalData) => {
                    //     return <SingalCard singalData={singalData} key={singalData.id}/>
                    // })

                    // data.slice(0, showAll ? 12 : 6).map((singalData) => {
                    //     return <SingalCard singalData={singalData} key={singalData.id} />
                    // })

                    data.slice(0, showAll ? 12 : 6).map((singalData) => {
                        return <SingalCard singalData={singalData} key={singalData.id} setUniqueId={setUniqueId} />
                    })
                }

            </div>
            {/* <Button>See More</Button> */}

            {/* <p onClick={handelShow}>
                <Button>See More</Button>
            </p> */}

            {/* p tage is in line text  */}
            {/* <p onClick={handelShow} style={{display: 'inline-block'}}>
                <Button>See More</Button>
            </p> */}

            {/* <span onClick={handelShow}>
                <Button>See More</Button>
            </span> */}

            {/* Remove button after click .........................  */}
            {
                !showAll && (<span onClick={handelShow}>
                    <Button>See More</Button>
                </span>)
            }
            {/* <Model /> */}
            {/* Pass singal data of model ..............  */}
            <Model singalData={singalData} />
        </>
    );
};

export default Card;