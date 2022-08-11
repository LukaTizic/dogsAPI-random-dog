import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const url = "https://dog.ceo/api/breeds/image/random";

const Hero = () => {
  const [data, setData] = useState(null);
  const [dogs, setDogs] = useState([]);

  const deleteAll = () => {
    setDogs([]);
  };

  const getDog = async () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setData(response.data.message);
    });
  };

  useEffect(() => {
    getDog();
  }, []);

  useEffect(() => {
    setDogs((items) => [...items, data]);
  }, [data]);

  return (
    <main>
      <div className='main-container'>
        <div className='section'>
          <h2 className='title'>Random dog</h2>
          <div className='image'>
            <img src={data} alt='' />
          </div>
          <button type='button' className='btn' onClick={getDog}>
            Generate
          </button>
          <button className='btn' type='button' onClick={deleteAll}>
            Delete all
          </button>
        </div>
      </div>
      <section className='dogs'>
        <div className='container'>
          {dogs.slice(2).map((item) => {
            return <img className='image-dog' src={item} alt='' />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Hero;
