// stores/githubContributions.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import ky from 'ky';

export const useGithubContributionStore = defineStore('githubContributionStore', () => {
  const squares = ref<{ date: string; level: number }[]>([]);

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const token = import.meta.env.VITE_GITHUB_TOKEN as string;

  const fetchContributions = async (username: string, from: string, to: string) => {
    if (squares.value.length > 0) return;
    try {
      const response = await ky
        .post('https://api.github.com/graphql', {
          json: {
            query,
            variables: { login: username, from, to }
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .json() as any;

      const weeks = response.data.user.contributionsCollection.contributionCalendar.weeks;
      const contributionSquares: { date: string; level: number }[] = [];

      // Parcourir chaque jour et calculer le niveau de contribution
      for (const week of weeks) {
        for (const day of week.contributionDays) {
          const level = selectLevel(day.contributionCount);
          contributionSquares.push({ date: day.date, level });
        }
      }

      squares.value = contributionSquares;

    } catch (error) {
      console.error('Failed to fetch GitHub contributions:', error);
    }
  };

  const selectLevel = (count: number): number => {
    if (count === 0) return 0;
    if (count <= 5) return 1;
    if (count <= 10) return 2;
    if (count <= 15) return 3;
    return 4;
  };


  return {
    squares,
    fetchContributions
  };
});
