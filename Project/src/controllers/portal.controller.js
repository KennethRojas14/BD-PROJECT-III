const { getConnection } = require("../database/connection");
const path = require("path"); 


//Se la envia la direccion completa del archivo XML a un SP para que con 
//esta obtenga los datos del archivo y los procese
const root = async (req, res) => { 
  res.render("mainPortal");
}

module.exports = { root };
