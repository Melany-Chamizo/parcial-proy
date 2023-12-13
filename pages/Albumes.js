import React from 'react';
import '../../App.css';
import {Table} from 'react-bootstrap';
import './Tabla.css';

const TablaCanciones =() => {
  return (
    <Table striped bordered hover className="table-custom">
   
      <thead>
        <tr>
          <th>NNumero</th>
          <th>Cancion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>bad guy</td>
        </tr>
        <tr>
          <td>2</td>
          <td>all the good girls go to hell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>watch</td>
        </tr>
        <tr>
          <td>4</td>
          <td>bury a friend</td>
        </tr>
        <tr>
          <td>5</td>
          <td>copycat</td>
        </tr>
        <tr>
          <td>6</td>
          <td>aparty favor</td>
        </tr>
        <tr>
          <td>7</td>
          <td>lovely</td>
        </tr>
        <tr>
          <td>8</td>
          <td>hostage</td>
        </tr>

        <tr>
          <td>9</td>
          <td>ocean eyes</td>
        </tr>
        <tr>
          <td>10</td>
          <td>bellyache</td>
        </tr>
        <tr>
          <td>11</td>
          <td>sex</td>
        </tr>
        <tr>
          <td>12</td>
          <td>bored</td>
        </tr>
        <tr>
          <td>13</td>
          <td>ilomilo</td>
        </tr>
        <tr>
          <td>14</td>
          <td>limbo</td>
        </tr>
        <tr>
          <td>15</td>
          <td>listen</td>
        </tr>
        <tr>
          <td>16</td>
          <td>the hill</td>
        </tr> 
      </tbody>
    </Table>
  );
};
export default TablaCanciones;