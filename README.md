# 🍽️ MongoDB Restaurants Queries

## 🛠️ Technologies Used
- 🖥️ **mongosh** - MongoDB shell for executing queries.
- 📝 **VS Code** - Code editor for writing and managing queries.
- 🖋️ **Vim** - Terminal-based text editor.

## 🎯 Objectives
Learn how to query a NoSQL database. The database used is **restaurants.json**.
We have a collection of restaurant objects in New York City, and we need to perform some queries... Can you help us? 🍕

## 📌 Queries

### 📋 Basic Queries
1️⃣ Show all documents in the **Restaurants** collection.
2️⃣ Show **restaurant_id, name, borough,** and **cuisine** for all documents.
3️⃣ Show the same fields but **exclude** the `_id` field.
4️⃣ Show **restaurant_id, name, borough,** and **zip code**, excluding `_id`.
5️⃣ Show all restaurants located in the **Bronx**.
6️⃣ Show the **first 5 restaurants** in the Bronx.
7️⃣ Show the **next 5 restaurants**, after skipping the first 5 in the Bronx.

### 🏆 Score-Based Queries
8️⃣ Find restaurants with a **score greater than 90**.
9️⃣ Find restaurants with a **score greater than 80 but less than 100**.

### 📍 Location-Based Queries
🔟 Find restaurants located at a latitude **less than -95.754168**.
1️⃣1️⃣ Find restaurants that **do not serve American cuisine**, have a **score above 70**, and have a **longitude less than -65.754168**.
1️⃣2️⃣ Same as above but **without using** the `$and` operator.

### 🏅 Grade-Based Queries
1️⃣3️⃣ Find restaurants that **do not serve American cuisine**, received a grade of **'A'**, and **are not in Brooklyn**. Order results by **cuisine (descending)**.
1️⃣4️⃣ Find restaurants where the **2nd element in the grades array** contains a grade **'A'** and score **9** on `ISODate("2014-08-11T00:00:00Z")`.

### 🔤 Name-Based Queries
1️⃣5️⃣ Find restaurants where the **name starts with 'Wil'**.
1️⃣6️⃣ Find restaurants where the **name ends with 'ces'**.
1️⃣7️⃣ Find restaurants where the **name contains 'Reg'** anywhere.

### 🌍 Borough & Cuisine Queries
1️⃣8️⃣ Find restaurants in the **Bronx** that serve **either American or Chinese cuisine**.
1️⃣9️⃣ Find restaurants in **Staten Island, Queens, Bronx, or Brooklyn**.
2️⃣0️⃣ Find restaurants **not in Staten Island, Queens, Bronx, or Brooklyn**.
2️⃣1️⃣ Find restaurants with a **score of 10 or less**.

### 🍽️ Advanced Cuisine Queries
2️⃣2️⃣ Find restaurants that **serve fish**, **except American and Chinese**, or whose **name starts with 'Wil'**.
2️⃣3️⃣ Find **restaurant_id, name, and grades** for restaurants that received a grade **'A'** and a **score of 11** on `ISODate("2014-08-11T00:00:00Z")`.

### 🌎 Geolocation Queries
2️⃣4️⃣ Find restaurants where the **second coordinate value** in the `coord` array is **between 42 and 52**.

### 🔢 Sorting Queries
2️⃣5️⃣ Sort restaurants by **name (ascending)**.
2️⃣6️⃣ Sort restaurants by **name (descending)**.
2️⃣7️⃣ Sort by **cuisine (ascending)** and by **borough (descending)**.

### 🏠 Address Queries
2️⃣8️⃣ Find all addresses that **do not contain a street**.

### 🔍 Data Type Queries
2️⃣9️⃣ Find all documents where the **coord field is of type Double**.
3️⃣0️⃣ Find **restaurant_id, name, and grade** for restaurants where the score **is a multiple of 7**.

### 🗺️ Additional Name Queries
3️⃣1️⃣ Find **name, borough, longitude, latitude, and cuisine** for restaurants where the **name contains 'mon'** anywhere.
3️⃣2️⃣ Find **name, borough, longitude, latitude, and cuisine** for restaurants where the **name starts with 'Mad'**.

---
🚀 Happy Querying! 🎉

