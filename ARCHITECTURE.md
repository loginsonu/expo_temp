# e-Raksha Cyber App - Technical Architecture

## 📐 System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface Layer                     │
│  (React Native Components & Screens)                        │
├─────────────────────────────────────────────────────────────┤
│                  Navigation & State Layer                   │
│  (React Navigation, React Hooks, Context)                   │
├─────────────────────────────────────────────────────────────┤
│                    Business Logic Layer                     │
│  (Behavioral Analyzer, Simulation Engine, AI)               │
├─────────────────────────────────────────────────────────────┤
│                     Data Layer                              │
│  (AsyncStorage, Local Database, JSON)                       │
├─────────────────────────────────────────────────────────────┤
│                  Device Capabilities                        │
│  (Timer, Storage, Notifications)                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Detailed Component Architecture

### 1. UI Layer (React Native)

#### Screens
```
WelcomeScreen
├── Feature display
├── Signup form handling
└── Navigation to Onboarding

OnboardingScreen
├── MCQ presentation
├── Response capture
├── Timer management
└── Progress tracking

DashboardScreen (Future)
├── Statistics display
├── Progress charts
├── Category breakdown
└── Insights

SimulationScreen (Future)
├── Scenario presentation
├── Decision capturing
├── Real-time tracking
└── Pressure mechanics

ResultScreen (Future)
├── Score display
├── Feedback presentation
├── Red flag analysis
└── Next recommendations

ProfileScreen (Future)
├── User info display
├── Behavioral profile
├── Statistics
└── Settings
```

#### Components (Reusable)
```
Feature.js
├── Icon
├── Title
└── Description

ProgressBar.js
├── Current progress
└── Visual indicator

ScamCard.js
├── Scam title
├── Category badge
└── Difficulty level

ScoreCard.js
├── Score number
├── Percentage
└── Visual representation
```

### 2. Navigation Layer

```
AppNavigator (Root)
├── AuthenticationStack (Before Onboarding)
│   ├── WelcomeScreen
│   └── OnboardingScreen
│
└── MainStack (After Onboarding)
    └── BottomTabNavigator
        ├── Dashboard
        ├── Simulations
        └── Profile
```

### 3. Business Logic Layer

#### BehavioralAnalyzer Service

```
analyzeOnboardingResponses(responses)
├── Score each response (1-10 scale)
├── Calculate averages
│   ├── Decision-making speed
│   ├── Risk tolerance (1-10)
│   ├── Authority trust (1-10)
│   ├── Digital awareness (0-100%)
│   └── Emotional triggers
├── Generate vulnerability score (0-100)
├── Identify behavioral type
│   ├── Impulsive Responder
│   ├── Calm but Overconfident
│   ├── Fear-driven Decision Maker
│   ├── Low-awareness High-trust User
│   ├── Cautious & Skeptical
│   └── Balanced Thinker
├── List vulnerability factors
└── Recommend scam categories

getRecommendedCategories(profile)
├── Match triggers to scam types
├── Select 5-10 most relevant
└── Return sorted by relevance

getUserBehaviorType(profile)
├── Analyze all profile metrics
├── Categorize user behavior
└── Return behavioral type name

calculateVulnerabilityFactors(profile)
├── Identify weak areas
├── Assign severity weights
└── Return factor list
```

#### ScamDatabase Service

```
SCAM_DATABASE
├── 500+ scam entries
└── Each entry contains:
    ├── ID & Title
    ├── Description
    ├── Type & Channel
    ├── Triggers
    ├── Difficulty level
    ├── Scenario details
    ├── Red flags
    ├── Correct actions
    ├── Feedback & tips
    └── Real-world example

getScamsForProfile(profile)
├── Filter by recommended categories
├── Match difficulty to vulnerability
└── Return sorted list

getRandomScamsFromProfile(profile, count)
├── Get filtered scams
├── Shuffle randomly
└── Return N scams
```

#### SimulationEngine Service (Future)

```
startSimulation(scam, user)
├── Initialize timer
├── Set pressure mechanics
├── Track decisions
└── Collect metrics

processUserDecision(decision)
├── Validate decision
├── Record timestamp
├── Check correctness
├── Update metrics
└── Trigger next scenario

endSimulation()
├── Calculate final score
├── Compile metrics
├── Generate feedback
└── Save results
```

### 4. Data Layer

#### AsyncStorage Schema

```
User Data
├── currentUser
│   ├── id
│   ├── name
│   ├── age
│   ├── userType
│   ├── createdAt
│   └── lastLogin
├── onboardingComplete (boolean)
├── userProfile
│   ├── vulnerabilityScore
│   ├── behaviorType
│   ├── triggers
│   ├── categoryStrengths
│   └── categoryWeaknesses
├── simulationResults (array)
│   └── Each result contains:
│       ├── scamId
│       ├── score
│       ├── decisions
│       ├── timestamp
│       └── feedback
└── dashboardStats
    ├── totalScamsCompleted
    ├── averageScore
    ├── currentStreak
    ├── bestStreak
    └── categoryStats
```

#### Scam Database Structure

```json
{
  "id": "unique_id",
  "title": "Scam name",
  "description": "Brief description",
  "scamType": "OTP|UPI|Job|Police|etc",
  "channel": "Call|SMS|WhatsApp|Email|etc",
  "triggers": ["Urgency", "Fear", "Authority"],
  "difficultyLevel": 1-5,
  "targetAudience": ["students", "seniors"],
  "scenario": {
    "initialMessage": "Scam starts",
    "context": "Background",
    "timeline": [
      { "timestamp": 0, "message": "msg", "action": "type" }
    ]
  },
  "redFlags": [
    { "flag": "description", "severity": "critical" }
  ],
  "correctActions": ["action1", "action2"],
  "commonMistakes": ["mistake1", "mistake2"],
  "explanation": "Why this is a scam",
  "preventionTips": ["tip1", "tip2"],
  "realWorldExample": "Case study"
}
```

---

## 🔄 Data Flow Architecture

### 1. Onboarding Flow

```
User fills signup form
    ↓
User ID created (timestamp-based)
    ↓
User navigates to MCQ
    ↓
User answers 5 questions
├── Response captured with:
│   ├── Answer
│   ├── Time taken
│   └── Question category
    ↓
All responses collected
    ↓
BehavioralAnalyzer processes
    ├── Scores each response
    ├── Calculates metrics
    ├── Generates profile
    └── Recommends scams
    ↓
Profile saved to AsyncStorage
    ↓
User navigates to Dashboard
```

### 2. Simulation Flow

```
User selects scam to practice
    ↓
Simulation loads with:
├── Initial scenario
├── Timer
└── Tracking enabled
    ↓
User makes decisions
    ├── Taps buttons
    ├── Responds to prompts
    └── System records:
        ├── Action type
        ├── Reaction time
        ├── Correctness
        └── Metrics
    ↓
Scenario progresses
    ├── Time pressure increases
    ├── Messages escalate urgency
    └── User continues deciding
    ↓
Simulation ends (user decides or timeout)
    ↓
Results calculated
    ├── Score (0-100)
    ├── Missed flags count
    ├── Correct decisions %
    └── Performance analysis
    ↓
Feedback generated
    ├── What went wrong
    ├── Which flags missed
    ├── Why user reacted that way
    └── Prevention tips
    ↓
Results saved to AsyncStorage
    ↓
User sees feedback screen
    ↓
Next scam recommended based on performance
```

### 3. Dashboard Flow

```
User opens Dashboard
    ↓
System retrieves:
├── All simulationResults
├── userProfile
└── dashboardStats
    ↓
Calculate statistics:
├── Total completed
├── Average score
├── Current streak
├── Category breakdown
└── Improvement over time
    ↓
Generate AI insights:
├── Areas of strength
├── Vulnerability factors
├── Recommended focus areas
└── Next challenges
    ↓
Render visualizations:
├── Line chart (progress over time)
├── Bar chart (category breakdown)
├── Stat cards (key metrics)
└── Streak counter
    ↓
User views dashboard
└── Can see recommendations
```

---

## 🔐 Data Security Architecture

### Local Storage Security

```
AsyncStorage
├── Encryption at rest (OS level)
├── No sensitive data stored
│   ├── No passwords
│   ├── No financial info
│   ├── No contact details
│   └── No personally identifiable info
└── User profile data only
    ├── Responses to MCQ
    ├── Simulation results
    └── Progress metrics
```

### Privacy by Design

```
Permission Model
├── No permissions requested
│   ├── No contacts access
│   ├── No SMS/call reading
│   ├── No location tracking
│   ├── No photo/video access
│   └── No file system access
└── Only uses:
    ├── Storage (AsyncStorage)
    ├── Timer (system)
    └── Display (UI rendering)
```

---

## ⚡ Performance Optimization

### Memory Management

```
Optimization Strategies
├── Lazy loading of scam data
├── Efficient state management
├── Cleanup subscriptions
└── Minimal re-renders

Data Compression
├── JSON data compression
├── Minimal storage footprint
├── Efficient indexing
└── Clean old data periodically
```

### Network (Future)

```
Sync Strategy
├── Offline-first operation
├── Optional cloud sync
├── Batch uploads
├── Compression before upload
└── Exponential backoff on failure
```

---

## 🧪 Testing Architecture

### Unit Tests

```
Tests for:
├── BehavioralAnalyzer functions
│   ├── Score calculations
│   ├── Profile generation
│   └── Category recommendations
├── Data models
│   ├── User creation
│   ├── Scam loading
│   └── Result saving
└── Utility functions
    ├── Data formatting
    ├── Calculations
    └── Validation
```

### Integration Tests

```
Test flows:
├── Signup → Onboarding → Profile
├── Profile → Scam Selection
├── Simulation → Feedback → Dashboard
├── Data persistence across restarts
└── Navigation between screens
```

### User Testing

```
Testing scenarios:
├── First-time user flow
├── Repeat user experience
├── Different user types
│   ├── Students
│   ├── Seniors
│   ├── Professionals
│   └── Parents
└── Device variations
    ├── Small screens
    ├── Large screens
    ├── Low-end devices
    └── High-end devices
```

---

## 📦 Dependency Architecture

### Core Dependencies

```
react-native & expo
├── Base framework
├── Native modules
└── Expo services

@react-navigation
├── Stack Navigation
├── Tab Navigation
└── Navigation state management

@react-native-async-storage
├── Local data persistence
├── Secure storage
└── Database replacement

react-native-chart-kit
├── Graph visualizations
├── Statistics display
└── Progress tracking

expo-linear-gradient
├── Visual effects
├── Screen backgrounds
└── Button styling

lottie-react-native
├── Animations
├── Engaging transitions
└── Loading indicators
```

### Build Dependencies

```
babel
├── Code transpilation
├── Modern JS support
└── Optimization

expo-cli & eas-cli
├── Development server
├── APK building
└── Cloud builds
```

---

## 🚀 Deployment Architecture

### Development Environment

```
┌─────────────────────────┐
│   Development Machine   │
│  (Node.js, npm, Expo)   │
└───────────┬─────────────┘
            │
    ┌───────┴────────┐
    │                │
    ↓                ↓
Local Dev Server   Expo Go App
(localhost:19002)  (on phone)
```

### Production Environment

```
┌─────────────────────────┐
│   User's Android Phone  │
│  (APK installed)        │
└──────────────┬──────────┘
               │
      ┌────────┴────────┐
      │                 │
      ↓                 ↓
 App running    AsyncStorage
 (Local only)   (User data)
```

---

## 🔄 State Management Architecture

### Global State Hierarchy

```
App (Root)
├── userState
│   ├── currentUser
│   ├── isLoggedIn
│   └── profileLoaded
├── navigationState
│   ├── currentScreen
│   └── navigationHistory
└── appState
    ├── isLoading
    ├── appTheme
    └── preferences
```

### Local Component State

```
OnboardingScreen
├── currentQuestion
├── responses
├── startTime
└── questionStartTime

SimulationScreen (Future)
├── currentScenario
├── userDecisions
├── simulationTimer
└── metrics

DashboardScreen (Future)
├── statistics
├── charts
├── selectedCategory
└── filterBy
```

---

## 📊 Metrics & Analytics Architecture

### Collected Metrics

```
Per User:
├── Profile metrics
│   ├── Vulnerability score
│   ├── Behavioral type
│   └── Triggers
├── Simulation metrics
│   ├── Scams completed
│   ├── Average score
│   ├── Streaks
│   └── Category performance
└── Engagement metrics
    ├── Time spent
    ├── Session count
    └── Last active date

Per Scam:
├── Attempt count
├── Success rate
├── Average time
└── Common mistakes
```

### Analytics Engine (Future)

```
Calculations:
├── User progress trend
├── Category mastery level
├── Predicted success rate
├── Recommended next scam
└── Overall awareness improvement
```

---

## 🔄 Continuous Improvement Loop

```
User completes simulation
    ↓
Results analyzed by AI
    ├── Weakness identified
    ├── Next difficulty calculated
    └── New scam selected
    ↓
User profile updated
    ├── Metrics recalculated
    ├── Recommendations refreshed
    └── New learning path created
    ↓
Next session starts
    └── With improved scams
```

---

## 📚 Code Organization

### File Structure Best Practices

```
src/
├── screens/              # All app screens
│   ├── index.js         # Exports all screens
│   └── *.js
├── components/          # Reusable components
│   ├── index.js
│   └── *.js
├── services/            # Business logic
│   ├── index.js
│   ├── BehavioralAnalyzer.js
│   ├── SimulationEngine.js
│   └── *.js
├── database/            # Data and data access
│   ├── index.js
│   ├── ScamDatabase.js
│   └── LocalStorage.js
├── models/              # Data models
│   ├── index.js
│   └── DataModels.js
├── utils/               # Utility functions
│   ├── index.js
│   ├── constants.js
│   ├── helpers.js
│   └── *.js
└── navigation/          # Navigation setup
    └── AppNavigator.js
```

---

## 🎯 Future Architecture Enhancements

### Version 2.0 (6 months)

```
Add Features:
├── Cloud Sync
│   ├── Firebase integration
│   ├── Encrypted backup
│   └── Cross-device sync
├── Advanced Analytics
│   ├── Dashboard redesign
│   ├── Predictive ML
│   └── Detailed insights
└── Social Features
    ├── Leaderboards
    ├── Friend challenges
    └── Sharing achievements
```

### Version 3.0 (1 year)

```
Advanced Features:
├── Multimedia
│   ├── Video simulations
│   ├── Voice interactions
│   └── AR scenarios
├── Integrations
│   ├── Bank partnerships
│   ├── Government APIs
│   └── School systems
└── AI Enhancements
    ├── Deep learning models
    ├── Real scam detection
    └── Predictive prevention
```

---

## 📋 Architecture Review Checklist

- [ ] All screens properly connected
- [ ] Navigation flows correctly
- [ ] Data persists across sessions
- [ ] BehavioralAnalyzer produces expected profiles
- [ ] Scam database loads correctly
- [ ] No memory leaks
- [ ] Performance acceptable
- [ ] Offline functionality works
- [ ] Error handling comprehensive
- [ ] Code is maintainable and documented

---

## 🔗 Architecture Diagram Links

- **Component Tree**: See STAGES.md for screen hierarchy
- **Data Flow**: See this document section 2
- **Deployment**: See INSTALLATION.md for setup details
- **Security Model**: See README.md privacy section

---

**This architecture ensures:**
- ✅ Scalability for future features
- ✅ Maintainability of codebase
- ✅ Performance optimization
- ✅ Privacy protection
- ✅ Easy testing and debugging
- ✅ Clear separation of concerns

---

**Made with architectural excellence in mind.**
