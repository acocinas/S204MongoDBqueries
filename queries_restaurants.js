// 1. Muestra todos los documentos en la colección Restaurantes.
db.restaurants.find().pretty();

// 2. Muestra el restaurant_id, name, borough y cuisine de todos los documentos.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 1 }).pretty();

// 3. Muestra el restaurant_id, name, borough y cuisine, excluyendo el campo _id.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty();

// 4. Muestra el restaurant_id, name, borough y zip code, excluyendo el campo _id.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 }).pretty();

// 5. Muestra todos los restaurantes que están en el Bronx.
db.restaurants.find({ borough: "Bronx" }).pretty();

// 6. Muestra los primeros 5 restaurantes que están en el Bronx.
db.restaurants.find({ borough: "Bronx" }).limit(5).pretty();

// 7. Muestra los próximos 5 restaurantes después de saltar los primeros 5 del Bronx.
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5).pretty();

// 8. Encuentra los restaurantes que tienen un score de más de 90.(En la primera consulta devuelve todos los documentos,
// si hay alguno mayor de 90, en la segunda consulta solo los mayores de 90)
db.restaurants.find({ "grades.score": { $gt: 90 } }).pretty();

db.restaurants.find(
  { "grades.score": { $gt: 90 } }, 
  { name: 1, grades: { $elemMatch: { score: { $gt: 90 } } }, _id: 0 }
).pretty();


// 9. Encuentra los restaurantes que tienen un score de más de 80 pero menos que 100.(La primera consulta tiene al menos un 
// score en ese rango, la segunda solo muestra los scores de ese rango)
db.restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } }).pretty();

db.restaurants.find(
  { "grades.score": { $gt: 80, $lt: 100 } },
  { name: 1, grades: { $elemMatch: { score: { $gt: 80, $lt: 100 } } }, _id: 0 }
).pretty();


// 10. Encuentra los restaurantes que se localizan en un valor de latitud menor a -95.754168.
db.restaurants.find({ "address.coord.1": { $lt: -95.754168 } }).pretty();

// 11. Encuentra los restaurantes que no preparan ningún cuisine de 'American' y su calificación es superior a 70
// y longitud inferior a -65.754168.
db.restaurants.find({
  cuisine: { $not: /American/ },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 }
}).pretty();

// 12. Encuentra los restaurantes que no preparan ningún cuisine de 'American' y consiguieron un marcador más de 70
// y localizado en la longitud menor que -65.754168 (sin usar $and).
db.restaurants.find({
  cuisine: { $not: /American/ },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 }
}).pretty();

// 13. Encuentra los restaurantes que no preparan ningún cuisine de 'American' y obtuvieron un punto de grado 'A' 
// no pertenece a Brooklyn. Ordenados por cuisine en orden descendente.
db.restaurants.find({
  cuisine: { $not: /American/ },
  "grades.grade": "A",
	borough: {$not: /Brookly/}
  }).sort({cuisine: -1}).pretty();


// 14. Encuentra el restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'Wil'
// como las tres primeras letras en su nombre.
db.restaurants.find({ name: /^Wil/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty();

// 15. Encuentra el restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'ces'
// como las últimas tres letras en su nombre.
db.restaurants.find({ name: /ces$/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty();

// 16. Encuentra el restaurant_id, name, borough y cuisine para aquellos restaurantes que contienen 'Reg'
// como tres letras en algún lugar en su nombre.
db.restaurants.find({ name: /Reg/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty();

// 17. Encuentra los restaurantes que pertenecen al Bronx y prepararon cualquier plato americano o chino.
db.restaurants.find({
  borough: "Bronx",
  cuisine: { $regex: /(American|Chinese)/i } 
}).pretty();
// 18. Encuentra el restaurant_id, name, borough y cuisine para aquellos restaurantes que pertenecen a
// Staten Island, Queens, Bronx o Brooklyn.
db.restaurants.find({
  borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty();

// 19. Encuentra el restaurant_id, name, borough y cuisine para aquellos restaurantes que no pertenecen a 
// Staten Island, Queens, Bronx o Brooklyn.
db.restaurants.find({
  borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty();

// 20. Encuentra el restaurant_id, name, borough y cuisine para aquellos restaurantes que consigan un marcador 
// que no es más de 10.
db.restaurants.find({ "grades.score": { $lte: 10 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty();

// 21. Encuentra el restaurant_id, name, borough y cuisine para aquellos restaurantes que preparan pescado
// excepto 'American' y 'Chinese' o el name del restaurante empieza con letras 'Wil'.
db.restaurants.find({
  $or: [{$and:
	 [ {cuisine:/Fish/},
    { cuisine: { $not: /American|Chinese/}}]},
    { name: /^Wil/ }
  ]
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }).pretty();

// 22. Encuentra el restaurant_id, name y gradas para aquellos restaurantes que consigan un grado "A" y un
// score 11 en datos de estudio ISODate "2014-08-11T00:00:00Z".
db.restaurants.find({
  "grades": {
    $elemMatch: {
      grade: "A",
      score: 11,
      date: ISODate("2014-08-11T00:00:00Z")
    }
  }
}, { restaurant_id: 1, name: 1, grades: 1, _id: 0 }).pretty();

// 23. Encuentra el restaurant_id, name y gradas para aquellos restaurantes donde el 2º elemento de variedad 
// de grados contiene un grado de "A" y marcador 9 sobre un ISODate "2014-08-11T00:00:00Z".
db.restaurants.find({
  "grades.1": {
    grade: "A",
    score: 9,
    date: ISODate("2014-08-11T00:00:00Z")
  }
}, { restaurant_id: 1, name: 1, grades: 1, _id: 0 }).pretty();

// 24. Encuentra el restaurant_id, name, dirección y ubicación geográfica para aquellos restaurantes donde el 
// segundo elemento del array coord contiene un valor que es más de 42 y hasta 52.
db.restaurants.find({
  "address.coord.1": { $gt: 42, $lte: 52 }
}, { restaurant_id: 1, name: 1, address: 1, _id: 0 }).pretty();

// 25. Organiza el nombre de los restaurantes en orden ascendente junto con todas las columnas.
db.restaurants.find().sort({ name: 1 }).pretty();

// 26. Organiza el nombre de los restaurantes en orden descendente junto con todas las columnas.
db.restaurants.find().sort({ name: -1 }).pretty();

// 27. Organiza el nombre de la cuisine en orden ascendente y por el mismo barrio de cuisine en orden descendente.
db.restaurants.aggregate([
  { $group: { _id: "$borough", cuisines: { $addToSet: "$cuisine" } } },
  { $sort: { _id: -1 } },
  { $project: { _id: 0, borough: '$_id', cuisines: { $sortArray: { input: "$cuisines", sortBy: 1 } } } }
]);

// 28. Encuentra todas las direcciones que no contienen la calle.
db.restaurants.find({
	$or: [{ 
	'address.street': { $exists: false } },
	{ 'address.street': "" },{'address.street': undefined},
	{'address.street': null}]}, { _id: 0, address: 1 });
// 29. Selecciona todos los documentos en la colección de restaurantes donde el valor del campo coord es Double.
db.restaurants.find({ "address.coord": { $type: "double" } }).pretty();

// 30. Selecciona el restaurant_id, name y grade para aquellos restaurantes que retornen 0 como resto 
// después de dividir el marcador por 7.
db.restaurants.find({ "grades.score": { $mod: [7, 0] } }, { restaurant_id: 1, name: 1, "grades.grade": 1, _id: 0 }).pretty();

// 31. Encuentra el name de restaurante, borough, longitud y latitud y cuisine para aquellos restaurantes que
// contienen 'mon' como tres letras en algún lugar de su nombre.
db.restaurants.find({ name: /mon/ }, { name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 }).pretty();

// 32. Encuentra el name de restaurante, borough, longitud y latitud y cuisine para aquellos restaurantes que 
// contienen 'Mad' como primeras tres letras de su nombre.
db.restaurants.find({ name: /^Mad/ }, { name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 }).pretty();
