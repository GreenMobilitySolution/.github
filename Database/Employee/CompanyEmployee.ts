export const employees = [
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      position: 'Bus Driver',
      department: 'Operations',
      status: 'Active',
      performance: 4.5,
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Jane Smith',
      position: 'Route Manager',
      department: 'Planning',
      status: 'On Leave',
      performance: 4.0,
    },
    // Add more employee data here
  ];

  export const overallRatingData = {
    labels: ['Excellent', 'Good', 'Average', 'Poor'],
    datasets: [
      {
        label: 'Overall Rating',
        data: [12, 19, 3, 5],
        backgroundColor: ['#4caf50', '#ffeb3b', '#ff9800', '#f44336'],
      },
    ],
  };

  export const topPerformersData = {
    labels: ['John Doe', 'Jane Smith', 'Alice Johnson'],
    datasets: [
      {
        label: 'Top Performers',
        data: [4.5, 4.0, 4.8],
        backgroundColor: ['#4caf50', '#ffeb3b', '#ff9800'],
      },
    ],
  };

  export const underperformersData = {
    labels: ['Bob Brown', 'Charlie Davis'],
    datasets: [
      {
        label: 'Underperformers',
        data: [2.5, 2.8],
        backgroundColor: ['#f44336', '#ff9800'],
      },
    ],
  };

  export const recentPromotionsData = {
    labels: ['John Doe', 'Jane Smith'],
    datasets: [
      {
        label: 'Recent Promotions',
        data: [1, 1],
        backgroundColor: ['#4caf50', '#ffeb3b'],
      },
    ],
  };

  export const timeTrackingData = {
    labels: ['Route 1', 'Route 2', 'Route 3'],
    datasets: [
      {
        label: 'Time Tracking Overview',
        data: [40, 35, 25],
        backgroundColor: ['#4caf50', '#ffeb3b', '#ff9800'],
      },
    ],
  };