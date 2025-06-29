# Pokedex App

A modern, interactive Pokédex built with **React**. Browse, search, and explore detailed information about every Pokémon using a clean, responsive interface powered by the [PokéAPI](https://pokeapi.co/).

---

## ✨ Features

- Search by Name: Instantly find any Pokémon by typing its name.(Coming Soon!)
- Browse All Pokémon: Seamlessly scroll & paginate through the entire Pokédex.
- Detailed Pokémon Pages: View comprehensive details including:
  - Official Images
  - Base stats
  - Type(s) with color-coded badges
  - Weight & Height
  - Breeding and training info
- Pagination: Effortlessly navigate between pages of Pokémon.
- Responsive Design: Optimized for desktop.
- Modular Components: Clean, maintainable codebase with reusable components.

---

## 🛠️ Tech Stack

- **React** – Modern UI library for building interactive interfaces
- **Axios** – Promise-based HTTP client for API requests
- **React Router** – Seamless client-side routing
- **PokéAPI** – The open Pokémon RESTful API
- **CSS-in-JS / Styled Components** – Modular and dynamic styling
- **React Hooks** – State and lifecycle management (`useState`, `useEffect`)

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/NikoDP20/pokedex.git
cd pokedex
```

### 2. Install Dependencies

Ensure you have **Node.js** and **npm** installed. Then run:

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```
pokedex/
├── public/
│   └── img/
│       └── pokeball.png
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── Loading.js
│   │   │   ├── Pagination.js
│   │   │   └── RevealAnimation.js
│   │   └── pokemon/
│   │       ├── PokemonDetail.js
│   │       ├── PokemonList.js
│   │       └── PokeType.js
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a pull request.

---

## 🙏 Acknowledgements

- [PokéAPI](https://pokeapi.co/) for providing all Pokémon data and images.
- [React](https://reactjs.org/) for the robust UI framework.
- Pokémon and Pokémon character names are trademarks of Nintendo.
