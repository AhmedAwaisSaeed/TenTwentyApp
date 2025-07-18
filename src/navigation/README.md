# Features Implemented

- Pixel-perfect bottom tab navigation with custom design
- Four main tabs: Dashboard, Watch, Media Library, More
- Each tab has its own stack navigator for scalability
- Custom tab bar component with:
  - Rounded top corners
  - Seamless background (no white corners)
  - Proper spacing and padding
  - Poppins font for labels (bold for active, regular for inactive)
- SVG icons for each tab, converted to React Native components using SVGR
  - Icons use the `fill` prop for dynamic color (active/inactive)
  - All icons are fully themeable and editable in code
- Theme system for centralized color management
- TypeScript support throughout navigation and icons
- Metro config cleaned up for native SVG usage
- All navigation and icon code is modular and maintainable
- **API Structure**: All API logic will be placed in `src/core/api` and Axios will be used for HTTP requests

---

# Navigation Structure

This project uses React Navigation v6 with a bottom tabs navigation pattern.

## Structure

```
src/navigation/
├── AppNavigator.tsx          # Main navigation container with bottom tabs
├── stacks/                   # Individual stack navigators for each tab
│   ├── DashboardStack.tsx    # Dashboard tab stack
│   ├── WatchStack.tsx        # Watch tab stack
│   ├── MediaLibraryStack.tsx # Media Library tab stack
│   ├── MoreStack.tsx         # More tab stack
│   └── index.ts              # Exports all stacks
└── README.md                 # This file
```

## Features

### Bottom Tabs Navigation
- **Custom Tab Bar**: Pixel-perfect design matching the provided image
- **SVG Icons**: Using the provided SVG icons from `src/assets/icons/`
- **Theme Integration**: Uses centralized color theme from `src/shared/theme/colors.ts`
- **Font Integration**: Uses Poppins font family for labels

### Tab Structure
1. **Dashboard**: Main dashboard screen
2. **Watch**: Video/movie watching section
3. **Media Library**: User's media collection
4. **More**: Additional options and settings

### Design Specifications
- **Background Color**: `#1F1D2B` (Dark purple-grey)
- **Active Tab Color**: `#FFFFFF` (White)
- **Inactive Tab Color**: `#827D88` (Grey)
- **Tab Bar Height**: 80px
- **Rounded Corners**: Top-left and top-right (20px radius)
- **Font**: Poppins (Regular for inactive, Bold for active)

## Usage

### Adding New Screens to a Stack
```typescript
// In any stack file (e.g., WatchStack.tsx)
import NewScreen from '../path/to/NewScreen';

const Stack = createStackNavigator();

const WatchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="WatchMain" 
        component={WatchScreen}
        options={{
          title: 'Watch',
          headerStyle: {
            backgroundColor: COLORS.PRIMARY,
          },
          headerTintColor: COLORS.TEXT_PRIMARY,
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
          },
        }}
      />
      <Stack.Screen 
        name="NewScreen" 
        component={NewScreen}
        options={{
          title: 'New Screen',
        }}
      />
    </Stack.Navigator>
  );
};
```

### Navigation Between Screens
```typescript
// Navigate to a screen within the same stack
navigation.navigate('NewScreen');

// Navigate to a different tab
navigation.navigate('Dashboard');
```

### Customizing Tab Bar
The custom tab bar component is located at `src/shared/components/CustomTabBar.tsx`. 
You can modify colors, spacing, and styling there.

## Dependencies

- `@react-navigation/native`
- `@react-navigation/bottom-tabs`
- `@react-navigation/stack`
- `react-native-screens`
- `react-native-safe-area-context`
- `react-native-svg`
- `@svgr/cli`

## Setup Notes
1. **Metro Config**: Cleaned up for native SVG usage
2. **TypeScript**: SVG type declarations added
3. **Theme**: Centralized color management
4. **Fonts**: Poppins font family integrated 