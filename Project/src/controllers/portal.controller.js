const { getConnection } = require("../database/connection");
const path = require("path");

//Se la envia la direccion completa del archivo XML a un SP para que con
//esta obtenga los datos del archivo y los procese
const root = async (req, res) => {
  // if (startSimulation()) { res.redirect("Portal"); }

  try {
    // Ruta relativa del archivo operacines.xml
    const relativeRoute = "../operaciones.xml";
    // Unir la ruta relativa con la carpeta actual (__dirname)
    const completeRoute = path.join(__dirname, relativeRoute);
    //Obtenemos conexion a la base de datos
    const pool = await getConnection();
    // Llamada al procedimiento almacenado loadXMLData
    const result = await pool
      .request()
      .input("xmlFilePath", completeRoute)
      .output("OutResultCode", 0)
      .execute("Simulation");
    // Cerramos conexion
    pool.close();
    // Comprobamos el resultado de llamar al procedimieno almacenado
    if (result.output.OutResultCode == 0) {
      console.log("Simulacion exitosa!!!");
    } else {
      console.log("Algo salio mal en la simulacion!!?!");
    }
  } catch (error) {
    console.log("\n\t- ERROR en funcion getPosition\n");
    console.log("\n\t-", error, "\n");
  }
  res.redirect("Portal");
};

const portal = async (req, res) => {
  res.render("mainPortal");
};

module.exports = { root, portal };
