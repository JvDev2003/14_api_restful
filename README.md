# Projeto Servidor

A basic application using a API to receive and send data.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Installation](#installation)

---

## Description

This is a basic application that demonstrates the core features of APIs, such as routes, functionalities, middlewares, etc.

Feel free to fork or clone this repository to start your own API project.

---

## Getting Started

### Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (Node Package Manager) – usually comes with Node.js
- [MongoDB](https://www.mongodb.com)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JvDev2003/14_api_restful
   cd 14_api_restful
   ```

2. Install packeges, fill the .env and run:

   ```bash
    npm install
   ```

   Fill in these variables in the .env file.

   ```bash
   ENV=development
   PORT={the port you want your aplication run}
   DBURI={URL of your mongodb database}
   ```

   Run the application

   ```bash
   npm run dev
   ```
