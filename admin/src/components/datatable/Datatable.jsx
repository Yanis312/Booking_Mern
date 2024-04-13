import "./datatable.scss"; // Importe les styles SCSS pour le composant Datatable
import { DataGrid } from "@mui/x-data-grid"; // Importe le composant DataGrid de MUI X Data Grid
import { userColumns, userRows } from "../../datatablesource"; // Importe les colonnes et les lignes de données de userColumns et userRows (à adapter)
import { Link, useLocation } from "react-router-dom"; // Importe Link et useLocation de react-router-dom
import { useEffect, useState } from "react"; // Importe useEffect et useState de React
import useFetch from "../../hooks/useFetch"; // Importe le hook useFetch personnalisé
import axios from "axios"; // Importe la librairie axios

const Datatable = ({ columns }) => { // Le composant Datatable prend des colonnes en argument
  const location = useLocation(); // Récupère l'emplacement actuel
  const path = location.pathname.split("/")[1]; // Extrait le chemin d'accès à partir de l'URL

  const [list, setList] = useState([]); // État pour stocker la liste des données
  const { data, loading, error } = useFetch(`/${path}`); // Utilise le hook useFetch pour récupérer les données

  useEffect(() => {
    setList(data); // Met à jour la liste des données lorsque data change
  }, [data]);

  const handleDelete = async (id) => { // Fonction pour supprimer un élément
    try {
      await axios.delete(`/${path}/${id}`); // Supprime l'élément de l'API
      setList(list.filter((item) => item._id !== id)); // Filtre la liste locale pour supprimer l'élément visuellement
    } catch (err) {
      // Gérer les erreurs de suppression (facultatif)
    }
  };

  const actionColumn = [ // Colonne d'action personnalisée
    {
      field: "action", // Nom du champ
      headerName: "Action", // Nom d'en-tête de la colonne
      width: 200, // Largeur de la colonne
      renderCell: (params) => { // Fonction pour rendre le contenu de la cellule
        return (
          <div className="cellAction"> {/* Conteneur pour les actions */}
            <Link to="/users/test" style={{ textDecoration: "none" }}> {/* Lien vers la page de visualisation */}
              <div className="viewButton">Voir</div> {/* Texte du bouton */}
            </Link>
            <div // Bouton de suppression
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Supprimer
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable"> {/* Conteneur principal du Datatable */}
      <div className="datatableTitle"> {/* Titre du tableau */}
        {path} {/* Affiche le chemin d'accès actuel */}
        <Link to={`/${path}/new`} className="link"> {/* Lien pour ajouter un nouvel élément */}
          Ajouter un nouvel élément
        </Link>
      </div>
      <DataGrid // Composant DataGrid de MUI pour afficher les données
        className="datagrid" // Classe CSS pour le style
        rows={list} // Données à afficher (liste)
        columns={columns.concat(actionColumn)} // Colonnes à afficher (concaténation des colonnes fournies et la colonne d'action)
        pageSize={9} // Nombre d'éléments par page
        rowsPerPageOptions={[9]} // Options de nombre d'éléments par page (fixé à 9 ici)
        checkboxSelection // Option pour la sélection de cases à cocher
        getRowId={(row) => row._id} // Fonction pour identifier chaque ligne par son ID
      />
    </div>
  );
};

export default Datatable;
