const { getConnection } = require("../database/connection");
const path = require("path");


const checkAccountState = async (req, res) => {
  const companyName = req.params.name; 
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
  console.log("Entra al primero")
  console.log("Nombre compañia: ", companyName)

  // res.redirect("accountStates");
};



const AcStateRender = async (req, res) => {
  console.log("Entra al segundo")
  const companyName = req.params.Name; 
  console.log("Nombre compañia: ", companyName)
  // res.render("accountStates", { accountStates: [], alertVisibility: false });
  try {
    
    // Obtener una conexión desde el pool de conexiones
    const pool = await getConnection();
    var accountStates_ = '';
    console.log("Al menos está entrando...x1")

    // Llamar al procedimiento almacenado 
    console.log("Al menos está entrando...x2")

    accountStates_ = await pool
      .request()
      .input("InOperator", companyName)
      .output("OutResultCode", 0)
      .execute("SeeAccounState");

    // Verificar si el procedimiento almacenado se ejecutó correctamente
  if (accountStates_.output.OutResultCode == 0) {
    // Renderizar la vista "listEmployees" con los datos obtenidos de la consulta 
    // console.log("Prueba: ", accountStates_)
    res.render("accountStates", { accountStates: accountStates_.recordset });
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

const ListAccountState = async (req, res) => {
  // console.log("Entra al tercero")

  // const name = "Empresa Y";
  // const companyName = req.params.Name;
  // try {
    
  //   // Obtener una conexión desde el pool de conexiones
  //   const pool = await getConnection();
  //   var accountStates_ = '';
  //   console.log("Al menos está entrando...x1")

  //   // Llamar al procedimiento almacenado 
  //   console.log("Al menos está entrando...x2")

  //   accountStates_ = await pool
  //     .request()
  //     .input("InOperator", companyName)
  //     .output("OutResultCode", 0)
  //     .execute("SeeAccounState");

  //   // Verificar si el procedimiento almacenado se ejecutó correctamente
  // if (accountStates_.output.OutResultCode == 0) {
  //   // Renderizar la vista "listEmployees" con los datos obtenidos de la consulta 
  //   console.log("Prueba: ",accountStates)
  //   res.render("accountStates", { accountStates: accountStates_.recordset, alertVisibility: false });
  // }
  // else {
  //   // Manejar el caso en el que el procedimiento almacenado no se ejecutó correctamente
  //   console.log("Variable salida:", invoices_.output.OutResultCode);
  // }
  // // Cerrar la conexión al pool
  // pool.close();
      
  // } catch (error) {
  //   // Manejar errores internos del servidor
  //   res.status(500);
  //   res.send(error.message);
  // }
};

module.exports = { checkAccountState, AcStateRender, ListAccountState };