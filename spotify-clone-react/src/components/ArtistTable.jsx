import React from 'react'
import { Table } from 'react-bootstrap';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableData from './TableData';

export default function ArtistTable({tracklistData}) {
    console.log(tracklistData)
    return (
        <Table className='border-0 ms-5'>
          <TableHeader>
            <TableRow>
                <TableHead innerText="Titolo"/>
                <TableHead innerText="Artista"/>
                <TableHead innerText="Album"/>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tracklistData && tracklistData.data.map((track, index) => (
                <TableRow>
                    <TableData innerText={track.title}/>
                    <TableData innerText={track.artist.name}/>
                    <TableData innerText={track.album.title}/>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      );
}
