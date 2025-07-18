import { PortfolioData } from '@/types/portfolio';
import portfolioData from '@/data/portfolio.json';

export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}

export function getColorClasses(color: string) {
  const colorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string; border: string }> = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      darkBg: 'dark:bg-blue-900',
      darkText: 'dark:text-blue-200',
      border: 'border-blue-500'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      darkBg: 'dark:bg-green-900',
      darkText: 'dark:text-green-200',
      border: 'border-green-500'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-800',
      darkBg: 'dark:bg-purple-900',
      darkText: 'dark:text-purple-200',
      border: 'border-purple-500'
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      darkBg: 'dark:bg-yellow-900',
      darkText: 'dark:text-yellow-200',
      border: 'border-yellow-500'
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-800',
      darkBg: 'dark:bg-red-900',
      darkText: 'dark:text-red-200',
      border: 'border-red-500'
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-800',
      darkBg: 'dark:bg-orange-900',
      darkText: 'dark:text-orange-200',
      border: 'border-orange-500'
    }
  };

  return colorMap[color] || colorMap.blue;
}
