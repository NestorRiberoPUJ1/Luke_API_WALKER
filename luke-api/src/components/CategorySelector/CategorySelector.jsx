import React, { useState, useEffect } from "react";
import axios from 'axios';

const CategorySelector = () => {

    const [categories, setCateories] = useState([]);
    const [category, setCategory] = useState("");
    const [id, setId] = useState(0);

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {

                let list = Object.entries(response.data);
                let cat = [];
                list.forEach(element => {
                    cat.push(element[0]);
                });

                setCateories([...cat]);
                setCategory(cat[0]);
            })
    }, [])


    const searchAPI = (e) => {
        e.preventDefault();
        let route = "https://swapi.dev/api/";

        if (id !== 0 && id !== undefined && category !== undefined) {

            route += category + "/" + id;
            axios.get(route)
                .then(response => {
                    console.log(response.data);
                    let list = Object.entries(response.data);
                    list.splice(5);
                    console.log(list);
                    setCharacter(list);
                })

        }


    }

    return (

        <div>
            <form onSubmit={(e) => searchAPI(e)} className="mt-4 row align-items-center">

                <div className="col-5">
                    <label>Category:</label>
                    <select className="form-control" onChange={(e) => setCategory(e.target.value)}>
                        {
                            categories.map((item, index) => {
                                return (
                                    <option key={index + item} value={item}>{item}</option>
                                );
                            })
                        }
                    </select>
                </div>

                <div className="col-5">
                    <label>Id</label>
                    <input type="number" className="form-control" onChange={(e) => setId(e.target.value)} />
                </div>

                <div className="col-2">
                    <br />
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>

            </form>

            <div className="mt-4">

                {
                    character.map((item, index) => {
                        return (
                            <h2 key={index} >-{item[1]}</h2>

                        );
                    })
                }
            </div>
        </div>

    );

}

export default CategorySelector;