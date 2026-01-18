// AI Behavioral Analysis Engine
export class BehavioralAnalyzer {
  
  static analyzeOnboardingResponses(responses) {
    const analysis = {
      decisionMakingSpeed: 'medium',
      riskTolerance: 5,
      trustInAuthority: 5,
      emotionalTriggers: [],
      digitalAwarenessLevel: 'medium',
      scamVulnerabilityScore: 50,
      vulnerabilityFactors: [],
      recommendedScamCategories: []
    };

    let speedScore = 0;
    let riskScore = 0;
    let trustScore = 0;
    let awarenessScore = 0;

    // Analyze responses
    responses.forEach((response, index) => {
      const answer = response.answer; // This is now 0-4 (index)
      const timeSpent = response.timeSpent || 0;

      // Map answer to scores (0-4 scale)
      const mappedScore = Math.min(Math.max(answer, 0), 4);

      // Determine category and update scores
      if (response.category === 'decision-speed') {
        speedScore += mappedScore;
        const speedMap = {
          0: 'very-slow',
          1: 'slow',
          2: 'medium',
          3: 'fast',
          4: 'very-fast'
        };
        analysis.decisionMakingSpeed = speedMap[mappedScore];
      }

      if (response.category === 'risk-tolerance') {
        riskScore += mappedScore + 1; // 1-10 scale
      }

      if (response.category === 'authority-trust') {
        trustScore += mappedScore + 1; // 1-10 scale
      }

      if (response.category === 'digital-awareness') {
        awarenessScore += mappedScore;
      }

      // Detect emotional triggers
      if (response.category === 'urgency-response' && mappedScore <= 1) {
        analysis.emotionalTriggers.push('Urgency');
      }
    });

    // Calculate averages and set scores
    analysis.riskTolerance = Math.round(riskScore / (responses.length || 1) * 2);
    analysis.trustInAuthority = Math.round(trustScore / (responses.length || 1) * 2);

    const avgAwareness = awarenessScore / (responses.length || 1);
    if (avgAwareness >= 3.5) {
      analysis.digitalAwarenessLevel = 'very-high';
      analysis.scamVulnerabilityScore = 20;
    } else if (avgAwareness >= 2.5) {
      analysis.digitalAwarenessLevel = 'high';
      analysis.scamVulnerabilityScore = 35;
    } else if (avgAwareness >= 1.5) {
      analysis.digitalAwarenessLevel = 'medium';
      analysis.scamVulnerabilityScore = 50;
    } else if (avgAwareness >= 0.5) {
      analysis.digitalAwarenessLevel = 'low';
      analysis.scamVulnerabilityScore = 70;
    } else {
      analysis.digitalAwarenessLevel = 'very-low';
      analysis.scamVulnerabilityScore = 85;
    }

    // Identify vulnerability factors
    if (analysis.riskTolerance > 7) {
      analysis.vulnerabilityFactors.push('High risk tolerance');
    }
    if (analysis.trustInAuthority > 7) {
      analysis.vulnerabilityFactors.push('High trust in authority');
      analysis.emotionalTriggers.push('Authority');
    }
    if (analysis.digitalAwarenessLevel === 'low' || analysis.digitalAwarenessLevel === 'very-low') {
      analysis.vulnerabilityFactors.push('Low digital awareness');
    }
    if (analysis.decisionMakingSpeed === 'very-fast' || analysis.decisionMakingSpeed === 'fast') {
      analysis.vulnerabilityFactors.push('Impulsive decision making');
    }

    // Recommend scam categories based on profile
    analysis.recommendedScamCategories = this.getRecommendedCategories(analysis);

    return analysis;
  }

  static getRecommendedCategories(profile) {
    const categories = [];

    // Based on vulnerability profile
    if (profile.riskTolerance > 6) {
      categories.push('Investment', 'Job');
    }
    if (profile.trustInAuthority > 6) {
      categories.push('Police', 'Banking', 'Government');
    }
    if (profile.digitalAwarenessLevel === 'low' || profile.digitalAwarenessLevel === 'very-low') {
      categories.push('OTP', 'UPI', 'Tech');
    }
    if (profile.emotionalTriggers.includes('Urgency')) {
      categories.push('Delivery', 'Banking');
    }

    // Add defaults if empty
    if (categories.length === 0) {
      categories.push('OTP', 'UPI', 'Banking');
    }

    return [...new Set(categories)].slice(0, 5); // Remove duplicates, max 5
  }

  static getUserBehaviorType(profile) {
    const { decisionMakingSpeed, riskTolerance, trustInAuthority } = profile;

    if ((decisionMakingSpeed === 'very-fast' || decisionMakingSpeed === 'fast') && riskTolerance > 7) {
      return 'Impulsive Responder';
    }
    if ((decisionMakingSpeed === 'slow' || decisionMakingSpeed === 'medium') && riskTolerance <= 5 && trustInAuthority > 7) {
      return 'Cautious but Trusting';
    }
    if (decisionMakingSpeed === 'medium' && riskTolerance > 6 && trustInAuthority <= 5) {
      return 'Calm but Overconfident';
    }
    if (trustInAuthority > 7 && riskTolerance <= 5) {
      return 'Fear-driven Decision Maker';
    }
    if (riskTolerance <= 3 && trustInAuthority <= 3) {
      return 'Cautious and Skeptical';
    }

    return 'Balanced Thinker';
  }

  static calculateVulnerabilityFactors(profile) {
    const factors = [];
    const weights = {};

    if (profile.digitalAwarenessLevel === 'very-low') {
      factors.push('Very low digital awareness');
      weights['digital'] = 10;
    } else if (profile.digitalAwarenessLevel === 'low') {
      factors.push('Low digital awareness');
      weights['digital'] = 7;
    }

    if (profile.riskTolerance > 8) {
      factors.push('Very high risk tolerance');
      weights['risk'] = 8;
    }

    if (profile.trustInAuthority > 8) {
      factors.push('Extreme trust in authority');
      weights['trust'] = 9;
    }

    if ((profile.decisionMakingSpeed === 'very-fast' || profile.decisionMakingSpeed === 'fast') && 
        profile.digitalAwarenessLevel !== 'very-high' && profile.digitalAwarenessLevel !== 'high') {
      factors.push('Impulsive without awareness');
      weights['impulse'] = 8;
    }

    return { factors, weights };
  }
}
