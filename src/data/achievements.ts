export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
  requirement: {
    type: 'score' | 'streak' | 'total_questions' | 'perfect_test' | 'speed' | 'category_master' | 'daily_streak' | 'study_time';
    value: number;
    category?: string;
  };
  unlockedAt?: number;
}

export interface SideQuest {
  id: string;
  title: string;
  description: string;
  icon: string;
  reward: string;
  progress: number;
  target: number;
  completed: boolean;
  expiresAt?: number;
}

export const achievements: Achievement[] = [
  // Score-based achievements
  {
    id: 'first_steps',
    title: 'First Steps',
    description: 'Score 70% or higher on any test',
    icon: '🎯',
    rarity: 'common',
    points: 10,
    requirement: { type: 'score', value: 70 }
  },
  {
    id: 'high_achiever',
    title: 'High Achiever',
    description: 'Score 85% or higher on any test',
    icon: '🌟',
    rarity: 'rare',
    points: 25,
    requirement: { type: 'score', value: 85 }
  },
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Score 100% on any test',
    icon: '💎',
    rarity: 'epic',
    points: 50,
    requirement: { type: 'perfect_test', value: 1 }
  },
  {
    id: 'flawless_master',
    title: 'Flawless Master',
    description: 'Score 100% on 5 different tests',
    icon: '👑',
    rarity: 'legendary',
    points: 150,
    requirement: { type: 'perfect_test', value: 5 }
  },

  // Streak-based achievements
  {
    id: 'on_fire',
    title: 'On Fire!',
    description: 'Get 5 correct answers in a row',
    icon: '🔥',
    rarity: 'common',
    points: 15,
    requirement: { type: 'streak', value: 5 }
  },
  {
    id: 'unstoppable',
    title: 'Unstoppable',
    description: 'Get 10 correct answers in a row',
    icon: '⚡',
    rarity: 'rare',
    points: 30,
    requirement: { type: 'streak', value: 10 }
  },
  {
    id: 'legendary_streak',
    title: 'Legendary Streak',
    description: 'Get 20 correct answers in a row',
    icon: '🌈',
    rarity: 'epic',
    points: 75,
    requirement: { type: 'streak', value: 20 }
  },

  // Daily streak achievements
  {
    id: 'dedicated',
    title: 'Dedicated Student',
    description: 'Study for 3 days in a row',
    icon: '📚',
    rarity: 'common',
    points: 20,
    requirement: { type: 'daily_streak', value: 3 }
  },
  {
    id: 'committed',
    title: 'Committed Learner',
    description: 'Study for 7 days in a row',
    icon: '🎓',
    rarity: 'rare',
    points: 50,
    requirement: { type: 'daily_streak', value: 7 }
  },
  {
    id: 'unstoppable_force',
    title: 'Unstoppable Force',
    description: 'Study for 30 days in a row',
    icon: '🏆',
    rarity: 'legendary',
    points: 200,
    requirement: { type: 'daily_streak', value: 30 }
  },

  // Volume achievements
  {
    id: 'getting_started',
    title: 'Getting Started',
    description: 'Answer 100 questions total',
    icon: '📝',
    rarity: 'common',
    points: 10,
    requirement: { type: 'total_questions', value: 100 }
  },
  {
    id: 'serious_student',
    title: 'Serious Student',
    description: 'Answer 500 questions total',
    icon: '📖',
    rarity: 'rare',
    points: 40,
    requirement: { type: 'total_questions', value: 500 }
  },
  {
    id: 'knowledge_seeker',
    title: 'Knowledge Seeker',
    description: 'Answer 1,000 questions total',
    icon: '🧠',
    rarity: 'epic',
    points: 100,
    requirement: { type: 'total_questions', value: 1000 }
  },
  {
    id: 'master_scholar',
    title: 'Master Scholar',
    description: 'Answer 2,500 questions total',
    icon: '🎖️',
    rarity: 'legendary',
    points: 250,
    requirement: { type: 'total_questions', value: 2500 }
  },

  // Speed achievements
  {
    id: 'quick_thinker',
    title: 'Quick Thinker',
    description: 'Complete a test in under 5 minutes',
    icon: '⏱️',
    rarity: 'rare',
    points: 35,
    requirement: { type: 'speed', value: 300 }
  },
  {
    id: 'lightning_fast',
    title: 'Lightning Fast',
    description: 'Complete a test in under 3 minutes',
    icon: '💨',
    rarity: 'epic',
    points: 60,
    requirement: { type: 'speed', value: 180 }
  },

  // Category mastery
  {
    id: 'auto_expert',
    title: 'Auto Insurance Expert',
    description: 'Score 90%+ on 3 Auto Insurance tests',
    icon: '🚗',
    rarity: 'epic',
    points: 80,
    requirement: { type: 'category_master', value: 3, category: 'Auto Insurance' }
  },
  {
    id: 'property_pro',
    title: 'Property Insurance Pro',
    description: 'Score 90%+ on 3 Property Insurance tests',
    icon: '🏠',
    rarity: 'epic',
    points: 80,
    requirement: { type: 'category_master', value: 3, category: 'Property Insurance' }
  },
  {
    id: 'liability_legend',
    title: 'Liability Legend',
    description: 'Score 90%+ on 3 Liability tests',
    icon: '⚖️',
    rarity: 'epic',
    points: 80,
    requirement: { type: 'category_master', value: 3, category: 'Liability' }
  },
  {
    id: 'exam_master',
    title: 'Exam Ready Master',
    description: 'Score 90%+ on all major categories',
    icon: '🎯',
    rarity: 'legendary',
    points: 300,
    requirement: { type: 'category_master', value: 10 }
  }
];

export const dailySideQuests = (): SideQuest[] => {
  const now = Date.now();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  
  return [
    {
      id: 'daily_25',
      title: 'Daily Practice',
      description: 'Answer 25 questions today',
      icon: '🎯',
      reward: '+50 XP',
      progress: 0,
      target: 25,
      completed: false,
      expiresAt: endOfDay.getTime()
    },
    {
      id: 'daily_flashcards',
      title: 'Flashcard Master',
      description: 'Review 20 flashcards',
      icon: '🃏',
      reward: '+30 XP',
      progress: 0,
      target: 20,
      completed: false,
      expiresAt: endOfDay.getTime()
    },
    {
      id: 'daily_perfect',
      title: 'Perfect Round',
      description: 'Get 5 questions correct in a row',
      icon: '⭐',
      reward: '+40 XP',
      progress: 0,
      target: 5,
      completed: false,
      expiresAt: endOfDay.getTime()
    }
  ];
};

export const weeklyChallenges = (): SideQuest[] => {
  const now = Date.now();
  const endOfWeek = new Date();
  endOfWeek.setDate(endOfWeek.getDate() + (7 - endOfWeek.getDay()));
  endOfWeek.setHours(23, 59, 59, 999);
  
  return [
    {
      id: 'weekly_tests',
      title: 'Weekly Warrior',
      description: 'Complete 5 full tests this week',
      icon: '🏅',
      reward: '+200 XP + Rare Badge',
      progress: 0,
      target: 5,
      completed: false,
      expiresAt: endOfWeek.getTime()
    },
    {
      id: 'weekly_score',
      title: 'Excellence Challenge',
      description: 'Score 85%+ on 3 tests this week',
      icon: '💫',
      reward: '+150 XP',
      progress: 0,
      target: 3,
      completed: false,
      expiresAt: endOfWeek.getTime()
    }
  ];
};

export const getRarityColor = (rarity: Achievement['rarity']): string => {
  switch (rarity) {
    case 'common': return '#10b981';
    case 'rare': return '#3b82f6';
    case 'epic': return '#a855f7';
    case 'legendary': return '#f59e0b';
  }
};

export const getRarityGradient = (rarity: Achievement['rarity']): string => {
  switch (rarity) {
    case 'common': return 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    case 'rare': return 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
    case 'epic': return 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)';
    case 'legendary': return 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
  }
};
