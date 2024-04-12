import "./datatable.scss"; // Importe les styles CSS spécifiques à cette composante depuis un fichier datatable.scss
import { DataGrid } from "@mui/x-data-grid"; // Importe la composante DataGrid de la bibliothèque MUI pour afficher la table de données
import { userColumns, userRows } from "../../datatablesource"; // Importe les colonnes et les lignes de données à afficher dans la table
import { Link, useLocation } from "react-router-dom"; // Importe les composantes Link et useLocation de react-router-dom pour la navigation
import { useEffect, useState } from "react"; // Importe les hooks useEffect et useState de React pour gérer l'état et les effets
import useFetch from "../../hooks/useFetch"; // Importe le hook useFetch pour effectuer des requêtes HTTP
import axios from "axios"; // Importe axios pour effectuer des requêtes HTTP

const Datatable = ({ columns }) => { // Définit la composante Datatable qui prend une propriété : columns
  const location = useLocation(); // Récupère l'objet de localisation actuel
  const path = location.pathname.split("/")[1]; // Récupère le chemin actuel en utilisant le chemin de l'URL
  const [list, setList] = useState([]); // Initialise l'état list pour stocker les données de la table
  const { data, loading, error } = useFetch(`/${path}`); // Utilise le hook useFetch pour récupérer les données à partir de l'API

  useEffect(() => { // Effet qui se déclenche lorsque les données sont mises à jour
    setList(data); // Met à jour l'état list avec les données récupérées
  }, [data]); // Déclenche l'effet lorsque les données changent

  const handleDelete = async (id) => { // Fonction pour gérer la suppression d'une entrée
    try {
      await axios.delete(`/${path}/${id}`); // Envoie une requête DELETE à l'API pour supprimer l'entrée avec l'ID spécifié
      setList(list.filter((item) => item._id !== id)); // Met à jour l'état list en supprimant l'entrée avec l'ID spécifié
    } catch (err) {} // Gère les erreurs éventuelles
  };

  const actionColumn = [ // Colonnes d'action pour la table
    {
      field: "action", // Champ de la colonne
      headerName: "Action", // Nom de la colonne
      width: 200, // Largeur de la colonne
      renderCell: (params) => { // Fonction de rendu pour chaque cellule de la colonne
        return (
          <div className="cellAction"> // Conteneur pour les actions
            <Link to="/users/test" style={{ textDecoration: "none" }}> // Lien pour voir les détails de l'entrée
              <div className="viewButton">View</div> // Bouton pour voir
            </Link>
            <div // Bouton pour supprimer
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)} // Gère la suppression au clic
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable"> // Conteneur principal de la table
      <div className="datatableTitle">
        {path} // Titre de la table (nom du chemin actuel)
        <Link to={`/${path}/new`} className="link"> // Lien pour ajouter une nouvelle entrée
          Add New
        </Link>
      </div>
      <DataGrid // Composante DataGrid pour afficher la table de données
        className="datagrid"
        rows={list} // Lignes de données à afficher
        columns={columns.concat(actionColumn)} // Colonnes à afficher (y compris les colonnes d'action)
        pageSize={9} // Nombre de lignes par page
        rowsPerPageOptions={[9]} // Options pour le nombre de lignes par page
        checkboxSelection // Option de sélection des cases à cocher
        getRowId={(row) => row._id} // Fonction pour obtenir l'ID de chaque ligne
      />
    </div>
  );
};

export default Datatable; // Exporte la composante Datatable pour pouvoir l'utiliser dans d'autres composantes
