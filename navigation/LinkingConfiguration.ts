import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Store: {
            screens: {
              OrdersScreen: 'Store',
            },
          },
          Orders: {
            screens: {
              OrdersScreen: 'Orders',
            },
          },
          Menu: {
            screens: {
              MenuScreen: 'Menu',
            },
          },
          Insights: {
            screens: {
              InsightsScreen: 'Insights',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
