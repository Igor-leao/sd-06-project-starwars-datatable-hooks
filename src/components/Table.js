import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../App.css';

function Table() {
  const tableHeader = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];
  const {
    filters: { filterByName: { name },
    filterByNumericValues },
    getPlanetsData,
    data } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsData();
  }, []);

  // faria uma função para ver as comparações e botar meus IFś e aí chamaria essa função dentro do meu handleClick?
  // mas se eu fizer função no table, como vou passar isso para meu click (filho para pai)
  // e como incluiria isso no meu render do table?
  // por estar armazenado um array eu teria que fazer um map ou forEach pra percorrer o array.
  // consigo fazer um forEach ou map em cima do meu 'filterByNumericValues' 

  //dicas ícaro: 
  // cada caso 1 filtro
  // minha função tem que ter uma variável para guardar o resultado dos filtros
  // lembrara q é um array e preciso percorrer ele

  //criar função separada com filtro - usando forEach ou map.

  //param faz uma alusão ao meu dats
  const getFilterNumber = (param) => {
    const { column, comparison, value } = filterByNumericValues;
    console.log(column)
    console.log(comparison)
    console.log(value)
    return param
  }

  return (
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          { tableHeader.map((header) => <th key={ header } scope="col">{ header }</th>) }
        </tr>
      </thead>
      <tbody>
        { getFilterNumber(data).filter((dataPlanets) => (
          dataPlanets.name.toLowerCase().includes(name.toString().toLowerCase())
        )).map((dataPlanets) => (
          <tr key={ dataPlanets.name }>
            <td>{ dataPlanets.name }</td>
            <td>{ dataPlanets.rotation_period }</td>
            <td>{ dataPlanets.orbital_period }</td>
            <td>{ dataPlanets.diameter }</td>
            <td>{ dataPlanets.climate }</td>
            <td>{ dataPlanets.gravity }</td>
            <td>{ dataPlanets.terrain }</td>
            <td>{ dataPlanets.surface_water }</td>
            <td>{ dataPlanets.population }</td>
            <td>{ dataPlanets.films }</td>
            <td>{ dataPlanets.created }</td>
            <td>{ dataPlanets.edited }</td>
            <td>{ dataPlanets.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
