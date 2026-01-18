# e-Raksha Cyber App - Installation & Setup Guide

## 📋 Prerequisites

### System Requirements
- **Node.js**: 16.0 or higher
- **npm**: 8.0 or higher
- **Expo CLI**: Latest version
- **Git**: For version control (optional)
- **OS**: Windows, macOS, or Linux
- **RAM**: Minimum 4GB
- **Storage**: 2GB free space

### For Testing on Phone
- **Android Phone**: Android 8.0+ or
- **iOS Device**: iOS 12.0+
- **Expo Go App**: Free app from Play Store/App Store
- **Network**: WiFi connection to same network as development machine

---

## 🚀 Installation Steps

### Step 1: Install Node.js and npm

#### Windows
1. Download from [nodejs.org](https://nodejs.org/)
2. Choose LTS version
3. Run installer and follow prompts
4. Verify installation:
```bash
node --version
npm --version
```

#### macOS (Using Homebrew)
```bash
brew install node
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install nodejs npm
```

### Step 2: Install Expo CLI Globally

```bash
npm install -g expo-cli
```

Verify installation:
```bash
expo --version
```

### Step 3: Clone or Download Project

```bash
# Navigate to your projects folder
cd ~/Projects

# Clone the repository (if using Git)
git clone https://github.com/eraksha/cyber-app.git
cd e-raksha_cyber_app
```

Or download as ZIP and extract to your desired location.

### Step 4: Install Project Dependencies

```bash
# Navigate to project directory
cd e-raksha_cyber_app

# Install all dependencies
npm install
```

This will install:
- react, react-native
- expo and expo-related packages
- react-navigation libraries
- async-storage
- chart libraries
- and more...

**Wait for installation to complete** (may take 5-15 minutes depending on internet speed)

### Step 5: Start Development Server

```bash
# Start Expo development server
npm start
```

You should see output like:
```
Expo DevTools is running on http://localhost:19002
Press 'a' to open Android emulator
Press 'i' to open iOS simulator
Press 'w' to open web preview
Press 'r' to reload app
Press 'q' to exit
```

---

## 📱 Testing on Your Phone (Recommended)

### Method 1: Expo Go App (Easiest)

#### Step 1: Install Expo Go
- **Android**: Search "Expo Go" on Google Play Store → Install
- **iOS**: Search "Expo Go" on App Store → Install

#### Step 2: Connect Phone to Same WiFi
Ensure your phone and development computer are on the same WiFi network

#### Step 3: Scan QR Code
1. Keep `npm start` running in terminal
2. Open Expo Go app on your phone
3. Tap "Scan QR Code" button
4. Point camera at QR code shown in terminal
5. App will load on your phone automatically

#### Step 4: Interact with App
- Fill the signup form
- Complete the behavioral assessment
- See your profile generated

### Testing Checklist
- [ ] Splash screen shows
- [ ] Welcome screen loads
- [ ] Signup form works
- [ ] Can select user type
- [ ] MCQ assessment starts
- [ ] All 5 questions display properly
- [ ] Answers are captured
- [ ] No crashes occur

---

## 🏗️ Building APK for Android

### Method 1: Using EAS Build (Recommended)

#### Step 1: Create Expo Account
```bash
# Sign up at https://expo.dev
# Or login if you have account
expo login
```

#### Step 2: Install EAS CLI
```bash
npm install -g eas-cli
```

#### Step 3: Build APK
```bash
# For APK build specifically
npm run build:apk
```

Or:
```bash
eas build -p android --local
```

#### Step 4: Wait for Build
Build takes 10-15 minutes. You'll get a link to download APK.

#### Step 5: Download and Install
- Download APK from provided link
- Transfer to Android phone
- Open file manager on phone
- Tap APK to install
- Grant permissions
- App will appear on phone

### Method 2: Local Build (Advanced)

Requires Android Studio and more setup. See [Expo Documentation](https://docs.expo.dev/build/setup/) for details.

---

## 🔧 Project Structure

```
e-raksha_cyber_app/
├── App.js                          # Main app entry point
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── babel.config.js                 # Babel config
├── README.md                       # Main documentation
├── STAGES.md                       # Development stages
├── INSTALLATION.md                 # This file
├── src/
│   ├── screens/                   # App screens
│   │   ├── SplashScreen.js
│   │   ├── WelcomeScreen.js
│   │   ├── OnboardingScreen.js
│   │   ├── DashboardScreen.js
│   │   ├── SimulationScreen.js
│   │   ├── ResultScreen.js
│   │   └── ProfileScreen.js
│   ├── components/                # Reusable components
│   ├── services/                  # Business logic
│   │   └── BehavioralAnalyzer.js
│   ├── database/                  # Data
│   │   └── ScamDatabase.js
│   ├── models/                    # Data models
│   │   └── DataModels.js
│   ├── utils/                     # Utilities
│   └── navigation/                # Navigation config
├── assets/                        # Images, fonts, etc.
└── .gitignore
```

---

## 🧪 Testing the App

### Basic Testing Flow

1. **Welcome Screen Test**
   - [ ] Logo and title display correctly
   - [ ] Features section is readable
   - [ ] "Get Started" button is clickable

2. **Signup Test**
   - [ ] Input fields accept text
   - [ ] User type buttons are selectable
   - [ ] Form validation works (shows error if empty)
   - [ ] "Continue" button navigates

3. **Onboarding Test**
   - [ ] Questions display one at a time
   - [ ] Progress bar updates
   - [ ] All 5 questions are shown
   - [ ] Timer is working
   - [ ] Answer options are clickable

4. **Profile Generation Test**
   - [ ] After answering all questions, app completes
   - [ ] No crashes or errors
   - [ ] Data is saved locally
   - [ ] Next screen loads

### Common Testing Commands

```bash
# Run app in development mode
npm start

# Run on Android emulator
npm run android

# Run on iOS simulator
npm run ios

# Run web preview (for debugging)
npm run web

# Check for syntax errors
npm run lint   # (if linting is set up)

# Run tests (if test suite exists)
npm test
```

---

## 🐛 Troubleshooting

### Problem: npm install fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules folder
rm -rf node_modules

# Reinstall
npm install
```

### Problem: Expo not recognized as command

**Solution**:
```bash
# Reinstall expo globally
npm install -g expo-cli

# Try again
expo --version
```

### Problem: Can't scan QR code from terminal

**Solution**:
- Make sure phone and computer on same WiFi
- Try typing IP address directly in Expo Go
- Open `http://localhost:19002` in browser

### Problem: App crashes on specific screen

**Solution**:
- Check terminal for error messages
- Look for red error screen on phone
- Check that all required screens are created
- Verify all imports are correct

### Problem: APK build fails

**Solution**:
```bash
# Clear Expo build cache
expo prebuild --clean

# Try building again
npm run build:apk
```

### Problem: App slow or laggy

**Solution**:
- Close other apps on phone
- Check WiFi signal strength
- Restart Expo development server
- Reload app (press 'r' in terminal)

---

## 📝 Useful npm Commands

```bash
# Install all dependencies
npm install

# Start development server
npm start

# Start with Android emulator
npm run android

# Start with iOS simulator
npm run ios

# Start web version
npm run web

# Build APK
npm run build:apk

# Update specific package
npm install package-name@latest

# Remove package
npm uninstall package-name

# Check for outdated packages
npm outdated

# Update all packages
npm update
```

---

## 🔐 Environment Setup

### Optional: Create .env File

For future cloud integration:

```bash
# Create .env file in project root
touch .env

# Add content:
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development
```

### Git Setup (Optional)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - e-Raksha Cyber App"

# View git status
git status
```

---

## 🎓 Next Steps After Installation

1. **Explore the Code**
   - Open `App.js` to understand app structure
   - Check `src/screens/` folder for screen implementations
   - Review `src/database/ScamDatabase.js` for scam content

2. **Customize the App**
   - Add your own branding in assets folder
   - Modify colors in StyleSheet constants
   - Add more MCQ questions
   - Enhance the simulation engine

3. **Add More Features**
   - Implement Dashboard screen
   - Create Simulation engine logic
   - Add Analytics visualization
   - Set up Cloud sync (Firebase, etc.)

4. **Test Thoroughly**
   - Test on multiple devices
   - Test on different Android/iOS versions
   - Verify offline functionality
   - Check performance on low-end devices

---

## 📚 Learning Resources

- **React Native Docs**: https://reactnative.dev/
- **Expo Documentation**: https://docs.expo.dev/
- **React Navigation**: https://reactnavigation.org/
- **AsyncStorage**: https://react-native-async-storage.github.io/

---

## 💬 Getting Help

### If You Encounter Issues
1. **Check Error Messages**: Read terminal and app error screens carefully
2. **Check This Guide**: Most common issues are listed above
3. **Google the Error**: Copy error message and search online
4. **Check Project Files**: Ensure all files are created correctly
5. **Contact Support**: Email support@eraksha-cyber.app

---

## ✅ Installation Complete!

Congratulations! You have successfully set up the e-Raksha Cyber App.

Next, you can:
1. Test the app thoroughly on your phone
2. Complete the behavioral assessment
3. Explore the codebase
4. Start customizing or adding features

**Happy coding! 🚀**

---

**Last Updated**: January 2026
**Version**: 1.0.0
