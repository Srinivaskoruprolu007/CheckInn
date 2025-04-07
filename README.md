
# CheckInn – Hotel Management System

CheckInn is a modern hotel management system built with React and Vite. It is designed for internal use by hotel staff to efficiently manage day-to-day operations such as bookings, guest check-ins, room availability, and more. The system provides a clean and responsive interface, real-time data updates, and an overall seamless experience.

## ✨ Features

- **Dashboard Overview**: Quickly view key metrics and operational statistics  
- **Booking Management**: Create, update, view, and delete bookings with advanced filtering and sorting  
- **Guest Management**: Store and manage guest information and preferences  
- **Check-in/Check-out System**: Simplified process for managing guest arrivals and departures  
- **Cabin Management**: Manage different room types, availability, and statuses  
- **Settings Management**: Configure hotel settings such as breakfast prices and other preferences  
- **Responsive UI**: Works seamlessly on desktops, tablets, and mobile devices  
- **Pagination Support**: Smooth navigation for handling large datasets  
- **Real-time Sync**: Instant updates using Supabase’s real-time capabilities  
- **Authentication**: Secure login system using Clerk and Supabase  

## 🛠️ Tech Stack

| Layer        | Technology                              |
|--------------|------------------------------------------|
| Frontend     | React 18, Vite                           |
| Styling      | Styled Components                        |
| Routing      | React Router                             |
| State Mgmt   | React Query (TanStack Query)             |
| Forms        | React Hook Form                          |
| Notifications| React Hot Toast                          |
| Icons        | React Icons                              |
| Backend      | Supabase (Database + Auth + Realtime)    |
| Code Quality | ESLint, Prettier                         |

## 📁 Project Structure

```
CheckInn/
├── public/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page-level components (Dashboard, Bookings, etc.)
│   ├── services/          # Supabase service functions for API operations
│   ├── hooks/             # Custom hooks (e.g., useFetch, useAuth)
│   ├── context/           # Context API providers (if any)
│   ├── styles/            # Global styles
│   ├── utils/             # Helper functions
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Srinivaskoruprolu007/CheckInn.git
cd CheckInn
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your Supabase and Clerk keys:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> ⚠️ Make sure not to expose sensitive keys in a public repo.

### 4. Run the Development Server

```bash
npm run dev
```

The app will be running at `http://localhost:5173`.

## 🧪 Scripts

- `npm run dev` – Start the dev server  
- `npm run build` – Build for production  
- `npm run lint` – Run ESLint for code quality  
- `npm run format` – Format code with Prettier  

## 📌 Notes

- This app is intended **only for internal use by hotel staff**.  
- Currently supports only employee access with role-based actions planned for future updates.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Srinivas Koruprolu](https://github.com/Srinivaskoruprolu007)
```

Let me know if you'd like to add badges, preview images, or GIFs showing the app in action!
