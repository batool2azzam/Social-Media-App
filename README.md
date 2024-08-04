# Social Media Project

This project is a social media application built using React and TypeScript. The application allows users to register, log in, browse posts, add posts, comment on posts, and manage their profiles. The project also includes advanced features such as infinite pagination, private routes, and state management using Redux Toolkit. The UI is built using Material-UI (MUI), and all interactions are handled via API.

## Features

### Authentication
- **Login/Register:** Users can register or log in using Formik with Yup for form validation.
- **IP-based Authentication:** User login and registration are linked to the user's IP address for additional security.
- **Logout:** Users can securely log out from their accounts.

### Posts
- **Browse Posts:** Users can browse posts with infinite pagination to load posts dynamically as they scroll.
- **Add Post:** Users can create new posts.
- **Comment on Posts:** Users can add comments to posts.
- **Edit Post:** Users can edit their own posts.
- **Delete Post:** Users can delete their own posts.

### Profiles
- **User Profiles:** Users can view other users' profiles and their information.
- **Current User Profile:** Users can view and manage their own profiles.

### Configuration and Routing
- **Axios Configuration:** Axios is configured for making HTTP requests.
- **Private Route:** Routes that require authentication are protected.
- **React Router:** Routing is managed using React Router.
- **Redux Toolkit:** State management is handled using Redux Toolkit.
- **Material-UI (MUI):** MUI is used for building the UI components.
- **Toast Notifications:** Toast notifications are used throughout the project to improve user experience.

## Screens

### 1. Home Screen
- Displays the feed of posts with infinite pagination.
- ![image](https://github.com/user-attachments/assets/650f61d0-21f8-487f-ba49-6994ea2f3e18)

### 2. Login/Register Screen
- Users can log in or register using forms validated by Formik and Yup.
- ![image](https://github.com/user-attachments/assets/bc414087-94a1-4d56-8421-5ac442247e0e)
- ![image](https://github.com/user-attachments/assets/8a777b2f-2b25-40b8-a8ff-ac41f2e6abd9)

### 3. User Profile Screen
- Displays the profile information of the current user, including their posts.
- ![image](https://github.com/user-attachments/assets/d36273a2-acbd-4b30-a25a-2b58a1e6a8cf)

### 4. Other User Profile Screen
- Displays the profile information of other users, including their posts.
- ![image](https://github.com/user-attachments/assets/787ae203-be4d-4cc0-b5bb-0f50a22fe93e)

### 5. Add/Edit Post Screen
- Allows users to create a new post or edit an existing post.
- ![image](https://github.com/user-attachments/assets/46f3fa6d-8957-4274-87dd-91c6488c35fb)
- ![image](https://github.com/user-attachments/assets/40e26717-7f10-428c-bf23-97be55871a03)

### 6. Add Comment
- Allows users to add comments to other users' posts. 
- ![image](https://github.com/user-attachments/assets/5c18b6ba-e60a-4fac-92bf-966396f1bd69)



## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/batool2azzam/Social-Media-App.git
   cd Social-Media-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- React
- TypeScript
- Vite
- Formik
- Yup
- Axios
- React Router
- Redux Toolkit
- Material-UI (MUI)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Comments are included throughout the code to help understand the implementation.

## License

Feel free to copy and paste this into your README file. Let me know if there's anything else you need!

---

