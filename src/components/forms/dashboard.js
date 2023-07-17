import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  Paper,
  TableBody,
  TableRow,
  TableContainer,
  TableCell,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate();



  return (
    <div>
      <h1>Search For characters</h1>
      <TextField
        label="Search by name"
        variant="filled"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        margin="normal"
      />
      <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCharacters.map((character) => (
            <TableRow key={character.id}>
              <TableCell>{character.name}</TableCell>
              <TableCell>{character.status}</TableCell>
              <TableCell>{character.species}</TableCell>
              <TableCell>{character.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;