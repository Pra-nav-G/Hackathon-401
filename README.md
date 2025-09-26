"# 🚀 Jopper - CMPUT 401 Hackathon Project

A full-stack job application tracking platform built during the CMPUT 401 hackathon at the University of Alberta. This application enables both job seekers and employers to manage job applications efficiently through separate, role-based interfaces.

## 🎯 Project Overview

Jopper is a comprehensive job application management system that bridges the gap between job seekers and employers. Built with modern web technologies, it provides a seamless experience for tracking job applications, managing profiles, and facilitating communication between candidates and employers.

## ✨ Features

### For Job Seekers (Employees)
- 📝 **Application Tracking**: Monitor all job applications with status updates
- 🔍 **Smart Filtering**: Filter applications by status (All, Applied, Interviews, Offers)
- 📄 **Resume Management**: Upload and manage multiple resume versions
- 💬 **Chat System**: Direct communication with employers
- 🔔 **Notifications**: Real-time updates on application status
- 👤 **Profile Management**: Comprehensive user profiles

### For Employers
- 📋 **Job Posting Management**: Create and manage job postings
- 👥 **Applicant Dashboard**: View and manage incoming applications
- 💼 **Company Profiles**: Showcase company information
- 📊 **Application Analytics**: Track hiring metrics
- 💬 **Candidate Communication**: Direct messaging with applicants

## 🛠 Tech Stack

### Backend
- **FastAPI** - Modern, fast web framework for building APIs
- **MongoDB** - NoSQL database for flexible data storage
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation and settings management
- **Python 3.11+** - Core programming language

### Frontend
- **Next.js 15** - React framework with SSR capabilities
- **React 19** - UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API communication
- **React Icons** - Icon library

## 📁 Project Structure

```
Hackathon-401/
├── backend/                 # FastAPI backend
│   ├── main.py             # Main FastAPI application
│   ├── models.py           # Pydantic data models
│   ├── database.py         # MongoDB connection setup
│   └── test.py             # Database connection tests
├── front-end/              # Next.js frontend
│   ├── pages/              # Next.js pages
│   │   ├── index.tsx       # Main dashboard (job seekers)
│   │   ├── authPage.tsx    # Authentication page
│   │   ├── profile.tsx     # User profile management
│   │   └── employer/       # Employer-specific pages
│   ├── components/         # Reusable React components
│   ├── styles/            # CSS modules and global styles
│   └── types.ts           # TypeScript type definitions
├── requirements.txt        # Python dependencies
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Python 3.11 or higher
- Node.js 18 or higher
- MongoDB instance (local or cloud)
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pra-nav-G/Hackathon-401.git
   cd Hackathon-401
   ```

2. **Set up Python environment**
   ```bash
   # Create virtual environment (recommended)
   python -m venv venv
   venv\Scripts\activate  # Windows
   # source venv/bin/activate  # macOS/Linux
   
   # Install dependencies
   pip install -r requirements.txt
   ```

3. **Configure environment variables**
   Create a `.env` file in the `backend/` directory:
   ```env
   MONGO_URI=mongodb://localhost:27017  # or your MongoDB connection string
   DATABASE_NAME=401hackathon
   ```

4. **Start the backend server**
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
   The API will be available at `http://localhost:8000`

### Frontend Setup

1. **Install Node.js dependencies**
   ```bash
   cd front-end
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## 🔗 API Endpoints

### Authentication
- `POST /login` - User login (employee/employer)
- `POST /users` - User registration

### Users
- `GET /users` - List all users
- `GET /users/{user_id}` - Get user by ID
- `PUT /users/{user_id}` - Update user
- `DELETE /users/{user_id}` - Delete user

### Job Postings
- `GET /job_postings` - List all job postings
- `POST /job_postings` - Create job posting
- `GET /job_postings/{job_id}` - Get job posting by ID
- `GET /job_postings/employer/{employer_id}` - Get jobs by employer

### Applications
- `GET /applications` - List all applications
- `POST /applications` - Submit application
- `PUT /applications/{app_id}` - Update application status

### Additional Features
- Resume management endpoints
- Chat/messaging system
- Notification system

## 👥 Team & Development Context

This project was developed during the **CMPUT 401 Software Engineering Hackathon** at the University of Alberta. The hackathon challenged teams to build a complete full-stack application within a limited timeframe, emphasizing rapid development, clean code architecture, and practical problem-solving.

### Development Highlights
- ⏱️ **Rapid Development**: Built from scratch in hackathon timeframe
- 🏗️ **Clean Architecture**: Modular, maintainable code structure
- 🔄 **Real-time Features**: Live updates and notifications
- 📱 **Responsive Design**: Works seamlessly across devices
- 🧪 **Testing Ready**: Structured for easy testing implementation

## 🔧 Development Commands

### Backend
```bash
# Run with auto-reload (development)
uvicorn main:app --reload

# Run tests
python test.py

# Check database connection
python -c "from database import db; import asyncio; asyncio.run(db.list_collection_names())"
```

### Frontend
```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🤝 Contributing

This project was developed as part of an academic hackathon. If you're interested in contributing or using this as a foundation for your own project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of academic coursework for CMPUT 401 at the University of Alberta.

## 🙏 Acknowledgments

- **CMPUT 401** course staff for organizing the hackathon
- **University of Alberta** Department of Computing Science
- All team members who contributed to this project during the hackathon
- Open source community for the amazing tools and frameworks used

---

*Built with ❤️ during CMPUT 401 Hackathon at University of Alberta*" 
