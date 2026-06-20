# Flower Shop Management System

A full-stack flower shop management application with Express.js backend and HTML frontend.

## Features
- Manage flower inventory
- Track suppliers
- Create and manage bouquets
- View business reports
- MySQL database integration

## Project Structure
```
Flower-shop/
├── index.js              # Main entry point (for Railway)
├── package.json          # Dependencies & scripts
├── .env                  # Environment configuration
├── backend/
│   ├── db.js             # Database connection
│   ├── routes/           # API routes
│   └── setup.js          # Database setup
└── frontend/
    ├── index.html        # Home page
    └── [other pages]
```

## Local Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL database

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with your database credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=FlowerShop
DB_PORT=3306
PORT=3000
```
4. Start the server: `npm start`

## Railway Deployment

### Prerequisites
- Railway account
- GitHub repository connected to Railway
- MySQL database (or Railway MySQL service)

### Steps
1. Push code to GitHub
2. Go to [Railway.app](https://railway.app)
3. Connect your GitHub repository
4. Add MySQL service (if not already connected)
5. Set environment variables in Railway dashboard:
   - `DB_HOST`: Your Railway MySQL host
   - `DB_USER`: MySQL user
   - `DB_PASSWORD`: MySQL password
   - `DB_NAME`: Database name
   - `DB_PORT`: MySQL port
   - `PORT`: 3000

### Environment Variables in Railway
In your Railway project dashboard, add the following variables:
```
DB_HOST=trolley.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=railway
DB_PORT=31844
PORT=3000
```

## API Endpoints

### Suppliers
- `GET /supplier/` - Get all suppliers
- `POST /supplier/add` - Add new supplier

### Flowers
- `GET /flower/` - Get all flowers
- `POST /flower/add` - Add new flower

### Bouquets
- `GET /bouquet/` - Get all bouquets
- `POST /bouquet/add` - Add new bouquet

### Reports
- `GET /reports/flowers` - Flower inventory report
- `GET /reports/suppliers` - Suppliers report
- `GET /reports/recipes` - Bouquet recipes report
- `GET /reports/sales` - Sales summary report

## Frontend Access
Open `frontend/index.html` in your browser to access the management interface.

## Technologies
- **Backend**: Express.js, Node.js, MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Railway
- **Database**: Railway MySQL

## Troubleshooting

### Database Connection Failed
- Verify `DB_HOST`, `DB_USER`, `DB_PASSWORD` in `.env`
- Check MySQL service is running
- Ensure database and tables exist (run `node backend/setup.js`)

### Cannot find module errors
- Run `npm install` to install dependencies
- Verify `node_modules` directory exists
- Check that all files are properly committed to git

### Port already in use
- Change `PORT` in `.env` to an available port
- Or kill the process using port 3000

## License
ISC
