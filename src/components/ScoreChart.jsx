import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function ScoreChart() {
    return (
        <MDBTable>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Item</th>
                    <th scope='col'>Three of the same</th>
                    <th scope='col'>Two of the same</th>
                    <th scope='col'>Two of the same plus one wild</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <th scope='row'>Wild</th>
                    <td>100</td>
                    <td>10</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <th scope='row'>Star</th>
                    <td>90</td>
                    <td>9</td>
                    <td>18</td>
                </tr>
                <tr>
                    <th scope='row'>Bell</th>
                    <td >80</td>
                    <td>8</td>
                    <td>16</td>
                </tr>
                <tr>
                    <th scope='row'>Sell</th>
                    <td >70</td>
                    <td>7</td>
                    <td>14</td>
                </tr>
                <tr>
                    <th scope='row'>Seven</th>
                    <td >60</td>
                    <td>6</td>
                    <td>12</td>
                </tr>
                <tr>
                    <th scope='row'>Cherry</th>
                    <td >50</td>
                    <td>5</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope='row'>Bar</th>
                    <td >40</td>
                    <td>4</td>
                    <td>8</td>
                </tr>
                <tr>
                    <th scope='row'>King</th>
                    <td >30</td>
                    <td>3</td>
                    <td>6</td>
                </tr>
                <tr>
                    <th scope='row'>Queen</th>
                    <td >20</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
                <tr>
                    <th scope='row'>Jack</th>
                    <td >10</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}