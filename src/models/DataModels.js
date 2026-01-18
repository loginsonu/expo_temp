// User Model
export class User {
  constructor(
    id,
    name,
    age,
    userType, // 'student', 'parent', 'senior', 'professional'
    behavioralProfile,
    simulationsCompleted = 0,
    successRate = 0,
    currentStreak = 0,
    bestStreak = 0,
    createdAt = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.userType = userType;
    this.behavioralProfile = behavioralProfile;
    this.simulationsCompleted = simulationsCompleted;
    this.successRate = successRate;
    this.currentStreak = currentStreak;
    this.bestStreak = bestStreak;
    this.createdAt = createdAt;
  }
}

// Behavioral Profile Model
export class BehavioralProfile {
  constructor(
    decisionMakingSpeed, // 'very-slow', 'slow', 'medium', 'fast', 'very-fast'
    riskTolerance, // 1-10
    trustInAuthority, // 1-10
    emotionalTriggers, // array
    digitalAwarenessLevel, // 'very-low', 'low', 'medium', 'high', 'very-high'
    scamVulnerabilityScore, // 0-100
    vulnerabilityFactors = [],
    recommendedScamCategories = []
  ) {
    this.decisionMakingSpeed = decisionMakingSpeed;
    this.riskTolerance = riskTolerance;
    this.trustInAuthority = trustInAuthority;
    this.emotionalTriggers = emotionalTriggers;
    this.digitalAwarenessLevel = digitalAwarenessLevel;
    this.scamVulnerabilityScore = scamVulnerabilityScore;
    this.vulnerabilityFactors = vulnerabilityFactors;
    this.recommendedScamCategories = recommendedScamCategories;
  }
}

// Scam Model
export class Scam {
  constructor(
    id,
    title,
    description,
    scamType, // 'OTP', 'UPI', 'Job', 'Police', 'Delivery', 'Banking', etc.
    channel, // 'Call', 'SMS', 'WhatsApp', 'Email', etc.
    triggers, // ['Urgency', 'Fear', 'Reward', etc.]
    difficultyLevel, // 1-5
    targetAudience, // ['students', 'seniors', etc.]
    scenario, // object with messages, context, timeline
    redFlags, // array of red flags
    correctActions, // array of correct actions
    commonMistakes, // array of mistakes
    explanation,
    preventionTips,
    realWorldExample
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.scamType = scamType;
    this.channel = channel;
    this.triggers = triggers;
    this.difficultyLevel = difficultyLevel;
    this.targetAudience = targetAudience;
    this.scenario = scenario;
    this.redFlags = redFlags;
    this.correctActions = correctActions;
    this.commonMistakes = commonMistakes;
    this.explanation = explanation;
    this.preventionTips = preventionTips;
    this.realWorldExample = realWorldExample;
  }
}

// Simulation Result Model
export class SimulationResult {
  constructor(
    id,
    userId,
    scamId,
    scamTitle,
    decisions, // array of user decisions
    panicClicks,
    correctDecisions,
    incorrectDecisions,
    missedRedFlags,
    timeSpent,
    overallScore,
    passed,
    completedAt = new Date()
  ) {
    this.id = id;
    this.userId = userId;
    this.scamId = scamId;
    this.scamTitle = scamTitle;
    this.decisions = decisions;
    this.panicClicks = panicClicks;
    this.correctDecisions = correctDecisions;
    this.incorrectDecisions = incorrectDecisions;
    this.missedRedFlags = missedRedFlags;
    this.timeSpent = timeSpent;
    this.overallScore = overallScore;
    this.passed = passed;
    this.completedAt = completedAt;
  }
}

// Onboarding Response Model
export class OnboardingResponse {
  constructor(
    userId,
    responses, // array of MCQ answers
    totalTime,
    averageTimePerQuestion,
    decisionMakingSpeed,
    riskTolerance,
    trustInAuthority,
    emotionalTriggers,
    digitalAwarenessLevel,
    vulnerabilityScore,
    recommendedScamCategories,
    completedAt = new Date()
  ) {
    this.userId = userId;
    this.responses = responses;
    this.totalTime = totalTime;
    this.averageTimePerQuestion = averageTimePerQuestion;
    this.decisionMakingSpeed = decisionMakingSpeed;
    this.riskTolerance = riskTolerance;
    this.trustInAuthority = trustInAuthority;
    this.emotionalTriggers = emotionalTriggers;
    this.digitalAwarenessLevel = digitalAwarenessLevel;
    this.vulnerabilityScore = vulnerabilityScore;
    this.recommendedScamCategories = recommendedScamCategories;
    this.completedAt = completedAt;
  }
}
