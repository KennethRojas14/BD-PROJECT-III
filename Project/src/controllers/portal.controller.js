const { getConnection } = require("../database/connection");
const path = require("path");

//Se la envia la direccion completa del archivo XML a un SP para que con
//esta obtenga los datos del archivo y los procese
const root = async (req, res) => {
  // if (startSimulation()) { res.redirect("Portal"); }

   try {
  //   // Ruta relativa del archivo operacines.xml
  //   const relativeRoute = "../operaciones.xml";
  //   // Unir la ruta relativa con la carpeta actual (__dirname)
  //   const completeRoute = path.join(__dirname, relativeRoute);
  //   //Obtenemos conexion a la base de datos
  //   const pool = await getConnection();
  //   // Llamada al procedimiento almacenado loadXMLData
  //    const result = await pool
  //     .request()
  //     .input("xmlFilePath", completeRoute)
  //     .output("OutResultCode", 0)
  //     .execute("Simulation");
  //   // Cerramos conexion
  //   pool.close();
  //   // Comprobamos el resultado de llamar al procedimieno almacenado
  //   if (result.output.OutResultCode == 0) {
  //     console.log("Simulacion exitosa!!!");
  //   } else {
  //     console.log("Algo salio mal en la simulacion!!?!");
  //   }
   } catch (error) {
  //   console.log("\n\t- ERROR en funcion getPosition\n");
     console.log("\n\t-", error, "\n");
   }
  res.redirect("portal");
};



const portalUser = async (req, res) => {
  res.render("portal", { invoices: [], alertVisibility: false });
};

const CheckNumberPhone = async (req, res) => {
  const number = req.body.SearchNumber;
  console.log("Al menos está entrando...")
  try {
    // Validar los datos de entrada   
    if (!number) {
      res.status(400).send('El número de teléfono es obligatorios.');
      return;
    }
    // Obtener una conexión desde el pool de conexiones
    const pool = await getConnection();
    var invoices_ = '';
    console.log("Al menos está entrando...x1")

    // Llamar al procedimiento almacenado 
    console.log("Al menos está entrando...x2")

    invoices_ = await pool
      .request()
      .input("InPhoneNumber", number)
      .output("OutResultCode", 0)
      .execute("CheckPhoneNumber");

    // Verificar si el procedimiento almacenado se ejecutó correctamente
  if (invoices_.output.OutResultCode == 0) {
    // Renderizar la vista "listEmployees" con los datos obtenidos de la consulta 
    console.log("Prueba: ",invoices_)
    res.render("portal", { invoices: invoices_.recordset, alertVisibility: false });
  }
  else {
    // Manejar el caso en el que el procedimiento almacenado no se ejecutó correctamente
    console.log("Variable salida:", invoices_.output.OutResultCode);
  }
  // Cerrar la conexión al pool
  pool.close();
      
  } catch (error) {
    // Manejar errores internos del servidor
    res.status(500);
    res.send(error.message);
  }
};

module.exports = { root, portalUser, CheckNumberPhone };
//   try {
//     // Ruta relativa del archivo que quieres obtener
//     const relativeRoute = "../../catalogos.xml";
//     // Unir la ruta relativa con la carpeta actual (__dirname)
//     const completeRoute = path.join(__dirname, relativeRoute);
  
//     // Obtener una conexión desde el pool de conexiones
//     const pool = await getConnection();
  
//     // Llamada al procedimiento almacenado loadXMLData
//     const result = await pool.request()
//       .input("xmlFilePath", completeRoute)
//       .output("OutResultCode", 0)
//       .execute("UploadCatalogs");
  
//     if (result.output.OutResultCode == 0) {
//       console.log("Se cargaron los datos :D"); 
//     } else {
//       console.log("Algo salio mal con la carga de datos :O"); 
//     }
//     // Cerrar la conexión al pool
//     pool.close();
//   } catch (error) {
//     // Manejar errores internos del servidor
//     console.log(error.message);
//   }
// }
//module.exports = { root };
