import { Tabs } from 'expo-router';
import { Package, Users, UserCircle, ShoppingCart, Tally3, BarChart3, Archive } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8B3A8B',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#F5E6F5',
          borderTopColor: '#8B3A8B',
          borderTopWidth: 1,
        },
      }}>
      <Tabs.Screen
        name="product"
        options={{
          title: 'Products',
          tabBarIcon: ({ size, color }) => (
            <Package size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vendor"
        options={{
          title: 'Vendors',
          tabBarIcon: ({ size, color }) => (
            <Users size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="client"
        options={{
          title: 'Clients',
          tabBarIcon: ({ size, color }) => (
            <UserCircle size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="purchase-bill"
        options={{
          title: 'Purchase Bill',
          tabBarIcon: ({ size, color }) => (
            <ShoppingCart size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="purchase"
        options={{
          title: 'Purchase',
          tabBarIcon: ({ size, color }) => (
            <Tally3 size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="consumption"
        options={{
          title: 'Consumption',
          tabBarIcon: ({ size, color }) => (
            <BarChart3 size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="closing-stock"
        options={{
          title: 'Stock',
          tabBarIcon: ({ size, color }) => (
            <Archive size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
