# Health & Wellness App

## 📌 Project Description
This is a **Health & Wellness** mobile application built using **React Native** and **Expo**. It provides users with an overview of their daily health statistics, including activity tracking, nutrition logging, and sleep analysis. The app integrates **Google Authentication** and supports smooth UI transitions for a better user experience.

## 🚀 Setup and Run Instructions
### **1️⃣ Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (For Android Emulator) or [Xcode](https://developer.apple.com/xcode/) (For iOS Simulator)

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/ayushconvicted1/HealthAndWellness.git
cd health-wellness-app
```

### **3️⃣ Install Dependencies**
```sh
yarn install   # or npm install
```

### **4️⃣ Configure Google Authentication**
1. Set up a **Google OAuth Consent Screen** and create OAuth Client IDs in **Google Cloud Console**.
2. Update the `useAuthRequest` config inside `profile.tsx` with your credentials:
```tsx
const [request, response, promptAsync] = Google.useAuthRequest({
  clientId: "YOUR_GOOGLE_CLIENT_ID",
  iosClientId: "YOUR_IOS_CLIENT_ID",
  androidClientId: "YOUR_ANDROID_CLIENT_ID",
});
```
3. Ensure the **redirect URI** matches the one registered in Google Cloud:
```
https://auth.expo.io/@your-username/your-app-slug
```

### **5️⃣ Run the Application**
#### **For Android & iOS (Using Expo Go)**
```sh
expo start
```
#### **For Custom Development Clients**
```sh
expo run:android   # For Android
expo run:ios       # For iOS
```

For Google Oauth to work properly, use Custom Development Clients.

---

## 🎯 Features Implemented
### **🔹 User Authentication**
✅ Google OAuth Login & Logout
✅ Secure token storage using `expo-secure-store`
✅ Smooth UI transitions and visual feedback

### **🔹 Health Tracking Screens**
1. **🏠 Home Screen**
   - Displays user’s daily summary (steps, heart rate, sleep hours)
2. **🚶 Activity Screen**
   - Tracks steps, distance traveled, and calories burned
3. **🥗 Nutrition Screen**
   - Shows calorie intake, water consumption, and meals logged
4. **😴 Sleep Screen**
   - Displays sleep duration, quality, and restfulness score

### **🔹 UI Enhancements**
✅ **Smooth transitions & loading indicators** when fetching simulated data
✅ **Minimalist and user-friendly card-based design**
✅ **MaterialCommunityIcons** for intuitive visuals

---

## 📌 Design Decisions & Assumptions
1. **Expo for Fast Development:**
   - Expo simplifies cross-platform compatibility.
   - Used `expo-auth-session` for authentication.
   
2. **Google Authentication Handling:**
   - Tokens are securely stored with `expo-secure-store`.
   - The app ensures users remain logged in after restarting.
   
3. **Simulated Health Data:**
   - Used static data for initial development.
   - Future updates may integrate actual health tracking APIs.
   
4. **Consistent UI Across Screens:**
   - Used `SafeAreaView` for better iOS and Android support.
   - Standardized card layouts for uniform UX.

---

## 📬 Future Enhancements
🔹 **Integrate Health APIs** (Google Fit, Apple Health)
🔹 **Add Dark Mode Support**
🔹 **Enable User Profile Editing**
🔹 **Push Notifications for Health Reminders**

---

### **💡 Contributors & Support**
👤 **Ayush Pandey** - Full-stack Developer

For any issues or feature requests, feel free to open an [issue](https://github.com/ayushconvicted1/HealthAndWellness/issues).

Happy Coding! 🚀

