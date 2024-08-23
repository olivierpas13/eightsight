import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import db from "../../data/db";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "city",
    headerName: "Ciudad",
    width: 200,
    editable: false,
  },
  {
    field: "speed_down",
    headerName: "Velocidad de descarga",
    width: 200,
    type: "number",

    editable: false,
  },
  {
    field: "speed_up",
    headerName: "Velocidad de subida",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "technology",
    headerName: "Tecnología",
    width: 200,
    editable: false,
  },
  {
    field: "income_lmi",
    headerName: "Ingreso LMI",
    width: 200,
    editable: false,
  },
  {
    field: "internet_perc_broadband",
    headerName: "Porcentaje banda ancha",
    width: 200,
    editable: false,
  },
];

const rows = db;

export default function DataGridDemo() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
